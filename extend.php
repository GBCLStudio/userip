<?php
/*
 * This file is part of GBCLStudio Project.
 *
 * Copyright (c) 2023 GBCLStudio PHP Project Team.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace GBCLStudio\GeoIp;
use Flarum\Api\Serializer\PostSerializer;
use Flarum\Extend;
use Flarum\Api\Controller;
use Flarum\Post\Post;
use GBCLStudio\GeoIp\Repositories\GeoIpRepository;

return [
    
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__ . '/resources/less/forum.less'),

    (new Extend\Middleware('forum'))
        ->add(Middleware\ProcessIp::class),
    (new Extend\Middleware('admin'))
        ->add(Middleware\ProcessIp::class),
    (new Extend\Middleware('api'))
        ->add(Middleware\ProcessIp::class),

    (new Extend\Model(Post::class))->relationship('userip_info', function (Post $model) {
        return $model->hasOne(IpInfo::class, 'address', 'ip_address')
            ->withDefault(function ($instance, $submodel) {
                return resolve(GeoIpRepository::class)->get($submodel->ip_address);
            });
    }),

    (new Extend\ApiSerializer(PostSerializer::class))
        ->relationship('userip_info', function (PostSerializer $serializer, Post $model) {
            return $serializer->hasOne($model, IpInfoSerializer::class, 'userip_info');
        }),

    (new Extend\ApiController(Controller\ListPostsController::class))
        ->addInclude('userip_info'),

    (new Extend\ApiController(Controller\ShowPostController::class))
        ->addInclude('userip_info'),

    (new Extend\ApiController(Controller\CreatePostController::class))
        ->addInclude('userip_info'),

    (new Extend\ApiController(Controller\UpdatePostController::class))
        ->addInclude('userip_info'),

    (new Extend\ApiController(Controller\ShowDiscussionController::class))
        ->addInclude('posts.userip_info'),

];
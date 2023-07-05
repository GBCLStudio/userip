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

use Flarum\Api\Controller;
use Flarum\Api\Serializer;
use Flarum\Extend;
use Flarum\Frontend\Document;
use Flarum\Post\Post;
use GBCLStudio\GeoIp\Repositories\GeoIpRepository;
use GBCLStudio\GeoIp\Serializer\IpInfoSerializer;
use GBCLStudio\GeoIp\ServiceProvider\GeoIpServiceProvider;

return [

    new Extend\Locales(__DIR__.'/resources/locale'),

    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/resources/less/forum.less'),

    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->content(function (Document $document) {
            $document->payload['gbcl-userip.services'] = resolve('gbcl-userip.services.admin');
        }),

    (new Extend\Middleware('forum'))
        ->add(Middleware\ProcessIp::class),
    (new Extend\Middleware('admin'))
        ->add(Middleware\ProcessIp::class),
    (new Extend\Middleware('api'))
        ->add(Middleware\ProcessIp::class),

    (new Extend\ServiceProvider())
        ->register(GeoIpServiceProvider::class),

    (new Extend\Model(Post::class))->relationship('userip_info', function (Post $model) {
        return $model->hasOne(IpInfo::class, 'address', 'ip_address')
            ->withDefault(function ($instance, $submodel) {
                return resolve(GeoIpRepository::class)->get($submodel->ip_address);
            });
    }),

    (new Extend\ApiSerializer(Serializer\PostSerializer::class))
        ->relationship('userip_info', function (Serializer\PostSerializer $serializer, Post $model) {
            if ($serializer->getActor()->can('discussion.viewIpInfo', $model)) {
                return $serializer->hasOne($model, IpInfoSerializer::class, 'userip_info');
            }
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

    (new Extend\Settings())
        ->serializeToForum('GbclUserIp','gbcl-userip')
        ->default('gbcl-userip.service', 'ovincApi'),

];

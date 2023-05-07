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
use Flarum\Extend;
use Flarum\Post\Post;
use GBCLStudio\GeoIp\Api\GeoIp;

return [
    
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js'),

    new Extend\Locales(__DIR__.'/resources/locale'),

    (new Extend\Middleware('forum'))
        ->add(Middleware\ProcessIp::class),
    (new Extend\Middleware('admin'))
        ->add(Middleware\ProcessIp::class),
    (new Extend\Middleware('api'))
        ->add(Middleware\ProcessIp::class),

    (new Extend\ApiSerializer(UserSerializer::class))
    ->attribute('ipLocation', function ($serializer, $user) {
        return $user->ip_location;
    }),

    (new Extend\Event())
    ->listen(LoggedIn::class, function (Dispatcher $events, LoggedIn $event) {
        $user = $event->user;
        $ipAddress = $event->request->getAttribute('ipAddress');

        $geoIp = new GeoIp();

        $response = $geoIp->get($ipAddress);

        $user->ip_location = $response->toReadable();
        $user->save();

    })

];
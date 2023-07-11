<?php
/*
 * This file is part of GBCLStudio Project.
 *
 * Copyright (c) 2023 GBCLStudio PHP Project Team.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace GBCLStudio\GeoIp\Middleware;

use Illuminate\Support\Arr;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\MiddlewareInterface;
use Psr\Http\Server\RequestHandlerInterface;

class ProcessIp implements MiddlewareInterface
{
    /**
     * @inheritDoc
     */
    public function process(ServerRequestInterface $request, RequestHandlerInterface $handler): ResponseInterface
    {
        $ipAddress = Arr::get(
            array: $request->getServerParams(),
            key: 'HTTP_X_FORWARDED_FOR',
            default: Arr::get($request->getServerParams(), 'REMOTE_ADDR')
        );
        
        $ipAddress = explode(',',$ipAddress)[0];

        return $handler->handle($request->withAttribute('ipAddress', $ipAddress));
    }
}

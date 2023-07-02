<?php
/*
 * This file is part of GBCLStudio Project.
 *
 * Copyright (c) 2023 GBCLStudio PHP Project Team.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace GBCLStudio\GeoIp\ServiceProvider;

use Closure;
use Flarum\Foundation\AbstractServiceProvider;
use GBCLStudio\GeoIp\Api\GeoIpInterface;
use GBCLStudio\GeoIp\Api\Service\IpSb;

class GeoIpServiceProvider extends AbstractServiceProvider
{
    public function register()
    {
        $this->container->tag([
            IpSb::class,
        ], 'gbcl-userip.services');

        $this->container->singleton('gbcl-userip.services.admin', $this->map(function (GeoIpInterface $service) {
            return [
                'name'   => $service->name(),
            ];
        }));
    }

    protected function map(callable $cb): Closure
    {
        return function () use ($cb) {
            $services = $this->container->tagged('gbcl-userip.services');

            return array_map(function ($services) use ($cb) {
                return $cb($services);
            }, iterator_to_array($services));
        };
    }
}

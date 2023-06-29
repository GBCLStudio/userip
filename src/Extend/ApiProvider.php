<?php
/*
 * This file is part of GBCLStudio Project.
 *
 * Copyright (c) 2023 GBCLStudio PHP Project Team.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace GBCLStudio\GeoIp\Extend;

use Flarum\Extend\ExtenderInterface;
use Flarum\Extension\Extension;
use GBCLStudio\GeoIp\Api\GeoIpInterface;
use Illuminate\Contracts\Container\Container;
use InvalidArgumentException;

class ApiProvider implements ExtenderInterface
{
    private $provider;

    public function __construct(string $provider)
    {
        $this->provider = $provider;
    }

    public function extend(Container $container, Extension $extension = null)
    {
        $provider = $container->make($this->provider);

        if ($provider instanceof GeoIpInterface) {
            $container->tag([
                $this->provider,
            ], 'gbcl-userip.services');
        } else {
            throw new InvalidArgumentException("{$this->provider} has to extend ".GeoIpInterface::class);
        }
    }
}

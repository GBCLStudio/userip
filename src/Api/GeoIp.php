<?php
/*
 * This file is part of GBCLStudio Project.
 *
 * Copyright (c) 2023 GBCLStudio PHP Project Team.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace GBCLStudio\GeoIp\Api;

use Flarum\Settings\SettingsRepositoryInterface;
use GBCLStudio\GeoIp\ServiceResponse;

class GeoIp
{
    private string $prefix = 'gbcl-userip.services';

    /**
     * @var SettingsRepositoryInterface
     */
    private SettingsRepositoryInterface $settings;

    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }

    /**
     * @param string $ip
     *
     * @return ServiceResponse|void
     */
    public function get(string $ip)
    {
        $serviceName = $this->settings->get($this->prefix);
        $service = Collection::$services[$serviceName] ?? null;

        if ($service == null) {
            return;
        }

        return resolve($service)->get($ip);
    }
}
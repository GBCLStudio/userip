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
    /**
     * @var SettingsRepositoryInterface
     */
    private SettingsRepositoryInterface $settings;
    private mixed $serviceSelected;

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
        $this->serviceSelected = $this->settings->get('gbcl-userip.service');
        $name = $this->settings->get('gbcl-userip.service');
        $services = resolve('container')->tagged('gbcl-userip.services');

        foreach ($services as $service) {
            if ($service->name() === $name) {
                $this->serviceSelected = $service;
                continue;
            }
        }

        if (! $this->serviceSelected) {
            return;
        }

        return $this->serviceSelected->get($ip);
    }
}

<?php
/*
 * This file is part of GBCLStudio Project.
 *
 * Copyright (c) 2023 GBCLStudio PHP Project Team.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace GBCLStudio\GeoIp\Api\Service;

use Flarum\Settings\SettingsRepositoryInterface;
use GuzzleHttp\Client;

abstract class BaseService
{
    protected Client $client;

    public function __construct(protected SettingsRepositoryInterface $settings)
    {
        $this->client = new Client([
            'base_uri' => $this->setBaseRequestUrl()
        ]);
    }

    /** Returns the base request url (including HTTP scheme)
     * 
     * @return string
     */
    abstract public function setBaseRequestUrl(): string;
}
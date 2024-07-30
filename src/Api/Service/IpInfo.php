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
use GBCLStudio\GeoIp\Api\GeoIpInterface;
use GBCLStudio\GeoIp\ServiceResponse;
use GuzzleHttp\Client;

class IpInfo implements GeoIpInterface
{

    private Client $client;

    public function __construct(protected SettingsRepositoryInterface $settings)
    {
        $this->client = new Client([
            'base_uri' => 'https://ipinfo.io/'
        ]);
    }

  /**
     * @inheritDoc
     */
    public function name(): string
    {
      return 'ipinfo';
    }

    /**
     * @inheritDoc
     */
    public function get(string $ip): ServiceResponse
    {
        $apiKey = $this->settings->get("gbcl-userip.service.ipinfo.key");
        if (is_null($apiKey)) throw new \InvalidArgumentException('gbcl-userip.service.ipinfo.key is null, are you set the ipinfo-key label?');
        
        $res = $this->client->get("/$ip/json?token=$apiKey");
        $body = json_decode($res->getBody());

        // if not, the isp label will be longer than except
        preg_match('/^AS(\d+)\s+/', $body->org, $ispASN);

        return (new ServiceResponse())
            ->setCountryCode($body->country)
            ->setRegion($body->region)
            ->setIsp($ispASN)
            ->setAddress($ip);
    }
}
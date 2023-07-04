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

use GBCLStudio\GeoIp\Api\GeoIpInterface;
use GBCLStudio\GeoIp\ServiceResponse;
use GuzzleHttp\Client;

class OvincApi implements GeoIpInterface
{
    private Client $client;

    public function __construct()
    {
        $this->client = new Client([
            'base_uri' => 'http://api.ip-city.ovinc.cn',
        ]);
    }
    
    public function name(): string
    {
        return 'ovincApi';
    }
    
    public function get(string $ip): ServiceResponse
    {
        $res = $this->client->get("/search/?ip=$ip");

        $body = json_decode($res->getBody());

        return (new ServiceResponse())
            ->setCountryCode($body->countryCode)
            ->setRegion($body->country)
            ->setProvince($body->province)
            ->setDistrict($body->district)
            ->setCity($body->city)
            ->setAreaCode($body->areaCode)
            ->setBackboneIsp($body->backboneISP)
            ->setIsp($body->isp)
            ->setAddress($ip);
    }
}
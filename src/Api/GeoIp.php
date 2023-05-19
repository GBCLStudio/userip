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

use GBCLStudio\GeoIp\ServiceResponse;
use GuzzleHttp\Client;
use Flarum\Locale\Translator;

class GeoIp
{

    private Client $client;

    public function __construct()
    {
        $this->client = new Client([
            'base_uri' => 'https://api.ip.sb/',
        ]);
    }

    public function get(string $ip): ServiceResponse
    {
        $res = $this->client->get("/geoip/$ip");

        $body = json_decode($res->getBody());

        // get locale notice
        $errorNotice = resolve(Translator::class)->get('gbcl-userip.forum.unknownNotice');

        return (new ServiceResponse())
            ->setCountryCode($body->country_code ?? $errorNotice)
            ->setRegion($body->region ?? $errorNotice)
            ->setIsp($body->isp ?? $errorNotice)
            ->setAddress($ip);
    }
}
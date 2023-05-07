<?php

namespace GBCLStudio\GeoIp\Api;

use GBCLStudio\GeoIp\ServiceResponse;
use GuzzleHttp\Client;

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

        return (new ServiceResponse())
            ->setCountryCode($body->country_code)
            ->setRegion($body->region)
            ->setIsp($body->isp);
    }
}
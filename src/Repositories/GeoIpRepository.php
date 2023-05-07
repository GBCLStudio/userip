<?php

namespace GBCLStudio\GeoIp\Repositories;

use GBCLStudio\GeoIp\Api\GeoIp;
use GBCLStudio\GeoIp\IpInfo;
use Illuminate\Cache\Repository;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

class GeoIpRepository
{
    /**
     * @var GeoIp
     */
    protected GeoIp $geoip;

    /**
     * @var Repository
     */
    protected Repository $cache;

    protected array $retrieving = [];

    public function __construct(GeoIP $geoip, Repository $cache)
    {
        $this->geoip = $geoip;
        $this->cache = $cache;
    }

    /**
     * @param string|null $ip
     *
     * @return IpInfo|Builder|Model|object|void
     */
    public function get(?string $ip)
    {
        if (!$ip || in_array($ip, $this->retrieving)) {
            return;
        }

        return IpInfo::query()->where('address', $ip)->first() ?? $this->obtain($ip);
    }

    private function obtain(?string $ip): ?IpInfo
    {
        $this->retrieving[] = $ip;

        $response = $this->geoip->get($ip);

        if ($response) {
            $data = new IpInfo();

            $data->address = $ip;
            $data->fill($response->toJson());

            if (!$response->fake && !IpInfo::query()->where('address', $ip)->exists()) {
                $data->save();
            }
        }

        $this->retrieving = array_diff($this->retrieving, [$ip]);

        return $data ?? null;
    }
}
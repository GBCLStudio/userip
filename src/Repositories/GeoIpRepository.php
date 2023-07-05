<?php
/*
 * This file is part of GBCLStudio Project.
 *
 * Copyright (c) 2023 GBCLStudio PHP Project Team.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

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

    public function __construct(GeoIp $geoip, Repository $cache)
    {
        $this->geoip = $geoip;
        $this->cache = $cache;
    }

    /** A function to check the giving IP is validated or not.
     *
     * @param string|null $ip
     * @return bool
     */
    private function isValidateIp(?string $ip): bool
    {
        if (filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE)) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * @param string|null $ip
     * @return IpInfo|Builder|Model|object|void|null
     */
    public function get(?string $ip)
    {
        $ip = trim((string) $ip);
        if (! $this->isValidateIp($ip) || in_array($ip, $this->retrieving)) {
            return;
        }

        return IpInfo::query()
            ->select(['*'])
            ->where('address', $ip)
            ->first() ?? $this->obtain($ip);
    }

    /**
     * @param string $ip
     * @return IpInfo|null
     */
    private function obtain(string $ip): ?IpInfo
    {
        $this->retrieving[] = $ip;

        $response = $this->geoip->get($ip);

        $data = resolve(IpInfo::class);

        $data->address = $ip;
        $data->fill($response->toJson());

        if (! IpInfo::query()->where('address', $ip)->exists()) {
            $data->save();
        }

        $this->retrieving = array_diff($this->retrieving, [$ip]);

        return $data;
    }
}

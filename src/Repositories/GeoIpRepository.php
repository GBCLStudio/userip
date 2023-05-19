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

    /**
     * @param string|null $ip
     * @param int|null $pid
     * @return IpInfo|Builder|Model|object|void|null
     */
    public function get(?string $ip, ?int $pid)
    {
        if (!$ip || in_array($ip, $this->retrieving)) {
            return;
        }

        return IpInfo::query()
            ->select(['country_code', 'region', 'isp'])
            ->where('address', $ip)
            ->first() ?? $this->obtain($ip, $pid);
    }

    private function obtain(string $ip, ?int $pid): ?IpInfo
    {
        $this->retrieving[] = $ip;

        $response = $this->geoip->get($ip, $pid);

        if ($response) {
            $data = resolve(IpInfo::class);

            $data->address = $ip;
            $data->fill($response->toJson());

            if (!IpInfo::query()->where('address', $ip)->exists()) {
                $data->save();
            }
        }

        $this->retrieving = array_diff($this->retrieving, [$ip]);

        return $data ?? null;
    }
}

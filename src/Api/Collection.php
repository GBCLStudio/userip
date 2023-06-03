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

class Collection
{
    public static array $services = [
        'ipsb' => IpSb::class
    ];

    public static function add(string $displayName, string $providerClass): void
    {
        self::$services[$displayName] = $providerClass;
    }
}
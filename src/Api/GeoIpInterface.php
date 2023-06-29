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

interface GeoIpInterface
{
    public function name(): string;
    public function get(string $ip): ServiceResponse;
}

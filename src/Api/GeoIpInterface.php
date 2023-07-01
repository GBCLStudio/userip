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
    /** Returns a string with the name of the api service provider, which must match the fields in the translated text.
     *
     * @return string
     */
    public function name(): string;

    /** Returns a ServiceResponse object that calls all methods beginning with 'set'.
     *
     * @param string $ip
     * @return ServiceResponse
     */
    public function get(string $ip): ServiceResponse;
}

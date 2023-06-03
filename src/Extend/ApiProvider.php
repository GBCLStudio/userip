<?php
/*
 * This file is part of GBCLStudio Project.
 *
 * Copyright (c) 2023 GBCLStudio PHP Project Team.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace GBCLStudio\GeoIp\Extend;

use GBCLStudio\GeoIp\Api\Collection;

class ApiProvider
{
    /** Use this method to register an ApiProvider.
     *
     * Example: ApiProvider::register($translator->get(string), YourProviderClass::class)
     *
     * @param string $name
     * @param string $class
     * @return void
     */
    public static function register(string $name, string $class): void
    {
        Collection::add($name, $class);
    }
}
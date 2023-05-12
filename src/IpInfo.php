<?php
/*
 * This file is part of GBCLStudio Project.
 *
 * Copyright (c) 2023 GBCLStudio PHP Project Team.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace GBCLStudio\GeoIp;

use Flarum\Database\AbstractModel;

/**
 * @property string address
 * @property string|null countryCode
 * @property string|null region
 * @property string|null isp
 */
class IpInfo extends AbstractModel
{

    protected $table = 'userip_info';

    protected $fillable = [
        'address', 'country_code',
        'region', 'isp',
    ];

}
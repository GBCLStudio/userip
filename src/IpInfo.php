<?php

namespace GBCLStudio\GeoIp;

use Flarum\Database\AbstractModel;

/**
 * @property string address
 * @property string|null countryCode
 * @property string|null zipCode
 * @property string|null isp
 * @property string|null organization
 */
class IpInfo extends AbstractModel
{
    /**
     * @var mixed|string|null
     */
    public mixed $address;
    protected $table = 'ip_info';

    protected $fillable = [
        'country_code', 'region_code',
        'isp', 'organization'
    ];

}
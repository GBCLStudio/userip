<?php

/*
 * This file is part of fof/geoip.
 *
 * Copyright (c) FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace GBCLStudio\GeoIp;

use Flarum\Api\Serializer\AbstractSerializer;

class IpInfoSerializer extends AbstractSerializer
{
    /**
     * {@inheritdoc}
     */
    protected $type = 'ip_info';

    /**
     * {@inheritdoc}
     */
    protected function getDefaultAttributes($model): array
    {
        return [
            'countryCode'       => $model->country_code,
            'regionCode'           => $model->reg_code,
            'isp'               => $model->isp,
            'organization'      => $model->organization,
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function getId($model)
    {
        return $model->address;
    }
}
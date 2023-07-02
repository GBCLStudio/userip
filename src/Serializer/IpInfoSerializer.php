<?php
/*
 * This file is part of GBCLStudio Project.
 *
 * Copyright (c) 2023 GBCLStudio PHP Project Team.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace GBCLStudio\GeoIp\Serializer;

use Flarum\Api\Serializer\AbstractSerializer;

class IpInfoSerializer extends AbstractSerializer
{
    /**
     * {@inheritdoc}
     */
    protected $type = 'userip_info';

    /**
     * {@inheritdoc}
     */
    protected function getDefaultAttributes($model): array
    {
        return [
            'countryCode'       => $model->country_code,
            'region'            => $model->region,
            'isp'               => $model->isp,
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function getId($model)
    {
        return $model->id;
    }
}

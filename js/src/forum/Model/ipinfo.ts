/*
 * This file is part of GBCLStudio Project.
 *
 * Copyright (c) 2023 GBCLStudio PHP Project Team.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import Model from 'flarum/common/Model';

export default class ipinfo extends Model {
    countryCode = Model.attribute('countryCode') as any
    region = Model.attribute('region') as any
    isp = Model.attribute('isp') as any
}
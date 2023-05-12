/*
 * This file is part of GBCLStudio Project.
 *
 * Copyright (c) 2023 GBCLStudio PHP Project Team.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import Model from 'flarum/common/Model';
import mixin from 'flarum/common/utils/mixin';

export default // @ts-ignore
class ipinfo extends mixin(Model, {
    countryCode: Model.attribute('gbcl_countryCode'),
    region: Model.attribute('gbcl_region'),
    isp: Model.attribute('gbcl_isp'),
}) {}
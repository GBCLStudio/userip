/*
 * This file is part of GBCLStudio Project.
 *
 * Copyright (c) 2023 GBCLStudio PHP Project Team.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import { NestedStringArray } from '@askvortsov/rich-icu-message-formatter'
import Model from 'flarum/common/Model'

export default class IPInfo extends Model {
  countryCode = Model.attribute<NestedStringArray>('countryCode')
  region = Model.attribute<NestedStringArray>('region')
  isp = Model.attribute<NestedStringArray>('isp')
  city = Model.attribute<NestedStringArray>('city')
  province = Model.attribute<NestedStringArray>('province')
  backboneIsp = Model.attribute<NestedStringArray>('backboneisp')
  areaCode = Model.attribute<NestedStringArray>('areaCode')
  district = Model.attribute<NestedStringArray>('district')
}

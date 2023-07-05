/*
 * This file is part of GBCLStudio Project.
 *
 * Copyright (c) 2023 GBCLStudio PHP Project Team.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import { NestedStringArray } from '@askvortsov/rich-icu-message-formatter'
import IPInfo from './Model/IPInfo'
import app from 'flarum/forum/app'

export type Data = {
  countryCode: NestedStringArray
  region: NestedStringArray
  isp: NestedStringArray
  city: NestedStringArray
  province: NestedStringArray
  backboneIsp: NestedStringArray
  areaCode: NestedStringArray
  district: NestedStringArray
} & Record<string, NestedStringArray>

export default class ProcessData {
  private data: Data

  constructor(ipInfo: IPInfo) {
    this.data = {
      countryCode: ipInfo.countryCode(),
      region: ipInfo.region(),
      isp: ipInfo.isp(),
      city: ipInfo.city(),
      province: ipInfo.province(),
      backboneIsp: ipInfo.backboneIsp(),
      areaCode: ipInfo.areaCode(),
      district: ipInfo.district(),
    }
  }

  process(errorNotice: NestedStringArray) {
    const elements = {} as Data
    const badgeAttrs = app.forum.attribute('BadgeOptions')

    for (const [key, value] of Object.entries(this.data)) {
      if (badgeAttrs == null) return false

      elements[key] = value || errorNotice
    }

    return elements
  }
}

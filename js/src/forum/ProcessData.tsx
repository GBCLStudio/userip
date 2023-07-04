/*
 * This file is part of GBCLStudio Project.
 *
 * Copyright (c) 2023 GBCLStudio PHP Project Team.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import { NestedStringArray } from '@askvortsov/rich-icu-message-formatter'
import ipinfo from './Model/IPInfo'

export default class ProcessData {
  private data: Record<string, NestedStringArray>

  constructor(ipInfo: ipinfo) {
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
    const elements: NestedStringArray[] = []

    return Object.values(this.data).reduce(
      (acc, el, index) => {
        const isElmentAvailable = el === null || el === undefined || el === ''

        acc.elements[index] = isElmentAvailable ? el : errorNotice
        acc.count = isElmentAvailable ? acc.count : ++acc.count
        return acc
      },
      { count: 0, elements }
    )
  }
}

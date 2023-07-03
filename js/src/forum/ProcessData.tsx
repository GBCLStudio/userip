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
  private region: NestedStringArray
  private code: NestedStringArray
  private isp: NestedStringArray

  constructor(ipInfo: ipinfo) {
    this.region = ipInfo.region()
    this.code = ipInfo.countryCode()
    this.isp = ipInfo.isp()
  }

  process(errorNotice: NestedStringArray) {
    return [this.region, this.code, this.isp].reduce(
      (acc, el, index) => {
        let count = acc.count
        if (el === null || el === undefined || el === '') {
          ++count
          el = errorNotice
        }
        acc.elements[index] = el
        acc.count = count
        return acc
      },
      { count: 0, elements: [] as NestedStringArray[] }
    )
  }
}

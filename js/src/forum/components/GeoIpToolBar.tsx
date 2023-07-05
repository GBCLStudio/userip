/*
 * This file is part of GBCLStudio Project.
 *
 * Copyright (c) 2023 GBCLStudio PHP Project Team.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import Component, { ComponentAttrs } from 'flarum/common/Component'
import { Data } from '../ProcessData'
import app from 'flarum/forum/app'
import Tooltip from "flarum/common/components/Tooltip";

export interface GeoIpBarAttrs extends ComponentAttrs {
  elements: Data
}

export default class GeoIpToolBar<
  CustomAttrs extends GeoIpBarAttrs = GeoIpBarAttrs
> extends Component<CustomAttrs> {
  view() {
      const settings = JSON.parse(app.forum.attribute('GbclUserIp'));
    return (
      <Tooltip text={this.getTooltipOptions(settings)}>
        <div className='userIp-container'>
          <div className='ip-locate' id='info-country'>
            {`${this.getBadgeOptions(settings)}`}
          </div>
        </div>
      </Tooltip>
    )
  }
  
  getBadgeOptions(settings: any): string {
      const { elements } = this.attrs
      const settingAttrs = settings.service.badgeOptions
      
      return settingAttrs.split('|').map((value: string) => {
          return `${elements[value]} | `
      })
  }
  
  getTooltipOptions(settings: any): string {
      const { elements } = this.attrs
      const settingAttrs = settings.service.hoverOptions

      return settingAttrs.split('|').map((value: string) => {
          return `${elements[value]} | `
      })
  }
}

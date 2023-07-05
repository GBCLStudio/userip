/*
 * This file is part of GBCLStudio Project.
 *
 * Copyright (c) 2023 GBCLStudio PHP Project Team.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import Component, {ComponentAttrs} from 'flarum/common/Component'
import {Data} from '../ProcessData'
import app from 'flarum/forum/app'
import Tooltip from 'flarum/common/components/Tooltip'

const BADGE_OPTIONS_KEY = 'BadgeOptions'
const HOVER_OPTIONS_KEY = 'HoverOptions'

export interface GeoIpBarAttrs extends ComponentAttrs {
  elements: Data
}

export default class GeoIpToolBar<
  CustomAttrs extends GeoIpBarAttrs = GeoIpBarAttrs
> extends Component<CustomAttrs> {
  view() {
    const hover = this.getOptions(HOVER_OPTIONS_KEY);
    const badge = this.getOptions(BADGE_OPTIONS_KEY);
    
    return hover ? (
      <Tooltip text={hover}>
        <div className='userIp-container'>
          <div className='ip-locate' id='info-country'>
            {badge}
          </div>
        </div>
      </Tooltip>
    ) : (
      <div className='userIp-container'>
        <div className='ip-locate' id='info-country'>
          {badge}
        </div>
      </div>
    );
  }

  getOptions(settings: string): string | false {
    const {elements} = this.attrs
    const data: string = app.forum.attribute(settings)
    if (!data) return false;

    return data
      .split('|')
      .map(value => `${elements[value]}`)
      .join(' | ')
  }
}

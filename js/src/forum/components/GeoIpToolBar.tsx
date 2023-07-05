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
import Tooltip from 'flarum/common/components/Tooltip'

const BADGE_OPTIONS_KEY = 'badgeOptions'
const HOVER_OPTIONS_KEY = 'hoverOptions'

export interface GeoIpBarAttrs extends ComponentAttrs {
  elements: Data
}

interface Settings {
  service: {
    [BADGE_OPTIONS_KEY]: string
    [HOVER_OPTIONS_KEY]: string
  }
}

enum Service {
  Badge,
  Hover,
}

export default class GeoIpToolBar<
  CustomAttrs extends GeoIpBarAttrs = GeoIpBarAttrs
> extends Component<CustomAttrs> {
  view() {
    const settings = JSON.parse(app.forum.attribute('GbclUserIp')) as Settings

    return (
      <Tooltip text={this.getOptions(Service.Hover, settings)}>
        <div className='userIp-container'>
          <div className='ip-locate' id='info-country'>
            {`${this.getOptions(Service.Badge, settings)}`}
          </div>
        </div>
      </Tooltip>
    )
  }

  getOptions(service: Service, settings: Settings) {
    const { elements } = this.attrs

    return settings.service[
      service === Service.Badge ? BADGE_OPTIONS_KEY : HOVER_OPTIONS_KEY
    ]
      .split('|')
      .map(value => `${elements[value]} |`)
  }
}

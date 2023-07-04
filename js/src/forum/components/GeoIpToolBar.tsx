/*
 * This file is part of GBCLStudio Project.
 *
 * Copyright (c) 2023 GBCLStudio PHP Project Team.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import Component, { ComponentAttrs } from 'flarum/common/Component'

export interface GeoIpBarAttrs extends ComponentAttrs {
  elements: any
}

export default class GeoIpToolBar<
  CustomAttrs extends GeoIpBarAttrs = GeoIpBarAttrs
> extends Component<CustomAttrs> {
  view() {
    const {elements} = this.attrs
    return (
      <div className='userIp-container'>
        <div className='ip-locate' id='info-country'>
          {`${elements.region}, ${elements.code}`}
        </div>
        <div className='ip-locate' id='info-isp'>
          {`${elements.isp}`}
        </div>
      </div>
    )
  }
}

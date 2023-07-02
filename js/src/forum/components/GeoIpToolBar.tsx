/*
 * This file is part of GBCLStudio Project.
 *
 * Copyright (c) 2023 GBCLStudio PHP Project Team.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import Component, {ComponentAttrs} from "flarum/common/Component";
import type Mithril from 'mithril';

export interface GeoIpBarAttrs extends ComponentAttrs {
    code: string;
    region: string;
    isp: string;
}

export default class GeoIpToolBar<CustomAttrs extends GeoIpBarAttrs = GeoIpBarAttrs> extends Component<CustomAttrs> {
    view(vnode: Mithril.VnodeDOM<CustomAttrs, this>) {
        let {code, region, isp} = this.attrs;
        return (
            <div className="userIp-container">
                <div className="ip-locate" id="info-country">
                    {`${region}, ${code}`}
                </div>
                <div className="ip-locate" id="info-isp">
                    {`${isp}`}
                </div>
            </div>
        )
    }
}
/*
 * This file is part of GBCLStudio Project.
 *
 * Copyright (c) 2023 GBCLStudio PHP Project Team.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import app from 'flarum/admin/app';
import ExtensionPage from 'flarum/admin/components/ExtensionPage';
import extractText from 'flarum/common/utils/extractText';
import linkify from 'linkify-lite';

export default class GeoipSettingsPage extends ExtensionPage {
    oninit(vnode) {
        super.oninit(vnode);
    }

    content(vnode) {
        const service = this.setting('gbcl-userip.service')();

        return (
            <div className="container">
                <div className="geopage">
                    <div className="Form-group">
                        {this.buildSettingComponent({
                            type: 'select',
                            setting: 'gbcl-userip.service',
                            label: app.translator.trans('gbcl-userip.admin.service.label'),
                            options: app.data['gbcl-userip.services'].reduce((o, p) => {
                                o[p] = app.translator.trans(`gbcl-userip.admin.service.${p}.label`);

                                return o;
                            }, {}),
                            required: true,
                            help: service && m.trust(linkify(extractText(app.translator.trans(`gbcl-userip.admin.service.${service}.description`)))),
                        })}
                    </div>
                </div>
            </div>
        );
    }
}
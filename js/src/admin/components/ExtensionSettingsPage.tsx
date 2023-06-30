/*
 * This file is part of GBCLStudio Project.
 *
 * Copyright (c) 2023 GBCLStudio PHP Project Team.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import { NestedStringArray } from '@askvortsov/rich-icu-message-formatter';
import app from 'flarum/admin/app';
import ExtensionPage from 'flarum/admin/components/ExtensionPage';
import extractText from 'flarum/common/utils/extractText';
// @ts-ignore
import linkify from 'linkify-lite';
import type Mithril from 'mithril';

interface ExtensionPageAttrs {
}

export default class GeoipSettingsPage extends ExtensionPage {
    oninit(vnode: Mithril.Vnode<ExtensionPageAttrs, this>) {
        super.oninit(vnode);
    }

    content(vnode: Mithril.VnodeDOM<ExtensionPageAttrs, this>): JSX.Element {
        const service = this.setting('gbcl-userip.service')();
        const serviceDataList:any = app.data['gbcl-userip.services'];

        return (
            <div className="container">
                <div className="selectGeoipApi">
                    <div className="Form-group">
                        {this.buildSettingComponent({
                            type: 'select',
                            setting: 'gbcl-userip.service',
                            label: app.translator.trans('gbcl-userip.admin.service.label'),
                            options: serviceDataList.reduce(
                                (o: { [x: string]: NestedStringArray; }, p: { name: string | number; }) => {
                                    o[p.name] = app.translator.trans(`gbcl-userip.admin.service.${p.name}.label`);
                                    return o;
                                }, {}
                            ),
                            required: true,
                            help: service && m.trust(linkify(extractText(app.translator.trans(`gbcl-userip.admin.service.${service}.description`)))),
                        })}
                    </div>
                    {this.submitButton()}
                </div>
            </div>
        );
    }
}
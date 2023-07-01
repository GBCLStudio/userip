/*
 * This file is part of GBCLStudio Project.
 *
 * Copyright (c) 2023 GBCLStudio PHP Project Team.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import app from 'flarum/admin/app';
import {NestedStringArray} from "@askvortsov/rich-icu-message-formatter";
import extractText from "flarum/common/utils/extractText";
// @ts-ignore
import linkify from "linkify-lite";

app.initializers.add('gbcl/userip', () => {
    const serviceDataList: any = app.data['gbcl-userip.services'];
    const service = JSON.parse('gbcl-userip.service')();

    app.extensionData
        .for('gbcl-userip')
        .registerSetting({
            setting: 'gbcl-userip.service',
            type: 'select',
            options: serviceDataList.reduce(
                (o: { [x: string]: NestedStringArray; }, p: { name: string | number; }) => {
                    o[p.name] = app.translator.trans(`gbcl-userip.admin.service.${p.name}.label`);
                    return o;
                }, {}
            ),
            label: app.translator.trans('gbcl-userip.admin.service.label'),
            help: service && m.trust(linkify(extractText(app.translator.trans(`gbcl-userip.admin.service.${service}.description`))))
        })
        .registerPermission(
            {
                icon: 'fas fa-map-marked-alt',
                label: app.translator.trans('gbcl-userip.admin.permissions.view_ip_info_label'),
                permission: 'discussion.viewIpInfo',
                tagScoped: true,
                allowGuest: true,
            },
            'view'
        );
});
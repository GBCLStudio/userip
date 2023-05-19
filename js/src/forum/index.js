/*
 * This file is part of GBCLStudio Project.
 *
 * Copyright (c) 2023 GBCLStudio PHP Project Team.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import CommentPost from 'flarum/forum/components/CommentPost';
import ipinfo from './Model/ipinfo';
import Model from 'flarum/common/Model';

// @ts-ignore
const getData = (ipInfo) => {
    return {
        region: ipInfo.region(),
        countryCode: ipInfo.countryCode(),
        isp: ipInfo.isp()
    };
};


app.initializers.add('gbcl/userip', () => {

    const errorNotice = app.translator.trans("gbcl-userip.forum.unknownNotice");

    app.store.models.userip_info = ipinfo;
    app.store.models.posts.prototype.ipInfo = Model.hasOne('userip_info');

    extend(CommentPost.prototype, 'footerItems', function (items) {

        const ipInfo = this.attrs.post.ipInfo();

        if (!ipInfo) return;

        const { region , countryCode , isp } = getData(ipInfo);

        let errorCount = 0;

        [region, countryCode, isp].forEach(element => {
            if (element === 'null' || element === errorNotice || element === undefined || element === null) errorCount++;
        });
        if (errorCount >= 2) {

        } else {
            items.add(
                'userIp',
                <div className="userIp-container">
                    <div className="ip-locate" id="info">
                        {`${region}, ${countryCode} | ${isp}`}
                    </div>
                </div>
            );
        }
    })
})
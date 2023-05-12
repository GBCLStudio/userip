/*
 * This file is part of GBCLStudio Project.
 *
 * Copyright (c) 2023 GBCLStudio PHP Project Team.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import app from 'flarum/forum/app';
import {extend} from 'flarum/common/extend';
import CommentPost from 'flarum/forum/components/CommentPost';
import ipinfo from './Model/ipinfo';

// @ts-ignore
const getData = (ipInfo: any) => {
    return `${ipInfo.region}, ${ipInfo.countryCode} | ${ipInfo.isp}`;
};

app.initializers.add('gbcl/userip', () => {

    extend(CommentPost.prototype, 'footerItems', function (items) {

        // @ts-ignore
        items.add(
            'userIp',
            <div className="userIp-container">
                <div className="ip-locate" id="info">
                    {getData(ipinfo)}
                </div>
            </div>
            );
    })
})
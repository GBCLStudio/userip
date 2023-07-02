/*
 * This file is part of GBCLStudio Project.
 *
 * Copyright (c) 2023 GBCLStudio PHP Project Team.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import app from 'flarum/forum/app';
import {extend} from "flarum/common/extend";
import CommentPost from 'flarum/forum/components/CommentPost';
import Model from 'flarum/common/Model';
import ProcessData from "./ProcessData";
import GeoIpToolBar from "./components/GeoIpToolBar";

// still learning
export { default as extend } from './extend';

app.initializers.add('gbcl/userip', () => {

    const errorNotice = app.translator.trans("gbcl-userip.forum.unknownNotice");

    app.store.models.posts.prototype.userIpInfo = Model.hasOne('userip_info');

    extend(CommentPost.prototype, 'footerItems', function (items) {

        const ipInfo = this.attrs.post.userIpInfo();
        if (!ipInfo) return;

        const result = new ProcessData().getData(ipInfo).process(errorNotice)
        const [reg, code, serv] = result.elements;
        const errorCount = result.count;

        if (errorCount < 2) {
            items.add(
                'userIp',
                <GeoIpToolBar region={reg} code={code} isp={serv}/>
            )
        }
    })
})

/*
 * This file is part of GBCLStudio Project.
 *
 * Copyright (c) 2023 GBCLStudio PHP Project Team.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import Extend from 'flarum/common/extenders';
import Post from 'flarum/common/models/Post';
import ipinfo from './Model/ipinfo';

export default [
    new Extend.Model(Post)
        .hasOne<ipinfo>('userip_info')
        .attribute<ipinfo>('userIpInfo'),

    new Extend.Store()
        .add('userip_info', ipinfo),
];
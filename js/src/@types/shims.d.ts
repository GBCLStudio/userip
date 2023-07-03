/*
 * This file is part of GBCLStudio Project.
 *
 * Copyright (c) 2023 GBCLStudio PHP Project Team.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import ipinfo from '../forum/Model/IPInfo'

declare module 'flarum/common/models/Post' {
  export default interface Post {
    userIpInfo: () => ipinfo | false
  }
}

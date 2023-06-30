/*
 * This file is part of GBCLStudio Project.
 *
 * Copyright (c) 2023 GBCLStudio PHP Project Team.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import app from 'flarum/admin/app';
import GeoipSettingsPage from './components/ExtensionSettingsPage';

app.initializers.add('gbcl/userip', () => {
    app.extensionData
        .for('gbcl-userip')
        .registerPage(GeoipSettingsPage)
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
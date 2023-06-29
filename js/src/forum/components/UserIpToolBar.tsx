/*
 * This file is part of GBCLStudio Project.
 *
 * Copyright (c) 2023 GBCLStudio PHP Project Team.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

export default function UserIpToolBar({region, isp, countryCode}: any) {
    return (
        <div className="userIp-container">
            <div className="ip-locate" id="info">
                {`${region}, ${countryCode} | ${isp}`}
            </div>
        </div>
    );
}

/*
 * This file is part of GBCLStudio Project.
 *
 * Copyright (c) 2023 GBCLStudio PHP Project Team.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import { NestedStringArray } from '@askvortsov/rich-icu-message-formatter'
import app from 'flarum/admin/app'
import ExtensionPage from 'flarum/admin/components/ExtensionPage'
import extractText from 'flarum/common/utils/extractText'
import linkify from '../../utils/linkify'
import type Mithril from 'mithril'
import IPInfo from '../../forum/Model/IPInfo'

interface ServiceData {
  name: string
}

export default class GeoIPSettingsPage extends ExtensionPage {
  oninit(vnode: Mithril.Vnode<object, this>) {
    super.oninit(vnode)
  }

  content(): JSX.Element {
    const service = this.setting('gbcl-userip.service')()

    const serviceAllAttrs = Object.keys(new IPInfo()).slice(4)
    const serviceDataList = app.data['gbcl-userip.services'] as ServiceData[]
    const options = serviceDataList.reduce(
      (accumulator, currentPoint) => ({
        ...accumulator,
        ...{
          [currentPoint.name]: app.translator.trans(
            `gbcl-userip.admin.service.${currentPoint.name}.label`
          ),
        },
      }),
      {} as Record<string, NestedStringArray>
    )
    return (
      <div className='container'>
        <div className='selectGeoipApi'>
          <div className='Form-group'>
            {this.buildSettingComponent({
              type: 'select',
              setting: 'gbcl-userip.service',
              label: app.translator.trans('gbcl-userip.admin.service.label'),
              options: options,
              required: true,
              help:
                service &&
                m.trust(
                  linkify(
                    extractText(
                      app.translator.trans(
                        `gbcl-userip.admin.service.${service}.description`
                      )
                    )
                  )
                ),
            })}
          </div>
          <div className='Form-group'>
            {this.buildSettingComponent({
              type: 'text',
              setting: `gbcl-userip.service.badgeOptions`,
              label: app.translator.trans(
                'gbcl-userip.admin.service.badgeOptionsLabel'
              ),
              help: `Use '|' to split. Available Options: ${serviceAllAttrs.toString()}`,
            })}

            {this.buildSettingComponent({
              type: 'text',
              setting: `gbcl-userip.service.hoverOptions`,
              label: app.translator.trans(
                'gbcl-userip.admin.service.hoverOptionsLabel'
              ),
              help: `Use '|' to split. Available Options: ${serviceAllAttrs.toString()}`,
            })}
          </div>
          {this.submitButton()}
        </div>
      </div>
    )
  }
}

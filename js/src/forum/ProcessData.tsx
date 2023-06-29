/*
 * This file is part of GBCLStudio Project.
 *
 * Copyright (c) 2023 GBCLStudio PHP Project Team.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

export default class ProcessData {
    [x: string]: any;

    constructor(region: any, countryCode: any, isp: any) {
        this.region = region
        this.isp = isp
        this.code = countryCode
    }

    process(errorNotice: any) {
        return [this.region, this.code, this.isp].reduce(
            (acc, el, index) => {
                let count = acc.count;
                if (el === null || el === undefined || el === "") {
                    ++count;
                    el = errorNotice;
                }
                acc.elements[index] = el;
                acc.count = count;
                return acc;
            }, {count: 0, elements: []})
    }
}
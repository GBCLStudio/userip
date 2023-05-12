<?php
/*
 * This file is part of GBCLStudio Project.
 *
 * Copyright (c) 2023 GBCLStudio PHP Project Team.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        $schema->create('userip_info', function (Blueprint $table) {
            $table->string('address')->unique();

            $table->string('country_code')->nullable();
            $table->string('region')->nullable();

            $table->string('isp')->nullable();
        });
    },
    'down' => function (Builder $schema) {
        $schema->dropIfExists('ip_info');
    },
];
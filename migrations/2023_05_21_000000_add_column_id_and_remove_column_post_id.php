<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

// HINT: you might want to use a `Flarum\Database\Migration` helper method for simplicity!
// See https://docs.flarum.org/extend/models.html#migrations to learn more about migrations.
return [
    'up' => function (Builder $schema) {
        // up migration
        $schema->table('userip_info', function (Blueprint $table) {
            $table->integer('id', true);

            $table->dropColumn('post_id');
        });
    },
    'down' => function (Builder $schema) {
        // down migration
        $schema->table('userip_info', function (Blueprint $table) {
            $table->string('post_id')->nullable();

            $table->dropColumn('id');
        });
    }
];

# Maintenance Mode

> Display the IP address of the posting below the post

## Install

```sh
composer require gbcl/userip:"*"
php flarum migrate
```

## Update

```sh
composer update gbcl/userip:"*"
php flarum cache:clear
php flarum migrate
```

## Remove

```sh
composer remove gbcl/userip
php flarum cache:clear
```

## How to use

You just need to open the plugin in the background. :)

## Note

IP domain API is provided by [ip.sb](https://ip.sb)

Support my work at [afdian 爱发电](https://afd.gbclstudio.cn)
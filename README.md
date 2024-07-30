# User IP

![extiverse](https://extiverse.com/extension/gbcl/userip/open-graph-image)

> Display the IP address of the posting below the post

## ScreenShot

![ss](https://raw.githubusercontent.com/GBCLStudio/userip/main/screenshot.png)

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

You just need to open the extension in the admin panel. :)

## Feature

- Support for websites using CDN
- Concise, detailed, understandable style
- No bugs (maybe?)

## Extending

You can easily extend this extension to support different API providers, if you follow these steps:

- In your new extension, require `gbcl/userip` as a dependency
- Define a new Service that implements `GBCLStudio\GeoIp\Api\GeoIpInterface` and extends `GBCLStudio\GeoIp\Api\Service\BaseService`
- In your new extension's extend.php, register the service: `new GBCLStudio\GeoIp\Extend\ApiProvider(MyNewService::class);`
- Provide the required translations under the `gbcl-userip` namespace, for example: `gbcl-userip.admin.service.YOUR_NEW_EXTENSION.label`, specific translations The text can be found at [here](https://github.com/GBCLStudio/userip/blob/502fcd12dca2a07c29fc5b008026fb5b615dc246/resources/locale/en.yml#L9)

## Note

Builtin IP domain API is provided by [ip.sb](https://ip.sb) and [IpInfo](https://ipinfo.io)

Referenced code from the following projects: fof/geoip, fof/oauth

Support my work at [afdian](http://afdian.com/a/GBCLStudio)

<?php
/*
 * This file is part of GBCLStudio Project.
 *
 * Copyright (c) 2023 GBCLStudio PHP Project Team.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace GBCLStudio\GeoIp;

class ServiceResponse implements \JsonSerializable
{
    /**
     * @var string
     */
    private string $country_code;

    /**
     * @var string
     */
    private string $isp;

    private ?string $province;

    private ?string $address;
    private ?string $district;
    private ?string $areaCode;
    private ?string $backboneIsp;
    private ?string $city;
    private ?string $region;

    public function setBackboneIsp(?string $isp): static
    {
        $this->backboneIsp = $isp;
        return $this;
    }
    
    public function setCountryCode(?string $country_code): static
    {
        $this->country_code = $country_code;
        return $this;
    }
    
    public function setProvince(?string $province): static
    {
        $this->province = $province;
        return $this;
    }
    
    public function setCity(?string $city): static
    {
        $this->city = $city;
        return $this;
    }
    
    public function setAreaCode(?string $areaCode): static
    {
        $this->areaCode = $areaCode;
        return $this;
    }
    
    public function setDistrict(?string $district): static
    {
        $this->district = $district;
        return $this;
    }

    public function setAddress(?string $address): static
    {
        $this->address = $address;
        return $this;
    }

    public function setRegion(?string $region): static
    {
        $this->region = $region;
        return $this;
    }

    public function setIsp(?string $isp): static
    {
        $this->isp = $isp;
        return $this;
    }

    /**
     * @inheritDoc
     */
    public function jsonSerialize(): mixed
    {
        return get_object_vars($this);
    }

    public function toJson()
    {
        return json_decode(json_encode($this), true);
    }
}

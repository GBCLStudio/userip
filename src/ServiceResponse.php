<?php

namespace GBCLStudio\GeoIp;

class ServiceResponse implements \JsonSerializable
{

    /**
     * @var string
     */
    private $country_code;

    /**
     * @var string
     */
    private $isp;

    /**
     * @var string
     */
    private $isp;
    private ?string $region;

    public function setCountryCode(?string $country_code): static
    {
        $this->country_code = $country_code;

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

    public function toReadable()
    {
        $data = 'Unknown';
        if ($this->region && $this->country_code && $this->isp) {
            $data = sprintf('%s, %s | %s', 
            $this->region, 
            $this->country_code, 
            $this->isp
            );
        }
        elseif ($this->region && $this->country_code) {
            $data = sprintf('%s, %s', 
            $this->region, 
            $this->country_code
            );
        }

        elseif ($this->region && $this->isp) {
            $data = sprintf('%s | %s', 
            $this->region, 
            $this->isp
            );
        }

        elseif ($this->country_code && $this->isp) {
            $data = sprintf('%s | %s', 
            $this->country_code, 
            $this->isp
            );
        }

        elseif ($this->region) {
            $data = $this->region;
        }

        elseif ($this->country_code) {
            $data = $this->country_code;
        }

        elseif ($this->isp) {
            $data = $this->isp;
        }
        return $data;
    }
    /**
     * @inheritDoc
     */
    public function jsonSerialize()
    {
        return get_object_vars($this);
    }
}
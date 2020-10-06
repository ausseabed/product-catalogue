/**
 * AusSeabed product catalogue
 * The API description for the Ausseabed product catalogue inventory
 *
 * OpenAPI spec version: 0.1.15
 * Contact: AusSeabed@ga.gov.au
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class ProductL3SrcDto {
    /**
    * Persistent Id of final product
    */
    'metadataPersistentId': string;
    /**
    * Name of product for display purposes - from gazeteer
    */
    'name': string;
    /**
    * Location of final bag product 
    */
    'productBagLocation': string;
    /**
    * Location of final tif product 
    */
    'productTifLocation': string;
    /**
    * Resolution of product for display purposes 
    */
    'resolution': string;
    /**
    * Spatial Reference of product
    */
    'srs': string;
    /**
    * Unique identifier for reference purposes
    */
    'uuid': string;
    /**
    * Vertical datum of bathymetry * `LAT` - Lowest Astronomical Tide * `AHD` - Australian Height Datum * `LMSL` - LMSL - Local Mean Sea Level (or just Mean Sea Level) * `WGS84` - WGS84 'Ellipsoid'
    */
    'verticalDatum': ProductL3SrcDtoVerticalDatumEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "metadataPersistentId",
            "baseName": "metadataPersistentId",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "productBagLocation",
            "baseName": "productBagLocation",
            "type": "string",
            "format": ""
        },
        {
            "name": "productTifLocation",
            "baseName": "productTifLocation",
            "type": "string",
            "format": ""
        },
        {
            "name": "resolution",
            "baseName": "resolution",
            "type": "string",
            "format": ""
        },
        {
            "name": "srs",
            "baseName": "srs",
            "type": "string",
            "format": ""
        },
        {
            "name": "uuid",
            "baseName": "uuid",
            "type": "string",
            "format": ""
        },
        {
            "name": "verticalDatum",
            "baseName": "verticalDatum",
            "type": "ProductL3SrcDtoVerticalDatumEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ProductL3SrcDto.attributeTypeMap;
    }
    
    public constructor() {
    }
}


export type ProductL3SrcDtoVerticalDatumEnum = "Unknown" | "LAT" | "AHD" | "LMSL" | "WGS84" | "NAD83(HARN)" | "NAD83(CORSxx)" | "NAD83(NSRSxx)" | "NAD83(PACPxx)" | "NAD83(MARPxx)" | "ITRFxx" | "NAVD88" | "NGVD29" | "EGM2008" | "EGM1996" | "EGM1984" | "MLLW" | "MLW" | "MHW" | "MHHW" | "DTL" | "MTL" | "LWD" ;


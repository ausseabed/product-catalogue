/**
 * AusSeabed product catalogue
 * The API description for the Ausseabed product catalogue inventory
 *
 * OpenAPI spec version: 0.2.2
 * Contact: AusSeabed@ga.gov.au
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class ProductL3DistDto {
    /**
    * Location of coverage extent of L3 product
    */
    'l3CoverageLocation': string;
    /**
    * S3 location of hillshade
    */
    'hillshadeLocation': string;
    /**
    * Location of the raster bathymetry
    */
    'bathymetryLocation': string;
    /**
    * Location of BAG format bathymetry
    */
    'bathymetryBagLocation': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "l3CoverageLocation",
            "baseName": "l3CoverageLocation",
            "type": "string",
            "format": ""
        },
        {
            "name": "hillshadeLocation",
            "baseName": "hillshadeLocation",
            "type": "string",
            "format": ""
        },
        {
            "name": "bathymetryLocation",
            "baseName": "bathymetryLocation",
            "type": "string",
            "format": ""
        },
        {
            "name": "bathymetryBagLocation",
            "baseName": "bathymetryBagLocation",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ProductL3DistDto.attributeTypeMap;
    }
    
    public constructor() {
    }
}


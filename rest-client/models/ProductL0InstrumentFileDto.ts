/**
 * AusSeabed product catalogue
 * The API description for the Ausseabed product catalogue inventory
 *
 * OpenAPI spec version: 0.1.11
 * Contact: AusSeabed@ga.gov.au
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class ProductL0InstrumentFileDto {
    /**
    * Location of shapefile describing instrument file extent
    */
    'coverageFile': string;
    /**
    * Location of instrument file
    */
    'instrumentFile': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "coverageFile",
            "baseName": "coverageFile",
            "type": "string",
            "format": ""
        },
        {
            "name": "instrumentFile",
            "baseName": "instrumentFile",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ProductL0InstrumentFileDto.attributeTypeMap;
    }
    
    public constructor() {
    }
}


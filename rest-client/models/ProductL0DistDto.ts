/**
 * AusSeabed product catalogue
 * The API description for the Ausseabed product catalogue inventory
 *
 * OpenAPI spec version: 0.1.14
 * Contact: AusSeabed@ga.gov.au
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class ProductL0DistDto {
    /**
    * Location of coverage file for extent
    */
    'l0CoverageLocation': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "l0CoverageLocation",
            "baseName": "l0CoverageLocation",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ProductL0DistDto.attributeTypeMap;
    }
    
    public constructor() {
    }
}


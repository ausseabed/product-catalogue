/**
 * AusSeabed product catalogue
 * The API description for the Ausseabed product catalogue inventory
 *
 * OpenAPI spec version: 0.1.13
 * Contact: AusSeabed@ga.gov.au
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class CompilationDto {
    /**
    * Name of product for display purposes - from gazeteer
    */
    'name': string;
    /**
    * Unique identifier for reference purposes
    */
    'uuid': string;
    /**
    * Year of product for display purposes
    */
    'year': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
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
            "name": "year",
            "baseName": "year",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CompilationDto.attributeTypeMap;
    }
    
    public constructor() {
    }
}


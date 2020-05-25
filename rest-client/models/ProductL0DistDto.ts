/**
 * AusSeabed product catalogue
 * The API description for the Ausseabed product catalogue inventory
 *
 * OpenAPI spec version: 0.1.5
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
    /**
    * Persistent Id of final product 
    */
    'metadataPersistentId': string;
    /**
    * Name of product for display purposes - from gazeteer
    */
    'name': string;
    /**
    * Spatial Reference of product
    */
    'srs': string;
    /**
    * Unique identifier for reference purposes
    */
    'uuid': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "l0CoverageLocation",
            "baseName": "l0CoverageLocation",
            "type": "string",
            "format": ""
        },
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
        }    ];

    static getAttributeTypeMap() {
        return ProductL0DistDto.attributeTypeMap;
    }
    
    public constructor() {
    }
}


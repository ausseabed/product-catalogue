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

export class CompilationL3RelationDto {
    /**
    * Identifier of the compilation that contains the products
    */
    'compilation': number;
    /**
    * Identifier of the product
    */
    'productL3Src': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "compilation",
            "baseName": "compilation",
            "type": "number",
            "format": ""
        },
        {
            "name": "productL3Src",
            "baseName": "productL3Src",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CompilationL3RelationDto.attributeTypeMap;
    }
    
    public constructor() {
    }
}


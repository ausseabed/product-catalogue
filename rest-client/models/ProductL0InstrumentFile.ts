/**
 * AusSeabed product catalogue
 * The API description for the Ausseabed product catalogue inventory
 *
 * OpenAPI spec version: 0.1.9
 * Contact: AusSeabed@ga.gov.au
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class ProductL0InstrumentFile {
    'id': number;
    'l0InstrumentFile': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": ""
        },
        {
            "name": "l0InstrumentFile",
            "baseName": "l0InstrumentFile",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ProductL0InstrumentFile.attributeTypeMap;
    }
    
    public constructor() {
    }
}


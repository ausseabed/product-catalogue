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

export class ProductL0Src {
    'id': number;
    'l0InstrumentLocation': string;
    'metadataPersistentId': string;
    'name': string;
    'srs': string;
    'uuid': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": ""
        },
        {
            "name": "l0InstrumentLocation",
            "baseName": "l0InstrumentLocation",
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
        return ProductL0Src.attributeTypeMap;
    }
    
    public constructor() {
    }
}


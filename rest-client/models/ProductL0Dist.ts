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

import { ProductL0InstrumentFile } from './ProductL0InstrumentFile';
import { ProductL0Src } from './ProductL0Src';
import { HttpFile } from '../http/http';

export class ProductL0Dist {
    'id': number;
    'l0CoverageLocation': string;
    'l0InstrumentFiles': Array<ProductL0InstrumentFile>;
    'sourceProduct': ProductL0Src;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": ""
        },
        {
            "name": "l0CoverageLocation",
            "baseName": "l0CoverageLocation",
            "type": "string",
            "format": ""
        },
        {
            "name": "l0InstrumentFiles",
            "baseName": "l0InstrumentFiles",
            "type": "Array<ProductL0InstrumentFile>",
            "format": ""
        },
        {
            "name": "sourceProduct",
            "baseName": "sourceProduct",
            "type": "ProductL0Src",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ProductL0Dist.attributeTypeMap;
    }
    
    public constructor() {
    }
}


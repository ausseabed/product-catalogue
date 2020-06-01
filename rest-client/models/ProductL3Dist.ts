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

import { ProductL3Src } from './ProductL3Src';
import { HttpFile } from '../http/http';

export class ProductL3Dist {
    'bathymetryLocation': string;
    'hillshadeLocation': string;
    'id': number;
    'l3CoverageLocation': string;
    'sourceProduct': ProductL3Src;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "bathymetryLocation",
            "baseName": "bathymetryLocation",
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
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": ""
        },
        {
            "name": "l3CoverageLocation",
            "baseName": "l3CoverageLocation",
            "type": "string",
            "format": ""
        },
        {
            "name": "sourceProduct",
            "baseName": "sourceProduct",
            "type": "ProductL3Src",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ProductL3Dist.attributeTypeMap;
    }
    
    public constructor() {
    }
}


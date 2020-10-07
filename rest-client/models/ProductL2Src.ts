/**
 * AusSeabed product catalogue
 * The API description for the Ausseabed product catalogue inventory
 *
 * OpenAPI spec version: 0.2.1
 * Contact: AusSeabed@ga.gov.au
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class ProductL2Src {
    'id': number;
    'metadataPersistentId': string;
    'name': string;
    'productGsfLocation': string;
    'productPosmvLocation': string;
    'srs': string;
    'uuid': string;
    'verticalDatum': ProductL2SrcVerticalDatumEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
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
            "name": "productGsfLocation",
            "baseName": "productGsfLocation",
            "type": "string",
            "format": ""
        },
        {
            "name": "productPosmvLocation",
            "baseName": "productPosmvLocation",
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
        },
        {
            "name": "verticalDatum",
            "baseName": "verticalDatum",
            "type": "ProductL2SrcVerticalDatumEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ProductL2Src.attributeTypeMap;
    }
    
    public constructor() {
    }
}


export type ProductL2SrcVerticalDatumEnum = "Unknown" | "LAT" | "AHD" | "LMSL" | "WGS84" | "NAD83(HARN)" | "NAD83(CORSxx)" | "NAD83(NSRSxx)" | "NAD83(PACPxx)" | "NAD83(MARPxx)" | "ITRFxx" | "NAVD88" | "NGVD29" | "EGM2008" | "EGM1996" | "EGM1984" | "MLLW" | "MLW" | "MHW" | "MHHW" | "DTL" | "MTL" | "LWD" ;


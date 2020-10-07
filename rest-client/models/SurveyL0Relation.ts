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

import { ProductL0Src } from './ProductL0Src';
import { Survey } from './Survey';
import { HttpFile } from '../http/http';

export class SurveyL0Relation {
    'id': number;
    'productL0Src': ProductL0Src;
    'survey': Survey;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": ""
        },
        {
            "name": "productL0Src",
            "baseName": "productL0Src",
            "type": "ProductL0Src",
            "format": ""
        },
        {
            "name": "survey",
            "baseName": "survey",
            "type": "Survey",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SurveyL0Relation.attributeTypeMap;
    }
    
    public constructor() {
    }
}


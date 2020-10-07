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

export class RelationSummaryDto {
    /**
    * Identifier of the products
    */
    'productId': any;
    /**
    * The name of the product
    */
    'productName': any;
    /**
    * Identifier of the relation between the products
    */
    'relationId': any;
    /**
    * Identifier of the survey/compilation that contains the products
    */
    'surveyId': any;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "productId",
            "baseName": "product_id",
            "type": "any",
            "format": ""
        },
        {
            "name": "productName",
            "baseName": "product_name",
            "type": "any",
            "format": ""
        },
        {
            "name": "relationId",
            "baseName": "relation_id",
            "type": "any",
            "format": ""
        },
        {
            "name": "surveyId",
            "baseName": "survey_id",
            "type": "any",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RelationSummaryDto.attributeTypeMap;
    }
    
    public constructor() {
    }
}


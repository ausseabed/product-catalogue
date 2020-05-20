/**
 * AusSeabed product catalogue
 * The API description for the Ausseabed product catalogue inventory
 *
 * OpenAPI spec version: 0.1.0
 * Contact: AusSeabed@ga.gov.au
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class SurveyL0RelationDto {
    /**
    * Identifier of the product produced as part of the survey
    */
    'productL0Src': number;
    /**
    * Identifier of the survey that produced the products
    */
    'survey': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "productL0Src",
            "baseName": "productL0Src",
            "type": "number",
            "format": ""
        },
        {
            "name": "survey",
            "baseName": "survey",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SurveyL0RelationDto.attributeTypeMap;
    }
    
    public constructor() {
    }
}

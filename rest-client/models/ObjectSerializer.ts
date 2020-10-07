export * from './Compilation';
export * from './CompilationDto';
export * from './CompilationL3Relation';
export * from './CompilationL3RelationDto';
export * from './ErrorDto';
export * from './ProductL0Dist';
export * from './ProductL0DistDto';
export * from './ProductL0InstrumentFile';
export * from './ProductL0InstrumentFileDto';
export * from './ProductL0Src';
export * from './ProductL0SrcDto';
export * from './ProductL2Src';
export * from './ProductL2SrcDto';
export * from './ProductL3Dist';
export * from './ProductL3DistDto';
export * from './ProductL3Src';
export * from './ProductL3SrcDto';
export * from './RelationSummaryDto';
export * from './Survey';
export * from './SurveyDto';
export * from './SurveyL0Relation';
export * from './SurveyL0RelationDto';
export * from './SurveyL2Relation';
export * from './SurveyL2RelationDto';
export * from './SurveyL3Relation';
export * from './SurveyL3RelationDto';

import { Compilation } from './Compilation';
import { CompilationDto } from './CompilationDto';
import { CompilationL3Relation } from './CompilationL3Relation';
import { CompilationL3RelationDto } from './CompilationL3RelationDto';
import { ErrorDto } from './ErrorDto';
import { ProductL0Dist } from './ProductL0Dist';
import { ProductL0DistDto } from './ProductL0DistDto';
import { ProductL0InstrumentFile } from './ProductL0InstrumentFile';
import { ProductL0InstrumentFileDto } from './ProductL0InstrumentFileDto';
import { ProductL0Src      , ProductL0SrcVerticalDatumEnum   } from './ProductL0Src';
import { ProductL0SrcDto     , ProductL0SrcDtoVerticalDatumEnum   } from './ProductL0SrcDto';
import { ProductL2Src       , ProductL2SrcVerticalDatumEnum   } from './ProductL2Src';
import { ProductL2SrcDto      , ProductL2SrcDtoVerticalDatumEnum   } from './ProductL2SrcDto';
import { ProductL3Dist } from './ProductL3Dist';
import { ProductL3DistDto } from './ProductL3DistDto';
import { ProductL3Src        , ProductL3SrcVerticalDatumEnum   } from './ProductL3Src';
import { ProductL3SrcDto       , ProductL3SrcDtoVerticalDatumEnum   } from './ProductL3SrcDto';
import { RelationSummaryDto } from './RelationSummaryDto';
import { Survey } from './Survey';
import { SurveyDto } from './SurveyDto';
import { SurveyL0Relation } from './SurveyL0Relation';
import { SurveyL0RelationDto } from './SurveyL0RelationDto';
import { SurveyL2Relation } from './SurveyL2Relation';
import { SurveyL2RelationDto } from './SurveyL2RelationDto';
import { SurveyL3Relation } from './SurveyL3Relation';
import { SurveyL3RelationDto } from './SurveyL3RelationDto';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

const supportedMediaTypes: { [mediaType: string]: number } = {
  "application/json": Infinity,
  "application/octet-stream": 0
}

                 
let enumsMap: Set<string> = new Set<string>([
					"ProductL0SrcVerticalDatumEnum",
					"ProductL0SrcDtoVerticalDatumEnum",
					"ProductL2SrcVerticalDatumEnum",
					"ProductL2SrcDtoVerticalDatumEnum",
					"ProductL3SrcVerticalDatumEnum",
					"ProductL3SrcDtoVerticalDatumEnum",
]);

let typeMap: {[index: string]: any} = {
    "Compilation": Compilation,
    "CompilationDto": CompilationDto,
    "CompilationL3Relation": CompilationL3Relation,
    "CompilationL3RelationDto": CompilationL3RelationDto,
    "ErrorDto": ErrorDto,
    "ProductL0Dist": ProductL0Dist,
    "ProductL0DistDto": ProductL0DistDto,
    "ProductL0InstrumentFile": ProductL0InstrumentFile,
    "ProductL0InstrumentFileDto": ProductL0InstrumentFileDto,
    "ProductL0Src": ProductL0Src,
    "ProductL0SrcDto": ProductL0SrcDto,
    "ProductL2Src": ProductL2Src,
    "ProductL2SrcDto": ProductL2SrcDto,
    "ProductL3Dist": ProductL3Dist,
    "ProductL3DistDto": ProductL3DistDto,
    "ProductL3Src": ProductL3Src,
    "ProductL3SrcDto": ProductL3SrcDto,
    "RelationSummaryDto": RelationSummaryDto,
    "Survey": Survey,
    "SurveyDto": SurveyDto,
    "SurveyL0Relation": SurveyL0Relation,
    "SurveyL0RelationDto": SurveyL0RelationDto,
    "SurveyL2Relation": SurveyL2Relation,
    "SurveyL2RelationDto": SurveyL2RelationDto,
    "SurveyL3Relation": SurveyL3Relation,
    "SurveyL3RelationDto": SurveyL3RelationDto,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string, format: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth()+1
                month = month < 10 ? "0" + month.toString() : month.toString()
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();

                return data.getFullYear() + "-" + month + "-" + day;
            } else {
                return data.toISOString();
            }
        } else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }
            
            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string, format: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap.has(type)) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }


    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    public static normalizeMediaType(mediaType: string | undefined): string | undefined {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    }

    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    public static getPreferredMediaType(mediaTypes: Array<string>): string {
        /** According to OAS 3 we should default to json */
        if (!mediaTypes) {
            return "application/json";
        }

        const normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
        let selectedMediaType: string | undefined = undefined;
        let selectedRank: number = -Infinity;
        for (const mediaType of normalMediaTypes) {
            if (supportedMediaTypes[mediaType!] > selectedRank) {
                selectedMediaType = mediaType;
                selectedRank = supportedMediaTypes[mediaType!];
            }
        }

        if (selectedMediaType === undefined) {
            throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
        }

        return selectedMediaType!;
    }

    /**
     * Convert data to a string according the given media type
     */
    public static stringify(data: any, mediaType: string): string {
        if (mediaType === "application/json") {
            return JSON.stringify(data);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }

    /**
     * Parse data from a string according to the given media type
     */
    public static parse(rawData: string, mediaType: string | undefined) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }

        if (mediaType === "application/json") {
            return JSON.parse(rawData);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}

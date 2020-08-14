// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {isCodeInRange} from '../util';

import { ErrorDto } from '../models/ErrorDto';
import { ProductL0Dist } from '../models/ProductL0Dist';
import { ProductL0DistDto } from '../models/ProductL0DistDto';
import { ProductL0InstrumentFile } from '../models/ProductL0InstrumentFile';
import { ProductL0InstrumentFileDto } from '../models/ProductL0InstrumentFileDto';

/**
 * no description
 */
export class ProductsL0DistApiRequestFactory extends BaseAPIRequestFactory {
	
    /**
     * @param productL0SrcId 
     * @param productL0DistDto 
     */
    public async productsL0DistControllerCreate(productL0SrcId: number, productL0DistDto: ProductL0DistDto, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'productL0SrcId' is not null or undefined
        if (productL0SrcId === null || productL0SrcId === undefined) {
            throw new RequiredError('Required parameter productL0SrcId was null or undefined when calling productsL0DistControllerCreate.');
        }

		
        // verify required parameter 'productL0DistDto' is not null or undefined
        if (productL0DistDto === null || productL0DistDto === undefined) {
            throw new RequiredError('Required parameter productL0DistDto was null or undefined when calling productsL0DistControllerCreate.');
        }

		
		// Path Params
    	const localVarPath = '/products/l0-dist';

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (productL0SrcId !== undefined) {
        	requestContext.setQueryParam("productL0SrcId", ObjectSerializer.serialize(productL0SrcId, "number", ""));
        }
	
		// Header Params
	
		// Form Params


		// Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(productL0DistDto, "ProductL0DistDto", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["access-token"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param productId 
     * @param productL0InstrumentFileDto 
     */
    public async productsL0DistControllerCreateInstrument(productId: number, productL0InstrumentFileDto: ProductL0InstrumentFileDto, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'productId' is not null or undefined
        if (productId === null || productId === undefined) {
            throw new RequiredError('Required parameter productId was null or undefined when calling productsL0DistControllerCreateInstrument.');
        }

		
        // verify required parameter 'productL0InstrumentFileDto' is not null or undefined
        if (productL0InstrumentFileDto === null || productL0InstrumentFileDto === undefined) {
            throw new RequiredError('Required parameter productL0InstrumentFileDto was null or undefined when calling productsL0DistControllerCreateInstrument.');
        }

		
		// Path Params
    	const localVarPath = '/products/l0-dist/{productId}/instrument-files'
            .replace('{' + 'productId' + '}', encodeURIComponent(String(productId)));

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
	
		// Header Params
	
		// Form Params


		// Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(productL0InstrumentFileDto, "ProductL0InstrumentFileDto", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["access-token"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param productId 
     */
    public async productsL0DistControllerDelete(productId: number, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'productId' is not null or undefined
        if (productId === null || productId === undefined) {
            throw new RequiredError('Required parameter productId was null or undefined when calling productsL0DistControllerDelete.');
        }

		
		// Path Params
    	const localVarPath = '/products/l0-dist/{productId}'
            .replace('{' + 'productId' + '}', encodeURIComponent(String(productId)));

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
	
		// Header Params
	
		// Form Params


		// Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["access-token"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param productId 
     * @param instrumentId 
     */
    public async productsL0DistControllerDeleteInstrument(productId: number, instrumentId: number, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'productId' is not null or undefined
        if (productId === null || productId === undefined) {
            throw new RequiredError('Required parameter productId was null or undefined when calling productsL0DistControllerDeleteInstrument.');
        }

		
        // verify required parameter 'instrumentId' is not null or undefined
        if (instrumentId === null || instrumentId === undefined) {
            throw new RequiredError('Required parameter instrumentId was null or undefined when calling productsL0DistControllerDeleteInstrument.');
        }

		
		// Path Params
    	const localVarPath = '/products/l0-dist/{productId}/instrument-files/{instrumentId}'
            .replace('{' + 'productId' + '}', encodeURIComponent(String(productId)))
            .replace('{' + 'instrumentId' + '}', encodeURIComponent(String(instrumentId)));

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
	
		// Header Params
	
		// Form Params


		// Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["access-token"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param filterByProductSrcId 
     * @param snapshotDateTime 
     */
    public async productsL0DistControllerFindAll(filterByProductSrcId?: number, snapshotDateTime?: string, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
		
		
		// Path Params
    	const localVarPath = '/products/l0-dist';

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterByProductSrcId !== undefined) {
        	requestContext.setQueryParam("filterByProductSrcId", ObjectSerializer.serialize(filterByProductSrcId, "number", ""));
        }
        if (snapshotDateTime !== undefined) {
        	requestContext.setQueryParam("snapshotDateTime", ObjectSerializer.serialize(snapshotDateTime, "string", ""));
        }
	
		// Header Params
	
		// Form Params


		// Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["access-token"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param productId 
     * @param snapshotDateTime 
     */
    public async productsL0DistControllerFindInstruments(productId: number, snapshotDateTime?: string, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'productId' is not null or undefined
        if (productId === null || productId === undefined) {
            throw new RequiredError('Required parameter productId was null or undefined when calling productsL0DistControllerFindInstruments.');
        }

		
		
		// Path Params
    	const localVarPath = '/products/l0-dist/{productId}/instrument-files'
            .replace('{' + 'productId' + '}', encodeURIComponent(String(productId)));

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (snapshotDateTime !== undefined) {
        	requestContext.setQueryParam("snapshotDateTime", ObjectSerializer.serialize(snapshotDateTime, "string", ""));
        }
	
		// Header Params
	
		// Form Params


		// Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["access-token"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param productId 
     */
    public async productsL0DistControllerFindOne(productId: number, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'productId' is not null or undefined
        if (productId === null || productId === undefined) {
            throw new RequiredError('Required parameter productId was null or undefined when calling productsL0DistControllerFindOne.');
        }

		
		// Path Params
    	const localVarPath = '/products/l0-dist/{productId}'
            .replace('{' + 'productId' + '}', encodeURIComponent(String(productId)));

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
	
		// Header Params
	
		// Form Params


		// Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["access-token"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param productId 
     * @param instrumentId 
     * @param snapshotDateTime 
     */
    public async productsL0DistControllerFindOneInstrument(productId: number, instrumentId: number, snapshotDateTime?: string, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'productId' is not null or undefined
        if (productId === null || productId === undefined) {
            throw new RequiredError('Required parameter productId was null or undefined when calling productsL0DistControllerFindOneInstrument.');
        }

		
        // verify required parameter 'instrumentId' is not null or undefined
        if (instrumentId === null || instrumentId === undefined) {
            throw new RequiredError('Required parameter instrumentId was null or undefined when calling productsL0DistControllerFindOneInstrument.');
        }

		
		
		// Path Params
    	const localVarPath = '/products/l0-dist/{productId}/instrument-files/{instrumentId}'
            .replace('{' + 'productId' + '}', encodeURIComponent(String(productId)))
            .replace('{' + 'instrumentId' + '}', encodeURIComponent(String(instrumentId)));

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (snapshotDateTime !== undefined) {
        	requestContext.setQueryParam("snapshotDateTime", ObjectSerializer.serialize(snapshotDateTime, "string", ""));
        }
	
		// Header Params
	
		// Form Params


		// Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["access-token"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param productId 
     * @param productL0DistDto 
     */
    public async productsL0DistControllerUpdate(productId: number, productL0DistDto: ProductL0DistDto, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'productId' is not null or undefined
        if (productId === null || productId === undefined) {
            throw new RequiredError('Required parameter productId was null or undefined when calling productsL0DistControllerUpdate.');
        }

		
        // verify required parameter 'productL0DistDto' is not null or undefined
        if (productL0DistDto === null || productL0DistDto === undefined) {
            throw new RequiredError('Required parameter productL0DistDto was null or undefined when calling productsL0DistControllerUpdate.');
        }

		
		// Path Params
    	const localVarPath = '/products/l0-dist/{productId}'
            .replace('{' + 'productId' + '}', encodeURIComponent(String(productId)));

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
	
		// Header Params
	
		// Form Params


		// Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(productL0DistDto, "ProductL0DistDto", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["access-token"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param productId 
     * @param instrumentId 
     * @param productL0InstrumentFileDto 
     */
    public async productsL0DistControllerUpdateInstrument(productId: number, instrumentId: number, productL0InstrumentFileDto: ProductL0InstrumentFileDto, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'productId' is not null or undefined
        if (productId === null || productId === undefined) {
            throw new RequiredError('Required parameter productId was null or undefined when calling productsL0DistControllerUpdateInstrument.');
        }

		
        // verify required parameter 'instrumentId' is not null or undefined
        if (instrumentId === null || instrumentId === undefined) {
            throw new RequiredError('Required parameter instrumentId was null or undefined when calling productsL0DistControllerUpdateInstrument.');
        }

		
        // verify required parameter 'productL0InstrumentFileDto' is not null or undefined
        if (productL0InstrumentFileDto === null || productL0InstrumentFileDto === undefined) {
            throw new RequiredError('Required parameter productL0InstrumentFileDto was null or undefined when calling productsL0DistControllerUpdateInstrument.');
        }

		
		// Path Params
    	const localVarPath = '/products/l0-dist/{productId}/instrument-files/{instrumentId}'
            .replace('{' + 'productId' + '}', encodeURIComponent(String(productId)))
            .replace('{' + 'instrumentId' + '}', encodeURIComponent(String(instrumentId)));

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
	
		// Header Params
	
		// Form Params


		// Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(productL0InstrumentFileDto, "ProductL0InstrumentFileDto", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["access-token"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}



export class ProductsL0DistApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to productsL0DistControllerCreate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productsL0DistControllerCreate(response: ResponseContext): Promise<ProductL0Dist > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: ProductL0Dist = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductL0Dist", ""
            ) as ProductL0Dist;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ErrorDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorDto", ""
            ) as ErrorDto;
            throw new ApiException<ErrorDto>(401, body);
        }
        if (isCodeInRange("408", response.httpStatusCode)) {
            const body: ErrorDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorDto", ""
            ) as ErrorDto;
            throw new ApiException<ErrorDto>(408, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ProductL0Dist = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductL0Dist", ""
            ) as ProductL0Dist;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to productsL0DistControllerCreateInstrument
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productsL0DistControllerCreateInstrument(response: ResponseContext): Promise<ProductL0InstrumentFile > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: ProductL0InstrumentFile = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductL0InstrumentFile", ""
            ) as ProductL0InstrumentFile;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ErrorDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorDto", ""
            ) as ErrorDto;
            throw new ApiException<ErrorDto>(401, body);
        }
        if (isCodeInRange("408", response.httpStatusCode)) {
            const body: ErrorDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorDto", ""
            ) as ErrorDto;
            throw new ApiException<ErrorDto>(408, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ProductL0InstrumentFile = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductL0InstrumentFile", ""
            ) as ProductL0InstrumentFile;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to productsL0DistControllerDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productsL0DistControllerDelete(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Could not find the survey");
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ErrorDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorDto", ""
            ) as ErrorDto;
            throw new ApiException<ErrorDto>(401, body);
        }
        if (isCodeInRange("408", response.httpStatusCode)) {
            const body: ErrorDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorDto", ""
            ) as ErrorDto;
            throw new ApiException<ErrorDto>(408, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to productsL0DistControllerDeleteInstrument
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productsL0DistControllerDeleteInstrument(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Could not find the instrument");
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ErrorDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorDto", ""
            ) as ErrorDto;
            throw new ApiException<ErrorDto>(401, body);
        }
        if (isCodeInRange("408", response.httpStatusCode)) {
            const body: ErrorDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorDto", ""
            ) as ErrorDto;
            throw new ApiException<ErrorDto>(408, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to productsL0DistControllerFindAll
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productsL0DistControllerFindAll(response: ResponseContext): Promise<Array<ProductL0Dist> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<ProductL0Dist> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ProductL0Dist>", ""
            ) as Array<ProductL0Dist>;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ErrorDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorDto", ""
            ) as ErrorDto;
            throw new ApiException<ErrorDto>(401, body);
        }
        if (isCodeInRange("408", response.httpStatusCode)) {
            const body: ErrorDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorDto", ""
            ) as ErrorDto;
            throw new ApiException<ErrorDto>(408, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<ProductL0Dist> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ProductL0Dist>", ""
            ) as Array<ProductL0Dist>;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to productsL0DistControllerFindInstruments
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productsL0DistControllerFindInstruments(response: ResponseContext): Promise<Array<ProductL0InstrumentFile> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<ProductL0InstrumentFile> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ProductL0InstrumentFile>", ""
            ) as Array<ProductL0InstrumentFile>;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ErrorDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorDto", ""
            ) as ErrorDto;
            throw new ApiException<ErrorDto>(401, body);
        }
        if (isCodeInRange("408", response.httpStatusCode)) {
            const body: ErrorDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorDto", ""
            ) as ErrorDto;
            throw new ApiException<ErrorDto>(408, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<ProductL0InstrumentFile> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ProductL0InstrumentFile>", ""
            ) as Array<ProductL0InstrumentFile>;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to productsL0DistControllerFindOne
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productsL0DistControllerFindOne(response: ResponseContext): Promise<ProductL0Dist > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ProductL0Dist = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductL0Dist", ""
            ) as ProductL0Dist;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Could not find the survey");
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ErrorDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorDto", ""
            ) as ErrorDto;
            throw new ApiException<ErrorDto>(401, body);
        }
        if (isCodeInRange("408", response.httpStatusCode)) {
            const body: ErrorDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorDto", ""
            ) as ErrorDto;
            throw new ApiException<ErrorDto>(408, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ProductL0Dist = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductL0Dist", ""
            ) as ProductL0Dist;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to productsL0DistControllerFindOneInstrument
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productsL0DistControllerFindOneInstrument(response: ResponseContext): Promise<ProductL0InstrumentFile > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ProductL0InstrumentFile = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductL0InstrumentFile", ""
            ) as ProductL0InstrumentFile;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ErrorDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorDto", ""
            ) as ErrorDto;
            throw new ApiException<ErrorDto>(401, body);
        }
        if (isCodeInRange("408", response.httpStatusCode)) {
            const body: ErrorDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorDto", ""
            ) as ErrorDto;
            throw new ApiException<ErrorDto>(408, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ProductL0InstrumentFile = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductL0InstrumentFile", ""
            ) as ProductL0InstrumentFile;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to productsL0DistControllerUpdate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productsL0DistControllerUpdate(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Could not find the survey");
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ErrorDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorDto", ""
            ) as ErrorDto;
            throw new ApiException<ErrorDto>(401, body);
        }
        if (isCodeInRange("408", response.httpStatusCode)) {
            const body: ErrorDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorDto", ""
            ) as ErrorDto;
            throw new ApiException<ErrorDto>(408, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to productsL0DistControllerUpdateInstrument
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productsL0DistControllerUpdateInstrument(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Could not find the instrument");
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ErrorDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorDto", ""
            ) as ErrorDto;
            throw new ApiException<ErrorDto>(401, body);
        }
        if (isCodeInRange("408", response.httpStatusCode)) {
            const body: ErrorDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorDto", ""
            ) as ErrorDto;
            throw new ApiException<ErrorDto>(408, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
}

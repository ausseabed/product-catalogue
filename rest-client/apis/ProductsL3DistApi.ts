// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {isCodeInRange} from '../util';

import { ErrorDto } from '../models/ErrorDto';
import { ProductL3Dist } from '../models/ProductL3Dist';
import { ProductL3DistDto } from '../models/ProductL3DistDto';

/**
 * no description
 */
export class ProductsL3DistApiRequestFactory extends BaseAPIRequestFactory {
	
    /**
     * @param productL3SrcId 
     * @param productL3DistDto 
     */
    public async productsL3DistControllerCreate(productL3SrcId: number, productL3DistDto: ProductL3DistDto, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'productL3SrcId' is not null or undefined
        if (productL3SrcId === null || productL3SrcId === undefined) {
            throw new RequiredError('Required parameter productL3SrcId was null or undefined when calling productsL3DistControllerCreate.');
        }

		
        // verify required parameter 'productL3DistDto' is not null or undefined
        if (productL3DistDto === null || productL3DistDto === undefined) {
            throw new RequiredError('Required parameter productL3DistDto was null or undefined when calling productsL3DistControllerCreate.');
        }

		
		// Path Params
    	const localVarPath = '/products/l3-dist';

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (productL3SrcId !== undefined) {
        	requestContext.setQueryParam("productL3SrcId", ObjectSerializer.serialize(productL3SrcId, "number", ""));
        }
	
		// Header Params
	
		// Form Params


		// Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(productL3DistDto, "ProductL3DistDto", ""),
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
    public async productsL3DistControllerDelete(productId: number, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'productId' is not null or undefined
        if (productId === null || productId === undefined) {
            throw new RequiredError('Required parameter productId was null or undefined when calling productsL3DistControllerDelete.');
        }

		
		// Path Params
    	const localVarPath = '/products/l3-dist/{productId}'
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
     * @param filterByProductSrcId 
     * @param snapshotDateTime 
     */
    public async productsL3DistControllerFindAll(filterByProductSrcId?: number, snapshotDateTime?: string, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
		
		
		// Path Params
    	const localVarPath = '/products/l3-dist';

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
     */
    public async productsL3DistControllerFindOne(productId: number, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'productId' is not null or undefined
        if (productId === null || productId === undefined) {
            throw new RequiredError('Required parameter productId was null or undefined when calling productsL3DistControllerFindOne.');
        }

		
		// Path Params
    	const localVarPath = '/products/l3-dist/{productId}'
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
     * @param productL3DistDto 
     */
    public async productsL3DistControllerUpdate(productId: number, productL3DistDto: ProductL3DistDto, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'productId' is not null or undefined
        if (productId === null || productId === undefined) {
            throw new RequiredError('Required parameter productId was null or undefined when calling productsL3DistControllerUpdate.');
        }

		
        // verify required parameter 'productL3DistDto' is not null or undefined
        if (productL3DistDto === null || productL3DistDto === undefined) {
            throw new RequiredError('Required parameter productL3DistDto was null or undefined when calling productsL3DistControllerUpdate.');
        }

		
		// Path Params
    	const localVarPath = '/products/l3-dist/{productId}'
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
            ObjectSerializer.serialize(productL3DistDto, "ProductL3DistDto", ""),
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



export class ProductsL3DistApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to productsL3DistControllerCreate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productsL3DistControllerCreate(response: ResponseContext): Promise<ProductL3Dist > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: ProductL3Dist = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductL3Dist", ""
            ) as ProductL3Dist;
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
            const body: ProductL3Dist = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductL3Dist", ""
            ) as ProductL3Dist;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to productsL3DistControllerDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productsL3DistControllerDelete(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to productsL3DistControllerFindAll
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productsL3DistControllerFindAll(response: ResponseContext): Promise<Array<ProductL3Dist> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<ProductL3Dist> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ProductL3Dist>", ""
            ) as Array<ProductL3Dist>;
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
            const body: Array<ProductL3Dist> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ProductL3Dist>", ""
            ) as Array<ProductL3Dist>;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to productsL3DistControllerFindOne
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productsL3DistControllerFindOne(response: ResponseContext): Promise<ProductL3Dist > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ProductL3Dist = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductL3Dist", ""
            ) as ProductL3Dist;
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
            const body: ProductL3Dist = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductL3Dist", ""
            ) as ProductL3Dist;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to productsL3DistControllerUpdate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productsL3DistControllerUpdate(response: ResponseContext): Promise<void > {
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
			
}

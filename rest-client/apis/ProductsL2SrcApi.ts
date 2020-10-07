// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {isCodeInRange} from '../util';

import { ErrorDto } from '../models/ErrorDto';
import { ProductL2Src } from '../models/ProductL2Src';
import { ProductL2SrcDto } from '../models/ProductL2SrcDto';

/**
 * no description
 */
export class ProductsL2SrcApiRequestFactory extends BaseAPIRequestFactory {
	
    /**
     * @param productL2SrcDto 
     */
    public async productsL2SrcControllerCreate(productL2SrcDto: ProductL2SrcDto, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'productL2SrcDto' is not null or undefined
        if (productL2SrcDto === null || productL2SrcDto === undefined) {
            throw new RequiredError('Required parameter productL2SrcDto was null or undefined when calling productsL2SrcControllerCreate.');
        }

		
		// Path Params
    	const localVarPath = '/products/l2-src';

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
            ObjectSerializer.serialize(productL2SrcDto, "ProductL2SrcDto", ""),
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
    public async productsL2SrcControllerDelete(productId: number, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'productId' is not null or undefined
        if (productId === null || productId === undefined) {
            throw new RequiredError('Required parameter productId was null or undefined when calling productsL2SrcControllerDelete.');
        }

		
		// Path Params
    	const localVarPath = '/products/l2-src/{productId}'
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
     * @param snapshotDateTime 
     */
    public async productsL2SrcControllerFindAll(snapshotDateTime?: string, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
		
		// Path Params
    	const localVarPath = '/products/l2-src';

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
    public async productsL2SrcControllerFindOne(productId: number, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'productId' is not null or undefined
        if (productId === null || productId === undefined) {
            throw new RequiredError('Required parameter productId was null or undefined when calling productsL2SrcControllerFindOne.');
        }

		
		// Path Params
    	const localVarPath = '/products/l2-src/{productId}'
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
     * @param productL2SrcDto 
     */
    public async productsL2SrcControllerUpdate(productId: number, productL2SrcDto: ProductL2SrcDto, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'productId' is not null or undefined
        if (productId === null || productId === undefined) {
            throw new RequiredError('Required parameter productId was null or undefined when calling productsL2SrcControllerUpdate.');
        }

		
        // verify required parameter 'productL2SrcDto' is not null or undefined
        if (productL2SrcDto === null || productL2SrcDto === undefined) {
            throw new RequiredError('Required parameter productL2SrcDto was null or undefined when calling productsL2SrcControllerUpdate.');
        }

		
		// Path Params
    	const localVarPath = '/products/l2-src/{productId}'
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
            ObjectSerializer.serialize(productL2SrcDto, "ProductL2SrcDto", ""),
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



export class ProductsL2SrcApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to productsL2SrcControllerCreate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productsL2SrcControllerCreate(response: ResponseContext): Promise<ProductL2Src > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: ProductL2Src = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductL2Src", ""
            ) as ProductL2Src;
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
            const body: ProductL2Src = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductL2Src", ""
            ) as ProductL2Src;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to productsL2SrcControllerDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productsL2SrcControllerDelete(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to productsL2SrcControllerFindAll
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productsL2SrcControllerFindAll(response: ResponseContext): Promise<Array<ProductL2Src> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<ProductL2Src> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ProductL2Src>", ""
            ) as Array<ProductL2Src>;
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
            const body: Array<ProductL2Src> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ProductL2Src>", ""
            ) as Array<ProductL2Src>;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to productsL2SrcControllerFindOne
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productsL2SrcControllerFindOne(response: ResponseContext): Promise<ProductL2Src > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ProductL2Src = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductL2Src", ""
            ) as ProductL2Src;
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
            const body: ProductL2Src = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductL2Src", ""
            ) as ProductL2Src;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to productsL2SrcControllerUpdate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productsL2SrcControllerUpdate(response: ResponseContext): Promise<void > {
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

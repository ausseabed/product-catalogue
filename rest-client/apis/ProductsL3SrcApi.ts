// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {isCodeInRange} from '../util';

import { ProductL3Src } from '../models/ProductL3Src';
import { ProductL3SrcDto } from '../models/ProductL3SrcDto';

/**
 * no description
 */
export class ProductsL3SrcApiRequestFactory extends BaseAPIRequestFactory {
	
    /**
     * @param productL3SrcDto 
     */
    public productsL3SrcControllerCreate(productL3SrcDto: ProductL3SrcDto, options?: Configuration): RequestContext {
		let config = options || this.configuration;
		
        // verify required parameter 'productL3SrcDto' is not null or undefined
        if (productL3SrcDto === null || productL3SrcDto === undefined) {
            throw new RequiredError('Required parameter productL3SrcDto was null or undefined when calling productsL3SrcControllerCreate.');
        }

		
		// Path Params
    	const localVarPath = '/products/l3-src';

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json")

        // Query Params
	
		// Header Params
	
		// Form Params


		// Body Params
        requestContext.setHeaderParam("Content-Type", "application/json");
		// TODO: Should this be handled by ObjectSerializer? imo yes => confidential information included in local object should not be sent
        const needsSerialization = (<any>"ProductL3SrcDto" !== "string") || requestContext.getHeaders()['Content-Type'] === 'application/json';
        const serializedBody = needsSerialization ? JSON.stringify(productL3SrcDto || {}) : (productL3SrcDto.toString() || ""); // TODO: `toString` call is unnecessary
        requestContext.setBody(serializedBody);
		
		let authMethod = null;
    	// Apply auth methods
    	authMethod = config.authMethods["access-token"]
    	if (authMethod) {
    		authMethod.applySecurityAuthentication(requestContext);
    	}
    	
    	return requestContext;
    }
			
    /**
     * @param productId 
     */
    public productsL3SrcControllerDelete(productId: number, options?: Configuration): RequestContext {
		let config = options || this.configuration;
		
        // verify required parameter 'productId' is not null or undefined
        if (productId === null || productId === undefined) {
            throw new RequiredError('Required parameter productId was null or undefined when calling productsL3SrcControllerDelete.');
        }

		
		// Path Params
    	const localVarPath = '/products/l3-src/{productId}'
            .replace('{' + 'productId' + '}', encodeURIComponent(String(productId)));

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json")

        // Query Params
	
		// Header Params
	
		// Form Params


		// Body Params
		
		let authMethod = null;
    	// Apply auth methods
    	authMethod = config.authMethods["access-token"]
    	if (authMethod) {
    		authMethod.applySecurityAuthentication(requestContext);
    	}
    	
    	return requestContext;
    }
			
    /**
     */
    public productsL3SrcControllerFindAll(options?: Configuration): RequestContext {
		let config = options || this.configuration;
		
		// Path Params
    	const localVarPath = '/products/l3-src';

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json")

        // Query Params
	
		// Header Params
	
		// Form Params


		// Body Params
		
		let authMethod = null;
    	// Apply auth methods
    	authMethod = config.authMethods["access-token"]
    	if (authMethod) {
    		authMethod.applySecurityAuthentication(requestContext);
    	}
    	
    	return requestContext;
    }
			
    /**
     * @param productId 
     */
    public productsL3SrcControllerFindOne(productId: number, options?: Configuration): RequestContext {
		let config = options || this.configuration;
		
        // verify required parameter 'productId' is not null or undefined
        if (productId === null || productId === undefined) {
            throw new RequiredError('Required parameter productId was null or undefined when calling productsL3SrcControllerFindOne.');
        }

		
		// Path Params
    	const localVarPath = '/products/l3-src/{productId}'
            .replace('{' + 'productId' + '}', encodeURIComponent(String(productId)));

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json")

        // Query Params
	
		// Header Params
	
		// Form Params


		// Body Params
		
		let authMethod = null;
    	// Apply auth methods
    	authMethod = config.authMethods["access-token"]
    	if (authMethod) {
    		authMethod.applySecurityAuthentication(requestContext);
    	}
    	
    	return requestContext;
    }
			
    /**
     * @param productId 
     * @param productL3SrcDto 
     */
    public productsL3SrcControllerUpdate(productId: number, productL3SrcDto: ProductL3SrcDto, options?: Configuration): RequestContext {
		let config = options || this.configuration;
		
        // verify required parameter 'productId' is not null or undefined
        if (productId === null || productId === undefined) {
            throw new RequiredError('Required parameter productId was null or undefined when calling productsL3SrcControllerUpdate.');
        }

		
        // verify required parameter 'productL3SrcDto' is not null or undefined
        if (productL3SrcDto === null || productL3SrcDto === undefined) {
            throw new RequiredError('Required parameter productL3SrcDto was null or undefined when calling productsL3SrcControllerUpdate.');
        }

		
		// Path Params
    	const localVarPath = '/products/l3-src/{productId}'
            .replace('{' + 'productId' + '}', encodeURIComponent(String(productId)));

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json")

        // Query Params
	
		// Header Params
	
		// Form Params


		// Body Params
        requestContext.setHeaderParam("Content-Type", "application/json");
		// TODO: Should this be handled by ObjectSerializer? imo yes => confidential information included in local object should not be sent
        const needsSerialization = (<any>"ProductL3SrcDto" !== "string") || requestContext.getHeaders()['Content-Type'] === 'application/json';
        const serializedBody = needsSerialization ? JSON.stringify(productL3SrcDto || {}) : (productL3SrcDto.toString() || ""); // TODO: `toString` call is unnecessary
        requestContext.setBody(serializedBody);
		
		let authMethod = null;
    	// Apply auth methods
    	authMethod = config.authMethods["access-token"]
    	if (authMethod) {
    		authMethod.applySecurityAuthentication(requestContext);
    	}
    	
    	return requestContext;
    }
			
}



export class ProductsL3SrcApiResponseProcessor {
	
	/**
	 * Unwraps the actual response sent by the server from the response context and deserializes the response content 
	 * to the expected objects
	 * 
	 * @params response Response returned by the server for a request to  
	 * @throws ApiException if the response code was not in [200, 299]
	 */
    public productsL3SrcControllerCreate(response: ResponseContext):  ProductL3Src  {      
        if (isCodeInRange("201", response.httpStatusCode)) {
            const jsonBody = JSON.parse(response.body);
            const body: ProductL3Src = ObjectSerializer.deserialize(jsonBody, "ProductL3Src", "") as ProductL3Src;            
            return body;
        }
        
        // Work around for incorrect api specification in petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const jsonBody = JSON.parse(response.body);
            const body: ProductL3Src = ObjectSerializer.deserialize(jsonBody, "ProductL3Src", "") as ProductL3Src;            
			return body;        		
        }
        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
	/**
	 * Unwraps the actual response sent by the server from the response context and deserializes the response content 
	 * to the expected objects
	 * 
	 * @params response Response returned by the server for a request to  
	 * @throws ApiException if the response code was not in [200, 299]
	 */
    public productsL3SrcControllerDelete(response: ResponseContext):   void  {      
        if (isCodeInRange("200", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Could not find the survey");
        }
        
        // Work around for incorrect api specification in petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
        	return;
        }
        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
	/**
	 * Unwraps the actual response sent by the server from the response context and deserializes the response content 
	 * to the expected objects
	 * 
	 * @params response Response returned by the server for a request to  
	 * @throws ApiException if the response code was not in [200, 299]
	 */
    public productsL3SrcControllerFindAll(response: ResponseContext):  Array<ProductL3Src>  {      
        if (isCodeInRange("200", response.httpStatusCode)) {
            const jsonBody = JSON.parse(response.body);
            const body: Array<ProductL3Src> = ObjectSerializer.deserialize(jsonBody, "Array<ProductL3Src>", "") as Array<ProductL3Src>;            
            return body;
        }
        
        // Work around for incorrect api specification in petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const jsonBody = JSON.parse(response.body);
            const body: Array<ProductL3Src> = ObjectSerializer.deserialize(jsonBody, "Array<ProductL3Src>", "") as Array<ProductL3Src>;            
			return body;        		
        }
        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
	/**
	 * Unwraps the actual response sent by the server from the response context and deserializes the response content 
	 * to the expected objects
	 * 
	 * @params response Response returned by the server for a request to  
	 * @throws ApiException if the response code was not in [200, 299]
	 */
    public productsL3SrcControllerFindOne(response: ResponseContext):  ProductL3Src  {      
        if (isCodeInRange("200", response.httpStatusCode)) {
            const jsonBody = JSON.parse(response.body);
            const body: ProductL3Src = ObjectSerializer.deserialize(jsonBody, "ProductL3Src", "") as ProductL3Src;            
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Could not find the survey");
        }
        
        // Work around for incorrect api specification in petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const jsonBody = JSON.parse(response.body);
            const body: ProductL3Src = ObjectSerializer.deserialize(jsonBody, "ProductL3Src", "") as ProductL3Src;            
			return body;        		
        }
        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
	/**
	 * Unwraps the actual response sent by the server from the response context and deserializes the response content 
	 * to the expected objects
	 * 
	 * @params response Response returned by the server for a request to  
	 * @throws ApiException if the response code was not in [200, 299]
	 */
    public productsL3SrcControllerUpdate(response: ResponseContext):   void  {      
        if (isCodeInRange("200", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Could not find the survey");
        }
        
        // Work around for incorrect api specification in petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
        	return;
        }
        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
}

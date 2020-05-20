// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {isCodeInRange} from '../util';

import { ProductL3Dist } from '../models/ProductL3Dist';
import { ProductL3DistDto } from '../models/ProductL3DistDto';

/**
 * no description
 */
export class ProductsL3DistApiRequestFactory extends BaseAPIRequestFactory {
	
    /**
     * @param productL3DistDto 
     */
    public productsL3DistControllerCreate(productL3DistDto: ProductL3DistDto, options?: Configuration): RequestContext {
		let config = options || this.configuration;
		
        // verify required parameter 'productL3DistDto' is not null or undefined
        if (productL3DistDto === null || productL3DistDto === undefined) {
            throw new RequiredError('Required parameter productL3DistDto was null or undefined when calling productsL3DistControllerCreate.');
        }

		
		// Path Params
    	const localVarPath = '/products/l3-dist';

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json")

        // Query Params
	
		// Header Params
	
		// Form Params


		// Body Params
        requestContext.setHeaderParam("Content-Type", "application/json");
		// TODO: Should this be handled by ObjectSerializer? imo yes => confidential information included in local object should not be sent
        const needsSerialization = (<any>"ProductL3DistDto" !== "string") || requestContext.getHeaders()['Content-Type'] === 'application/json';
        const serializedBody = needsSerialization ? JSON.stringify(productL3DistDto || {}) : (productL3DistDto.toString() || ""); // TODO: `toString` call is unnecessary
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
    public productsL3DistControllerDelete(productId: number, options?: Configuration): RequestContext {
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
    public productsL3DistControllerFindAll(options?: Configuration): RequestContext {
		let config = options || this.configuration;
		
		// Path Params
    	const localVarPath = '/products/l3-dist';

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
    public productsL3DistControllerFindOne(productId: number, options?: Configuration): RequestContext {
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
     * @param productL3DistDto 
     */
    public productsL3DistControllerUpdate(productId: number, productL3DistDto: ProductL3DistDto, options?: Configuration): RequestContext {
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
        requestContext.setHeaderParam("Accept", "application/json")

        // Query Params
	
		// Header Params
	
		// Form Params


		// Body Params
        requestContext.setHeaderParam("Content-Type", "application/json");
		// TODO: Should this be handled by ObjectSerializer? imo yes => confidential information included in local object should not be sent
        const needsSerialization = (<any>"ProductL3DistDto" !== "string") || requestContext.getHeaders()['Content-Type'] === 'application/json';
        const serializedBody = needsSerialization ? JSON.stringify(productL3DistDto || {}) : (productL3DistDto.toString() || ""); // TODO: `toString` call is unnecessary
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



export class ProductsL3DistApiResponseProcessor {
	
	/**
	 * Unwraps the actual response sent by the server from the response context and deserializes the response content 
	 * to the expected objects
	 * 
	 * @params response Response returned by the server for a request to  
	 * @throws ApiException if the response code was not in [200, 299]
	 */
    public productsL3DistControllerCreate(response: ResponseContext):  ProductL3Dist  {      
        if (isCodeInRange("201", response.httpStatusCode)) {
            const jsonBody = JSON.parse(response.body);
            const body: ProductL3Dist = ObjectSerializer.deserialize(jsonBody, "ProductL3Dist", "") as ProductL3Dist;            
            return body;
        }
        
        // Work around for incorrect api specification in petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const jsonBody = JSON.parse(response.body);
            const body: ProductL3Dist = ObjectSerializer.deserialize(jsonBody, "ProductL3Dist", "") as ProductL3Dist;            
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
    public productsL3DistControllerDelete(response: ResponseContext):   void  {      
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
    public productsL3DistControllerFindAll(response: ResponseContext):  Array<ProductL3Dist>  {      
        if (isCodeInRange("200", response.httpStatusCode)) {
            const jsonBody = JSON.parse(response.body);
            const body: Array<ProductL3Dist> = ObjectSerializer.deserialize(jsonBody, "Array<ProductL3Dist>", "") as Array<ProductL3Dist>;            
            return body;
        }
        
        // Work around for incorrect api specification in petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const jsonBody = JSON.parse(response.body);
            const body: Array<ProductL3Dist> = ObjectSerializer.deserialize(jsonBody, "Array<ProductL3Dist>", "") as Array<ProductL3Dist>;            
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
    public productsL3DistControllerFindOne(response: ResponseContext):  ProductL3Dist  {      
        if (isCodeInRange("200", response.httpStatusCode)) {
            const jsonBody = JSON.parse(response.body);
            const body: ProductL3Dist = ObjectSerializer.deserialize(jsonBody, "ProductL3Dist", "") as ProductL3Dist;            
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Could not find the survey");
        }
        
        // Work around for incorrect api specification in petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const jsonBody = JSON.parse(response.body);
            const body: ProductL3Dist = ObjectSerializer.deserialize(jsonBody, "ProductL3Dist", "") as ProductL3Dist;            
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
    public productsL3DistControllerUpdate(response: ResponseContext):   void  {      
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

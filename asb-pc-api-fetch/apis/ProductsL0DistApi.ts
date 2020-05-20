// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {isCodeInRange} from '../util';

import { ProductL0Dist } from '../models/ProductL0Dist';
import { ProductL0DistDto } from '../models/ProductL0DistDto';
import { ProductL0InstrumentFile } from '../models/ProductL0InstrumentFile';
import { ProductL0InstrumentFileDto } from '../models/ProductL0InstrumentFileDto';

/**
 * no description
 */
export class ProductsL0DistApiRequestFactory extends BaseAPIRequestFactory {
	
    /**
     * @param productL0DistDto 
     */
    public productsL0DistControllerCreate(productL0DistDto: ProductL0DistDto, options?: Configuration): RequestContext {
		let config = options || this.configuration;
		
        // verify required parameter 'productL0DistDto' is not null or undefined
        if (productL0DistDto === null || productL0DistDto === undefined) {
            throw new RequiredError('Required parameter productL0DistDto was null or undefined when calling productsL0DistControllerCreate.');
        }

		
		// Path Params
    	const localVarPath = '/products/l0-dist';

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json")

        // Query Params
	
		// Header Params
	
		// Form Params


		// Body Params
        requestContext.setHeaderParam("Content-Type", "application/json");
		// TODO: Should this be handled by ObjectSerializer? imo yes => confidential information included in local object should not be sent
        const needsSerialization = (<any>"ProductL0DistDto" !== "string") || requestContext.getHeaders()['Content-Type'] === 'application/json';
        const serializedBody = needsSerialization ? JSON.stringify(productL0DistDto || {}) : (productL0DistDto.toString() || ""); // TODO: `toString` call is unnecessary
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
     * @param productL0InstrumentFileDto 
     */
    public productsL0DistControllerCreateInstrument(productId: number, productL0InstrumentFileDto: ProductL0InstrumentFileDto, options?: Configuration): RequestContext {
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
        requestContext.setHeaderParam("Accept", "application/json")

        // Query Params
	
		// Header Params
	
		// Form Params


		// Body Params
        requestContext.setHeaderParam("Content-Type", "application/json");
		// TODO: Should this be handled by ObjectSerializer? imo yes => confidential information included in local object should not be sent
        const needsSerialization = (<any>"ProductL0InstrumentFileDto" !== "string") || requestContext.getHeaders()['Content-Type'] === 'application/json';
        const serializedBody = needsSerialization ? JSON.stringify(productL0InstrumentFileDto || {}) : (productL0InstrumentFileDto.toString() || ""); // TODO: `toString` call is unnecessary
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
    public productsL0DistControllerDelete(productId: number, options?: Configuration): RequestContext {
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
     * @param instrumentId 
     */
    public productsL0DistControllerDeleteInstrument(productId: number, instrumentId: number, options?: Configuration): RequestContext {
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
    public productsL0DistControllerFindAll(options?: Configuration): RequestContext {
		let config = options || this.configuration;
		
		// Path Params
    	const localVarPath = '/products/l0-dist';

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
    public productsL0DistControllerFindInstruments(productId: number, options?: Configuration): RequestContext {
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
    public productsL0DistControllerFindOne(productId: number, options?: Configuration): RequestContext {
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
     * @param instrumentId 
     */
    public productsL0DistControllerFindOneInstrument(productId: number, instrumentId: number, options?: Configuration): RequestContext {
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
     * @param productL0DistDto 
     */
    public productsL0DistControllerUpdate(productId: number, productL0DistDto: ProductL0DistDto, options?: Configuration): RequestContext {
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
        requestContext.setHeaderParam("Accept", "application/json")

        // Query Params
	
		// Header Params
	
		// Form Params


		// Body Params
        requestContext.setHeaderParam("Content-Type", "application/json");
		// TODO: Should this be handled by ObjectSerializer? imo yes => confidential information included in local object should not be sent
        const needsSerialization = (<any>"ProductL0DistDto" !== "string") || requestContext.getHeaders()['Content-Type'] === 'application/json';
        const serializedBody = needsSerialization ? JSON.stringify(productL0DistDto || {}) : (productL0DistDto.toString() || ""); // TODO: `toString` call is unnecessary
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
     * @param instrumentId 
     * @param productL0InstrumentFileDto 
     */
    public productsL0DistControllerUpdateInstrument(productId: number, instrumentId: number, productL0InstrumentFileDto: ProductL0InstrumentFileDto, options?: Configuration): RequestContext {
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
        requestContext.setHeaderParam("Accept", "application/json")

        // Query Params
	
		// Header Params
	
		// Form Params


		// Body Params
        requestContext.setHeaderParam("Content-Type", "application/json");
		// TODO: Should this be handled by ObjectSerializer? imo yes => confidential information included in local object should not be sent
        const needsSerialization = (<any>"ProductL0InstrumentFileDto" !== "string") || requestContext.getHeaders()['Content-Type'] === 'application/json';
        const serializedBody = needsSerialization ? JSON.stringify(productL0InstrumentFileDto || {}) : (productL0InstrumentFileDto.toString() || ""); // TODO: `toString` call is unnecessary
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



export class ProductsL0DistApiResponseProcessor {
	
	/**
	 * Unwraps the actual response sent by the server from the response context and deserializes the response content 
	 * to the expected objects
	 * 
	 * @params response Response returned by the server for a request to  
	 * @throws ApiException if the response code was not in [200, 299]
	 */
    public productsL0DistControllerCreate(response: ResponseContext):  ProductL0Dist  {      
        if (isCodeInRange("201", response.httpStatusCode)) {
            const jsonBody = JSON.parse(response.body);
            const body: ProductL0Dist = ObjectSerializer.deserialize(jsonBody, "ProductL0Dist", "") as ProductL0Dist;            
            return body;
        }
        
        // Work around for incorrect api specification in petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const jsonBody = JSON.parse(response.body);
            const body: ProductL0Dist = ObjectSerializer.deserialize(jsonBody, "ProductL0Dist", "") as ProductL0Dist;            
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
    public productsL0DistControllerCreateInstrument(response: ResponseContext):  ProductL0InstrumentFile  {      
        if (isCodeInRange("201", response.httpStatusCode)) {
            const jsonBody = JSON.parse(response.body);
            const body: ProductL0InstrumentFile = ObjectSerializer.deserialize(jsonBody, "ProductL0InstrumentFile", "") as ProductL0InstrumentFile;            
            return body;
        }
        
        // Work around for incorrect api specification in petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const jsonBody = JSON.parse(response.body);
            const body: ProductL0InstrumentFile = ObjectSerializer.deserialize(jsonBody, "ProductL0InstrumentFile", "") as ProductL0InstrumentFile;            
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
    public productsL0DistControllerDelete(response: ResponseContext):   void  {      
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
    public productsL0DistControllerDeleteInstrument(response: ResponseContext):   void  {      
        if (isCodeInRange("200", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Could not find the instrument");
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
    public productsL0DistControllerFindAll(response: ResponseContext):  Array<ProductL0Dist>  {      
        if (isCodeInRange("200", response.httpStatusCode)) {
            const jsonBody = JSON.parse(response.body);
            const body: Array<ProductL0Dist> = ObjectSerializer.deserialize(jsonBody, "Array<ProductL0Dist>", "") as Array<ProductL0Dist>;            
            return body;
        }
        
        // Work around for incorrect api specification in petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const jsonBody = JSON.parse(response.body);
            const body: Array<ProductL0Dist> = ObjectSerializer.deserialize(jsonBody, "Array<ProductL0Dist>", "") as Array<ProductL0Dist>;            
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
    public productsL0DistControllerFindInstruments(response: ResponseContext):  Array<ProductL0InstrumentFile>  {      
        if (isCodeInRange("200", response.httpStatusCode)) {
            const jsonBody = JSON.parse(response.body);
            const body: Array<ProductL0InstrumentFile> = ObjectSerializer.deserialize(jsonBody, "Array<ProductL0InstrumentFile>", "") as Array<ProductL0InstrumentFile>;            
            return body;
        }
        
        // Work around for incorrect api specification in petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const jsonBody = JSON.parse(response.body);
            const body: Array<ProductL0InstrumentFile> = ObjectSerializer.deserialize(jsonBody, "Array<ProductL0InstrumentFile>", "") as Array<ProductL0InstrumentFile>;            
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
    public productsL0DistControllerFindOne(response: ResponseContext):  ProductL0Dist  {      
        if (isCodeInRange("200", response.httpStatusCode)) {
            const jsonBody = JSON.parse(response.body);
            const body: ProductL0Dist = ObjectSerializer.deserialize(jsonBody, "ProductL0Dist", "") as ProductL0Dist;            
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Could not find the survey");
        }
        
        // Work around for incorrect api specification in petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const jsonBody = JSON.parse(response.body);
            const body: ProductL0Dist = ObjectSerializer.deserialize(jsonBody, "ProductL0Dist", "") as ProductL0Dist;            
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
    public productsL0DistControllerFindOneInstrument(response: ResponseContext):  Array<ProductL0InstrumentFile>  {      
        if (isCodeInRange("200", response.httpStatusCode)) {
            const jsonBody = JSON.parse(response.body);
            const body: Array<ProductL0InstrumentFile> = ObjectSerializer.deserialize(jsonBody, "Array<ProductL0InstrumentFile>", "") as Array<ProductL0InstrumentFile>;            
            return body;
        }
        
        // Work around for incorrect api specification in petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const jsonBody = JSON.parse(response.body);
            const body: Array<ProductL0InstrumentFile> = ObjectSerializer.deserialize(jsonBody, "Array<ProductL0InstrumentFile>", "") as Array<ProductL0InstrumentFile>;            
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
    public productsL0DistControllerUpdate(response: ResponseContext):   void  {      
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
    public productsL0DistControllerUpdateInstrument(response: ResponseContext):   void  {      
        if (isCodeInRange("200", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Could not find the instrument");
        }
        
        // Work around for incorrect api specification in petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
        	return;
        }
        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
}

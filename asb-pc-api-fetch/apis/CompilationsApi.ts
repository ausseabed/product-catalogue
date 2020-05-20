// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {isCodeInRange} from '../util';

import { Compilation } from '../models/Compilation';
import { CompilationDto } from '../models/CompilationDto';

/**
 * no description
 */
export class CompilationsApiRequestFactory extends BaseAPIRequestFactory {
	
    /**
     * @param compilationDto 
     */
    public compilationsControllerCreate(compilationDto: CompilationDto, options?: Configuration): RequestContext {
		let config = options || this.configuration;
		
        // verify required parameter 'compilationDto' is not null or undefined
        if (compilationDto === null || compilationDto === undefined) {
            throw new RequiredError('Required parameter compilationDto was null or undefined when calling compilationsControllerCreate.');
        }

		
		// Path Params
    	const localVarPath = '/compilations';

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json")

        // Query Params
	
		// Header Params
	
		// Form Params


		// Body Params
        requestContext.setHeaderParam("Content-Type", "application/json");
		// TODO: Should this be handled by ObjectSerializer? imo yes => confidential information included in local object should not be sent
        const needsSerialization = (<any>"CompilationDto" !== "string") || requestContext.getHeaders()['Content-Type'] === 'application/json';
        const serializedBody = needsSerialization ? JSON.stringify(compilationDto || {}) : (compilationDto.toString() || ""); // TODO: `toString` call is unnecessary
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
     */
    public compilationsControllerFindAll(options?: Configuration): RequestContext {
		let config = options || this.configuration;
		
		// Path Params
    	const localVarPath = '/compilations';

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
     * @param compilationId 
     */
    public compilationsControllerFindOne(compilationId: number, options?: Configuration): RequestContext {
		let config = options || this.configuration;
		
        // verify required parameter 'compilationId' is not null or undefined
        if (compilationId === null || compilationId === undefined) {
            throw new RequiredError('Required parameter compilationId was null or undefined when calling compilationsControllerFindOne.');
        }

		
		// Path Params
    	const localVarPath = '/compilations/{compilationId}'
            .replace('{' + 'compilationId' + '}', encodeURIComponent(String(compilationId)));

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
     * @param compilationId 
     */
    public compilationsControllerRemove(compilationId: number, options?: Configuration): RequestContext {
		let config = options || this.configuration;
		
        // verify required parameter 'compilationId' is not null or undefined
        if (compilationId === null || compilationId === undefined) {
            throw new RequiredError('Required parameter compilationId was null or undefined when calling compilationsControllerRemove.');
        }

		
		// Path Params
    	const localVarPath = '/compilations/{compilationId}'
            .replace('{' + 'compilationId' + '}', encodeURIComponent(String(compilationId)));

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
     * @param compilationId 
     * @param compilationDto 
     */
    public compilationsControllerUpdate(compilationId: number, compilationDto: CompilationDto, options?: Configuration): RequestContext {
		let config = options || this.configuration;
		
        // verify required parameter 'compilationId' is not null or undefined
        if (compilationId === null || compilationId === undefined) {
            throw new RequiredError('Required parameter compilationId was null or undefined when calling compilationsControllerUpdate.');
        }

		
        // verify required parameter 'compilationDto' is not null or undefined
        if (compilationDto === null || compilationDto === undefined) {
            throw new RequiredError('Required parameter compilationDto was null or undefined when calling compilationsControllerUpdate.');
        }

		
		// Path Params
    	const localVarPath = '/compilations/{compilationId}'
            .replace('{' + 'compilationId' + '}', encodeURIComponent(String(compilationId)));

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json")

        // Query Params
	
		// Header Params
	
		// Form Params


		// Body Params
        requestContext.setHeaderParam("Content-Type", "application/json");
		// TODO: Should this be handled by ObjectSerializer? imo yes => confidential information included in local object should not be sent
        const needsSerialization = (<any>"CompilationDto" !== "string") || requestContext.getHeaders()['Content-Type'] === 'application/json';
        const serializedBody = needsSerialization ? JSON.stringify(compilationDto || {}) : (compilationDto.toString() || ""); // TODO: `toString` call is unnecessary
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



export class CompilationsApiResponseProcessor {
	
	/**
	 * Unwraps the actual response sent by the server from the response context and deserializes the response content 
	 * to the expected objects
	 * 
	 * @params response Response returned by the server for a request to  
	 * @throws ApiException if the response code was not in [200, 299]
	 */
    public compilationsControllerCreate(response: ResponseContext):  Compilation  {      
        if (isCodeInRange("201", response.httpStatusCode)) {
            const jsonBody = JSON.parse(response.body);
            const body: Compilation = ObjectSerializer.deserialize(jsonBody, "Compilation", "") as Compilation;            
            return body;
        }
        
        // Work around for incorrect api specification in petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const jsonBody = JSON.parse(response.body);
            const body: Compilation = ObjectSerializer.deserialize(jsonBody, "Compilation", "") as Compilation;            
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
    public compilationsControllerFindAll(response: ResponseContext):  Array<Compilation>  {      
        if (isCodeInRange("200", response.httpStatusCode)) {
            const jsonBody = JSON.parse(response.body);
            const body: Array<Compilation> = ObjectSerializer.deserialize(jsonBody, "Array<Compilation>", "") as Array<Compilation>;            
            return body;
        }
        
        // Work around for incorrect api specification in petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const jsonBody = JSON.parse(response.body);
            const body: Array<Compilation> = ObjectSerializer.deserialize(jsonBody, "Array<Compilation>", "") as Array<Compilation>;            
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
    public compilationsControllerFindOne(response: ResponseContext):  Compilation  {      
        if (isCodeInRange("200", response.httpStatusCode)) {
            const jsonBody = JSON.parse(response.body);
            const body: Compilation = ObjectSerializer.deserialize(jsonBody, "Compilation", "") as Compilation;            
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Could not find the compilation");
        }
        
        // Work around for incorrect api specification in petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const jsonBody = JSON.parse(response.body);
            const body: Compilation = ObjectSerializer.deserialize(jsonBody, "Compilation", "") as Compilation;            
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
    public compilationsControllerRemove(response: ResponseContext):   void  {      
        if (isCodeInRange("200", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Could not find the compilation");
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
    public compilationsControllerUpdate(response: ResponseContext):   void  {      
        if (isCodeInRange("200", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Could not find the compilation");
        }
        
        // Work around for incorrect api specification in petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
        	return;
        }
        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
}

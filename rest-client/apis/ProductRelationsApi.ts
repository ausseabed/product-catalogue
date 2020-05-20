// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {isCodeInRange} from '../util';

import { CompilationL3Relation } from '../models/CompilationL3Relation';
import { CompilationL3RelationDto } from '../models/CompilationL3RelationDto';
import { SurveyL0Relation } from '../models/SurveyL0Relation';
import { SurveyL0RelationDto } from '../models/SurveyL0RelationDto';
import { SurveyL3Relation } from '../models/SurveyL3Relation';
import { SurveyL3RelationDto } from '../models/SurveyL3RelationDto';

/**
 * no description
 */
export class ProductRelationsApiRequestFactory extends BaseAPIRequestFactory {
	
    /**
     * @param compilationL3RelationDto 
     */
    public productRelationsControllerCreateCompilation(compilationL3RelationDto: CompilationL3RelationDto, options?: Configuration): RequestContext {
		let config = options || this.configuration;
		
        // verify required parameter 'compilationL3RelationDto' is not null or undefined
        if (compilationL3RelationDto === null || compilationL3RelationDto === undefined) {
            throw new RequiredError('Required parameter compilationL3RelationDto was null or undefined when calling productRelationsControllerCreateCompilation.');
        }

		
		// Path Params
    	const localVarPath = '/product-relations/compilation-to-l3';

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json")

        // Query Params
	
		// Header Params
	
		// Form Params


		// Body Params
        requestContext.setHeaderParam("Content-Type", "application/json");
		// TODO: Should this be handled by ObjectSerializer? imo yes => confidential information included in local object should not be sent
        const needsSerialization = (<any>"CompilationL3RelationDto" !== "string") || requestContext.getHeaders()['Content-Type'] === 'application/json';
        const serializedBody = needsSerialization ? JSON.stringify(compilationL3RelationDto || {}) : (compilationL3RelationDto.toString() || ""); // TODO: `toString` call is unnecessary
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
     * @param surveyL0RelationDto 
     */
    public productRelationsControllerCreateL0Survey(surveyL0RelationDto: SurveyL0RelationDto, options?: Configuration): RequestContext {
		let config = options || this.configuration;
		
        // verify required parameter 'surveyL0RelationDto' is not null or undefined
        if (surveyL0RelationDto === null || surveyL0RelationDto === undefined) {
            throw new RequiredError('Required parameter surveyL0RelationDto was null or undefined when calling productRelationsControllerCreateL0Survey.');
        }

		
		// Path Params
    	const localVarPath = '/product-relations/surveys-to-l0';

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json")

        // Query Params
	
		// Header Params
	
		// Form Params


		// Body Params
        requestContext.setHeaderParam("Content-Type", "application/json");
		// TODO: Should this be handled by ObjectSerializer? imo yes => confidential information included in local object should not be sent
        const needsSerialization = (<any>"SurveyL0RelationDto" !== "string") || requestContext.getHeaders()['Content-Type'] === 'application/json';
        const serializedBody = needsSerialization ? JSON.stringify(surveyL0RelationDto || {}) : (surveyL0RelationDto.toString() || ""); // TODO: `toString` call is unnecessary
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
     * @param surveyL3RelationDto 
     */
    public productRelationsControllerCreateL3Survey(surveyL3RelationDto: SurveyL3RelationDto, options?: Configuration): RequestContext {
		let config = options || this.configuration;
		
        // verify required parameter 'surveyL3RelationDto' is not null or undefined
        if (surveyL3RelationDto === null || surveyL3RelationDto === undefined) {
            throw new RequiredError('Required parameter surveyL3RelationDto was null or undefined when calling productRelationsControllerCreateL3Survey.');
        }

		
		// Path Params
    	const localVarPath = '/product-relations/surveys-to-l3';

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json")

        // Query Params
	
		// Header Params
	
		// Form Params


		// Body Params
        requestContext.setHeaderParam("Content-Type", "application/json");
		// TODO: Should this be handled by ObjectSerializer? imo yes => confidential information included in local object should not be sent
        const needsSerialization = (<any>"SurveyL3RelationDto" !== "string") || requestContext.getHeaders()['Content-Type'] === 'application/json';
        const serializedBody = needsSerialization ? JSON.stringify(surveyL3RelationDto || {}) : (surveyL3RelationDto.toString() || ""); // TODO: `toString` call is unnecessary
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
     * @param relationId 
     */
    public productRelationsControllerDeleteCompilation(relationId: number, options?: Configuration): RequestContext {
		let config = options || this.configuration;
		
        // verify required parameter 'relationId' is not null or undefined
        if (relationId === null || relationId === undefined) {
            throw new RequiredError('Required parameter relationId was null or undefined when calling productRelationsControllerDeleteCompilation.');
        }

		
		// Path Params
    	const localVarPath = '/product-relations/compilation-to-l3/{relationId}'
            .replace('{' + 'relationId' + '}', encodeURIComponent(String(relationId)));

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
     * @param relationId 
     */
    public productRelationsControllerDeleteL0Survey(relationId: number, options?: Configuration): RequestContext {
		let config = options || this.configuration;
		
        // verify required parameter 'relationId' is not null or undefined
        if (relationId === null || relationId === undefined) {
            throw new RequiredError('Required parameter relationId was null or undefined when calling productRelationsControllerDeleteL0Survey.');
        }

		
		// Path Params
    	const localVarPath = '/product-relations/surveys-to-l0/{relationId}'
            .replace('{' + 'relationId' + '}', encodeURIComponent(String(relationId)));

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
     * @param relationId 
     */
    public productRelationsControllerDeleteL3Survey(relationId: number, options?: Configuration): RequestContext {
		let config = options || this.configuration;
		
        // verify required parameter 'relationId' is not null or undefined
        if (relationId === null || relationId === undefined) {
            throw new RequiredError('Required parameter relationId was null or undefined when calling productRelationsControllerDeleteL3Survey.');
        }

		
		// Path Params
    	const localVarPath = '/product-relations/surveys-to-l3/{relationId}'
            .replace('{' + 'relationId' + '}', encodeURIComponent(String(relationId)));

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
     */
    public productRelationsControllerFindConditionalCompilation(compilationId: number, options?: Configuration): RequestContext {
		let config = options || this.configuration;
		
        // verify required parameter 'compilationId' is not null or undefined
        if (compilationId === null || compilationId === undefined) {
            throw new RequiredError('Required parameter compilationId was null or undefined when calling productRelationsControllerFindConditionalCompilation.');
        }

		
		// Path Params
    	const localVarPath = '/product-relations/compilation-to-l3/{compilationId}'
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
     * @param surveyId 
     */
    public productRelationsControllerFindConditionalL0Survey(surveyId: number, options?: Configuration): RequestContext {
		let config = options || this.configuration;
		
        // verify required parameter 'surveyId' is not null or undefined
        if (surveyId === null || surveyId === undefined) {
            throw new RequiredError('Required parameter surveyId was null or undefined when calling productRelationsControllerFindConditionalL0Survey.');
        }

		
		// Path Params
    	const localVarPath = '/product-relations/surveys-to-l0/{surveyId}'
            .replace('{' + 'surveyId' + '}', encodeURIComponent(String(surveyId)));

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
     * @param surveyId 
     */
    public productRelationsControllerFindConditionalL3Survey(surveyId: number, options?: Configuration): RequestContext {
		let config = options || this.configuration;
		
        // verify required parameter 'surveyId' is not null or undefined
        if (surveyId === null || surveyId === undefined) {
            throw new RequiredError('Required parameter surveyId was null or undefined when calling productRelationsControllerFindConditionalL3Survey.');
        }

		
		// Path Params
    	const localVarPath = '/product-relations/surveys-to-l3/{surveyId}'
            .replace('{' + 'surveyId' + '}', encodeURIComponent(String(surveyId)));

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
     * @param relationId 
     */
    public productRelationsControllerFindOneCompilation(relationId: number, options?: Configuration): RequestContext {
		let config = options || this.configuration;
		
        // verify required parameter 'relationId' is not null or undefined
        if (relationId === null || relationId === undefined) {
            throw new RequiredError('Required parameter relationId was null or undefined when calling productRelationsControllerFindOneCompilation.');
        }

		
		// Path Params
    	const localVarPath = '/product-relations/compilation-to-l3/{relationId}'
            .replace('{' + 'relationId' + '}', encodeURIComponent(String(relationId)));

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
     * @param relationId 
     */
    public productRelationsControllerFindOneL0Survey(relationId: number, options?: Configuration): RequestContext {
		let config = options || this.configuration;
		
        // verify required parameter 'relationId' is not null or undefined
        if (relationId === null || relationId === undefined) {
            throw new RequiredError('Required parameter relationId was null or undefined when calling productRelationsControllerFindOneL0Survey.');
        }

		
		// Path Params
    	const localVarPath = '/product-relations/surveys-to-l0/{relationId}'
            .replace('{' + 'relationId' + '}', encodeURIComponent(String(relationId)));

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
     * @param relationId 
     */
    public productRelationsControllerFindOneL3Survey(relationId: number, options?: Configuration): RequestContext {
		let config = options || this.configuration;
		
        // verify required parameter 'relationId' is not null or undefined
        if (relationId === null || relationId === undefined) {
            throw new RequiredError('Required parameter relationId was null or undefined when calling productRelationsControllerFindOneL3Survey.');
        }

		
		// Path Params
    	const localVarPath = '/product-relations/surveys-to-l3/{relationId}'
            .replace('{' + 'relationId' + '}', encodeURIComponent(String(relationId)));

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
     * @param relationId 
     * @param compilationL3RelationDto 
     */
    public productRelationsControllerUpdateCompilation(relationId: number, compilationL3RelationDto: CompilationL3RelationDto, options?: Configuration): RequestContext {
		let config = options || this.configuration;
		
        // verify required parameter 'relationId' is not null or undefined
        if (relationId === null || relationId === undefined) {
            throw new RequiredError('Required parameter relationId was null or undefined when calling productRelationsControllerUpdateCompilation.');
        }

		
        // verify required parameter 'compilationL3RelationDto' is not null or undefined
        if (compilationL3RelationDto === null || compilationL3RelationDto === undefined) {
            throw new RequiredError('Required parameter compilationL3RelationDto was null or undefined when calling productRelationsControllerUpdateCompilation.');
        }

		
		// Path Params
    	const localVarPath = '/product-relations/compilation-to-l3/{relationId}'
            .replace('{' + 'relationId' + '}', encodeURIComponent(String(relationId)));

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json")

        // Query Params
	
		// Header Params
	
		// Form Params


		// Body Params
        requestContext.setHeaderParam("Content-Type", "application/json");
		// TODO: Should this be handled by ObjectSerializer? imo yes => confidential information included in local object should not be sent
        const needsSerialization = (<any>"CompilationL3RelationDto" !== "string") || requestContext.getHeaders()['Content-Type'] === 'application/json';
        const serializedBody = needsSerialization ? JSON.stringify(compilationL3RelationDto || {}) : (compilationL3RelationDto.toString() || ""); // TODO: `toString` call is unnecessary
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
     * @param relationId 
     * @param surveyL0RelationDto 
     */
    public productRelationsControllerUpdateL0Survey(relationId: number, surveyL0RelationDto: SurveyL0RelationDto, options?: Configuration): RequestContext {
		let config = options || this.configuration;
		
        // verify required parameter 'relationId' is not null or undefined
        if (relationId === null || relationId === undefined) {
            throw new RequiredError('Required parameter relationId was null or undefined when calling productRelationsControllerUpdateL0Survey.');
        }

		
        // verify required parameter 'surveyL0RelationDto' is not null or undefined
        if (surveyL0RelationDto === null || surveyL0RelationDto === undefined) {
            throw new RequiredError('Required parameter surveyL0RelationDto was null or undefined when calling productRelationsControllerUpdateL0Survey.');
        }

		
		// Path Params
    	const localVarPath = '/product-relations/surveys-to-l0/{relationId}'
            .replace('{' + 'relationId' + '}', encodeURIComponent(String(relationId)));

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json")

        // Query Params
	
		// Header Params
	
		// Form Params


		// Body Params
        requestContext.setHeaderParam("Content-Type", "application/json");
		// TODO: Should this be handled by ObjectSerializer? imo yes => confidential information included in local object should not be sent
        const needsSerialization = (<any>"SurveyL0RelationDto" !== "string") || requestContext.getHeaders()['Content-Type'] === 'application/json';
        const serializedBody = needsSerialization ? JSON.stringify(surveyL0RelationDto || {}) : (surveyL0RelationDto.toString() || ""); // TODO: `toString` call is unnecessary
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
     * @param relationId 
     * @param surveyL3RelationDto 
     */
    public productRelationsControllerUpdateL3Survey(relationId: number, surveyL3RelationDto: SurveyL3RelationDto, options?: Configuration): RequestContext {
		let config = options || this.configuration;
		
        // verify required parameter 'relationId' is not null or undefined
        if (relationId === null || relationId === undefined) {
            throw new RequiredError('Required parameter relationId was null or undefined when calling productRelationsControllerUpdateL3Survey.');
        }

		
        // verify required parameter 'surveyL3RelationDto' is not null or undefined
        if (surveyL3RelationDto === null || surveyL3RelationDto === undefined) {
            throw new RequiredError('Required parameter surveyL3RelationDto was null or undefined when calling productRelationsControllerUpdateL3Survey.');
        }

		
		// Path Params
    	const localVarPath = '/product-relations/surveys-to-l3/{relationId}'
            .replace('{' + 'relationId' + '}', encodeURIComponent(String(relationId)));

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json")

        // Query Params
	
		// Header Params
	
		// Form Params


		// Body Params
        requestContext.setHeaderParam("Content-Type", "application/json");
		// TODO: Should this be handled by ObjectSerializer? imo yes => confidential information included in local object should not be sent
        const needsSerialization = (<any>"SurveyL3RelationDto" !== "string") || requestContext.getHeaders()['Content-Type'] === 'application/json';
        const serializedBody = needsSerialization ? JSON.stringify(surveyL3RelationDto || {}) : (surveyL3RelationDto.toString() || ""); // TODO: `toString` call is unnecessary
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



export class ProductRelationsApiResponseProcessor {
	
	/**
	 * Unwraps the actual response sent by the server from the response context and deserializes the response content 
	 * to the expected objects
	 * 
	 * @params response Response returned by the server for a request to  
	 * @throws ApiException if the response code was not in [200, 299]
	 */
    public productRelationsControllerCreateCompilation(response: ResponseContext):  CompilationL3Relation  {      
        if (isCodeInRange("201", response.httpStatusCode)) {
            const jsonBody = JSON.parse(response.body);
            const body: CompilationL3Relation = ObjectSerializer.deserialize(jsonBody, "CompilationL3Relation", "") as CompilationL3Relation;            
            return body;
        }
        
        // Work around for incorrect api specification in petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const jsonBody = JSON.parse(response.body);
            const body: CompilationL3Relation = ObjectSerializer.deserialize(jsonBody, "CompilationL3Relation", "") as CompilationL3Relation;            
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
    public productRelationsControllerCreateL0Survey(response: ResponseContext):  SurveyL0Relation  {      
        if (isCodeInRange("201", response.httpStatusCode)) {
            const jsonBody = JSON.parse(response.body);
            const body: SurveyL0Relation = ObjectSerializer.deserialize(jsonBody, "SurveyL0Relation", "") as SurveyL0Relation;            
            return body;
        }
        
        // Work around for incorrect api specification in petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const jsonBody = JSON.parse(response.body);
            const body: SurveyL0Relation = ObjectSerializer.deserialize(jsonBody, "SurveyL0Relation", "") as SurveyL0Relation;            
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
    public productRelationsControllerCreateL3Survey(response: ResponseContext):  SurveyL3Relation  {      
        if (isCodeInRange("201", response.httpStatusCode)) {
            const jsonBody = JSON.parse(response.body);
            const body: SurveyL3Relation = ObjectSerializer.deserialize(jsonBody, "SurveyL3Relation", "") as SurveyL3Relation;            
            return body;
        }
        
        // Work around for incorrect api specification in petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const jsonBody = JSON.parse(response.body);
            const body: SurveyL3Relation = ObjectSerializer.deserialize(jsonBody, "SurveyL3Relation", "") as SurveyL3Relation;            
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
    public productRelationsControllerDeleteCompilation(response: ResponseContext):   void  {      
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
    public productRelationsControllerDeleteL0Survey(response: ResponseContext):   void  {      
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
    public productRelationsControllerDeleteL3Survey(response: ResponseContext):   void  {      
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
    public productRelationsControllerFindConditionalCompilation(response: ResponseContext):  CompilationL3Relation  {      
        if (isCodeInRange("200", response.httpStatusCode)) {
            const jsonBody = JSON.parse(response.body);
            const body: CompilationL3Relation = ObjectSerializer.deserialize(jsonBody, "CompilationL3Relation", "") as CompilationL3Relation;            
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Could not find the compilation");
        }
        
        // Work around for incorrect api specification in petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const jsonBody = JSON.parse(response.body);
            const body: CompilationL3Relation = ObjectSerializer.deserialize(jsonBody, "CompilationL3Relation", "") as CompilationL3Relation;            
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
    public productRelationsControllerFindConditionalL0Survey(response: ResponseContext):  SurveyL0Relation  {      
        if (isCodeInRange("200", response.httpStatusCode)) {
            const jsonBody = JSON.parse(response.body);
            const body: SurveyL0Relation = ObjectSerializer.deserialize(jsonBody, "SurveyL0Relation", "") as SurveyL0Relation;            
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Could not find the survey");
        }
        
        // Work around for incorrect api specification in petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const jsonBody = JSON.parse(response.body);
            const body: SurveyL0Relation = ObjectSerializer.deserialize(jsonBody, "SurveyL0Relation", "") as SurveyL0Relation;            
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
    public productRelationsControllerFindConditionalL3Survey(response: ResponseContext):  SurveyL3Relation  {      
        if (isCodeInRange("200", response.httpStatusCode)) {
            const jsonBody = JSON.parse(response.body);
            const body: SurveyL3Relation = ObjectSerializer.deserialize(jsonBody, "SurveyL3Relation", "") as SurveyL3Relation;            
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Could not find the survey");
        }
        
        // Work around for incorrect api specification in petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const jsonBody = JSON.parse(response.body);
            const body: SurveyL3Relation = ObjectSerializer.deserialize(jsonBody, "SurveyL3Relation", "") as SurveyL3Relation;            
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
    public productRelationsControllerFindOneCompilation(response: ResponseContext):  CompilationL3Relation  {      
        if (isCodeInRange("200", response.httpStatusCode)) {
            const jsonBody = JSON.parse(response.body);
            const body: CompilationL3Relation = ObjectSerializer.deserialize(jsonBody, "CompilationL3Relation", "") as CompilationL3Relation;            
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Could not find the compilation");
        }
        
        // Work around for incorrect api specification in petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const jsonBody = JSON.parse(response.body);
            const body: CompilationL3Relation = ObjectSerializer.deserialize(jsonBody, "CompilationL3Relation", "") as CompilationL3Relation;            
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
    public productRelationsControllerFindOneL0Survey(response: ResponseContext):  SurveyL0Relation  {      
        if (isCodeInRange("200", response.httpStatusCode)) {
            const jsonBody = JSON.parse(response.body);
            const body: SurveyL0Relation = ObjectSerializer.deserialize(jsonBody, "SurveyL0Relation", "") as SurveyL0Relation;            
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Could not find the compilation");
        }
        
        // Work around for incorrect api specification in petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const jsonBody = JSON.parse(response.body);
            const body: SurveyL0Relation = ObjectSerializer.deserialize(jsonBody, "SurveyL0Relation", "") as SurveyL0Relation;            
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
    public productRelationsControllerFindOneL3Survey(response: ResponseContext):  SurveyL3Relation  {      
        if (isCodeInRange("200", response.httpStatusCode)) {
            const jsonBody = JSON.parse(response.body);
            const body: SurveyL3Relation = ObjectSerializer.deserialize(jsonBody, "SurveyL3Relation", "") as SurveyL3Relation;            
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Could not find the survey");
        }
        
        // Work around for incorrect api specification in petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const jsonBody = JSON.parse(response.body);
            const body: SurveyL3Relation = ObjectSerializer.deserialize(jsonBody, "SurveyL3Relation", "") as SurveyL3Relation;            
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
    public productRelationsControllerUpdateCompilation(response: ResponseContext):   void  {      
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
    public productRelationsControllerUpdateL0Survey(response: ResponseContext):   void  {      
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
    public productRelationsControllerUpdateL3Survey(response: ResponseContext):   void  {      
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

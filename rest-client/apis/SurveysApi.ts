// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {isCodeInRange} from '../util';

import { Survey } from '../models/Survey';
import { SurveyDto } from '../models/SurveyDto';

/**
 * no description
 */
export class SurveysApiRequestFactory extends BaseAPIRequestFactory {
	
    /**
     * @param surveyDto 
     */
    public surveysControllerCreate(surveyDto: SurveyDto, options?: Configuration): RequestContext {
		let config = options || this.configuration;
		
        // verify required parameter 'surveyDto' is not null or undefined
        if (surveyDto === null || surveyDto === undefined) {
            throw new RequiredError('Required parameter surveyDto was null or undefined when calling surveysControllerCreate.');
        }

		
		// Path Params
    	const localVarPath = '/surveys';

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json")

        // Query Params
	
		// Header Params
	
		// Form Params


		// Body Params
        requestContext.setHeaderParam("Content-Type", "application/json");
		// TODO: Should this be handled by ObjectSerializer? imo yes => confidential information included in local object should not be sent
        const needsSerialization = (<any>"SurveyDto" !== "string") || requestContext.getHeaders()['Content-Type'] === 'application/json';
        const serializedBody = needsSerialization ? JSON.stringify(surveyDto || {}) : (surveyDto.toString() || ""); // TODO: `toString` call is unnecessary
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
    public surveysControllerFindAll(options?: Configuration): RequestContext {
		let config = options || this.configuration;
		
		// Path Params
    	const localVarPath = '/surveys';

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
    public surveysControllerFindOne(surveyId: number, options?: Configuration): RequestContext {
		let config = options || this.configuration;
		
        // verify required parameter 'surveyId' is not null or undefined
        if (surveyId === null || surveyId === undefined) {
            throw new RequiredError('Required parameter surveyId was null or undefined when calling surveysControllerFindOne.');
        }

		
		// Path Params
    	const localVarPath = '/surveys/{surveyId}'
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
    public surveysControllerRemove(surveyId: number, options?: Configuration): RequestContext {
		let config = options || this.configuration;
		
        // verify required parameter 'surveyId' is not null or undefined
        if (surveyId === null || surveyId === undefined) {
            throw new RequiredError('Required parameter surveyId was null or undefined when calling surveysControllerRemove.');
        }

		
		// Path Params
    	const localVarPath = '/surveys/{surveyId}'
            .replace('{' + 'surveyId' + '}', encodeURIComponent(String(surveyId)));

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
     * @param surveyId 
     * @param surveyDto 
     */
    public surveysControllerUpdate(surveyId: number, surveyDto: SurveyDto, options?: Configuration): RequestContext {
		let config = options || this.configuration;
		
        // verify required parameter 'surveyId' is not null or undefined
        if (surveyId === null || surveyId === undefined) {
            throw new RequiredError('Required parameter surveyId was null or undefined when calling surveysControllerUpdate.');
        }

		
        // verify required parameter 'surveyDto' is not null or undefined
        if (surveyDto === null || surveyDto === undefined) {
            throw new RequiredError('Required parameter surveyDto was null or undefined when calling surveysControllerUpdate.');
        }

		
		// Path Params
    	const localVarPath = '/surveys/{surveyId}'
            .replace('{' + 'surveyId' + '}', encodeURIComponent(String(surveyId)));

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json")

        // Query Params
	
		// Header Params
	
		// Form Params


		// Body Params
        requestContext.setHeaderParam("Content-Type", "application/json");
		// TODO: Should this be handled by ObjectSerializer? imo yes => confidential information included in local object should not be sent
        const needsSerialization = (<any>"SurveyDto" !== "string") || requestContext.getHeaders()['Content-Type'] === 'application/json';
        const serializedBody = needsSerialization ? JSON.stringify(surveyDto || {}) : (surveyDto.toString() || ""); // TODO: `toString` call is unnecessary
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



export class SurveysApiResponseProcessor {
	
	/**
	 * Unwraps the actual response sent by the server from the response context and deserializes the response content 
	 * to the expected objects
	 * 
	 * @params response Response returned by the server for a request to  
	 * @throws ApiException if the response code was not in [200, 299]
	 */
    public surveysControllerCreate(response: ResponseContext):  Survey  {      
        if (isCodeInRange("201", response.httpStatusCode)) {
            const jsonBody = JSON.parse(response.body);
            const body: Survey = ObjectSerializer.deserialize(jsonBody, "Survey", "") as Survey;            
            return body;
        }
        
        // Work around for incorrect api specification in petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const jsonBody = JSON.parse(response.body);
            const body: Survey = ObjectSerializer.deserialize(jsonBody, "Survey", "") as Survey;            
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
    public surveysControllerFindAll(response: ResponseContext):  Array<Survey>  {      
        if (isCodeInRange("200", response.httpStatusCode)) {
            const jsonBody = JSON.parse(response.body);
            const body: Array<Survey> = ObjectSerializer.deserialize(jsonBody, "Array<Survey>", "") as Array<Survey>;            
            return body;
        }
        
        // Work around for incorrect api specification in petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const jsonBody = JSON.parse(response.body);
            const body: Array<Survey> = ObjectSerializer.deserialize(jsonBody, "Array<Survey>", "") as Array<Survey>;            
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
    public surveysControllerFindOne(response: ResponseContext):  Survey  {      
        if (isCodeInRange("200", response.httpStatusCode)) {
            const jsonBody = JSON.parse(response.body);
            const body: Survey = ObjectSerializer.deserialize(jsonBody, "Survey", "") as Survey;            
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Could not find the survey");
        }
        
        // Work around for incorrect api specification in petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const jsonBody = JSON.parse(response.body);
            const body: Survey = ObjectSerializer.deserialize(jsonBody, "Survey", "") as Survey;            
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
    public surveysControllerRemove(response: ResponseContext):   void  {      
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
    public surveysControllerUpdate(response: ResponseContext):   void  {      
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

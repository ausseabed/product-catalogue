// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {isCodeInRange} from '../util';

import { ErrorDto } from '../models/ErrorDto';
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
            ObjectSerializer.serialize(surveyDto, "SurveyDto", ""),
            contentType
        );
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
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

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
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

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
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

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
            ObjectSerializer.serialize(surveyDto, "SurveyDto", ""),
            contentType
        );
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
     * @params response Response returned by the server for a request to surveysControllerCreate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async surveysControllerCreate(response: ResponseContext): Promise<Survey > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: Survey = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Survey", ""
            ) as Survey;
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
            const body: Survey = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Survey", ""
            ) as Survey;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to surveysControllerFindAll
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async surveysControllerFindAll(response: ResponseContext): Promise<Array<Survey> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<Survey> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Survey>", ""
            ) as Array<Survey>;
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
            const body: Array<Survey> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Survey>", ""
            ) as Array<Survey>;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to surveysControllerFindOne
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async surveysControllerFindOne(response: ResponseContext): Promise<Survey > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Survey = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Survey", ""
            ) as Survey;
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
            const body: Survey = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Survey", ""
            ) as Survey;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to surveysControllerRemove
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async surveysControllerRemove(response: ResponseContext): Promise< void> {
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
            return;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to surveysControllerUpdate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async surveysControllerUpdate(response: ResponseContext): Promise< void> {
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
            return;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
}

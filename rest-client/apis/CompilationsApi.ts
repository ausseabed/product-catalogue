// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {isCodeInRange} from '../util';

import { Compilation } from '../models/Compilation';
import { CompilationDto } from '../models/CompilationDto';
import { ErrorDto } from '../models/ErrorDto';

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
            ObjectSerializer.serialize(compilationDto, "CompilationDto", ""),
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
    public compilationsControllerFindAll(options?: Configuration): RequestContext {
		let config = options || this.configuration;
		
		// Path Params
    	const localVarPath = '/compilations';

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
            ObjectSerializer.serialize(compilationDto, "CompilationDto", ""),
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



export class CompilationsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to compilationsControllerCreate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async compilationsControllerCreate(response: ResponseContext): Promise<Compilation > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: Compilation = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Compilation", ""
            ) as Compilation;
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
            const body: Compilation = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Compilation", ""
            ) as Compilation;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to compilationsControllerFindAll
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async compilationsControllerFindAll(response: ResponseContext): Promise<Array<Compilation> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<Compilation> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Compilation>", ""
            ) as Array<Compilation>;
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
            const body: Array<Compilation> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Compilation>", ""
            ) as Array<Compilation>;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to compilationsControllerFindOne
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async compilationsControllerFindOne(response: ResponseContext): Promise<Compilation > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Compilation = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Compilation", ""
            ) as Compilation;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Could not find the compilation");
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
            const body: Compilation = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Compilation", ""
            ) as Compilation;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to compilationsControllerRemove
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async compilationsControllerRemove(response: ResponseContext): Promise< void> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Could not find the compilation");
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
     * @params response Response returned by the server for a request to compilationsControllerUpdate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async compilationsControllerUpdate(response: ResponseContext): Promise< void> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Could not find the compilation");
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

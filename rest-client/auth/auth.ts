import {RequestContext} from '../http/http';
// typings for btoa are incorrect
//@ts-ignore
import * as btoa from "btoa";

/**
 * Base class for all authentication schemes.
 *
 */
export abstract class SecurityAuthentication {

	public constructor(private name: string) {
	
	}
	
	/*
	 * 
	 * @return returns the name of the security authentication as specified in OAI
	 */
	public getName(): string {
		return this.name;
	}
	
	/**
	 * Applies the authentication scheme to the request context
	 * 
	 * @params context the request context which should use this authentication scheme
	 */
	public abstract applySecurityAuthentication(context: RequestContext): void;

}

/**
 * Applies no authentication.
 *
 */
export class NoAuthentication extends SecurityAuthentication {
	
	public constructor() {
		super("_no_auth");
	}
	
	public applySecurityAuthentication(_context: RequestContext) {
	
	}
}

/**
 * Applies an api key to the request context. 
 *
 */
export class APIKeyAuthentication extends SecurityAuthentication {
	
	/**
	 * Configures this api key authentication with the necessary properties
	 *
	 * @param authName: name of this authentication scheme as specified in the swagger.json
	 * @param paramName: Parameter name used for the api key
	 * @param keyLocation: Parameter location, either query, header or cookie.
	 * @param apiKey: The api key to be used for every request
	 */
	public constructor(authName: string, private paramName: string, private keyLocation: "query" | "header" | "cookie", private apiKey: string) {
		super(authName);
	}
	
	public applySecurityAuthentication(context: RequestContext) {
		if (this.keyLocation === "header") {
			context.setHeaderParam(this.paramName, this.apiKey);
		} else if (this.keyLocation === "cookie") {
			context.addCookie(this.paramName, this.apiKey);
		} else if (this.keyLocation === "query") {
			context.setQueryParam(this.paramName, this.apiKey);
		}
	}
}


/**
 * Applies basic http authentication to a request.
 *
 */
export class HttpBasicAuthentication extends SecurityAuthentication {
	
	/**
	 * Configures the http authentication with the required details.
	 *
	 *
	 * @param authName name of the authentication scheme as defined in swagger json
	 * @param username username for http basic authentication
	 * @param password password for http basic authentication
	 */
	public constructor(authName: string, private username: string, private password: string) {
		super(authName);
	}
	
	public applySecurityAuthentication(context: RequestContext) {
		let comb = this.username + ":" + this.password;
		context.setHeaderParam("Authentication", "Basic " + btoa(comb));
	}
}

/**
 * Applies basic bearer authentication to request header.
 *
 */
export class BasicBearerAuthentication extends SecurityAuthentication {
	
	/**
	 * Configures the basic bearer authentication with the required details.
	 *
	 *
	 * @param authName name of the authentication scheme as defined in swagger json
	 * @param token token used to gain access using bearer authentication
	 */
	public constructor(authName: string, private token: string) {
		super(authName);
	}
	
	public applySecurityAuthentication(context: RequestContext) {
		let comb = this.token;
		context.setHeaderParam("Authentication", "Bearer " + btoa(comb));
	}
}

// TODO: How to handle oauth2 authentication!
export class OAuth2Authentication extends SecurityAuthentication {
	public constructor(authName: string) {
		super(authName);
	}
	
	public applySecurityAuthentication(context: RequestContext) {
		// TODO
	}
}

export type AuthMethods = {
		"access-token"?: BasicBearerAuthentication,
}

export type ApiKeyConfiguration = string;
export type HttpBasicConfiguration = { "username": string, "password": string };
export type BasicBearerConfiguration = { "token" : string };
export type OAuth2Configuration = string;

export type AuthMethodsConfiguration = { "access-token"?:BasicBearerConfiguration,   }

/**
 * Creates the authentication methods from a swagger description.
 *
 */
export function configureAuthMethods(conf: AuthMethodsConfiguration | undefined): AuthMethods {
	let authMethods: AuthMethods = {
	}

	if (!conf) {
		return authMethods;
	}		

	const specificAuthConfig=conf["access-token"]
	if (specificAuthConfig) {
		authMethods["access-token"] = new BasicBearerAuthentication("access-token", specificAuthConfig["token"]);
	}

	return authMethods;
}

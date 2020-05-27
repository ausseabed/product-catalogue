import {RequestContext, HttpMethod} from './http/http';

/**
 *
 * Represents the configuration of a server including its
 * url template and variable configuration based on the url.
 *
 */
export class ServerConfiguration<T> {
	
    public constructor(private url: string, private variableConfiguration: T) {
    }
	
	/**
	 * Sets the value of the variables of this server.
	 *
	 * @param variableConfiguration a partial variable configuration for the variables contained in the url
	 */
	public setVariables(variableConfiguration: Partial<T>) {
		for (const key in variableConfiguration) {
			const val = variableConfiguration[key]
			// We know that val isn't undefined here - hopefully
			if (val !== undefined) {
				this.variableConfiguration[key] = val as T[Extract<keyof T, string>];
			}
		}
	}

	public getConfiguration(): T {
		return this.variableConfiguration
	}

	private getUrl() {
		let replacedUrl = this.url;
		for (const key in this.variableConfiguration) {
			var re = new RegExp("{" + key + "}","g");
			replacedUrl = replacedUrl.replace(re, String(this.variableConfiguration[key]));
		}
		return replacedUrl
	}

	/**
	 * Creates a new request context for this server using the url with variables
	 * replaced with their respective values and the endpoint of the request appended.
	 *
	 * @param endpoint the endpoint to be queried on the server
	 * @param httpMethod httpMethod to be used
	 *
	 */	
	public makeRequestContext(endpoint: string, httpMethod: HttpMethod): RequestContext {
		return new RequestContext(this.getUrl() + endpoint, httpMethod);		
	}
}

export const server1 = new ServerConfiguration<{  }>("/", {  })

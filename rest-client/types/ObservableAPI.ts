import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';

import { Compilation } from '../models/Compilation';
import { CompilationDto } from '../models/CompilationDto';
import { CompilationL3Relation } from '../models/CompilationL3Relation';
import { CompilationL3RelationDto } from '../models/CompilationL3RelationDto';
import { ErrorDto } from '../models/ErrorDto';
import { ProductL0Dist } from '../models/ProductL0Dist';
import { ProductL0DistDto } from '../models/ProductL0DistDto';
import { ProductL0InstrumentFile } from '../models/ProductL0InstrumentFile';
import { ProductL0InstrumentFileDto } from '../models/ProductL0InstrumentFileDto';
import { ProductL0Src } from '../models/ProductL0Src';
import { ProductL0SrcDto } from '../models/ProductL0SrcDto';
import { ProductL2Src } from '../models/ProductL2Src';
import { ProductL2SrcDto } from '../models/ProductL2SrcDto';
import { ProductL3Dist } from '../models/ProductL3Dist';
import { ProductL3DistDto } from '../models/ProductL3DistDto';
import { ProductL3Src } from '../models/ProductL3Src';
import { ProductL3SrcDto } from '../models/ProductL3SrcDto';
import { RelationSummaryDto } from '../models/RelationSummaryDto';
import { Survey } from '../models/Survey';
import { SurveyDto } from '../models/SurveyDto';
import { SurveyL0Relation } from '../models/SurveyL0Relation';
import { SurveyL0RelationDto } from '../models/SurveyL0RelationDto';
import { SurveyL2Relation } from '../models/SurveyL2Relation';
import { SurveyL2RelationDto } from '../models/SurveyL2RelationDto';
import { SurveyL3Relation } from '../models/SurveyL3Relation';
import { SurveyL3RelationDto } from '../models/SurveyL3RelationDto';

import { CompilationsApiRequestFactory, CompilationsApiResponseProcessor} from "../apis/CompilationsApi";
export class ObservableCompilationsApi {
    private requestFactory: CompilationsApiRequestFactory;
    private responseProcessor: CompilationsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CompilationsApiRequestFactory,
        responseProcessor?: CompilationsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CompilationsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CompilationsApiResponseProcessor();
    }

    /**
     * @param compilationDto 
     */
    public compilationsControllerCreate(compilationDto: CompilationDto, options?: Configuration): Observable<Compilation> {
    	const requestContextPromise = this.requestFactory.compilationsControllerCreate(compilationDto, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.compilationsControllerCreate(rsp)));
	    	}));
    }
	
    /**
     * @param snapshotDateTime 
     */
    public compilationsControllerFindAll(snapshotDateTime?: string, options?: Configuration): Observable<Array<Compilation>> {
    	const requestContextPromise = this.requestFactory.compilationsControllerFindAll(snapshotDateTime, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.compilationsControllerFindAll(rsp)));
	    	}));
    }
	
    /**
     * @param compilationId 
     */
    public compilationsControllerFindOne(compilationId: number, options?: Configuration): Observable<Compilation> {
    	const requestContextPromise = this.requestFactory.compilationsControllerFindOne(compilationId, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.compilationsControllerFindOne(rsp)));
	    	}));
    }
	
    /**
     * @param compilationId 
     */
    public compilationsControllerRemove(compilationId: number, options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.compilationsControllerRemove(compilationId, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.compilationsControllerRemove(rsp)));
	    	}));
    }
	
    /**
     * @param compilationId 
     * @param compilationDto 
     */
    public compilationsControllerUpdate(compilationId: number, compilationDto: CompilationDto, options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.compilationsControllerUpdate(compilationId, compilationDto, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.compilationsControllerUpdate(rsp)));
	    	}));
    }
	

}




import { ProductRelationsApiRequestFactory, ProductRelationsApiResponseProcessor} from "../apis/ProductRelationsApi";
export class ObservableProductRelationsApi {
    private requestFactory: ProductRelationsApiRequestFactory;
    private responseProcessor: ProductRelationsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ProductRelationsApiRequestFactory,
        responseProcessor?: ProductRelationsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ProductRelationsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ProductRelationsApiResponseProcessor();
    }

    /**
     * @param compilationL3RelationDto 
     */
    public productRelationsControllerCreateCompilation(compilationL3RelationDto: CompilationL3RelationDto, options?: Configuration): Observable<CompilationL3Relation> {
    	const requestContextPromise = this.requestFactory.productRelationsControllerCreateCompilation(compilationL3RelationDto, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productRelationsControllerCreateCompilation(rsp)));
	    	}));
    }
	
    /**
     * @param surveyL0RelationDto 
     */
    public productRelationsControllerCreateL0Survey(surveyL0RelationDto: SurveyL0RelationDto, options?: Configuration): Observable<SurveyL0Relation> {
    	const requestContextPromise = this.requestFactory.productRelationsControllerCreateL0Survey(surveyL0RelationDto, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productRelationsControllerCreateL0Survey(rsp)));
	    	}));
    }
	
    /**
     * @param surveyL2RelationDto 
     */
    public productRelationsControllerCreateL2Survey(surveyL2RelationDto: SurveyL2RelationDto, options?: Configuration): Observable<SurveyL2Relation> {
    	const requestContextPromise = this.requestFactory.productRelationsControllerCreateL2Survey(surveyL2RelationDto, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productRelationsControllerCreateL2Survey(rsp)));
	    	}));
    }
	
    /**
     * @param surveyL3RelationDto 
     */
    public productRelationsControllerCreateL3Survey(surveyL3RelationDto: SurveyL3RelationDto, options?: Configuration): Observable<SurveyL3Relation> {
    	const requestContextPromise = this.requestFactory.productRelationsControllerCreateL3Survey(surveyL3RelationDto, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productRelationsControllerCreateL3Survey(rsp)));
	    	}));
    }
	
    /**
     * @param relationId 
     */
    public productRelationsControllerDeleteCompilation(relationId: number, options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.productRelationsControllerDeleteCompilation(relationId, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productRelationsControllerDeleteCompilation(rsp)));
	    	}));
    }
	
    /**
     * @param relationId 
     */
    public productRelationsControllerDeleteL0Survey(relationId: number, options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.productRelationsControllerDeleteL0Survey(relationId, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productRelationsControllerDeleteL0Survey(rsp)));
	    	}));
    }
	
    /**
     * @param relationId 
     */
    public productRelationsControllerDeleteL2Survey(relationId: number, options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.productRelationsControllerDeleteL2Survey(relationId, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productRelationsControllerDeleteL2Survey(rsp)));
	    	}));
    }
	
    /**
     * @param relationId 
     */
    public productRelationsControllerDeleteL3Survey(relationId: number, options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.productRelationsControllerDeleteL3Survey(relationId, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productRelationsControllerDeleteL3Survey(rsp)));
	    	}));
    }
	
    /**
     * @param snapshotDateTime 
     */
    public productRelationsControllerFindAllL0Survey(snapshotDateTime?: string, options?: Configuration): Observable<Array<RelationSummaryDto>> {
    	const requestContextPromise = this.requestFactory.productRelationsControllerFindAllL0Survey(snapshotDateTime, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productRelationsControllerFindAllL0Survey(rsp)));
	    	}));
    }
	
    /**
     * @param snapshotDateTime 
     */
    public productRelationsControllerFindAllL2Survey(snapshotDateTime?: string, options?: Configuration): Observable<Array<RelationSummaryDto>> {
    	const requestContextPromise = this.requestFactory.productRelationsControllerFindAllL2Survey(snapshotDateTime, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productRelationsControllerFindAllL2Survey(rsp)));
	    	}));
    }
	
    /**
     * @param snapshotDateTime 
     */
    public productRelationsControllerFindAllL3Compilation(snapshotDateTime?: string, options?: Configuration): Observable<Array<RelationSummaryDto>> {
    	const requestContextPromise = this.requestFactory.productRelationsControllerFindAllL3Compilation(snapshotDateTime, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productRelationsControllerFindAllL3Compilation(rsp)));
	    	}));
    }
	
    /**
     * @param snapshotDateTime 
     */
    public productRelationsControllerFindAllL3Survey(snapshotDateTime?: string, options?: Configuration): Observable<Array<RelationSummaryDto>> {
    	const requestContextPromise = this.requestFactory.productRelationsControllerFindAllL3Survey(snapshotDateTime, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productRelationsControllerFindAllL3Survey(rsp)));
	    	}));
    }
	
    /**
     * @param compilationId 
     */
    public productRelationsControllerFindConditionalCompilation(compilationId: number, options?: Configuration): Observable<CompilationL3Relation> {
    	const requestContextPromise = this.requestFactory.productRelationsControllerFindConditionalCompilation(compilationId, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productRelationsControllerFindConditionalCompilation(rsp)));
	    	}));
    }
	
    /**
     * @param surveyId 
     */
    public productRelationsControllerFindConditionalL0Survey(surveyId: number, options?: Configuration): Observable<SurveyL0Relation> {
    	const requestContextPromise = this.requestFactory.productRelationsControllerFindConditionalL0Survey(surveyId, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productRelationsControllerFindConditionalL0Survey(rsp)));
	    	}));
    }
	
    /**
     * @param surveyId 
     */
    public productRelationsControllerFindConditionalL2Survey(surveyId: number, options?: Configuration): Observable<SurveyL2Relation> {
    	const requestContextPromise = this.requestFactory.productRelationsControllerFindConditionalL2Survey(surveyId, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productRelationsControllerFindConditionalL2Survey(rsp)));
	    	}));
    }
	
    /**
     * @param surveyId 
     */
    public productRelationsControllerFindConditionalL3Survey(surveyId: number, options?: Configuration): Observable<SurveyL3Relation> {
    	const requestContextPromise = this.requestFactory.productRelationsControllerFindConditionalL3Survey(surveyId, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productRelationsControllerFindConditionalL3Survey(rsp)));
	    	}));
    }
	
    /**
     * @param relationId 
     */
    public productRelationsControllerFindOneCompilation(relationId: number, options?: Configuration): Observable<CompilationL3Relation> {
    	const requestContextPromise = this.requestFactory.productRelationsControllerFindOneCompilation(relationId, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productRelationsControllerFindOneCompilation(rsp)));
	    	}));
    }
	
    /**
     * @param relationId 
     */
    public productRelationsControllerFindOneL0Survey(relationId: number, options?: Configuration): Observable<SurveyL0Relation> {
    	const requestContextPromise = this.requestFactory.productRelationsControllerFindOneL0Survey(relationId, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productRelationsControllerFindOneL0Survey(rsp)));
	    	}));
    }
	
    /**
     * @param relationId 
     */
    public productRelationsControllerFindOneL2Survey(relationId: number, options?: Configuration): Observable<SurveyL2Relation> {
    	const requestContextPromise = this.requestFactory.productRelationsControllerFindOneL2Survey(relationId, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productRelationsControllerFindOneL2Survey(rsp)));
	    	}));
    }
	
    /**
     * @param relationId 
     */
    public productRelationsControllerFindOneL3Survey(relationId: number, options?: Configuration): Observable<SurveyL3Relation> {
    	const requestContextPromise = this.requestFactory.productRelationsControllerFindOneL3Survey(relationId, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productRelationsControllerFindOneL3Survey(rsp)));
	    	}));
    }
	
    /**
     * @param relationId 
     * @param compilationL3RelationDto 
     */
    public productRelationsControllerUpdateCompilation(relationId: number, compilationL3RelationDto: CompilationL3RelationDto, options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.productRelationsControllerUpdateCompilation(relationId, compilationL3RelationDto, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productRelationsControllerUpdateCompilation(rsp)));
	    	}));
    }
	
    /**
     * @param relationId 
     * @param surveyL0RelationDto 
     */
    public productRelationsControllerUpdateL0Survey(relationId: number, surveyL0RelationDto: SurveyL0RelationDto, options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.productRelationsControllerUpdateL0Survey(relationId, surveyL0RelationDto, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productRelationsControllerUpdateL0Survey(rsp)));
	    	}));
    }
	
    /**
     * @param relationId 
     * @param surveyL2RelationDto 
     */
    public productRelationsControllerUpdateL2Survey(relationId: number, surveyL2RelationDto: SurveyL2RelationDto, options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.productRelationsControllerUpdateL2Survey(relationId, surveyL2RelationDto, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productRelationsControllerUpdateL2Survey(rsp)));
	    	}));
    }
	
    /**
     * @param relationId 
     * @param surveyL3RelationDto 
     */
    public productRelationsControllerUpdateL3Survey(relationId: number, surveyL3RelationDto: SurveyL3RelationDto, options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.productRelationsControllerUpdateL3Survey(relationId, surveyL3RelationDto, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productRelationsControllerUpdateL3Survey(rsp)));
	    	}));
    }
	

}




import { ProductsL0DistApiRequestFactory, ProductsL0DistApiResponseProcessor} from "../apis/ProductsL0DistApi";
export class ObservableProductsL0DistApi {
    private requestFactory: ProductsL0DistApiRequestFactory;
    private responseProcessor: ProductsL0DistApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ProductsL0DistApiRequestFactory,
        responseProcessor?: ProductsL0DistApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ProductsL0DistApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ProductsL0DistApiResponseProcessor();
    }

    /**
     * @param productL0SrcId 
     * @param productL0DistDto 
     */
    public productsL0DistControllerCreate(productL0SrcId: number, productL0DistDto: ProductL0DistDto, options?: Configuration): Observable<ProductL0Dist> {
    	const requestContextPromise = this.requestFactory.productsL0DistControllerCreate(productL0SrcId, productL0DistDto, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productsL0DistControllerCreate(rsp)));
	    	}));
    }
	
    /**
     * @param productId 
     * @param productL0InstrumentFileDto 
     */
    public productsL0DistControllerCreateInstrument(productId: number, productL0InstrumentFileDto: ProductL0InstrumentFileDto, options?: Configuration): Observable<ProductL0InstrumentFile> {
    	const requestContextPromise = this.requestFactory.productsL0DistControllerCreateInstrument(productId, productL0InstrumentFileDto, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productsL0DistControllerCreateInstrument(rsp)));
	    	}));
    }
	
    /**
     * @param productId 
     */
    public productsL0DistControllerDelete(productId: number, options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.productsL0DistControllerDelete(productId, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productsL0DistControllerDelete(rsp)));
	    	}));
    }
	
    /**
     * @param productId 
     * @param instrumentId 
     */
    public productsL0DistControllerDeleteInstrument(productId: number, instrumentId: number, options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.productsL0DistControllerDeleteInstrument(productId, instrumentId, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productsL0DistControllerDeleteInstrument(rsp)));
	    	}));
    }
	
    /**
     * @param filterByProductSrcId 
     * @param snapshotDateTime 
     */
    public productsL0DistControllerFindAll(filterByProductSrcId?: number, snapshotDateTime?: string, options?: Configuration): Observable<Array<ProductL0Dist>> {
    	const requestContextPromise = this.requestFactory.productsL0DistControllerFindAll(filterByProductSrcId, snapshotDateTime, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productsL0DistControllerFindAll(rsp)));
	    	}));
    }
	
    /**
     * @param productId 
     * @param snapshotDateTime 
     */
    public productsL0DistControllerFindInstruments(productId: number, snapshotDateTime?: string, options?: Configuration): Observable<Array<ProductL0InstrumentFile>> {
    	const requestContextPromise = this.requestFactory.productsL0DistControllerFindInstruments(productId, snapshotDateTime, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productsL0DistControllerFindInstruments(rsp)));
	    	}));
    }
	
    /**
     * @param productId 
     */
    public productsL0DistControllerFindOne(productId: number, options?: Configuration): Observable<ProductL0Dist> {
    	const requestContextPromise = this.requestFactory.productsL0DistControllerFindOne(productId, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productsL0DistControllerFindOne(rsp)));
	    	}));
    }
	
    /**
     * @param productId 
     * @param instrumentId 
     * @param snapshotDateTime 
     */
    public productsL0DistControllerFindOneInstrument(productId: number, instrumentId: number, snapshotDateTime?: string, options?: Configuration): Observable<ProductL0InstrumentFile> {
    	const requestContextPromise = this.requestFactory.productsL0DistControllerFindOneInstrument(productId, instrumentId, snapshotDateTime, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productsL0DistControllerFindOneInstrument(rsp)));
	    	}));
    }
	
    /**
     * @param productId 
     * @param productL0DistDto 
     */
    public productsL0DistControllerUpdate(productId: number, productL0DistDto: ProductL0DistDto, options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.productsL0DistControllerUpdate(productId, productL0DistDto, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productsL0DistControllerUpdate(rsp)));
	    	}));
    }
	
    /**
     * @param productId 
     * @param instrumentId 
     * @param productL0InstrumentFileDto 
     */
    public productsL0DistControllerUpdateInstrument(productId: number, instrumentId: number, productL0InstrumentFileDto: ProductL0InstrumentFileDto, options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.productsL0DistControllerUpdateInstrument(productId, instrumentId, productL0InstrumentFileDto, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productsL0DistControllerUpdateInstrument(rsp)));
	    	}));
    }
	

}




import { ProductsL0SrcApiRequestFactory, ProductsL0SrcApiResponseProcessor} from "../apis/ProductsL0SrcApi";
export class ObservableProductsL0SrcApi {
    private requestFactory: ProductsL0SrcApiRequestFactory;
    private responseProcessor: ProductsL0SrcApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ProductsL0SrcApiRequestFactory,
        responseProcessor?: ProductsL0SrcApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ProductsL0SrcApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ProductsL0SrcApiResponseProcessor();
    }

    /**
     * @param productL0SrcDto 
     */
    public productsL0SrcControllerCreate(productL0SrcDto: ProductL0SrcDto, options?: Configuration): Observable<ProductL0Src> {
    	const requestContextPromise = this.requestFactory.productsL0SrcControllerCreate(productL0SrcDto, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productsL0SrcControllerCreate(rsp)));
	    	}));
    }
	
    /**
     * @param productId 
     */
    public productsL0SrcControllerDelete(productId: number, options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.productsL0SrcControllerDelete(productId, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productsL0SrcControllerDelete(rsp)));
	    	}));
    }
	
    /**
     * @param snapshotDateTime 
     */
    public productsL0SrcControllerFindAll(snapshotDateTime?: string, options?: Configuration): Observable<Array<ProductL0Src>> {
    	const requestContextPromise = this.requestFactory.productsL0SrcControllerFindAll(snapshotDateTime, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productsL0SrcControllerFindAll(rsp)));
	    	}));
    }
	
    /**
     * @param productId 
     */
    public productsL0SrcControllerFindOne(productId: number, options?: Configuration): Observable<ProductL0Src> {
    	const requestContextPromise = this.requestFactory.productsL0SrcControllerFindOne(productId, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productsL0SrcControllerFindOne(rsp)));
	    	}));
    }
	
    /**
     * @param productId 
     * @param productL0SrcDto 
     */
    public productsL0SrcControllerUpdate(productId: number, productL0SrcDto: ProductL0SrcDto, options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.productsL0SrcControllerUpdate(productId, productL0SrcDto, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productsL0SrcControllerUpdate(rsp)));
	    	}));
    }
	

}




import { ProductsL2SrcApiRequestFactory, ProductsL2SrcApiResponseProcessor} from "../apis/ProductsL2SrcApi";
export class ObservableProductsL2SrcApi {
    private requestFactory: ProductsL2SrcApiRequestFactory;
    private responseProcessor: ProductsL2SrcApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ProductsL2SrcApiRequestFactory,
        responseProcessor?: ProductsL2SrcApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ProductsL2SrcApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ProductsL2SrcApiResponseProcessor();
    }

    /**
     * @param productL2SrcDto 
     */
    public productsL2SrcControllerCreate(productL2SrcDto: ProductL2SrcDto, options?: Configuration): Observable<ProductL2Src> {
    	const requestContextPromise = this.requestFactory.productsL2SrcControllerCreate(productL2SrcDto, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productsL2SrcControllerCreate(rsp)));
	    	}));
    }
	
    /**
     * @param productId 
     */
    public productsL2SrcControllerDelete(productId: number, options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.productsL2SrcControllerDelete(productId, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productsL2SrcControllerDelete(rsp)));
	    	}));
    }
	
    /**
     * @param snapshotDateTime 
     */
    public productsL2SrcControllerFindAll(snapshotDateTime?: string, options?: Configuration): Observable<Array<ProductL2Src>> {
    	const requestContextPromise = this.requestFactory.productsL2SrcControllerFindAll(snapshotDateTime, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productsL2SrcControllerFindAll(rsp)));
	    	}));
    }
	
    /**
     * @param productId 
     */
    public productsL2SrcControllerFindOne(productId: number, options?: Configuration): Observable<ProductL2Src> {
    	const requestContextPromise = this.requestFactory.productsL2SrcControllerFindOne(productId, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productsL2SrcControllerFindOne(rsp)));
	    	}));
    }
	
    /**
     * @param productId 
     * @param productL2SrcDto 
     */
    public productsL2SrcControllerUpdate(productId: number, productL2SrcDto: ProductL2SrcDto, options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.productsL2SrcControllerUpdate(productId, productL2SrcDto, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productsL2SrcControllerUpdate(rsp)));
	    	}));
    }
	

}




import { ProductsL3DistApiRequestFactory, ProductsL3DistApiResponseProcessor} from "../apis/ProductsL3DistApi";
export class ObservableProductsL3DistApi {
    private requestFactory: ProductsL3DistApiRequestFactory;
    private responseProcessor: ProductsL3DistApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ProductsL3DistApiRequestFactory,
        responseProcessor?: ProductsL3DistApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ProductsL3DistApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ProductsL3DistApiResponseProcessor();
    }

    /**
     * @param productL3SrcId 
     * @param productL3DistDto 
     */
    public productsL3DistControllerCreate(productL3SrcId: number, productL3DistDto: ProductL3DistDto, options?: Configuration): Observable<ProductL3Dist> {
    	const requestContextPromise = this.requestFactory.productsL3DistControllerCreate(productL3SrcId, productL3DistDto, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productsL3DistControllerCreate(rsp)));
	    	}));
    }
	
    /**
     * @param productId 
     */
    public productsL3DistControllerDelete(productId: number, options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.productsL3DistControllerDelete(productId, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productsL3DistControllerDelete(rsp)));
	    	}));
    }
	
    /**
     * @param filterByProductSrcId 
     * @param snapshotDateTime 
     */
    public productsL3DistControllerFindAll(filterByProductSrcId?: number, snapshotDateTime?: string, options?: Configuration): Observable<Array<ProductL3Dist>> {
    	const requestContextPromise = this.requestFactory.productsL3DistControllerFindAll(filterByProductSrcId, snapshotDateTime, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productsL3DistControllerFindAll(rsp)));
	    	}));
    }
	
    /**
     * @param productId 
     */
    public productsL3DistControllerFindOne(productId: number, options?: Configuration): Observable<ProductL3Dist> {
    	const requestContextPromise = this.requestFactory.productsL3DistControllerFindOne(productId, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productsL3DistControllerFindOne(rsp)));
	    	}));
    }
	
    /**
     * @param productId 
     * @param productL3DistDto 
     */
    public productsL3DistControllerUpdate(productId: number, productL3DistDto: ProductL3DistDto, options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.productsL3DistControllerUpdate(productId, productL3DistDto, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productsL3DistControllerUpdate(rsp)));
	    	}));
    }
	

}




import { ProductsL3SrcApiRequestFactory, ProductsL3SrcApiResponseProcessor} from "../apis/ProductsL3SrcApi";
export class ObservableProductsL3SrcApi {
    private requestFactory: ProductsL3SrcApiRequestFactory;
    private responseProcessor: ProductsL3SrcApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ProductsL3SrcApiRequestFactory,
        responseProcessor?: ProductsL3SrcApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ProductsL3SrcApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ProductsL3SrcApiResponseProcessor();
    }

    /**
     * @param productL3SrcDto 
     */
    public productsL3SrcControllerCreate(productL3SrcDto: ProductL3SrcDto, options?: Configuration): Observable<ProductL3Src> {
    	const requestContextPromise = this.requestFactory.productsL3SrcControllerCreate(productL3SrcDto, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productsL3SrcControllerCreate(rsp)));
	    	}));
    }
	
    /**
     * @param productId 
     */
    public productsL3SrcControllerDelete(productId: number, options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.productsL3SrcControllerDelete(productId, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productsL3SrcControllerDelete(rsp)));
	    	}));
    }
	
    /**
     * @param snapshotDateTime 
     */
    public productsL3SrcControllerFindAll(snapshotDateTime?: string, options?: Configuration): Observable<Array<ProductL3Src>> {
    	const requestContextPromise = this.requestFactory.productsL3SrcControllerFindAll(snapshotDateTime, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productsL3SrcControllerFindAll(rsp)));
	    	}));
    }
	
    /**
     * @param productId 
     */
    public productsL3SrcControllerFindOne(productId: number, options?: Configuration): Observable<ProductL3Src> {
    	const requestContextPromise = this.requestFactory.productsL3SrcControllerFindOne(productId, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productsL3SrcControllerFindOne(rsp)));
	    	}));
    }
	
    /**
     * @param productId 
     * @param productL3SrcDto 
     */
    public productsL3SrcControllerUpdate(productId: number, productL3SrcDto: ProductL3SrcDto, options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.productsL3SrcControllerUpdate(productId, productL3SrcDto, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productsL3SrcControllerUpdate(rsp)));
	    	}));
    }
	

}




import { SurveysApiRequestFactory, SurveysApiResponseProcessor} from "../apis/SurveysApi";
export class ObservableSurveysApi {
    private requestFactory: SurveysApiRequestFactory;
    private responseProcessor: SurveysApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SurveysApiRequestFactory,
        responseProcessor?: SurveysApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SurveysApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SurveysApiResponseProcessor();
    }

    /**
     * @param surveyDto 
     */
    public surveysControllerCreate(surveyDto: SurveyDto, options?: Configuration): Observable<Survey> {
    	const requestContextPromise = this.requestFactory.surveysControllerCreate(surveyDto, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.surveysControllerCreate(rsp)));
	    	}));
    }
	
    /**
     * @param snapshotDateTime 
     */
    public surveysControllerFindAll(snapshotDateTime?: string, options?: Configuration): Observable<Array<Survey>> {
    	const requestContextPromise = this.requestFactory.surveysControllerFindAll(snapshotDateTime, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.surveysControllerFindAll(rsp)));
	    	}));
    }
	
    /**
     * @param surveyId 
     */
    public surveysControllerFindOne(surveyId: number, options?: Configuration): Observable<Survey> {
    	const requestContextPromise = this.requestFactory.surveysControllerFindOne(surveyId, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.surveysControllerFindOne(rsp)));
	    	}));
    }
	
    /**
     * @param surveyId 
     */
    public surveysControllerRemove(surveyId: number, options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.surveysControllerRemove(surveyId, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.surveysControllerRemove(rsp)));
	    	}));
    }
	
    /**
     * @param surveyId 
     * @param surveyDto 
     */
    public surveysControllerUpdate(surveyId: number, surveyDto: SurveyDto, options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.surveysControllerUpdate(surveyId, surveyDto, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.surveysControllerUpdate(rsp)));
	    	}));
    }
	

}




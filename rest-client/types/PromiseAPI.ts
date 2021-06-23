import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

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
import { Style } from '../models/Style';
import { Survey } from '../models/Survey';
import { SurveyDto } from '../models/SurveyDto';
import { SurveyL0Relation } from '../models/SurveyL0Relation';
import { SurveyL0RelationDto } from '../models/SurveyL0RelationDto';
import { SurveyL2Relation } from '../models/SurveyL2Relation';
import { SurveyL2RelationDto } from '../models/SurveyL2RelationDto';
import { SurveyL3Relation } from '../models/SurveyL3Relation';
import { SurveyL3RelationDto } from '../models/SurveyL3RelationDto';
import { ObservableCompilationsApi } from './ObservableAPI';


import { CompilationsApiRequestFactory, CompilationsApiResponseProcessor} from "../apis/CompilationsApi";
export class PromiseCompilationsApi {
    private api: ObservableCompilationsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CompilationsApiRequestFactory,
        responseProcessor?: CompilationsApiResponseProcessor
    ) {
        this.api = new ObservableCompilationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param compilationDto 
     */
    public compilationsControllerCreate(compilationDto: CompilationDto, options?: Configuration): Promise<Compilation> {
    	const result = this.api.compilationsControllerCreate(compilationDto, options);
        return result.toPromise();
    }
	
    /**
     * @param snapshotDateTime 
     */
    public compilationsControllerFindAll(snapshotDateTime?: string, options?: Configuration): Promise<Array<Compilation>> {
    	const result = this.api.compilationsControllerFindAll(snapshotDateTime, options);
        return result.toPromise();
    }
	
    /**
     * @param compilationId 
     */
    public compilationsControllerFindOne(compilationId: number, options?: Configuration): Promise<Compilation> {
    	const result = this.api.compilationsControllerFindOne(compilationId, options);
        return result.toPromise();
    }
	
    /**
     * @param compilationId 
     */
    public compilationsControllerRemove(compilationId: number, options?: Configuration): Promise<void> {
    	const result = this.api.compilationsControllerRemove(compilationId, options);
        return result.toPromise();
    }
	
    /**
     * @param compilationId 
     * @param compilationDto 
     */
    public compilationsControllerUpdate(compilationId: number, compilationDto: CompilationDto, options?: Configuration): Promise<void> {
    	const result = this.api.compilationsControllerUpdate(compilationId, compilationDto, options);
        return result.toPromise();
    }
	

}



import { ObservableProductRelationsApi } from './ObservableAPI';


import { ProductRelationsApiRequestFactory, ProductRelationsApiResponseProcessor} from "../apis/ProductRelationsApi";
export class PromiseProductRelationsApi {
    private api: ObservableProductRelationsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ProductRelationsApiRequestFactory,
        responseProcessor?: ProductRelationsApiResponseProcessor
    ) {
        this.api = new ObservableProductRelationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param compilationL3RelationDto 
     */
    public productRelationsControllerCreateCompilation(compilationL3RelationDto: CompilationL3RelationDto, options?: Configuration): Promise<CompilationL3Relation> {
    	const result = this.api.productRelationsControllerCreateCompilation(compilationL3RelationDto, options);
        return result.toPromise();
    }
	
    /**
     * @param surveyL0RelationDto 
     */
    public productRelationsControllerCreateL0Survey(surveyL0RelationDto: SurveyL0RelationDto, options?: Configuration): Promise<SurveyL0Relation> {
    	const result = this.api.productRelationsControllerCreateL0Survey(surveyL0RelationDto, options);
        return result.toPromise();
    }
	
    /**
     * @param surveyL2RelationDto 
     */
    public productRelationsControllerCreateL2Survey(surveyL2RelationDto: SurveyL2RelationDto, options?: Configuration): Promise<SurveyL2Relation> {
    	const result = this.api.productRelationsControllerCreateL2Survey(surveyL2RelationDto, options);
        return result.toPromise();
    }
	
    /**
     * @param surveyL3RelationDto 
     */
    public productRelationsControllerCreateL3Survey(surveyL3RelationDto: SurveyL3RelationDto, options?: Configuration): Promise<SurveyL3Relation> {
    	const result = this.api.productRelationsControllerCreateL3Survey(surveyL3RelationDto, options);
        return result.toPromise();
    }
	
    /**
     * @param relationId 
     */
    public productRelationsControllerDeleteCompilation(relationId: number, options?: Configuration): Promise<void> {
    	const result = this.api.productRelationsControllerDeleteCompilation(relationId, options);
        return result.toPromise();
    }
	
    /**
     * @param relationId 
     */
    public productRelationsControllerDeleteL0Survey(relationId: number, options?: Configuration): Promise<void> {
    	const result = this.api.productRelationsControllerDeleteL0Survey(relationId, options);
        return result.toPromise();
    }
	
    /**
     * @param relationId 
     */
    public productRelationsControllerDeleteL2Survey(relationId: number, options?: Configuration): Promise<void> {
    	const result = this.api.productRelationsControllerDeleteL2Survey(relationId, options);
        return result.toPromise();
    }
	
    /**
     * @param relationId 
     */
    public productRelationsControllerDeleteL3Survey(relationId: number, options?: Configuration): Promise<void> {
    	const result = this.api.productRelationsControllerDeleteL3Survey(relationId, options);
        return result.toPromise();
    }
	
    /**
     * @param snapshotDateTime 
     */
    public productRelationsControllerFindAllL0Survey(snapshotDateTime?: string, options?: Configuration): Promise<Array<RelationSummaryDto>> {
    	const result = this.api.productRelationsControllerFindAllL0Survey(snapshotDateTime, options);
        return result.toPromise();
    }
	
    /**
     * @param snapshotDateTime 
     */
    public productRelationsControllerFindAllL2Survey(snapshotDateTime?: string, options?: Configuration): Promise<Array<RelationSummaryDto>> {
    	const result = this.api.productRelationsControllerFindAllL2Survey(snapshotDateTime, options);
        return result.toPromise();
    }
	
    /**
     * @param snapshotDateTime 
     */
    public productRelationsControllerFindAllL3Compilation(snapshotDateTime?: string, options?: Configuration): Promise<Array<RelationSummaryDto>> {
    	const result = this.api.productRelationsControllerFindAllL3Compilation(snapshotDateTime, options);
        return result.toPromise();
    }
	
    /**
     * @param snapshotDateTime 
     */
    public productRelationsControllerFindAllL3Survey(snapshotDateTime?: string, options?: Configuration): Promise<Array<RelationSummaryDto>> {
    	const result = this.api.productRelationsControllerFindAllL3Survey(snapshotDateTime, options);
        return result.toPromise();
    }
	
    /**
     * @param compilationId 
     */
    public productRelationsControllerFindConditionalCompilation(compilationId: number, options?: Configuration): Promise<CompilationL3Relation> {
    	const result = this.api.productRelationsControllerFindConditionalCompilation(compilationId, options);
        return result.toPromise();
    }
	
    /**
     * @param surveyId 
     */
    public productRelationsControllerFindConditionalL0Survey(surveyId: number, options?: Configuration): Promise<SurveyL0Relation> {
    	const result = this.api.productRelationsControllerFindConditionalL0Survey(surveyId, options);
        return result.toPromise();
    }
	
    /**
     * @param surveyId 
     */
    public productRelationsControllerFindConditionalL2Survey(surveyId: number, options?: Configuration): Promise<SurveyL2Relation> {
    	const result = this.api.productRelationsControllerFindConditionalL2Survey(surveyId, options);
        return result.toPromise();
    }
	
    /**
     * @param surveyId 
     */
    public productRelationsControllerFindConditionalL3Survey(surveyId: number, options?: Configuration): Promise<SurveyL3Relation> {
    	const result = this.api.productRelationsControllerFindConditionalL3Survey(surveyId, options);
        return result.toPromise();
    }
	
    /**
     * @param relationId 
     */
    public productRelationsControllerFindOneCompilation(relationId: number, options?: Configuration): Promise<CompilationL3Relation> {
    	const result = this.api.productRelationsControllerFindOneCompilation(relationId, options);
        return result.toPromise();
    }
	
    /**
     * @param relationId 
     */
    public productRelationsControllerFindOneL0Survey(relationId: number, options?: Configuration): Promise<SurveyL0Relation> {
    	const result = this.api.productRelationsControllerFindOneL0Survey(relationId, options);
        return result.toPromise();
    }
	
    /**
     * @param relationId 
     */
    public productRelationsControllerFindOneL2Survey(relationId: number, options?: Configuration): Promise<SurveyL2Relation> {
    	const result = this.api.productRelationsControllerFindOneL2Survey(relationId, options);
        return result.toPromise();
    }
	
    /**
     * @param relationId 
     */
    public productRelationsControllerFindOneL3Survey(relationId: number, options?: Configuration): Promise<SurveyL3Relation> {
    	const result = this.api.productRelationsControllerFindOneL3Survey(relationId, options);
        return result.toPromise();
    }
	
    /**
     * @param relationId 
     * @param compilationL3RelationDto 
     */
    public productRelationsControllerUpdateCompilation(relationId: number, compilationL3RelationDto: CompilationL3RelationDto, options?: Configuration): Promise<void> {
    	const result = this.api.productRelationsControllerUpdateCompilation(relationId, compilationL3RelationDto, options);
        return result.toPromise();
    }
	
    /**
     * @param relationId 
     * @param surveyL0RelationDto 
     */
    public productRelationsControllerUpdateL0Survey(relationId: number, surveyL0RelationDto: SurveyL0RelationDto, options?: Configuration): Promise<void> {
    	const result = this.api.productRelationsControllerUpdateL0Survey(relationId, surveyL0RelationDto, options);
        return result.toPromise();
    }
	
    /**
     * @param relationId 
     * @param surveyL2RelationDto 
     */
    public productRelationsControllerUpdateL2Survey(relationId: number, surveyL2RelationDto: SurveyL2RelationDto, options?: Configuration): Promise<void> {
    	const result = this.api.productRelationsControllerUpdateL2Survey(relationId, surveyL2RelationDto, options);
        return result.toPromise();
    }
	
    /**
     * @param relationId 
     * @param surveyL3RelationDto 
     */
    public productRelationsControllerUpdateL3Survey(relationId: number, surveyL3RelationDto: SurveyL3RelationDto, options?: Configuration): Promise<void> {
    	const result = this.api.productRelationsControllerUpdateL3Survey(relationId, surveyL3RelationDto, options);
        return result.toPromise();
    }
	

}



import { ObservableProductsL0DistApi } from './ObservableAPI';


import { ProductsL0DistApiRequestFactory, ProductsL0DistApiResponseProcessor} from "../apis/ProductsL0DistApi";
export class PromiseProductsL0DistApi {
    private api: ObservableProductsL0DistApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ProductsL0DistApiRequestFactory,
        responseProcessor?: ProductsL0DistApiResponseProcessor
    ) {
        this.api = new ObservableProductsL0DistApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param productL0SrcId 
     * @param productL0DistDto 
     */
    public productsL0DistControllerCreate(productL0SrcId: number, productL0DistDto: ProductL0DistDto, options?: Configuration): Promise<ProductL0Dist> {
    	const result = this.api.productsL0DistControllerCreate(productL0SrcId, productL0DistDto, options);
        return result.toPromise();
    }
	
    /**
     * @param productId 
     * @param productL0InstrumentFileDto 
     */
    public productsL0DistControllerCreateInstrument(productId: number, productL0InstrumentFileDto: ProductL0InstrumentFileDto, options?: Configuration): Promise<ProductL0InstrumentFile> {
    	const result = this.api.productsL0DistControllerCreateInstrument(productId, productL0InstrumentFileDto, options);
        return result.toPromise();
    }
	
    /**
     * @param productId 
     */
    public productsL0DistControllerDelete(productId: number, options?: Configuration): Promise<void> {
    	const result = this.api.productsL0DistControllerDelete(productId, options);
        return result.toPromise();
    }
	
    /**
     * @param productId 
     * @param instrumentId 
     */
    public productsL0DistControllerDeleteInstrument(productId: number, instrumentId: number, options?: Configuration): Promise<void> {
    	const result = this.api.productsL0DistControllerDeleteInstrument(productId, instrumentId, options);
        return result.toPromise();
    }
	
    /**
     * @param filterByProductSrcId 
     * @param snapshotDateTime 
     */
    public productsL0DistControllerFindAll(filterByProductSrcId?: number, snapshotDateTime?: string, options?: Configuration): Promise<Array<ProductL0Dist>> {
    	const result = this.api.productsL0DistControllerFindAll(filterByProductSrcId, snapshotDateTime, options);
        return result.toPromise();
    }
	
    /**
     * @param productId 
     * @param snapshotDateTime 
     */
    public productsL0DistControllerFindInstruments(productId: number, snapshotDateTime?: string, options?: Configuration): Promise<Array<ProductL0InstrumentFile>> {
    	const result = this.api.productsL0DistControllerFindInstruments(productId, snapshotDateTime, options);
        return result.toPromise();
    }
	
    /**
     * @param productId 
     */
    public productsL0DistControllerFindOne(productId: number, options?: Configuration): Promise<ProductL0Dist> {
    	const result = this.api.productsL0DistControllerFindOne(productId, options);
        return result.toPromise();
    }
	
    /**
     * @param productId 
     * @param instrumentId 
     * @param snapshotDateTime 
     */
    public productsL0DistControllerFindOneInstrument(productId: number, instrumentId: number, snapshotDateTime?: string, options?: Configuration): Promise<ProductL0InstrumentFile> {
    	const result = this.api.productsL0DistControllerFindOneInstrument(productId, instrumentId, snapshotDateTime, options);
        return result.toPromise();
    }
	
    /**
     * @param productId 
     * @param productL0DistDto 
     */
    public productsL0DistControllerUpdate(productId: number, productL0DistDto: ProductL0DistDto, options?: Configuration): Promise<void> {
    	const result = this.api.productsL0DistControllerUpdate(productId, productL0DistDto, options);
        return result.toPromise();
    }
	
    /**
     * @param productId 
     * @param instrumentId 
     * @param productL0InstrumentFileDto 
     */
    public productsL0DistControllerUpdateInstrument(productId: number, instrumentId: number, productL0InstrumentFileDto: ProductL0InstrumentFileDto, options?: Configuration): Promise<void> {
    	const result = this.api.productsL0DistControllerUpdateInstrument(productId, instrumentId, productL0InstrumentFileDto, options);
        return result.toPromise();
    }
	

}



import { ObservableProductsL0SrcApi } from './ObservableAPI';


import { ProductsL0SrcApiRequestFactory, ProductsL0SrcApiResponseProcessor} from "../apis/ProductsL0SrcApi";
export class PromiseProductsL0SrcApi {
    private api: ObservableProductsL0SrcApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ProductsL0SrcApiRequestFactory,
        responseProcessor?: ProductsL0SrcApiResponseProcessor
    ) {
        this.api = new ObservableProductsL0SrcApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param productL0SrcDto 
     */
    public productsL0SrcControllerCreate(productL0SrcDto: ProductL0SrcDto, options?: Configuration): Promise<ProductL0Src> {
    	const result = this.api.productsL0SrcControllerCreate(productL0SrcDto, options);
        return result.toPromise();
    }
	
    /**
     * @param productId 
     */
    public productsL0SrcControllerDelete(productId: number, options?: Configuration): Promise<void> {
    	const result = this.api.productsL0SrcControllerDelete(productId, options);
        return result.toPromise();
    }
	
    /**
     * @param snapshotDateTime 
     */
    public productsL0SrcControllerFindAll(snapshotDateTime?: string, options?: Configuration): Promise<Array<ProductL0Src>> {
    	const result = this.api.productsL0SrcControllerFindAll(snapshotDateTime, options);
        return result.toPromise();
    }
	
    /**
     * @param productId 
     */
    public productsL0SrcControllerFindOne(productId: number, options?: Configuration): Promise<ProductL0Src> {
    	const result = this.api.productsL0SrcControllerFindOne(productId, options);
        return result.toPromise();
    }
	
    /**
     * @param productId 
     * @param productL0SrcDto 
     */
    public productsL0SrcControllerUpdate(productId: number, productL0SrcDto: ProductL0SrcDto, options?: Configuration): Promise<void> {
    	const result = this.api.productsL0SrcControllerUpdate(productId, productL0SrcDto, options);
        return result.toPromise();
    }
	

}



import { ObservableProductsL2SrcApi } from './ObservableAPI';


import { ProductsL2SrcApiRequestFactory, ProductsL2SrcApiResponseProcessor} from "../apis/ProductsL2SrcApi";
export class PromiseProductsL2SrcApi {
    private api: ObservableProductsL2SrcApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ProductsL2SrcApiRequestFactory,
        responseProcessor?: ProductsL2SrcApiResponseProcessor
    ) {
        this.api = new ObservableProductsL2SrcApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param productL2SrcDto 
     */
    public productsL2SrcControllerCreate(productL2SrcDto: ProductL2SrcDto, options?: Configuration): Promise<ProductL2Src> {
    	const result = this.api.productsL2SrcControllerCreate(productL2SrcDto, options);
        return result.toPromise();
    }
	
    /**
     * @param productId 
     */
    public productsL2SrcControllerDelete(productId: number, options?: Configuration): Promise<void> {
    	const result = this.api.productsL2SrcControllerDelete(productId, options);
        return result.toPromise();
    }
	
    /**
     * @param snapshotDateTime 
     */
    public productsL2SrcControllerFindAll(snapshotDateTime?: string, options?: Configuration): Promise<Array<ProductL2Src>> {
    	const result = this.api.productsL2SrcControllerFindAll(snapshotDateTime, options);
        return result.toPromise();
    }
	
    /**
     * @param productId 
     */
    public productsL2SrcControllerFindOne(productId: number, options?: Configuration): Promise<ProductL2Src> {
    	const result = this.api.productsL2SrcControllerFindOne(productId, options);
        return result.toPromise();
    }
	
    /**
     * @param productId 
     * @param productL2SrcDto 
     */
    public productsL2SrcControllerUpdate(productId: number, productL2SrcDto: ProductL2SrcDto, options?: Configuration): Promise<void> {
    	const result = this.api.productsL2SrcControllerUpdate(productId, productL2SrcDto, options);
        return result.toPromise();
    }
	

}



import { ObservableProductsL3DistApi } from './ObservableAPI';


import { ProductsL3DistApiRequestFactory, ProductsL3DistApiResponseProcessor} from "../apis/ProductsL3DistApi";
export class PromiseProductsL3DistApi {
    private api: ObservableProductsL3DistApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ProductsL3DistApiRequestFactory,
        responseProcessor?: ProductsL3DistApiResponseProcessor
    ) {
        this.api = new ObservableProductsL3DistApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param productL3SrcId 
     * @param productL3DistDto 
     */
    public productsL3DistControllerCreate(productL3SrcId: number, productL3DistDto: ProductL3DistDto, options?: Configuration): Promise<ProductL3Dist> {
    	const result = this.api.productsL3DistControllerCreate(productL3SrcId, productL3DistDto, options);
        return result.toPromise();
    }
	
    /**
     * @param productId 
     */
    public productsL3DistControllerDelete(productId: number, options?: Configuration): Promise<void> {
    	const result = this.api.productsL3DistControllerDelete(productId, options);
        return result.toPromise();
    }
	
    /**
     * @param filterByProductSrcId 
     * @param snapshotDateTime 
     */
    public productsL3DistControllerFindAll(filterByProductSrcId?: number, snapshotDateTime?: string, options?: Configuration): Promise<Array<ProductL3Dist>> {
    	const result = this.api.productsL3DistControllerFindAll(filterByProductSrcId, snapshotDateTime, options);
        return result.toPromise();
    }
	
    /**
     * @param productId 
     */
    public productsL3DistControllerFindOne(productId: number, options?: Configuration): Promise<ProductL3Dist> {
    	const result = this.api.productsL3DistControllerFindOne(productId, options);
        return result.toPromise();
    }
	
    /**
     * @param productId 
     * @param productL3DistDto 
     */
    public productsL3DistControllerUpdate(productId: number, productL3DistDto: ProductL3DistDto, options?: Configuration): Promise<void> {
    	const result = this.api.productsL3DistControllerUpdate(productId, productL3DistDto, options);
        return result.toPromise();
    }
	

}



import { ObservableProductsL3SrcApi } from './ObservableAPI';


import { ProductsL3SrcApiRequestFactory, ProductsL3SrcApiResponseProcessor} from "../apis/ProductsL3SrcApi";
export class PromiseProductsL3SrcApi {
    private api: ObservableProductsL3SrcApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ProductsL3SrcApiRequestFactory,
        responseProcessor?: ProductsL3SrcApiResponseProcessor
    ) {
        this.api = new ObservableProductsL3SrcApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param productL3SrcDto 
     */
    public productsL3SrcControllerCreate(productL3SrcDto: ProductL3SrcDto, options?: Configuration): Promise<ProductL3Src> {
    	const result = this.api.productsL3SrcControllerCreate(productL3SrcDto, options);
        return result.toPromise();
    }
	
    /**
     * @param productId 
     */
    public productsL3SrcControllerDelete(productId: number, options?: Configuration): Promise<void> {
    	const result = this.api.productsL3SrcControllerDelete(productId, options);
        return result.toPromise();
    }
	
    /**
     * @param snapshotDateTime 
     */
    public productsL3SrcControllerFindAll(snapshotDateTime?: string, options?: Configuration): Promise<Array<ProductL3Src>> {
    	const result = this.api.productsL3SrcControllerFindAll(snapshotDateTime, options);
        return result.toPromise();
    }
	
    /**
     * @param productId 
     */
    public productsL3SrcControllerFindOne(productId: number, options?: Configuration): Promise<ProductL3Src> {
    	const result = this.api.productsL3SrcControllerFindOne(productId, options);
        return result.toPromise();
    }
	
    /**
     * @param productId 
     * @param productL3SrcDto 
     */
    public productsL3SrcControllerUpdate(productId: number, productL3SrcDto: ProductL3SrcDto, options?: Configuration): Promise<void> {
    	const result = this.api.productsL3SrcControllerUpdate(productId, productL3SrcDto, options);
        return result.toPromise();
    }
	

}



import { ObservableStylesApi } from './ObservableAPI';


import { StylesApiRequestFactory, StylesApiResponseProcessor} from "../apis/StylesApi";
export class PromiseStylesApi {
    private api: ObservableStylesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: StylesApiRequestFactory,
        responseProcessor?: StylesApiResponseProcessor
    ) {
        this.api = new ObservableStylesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     */
    public stylesControllerFindAll(options?: Configuration): Promise<Array<Style>> {
    	const result = this.api.stylesControllerFindAll(options);
        return result.toPromise();
    }
	

}



import { ObservableSurveysApi } from './ObservableAPI';


import { SurveysApiRequestFactory, SurveysApiResponseProcessor} from "../apis/SurveysApi";
export class PromiseSurveysApi {
    private api: ObservableSurveysApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SurveysApiRequestFactory,
        responseProcessor?: SurveysApiResponseProcessor
    ) {
        this.api = new ObservableSurveysApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param surveyDto 
     */
    public surveysControllerCreate(surveyDto: SurveyDto, options?: Configuration): Promise<Survey> {
    	const result = this.api.surveysControllerCreate(surveyDto, options);
        return result.toPromise();
    }
	
    /**
     * @param snapshotDateTime 
     */
    public surveysControllerFindAll(snapshotDateTime?: string, options?: Configuration): Promise<Array<Survey>> {
    	const result = this.api.surveysControllerFindAll(snapshotDateTime, options);
        return result.toPromise();
    }
	
    /**
     * @param surveyId 
     */
    public surveysControllerFindOne(surveyId: number, options?: Configuration): Promise<Survey> {
    	const result = this.api.surveysControllerFindOne(surveyId, options);
        return result.toPromise();
    }
	
    /**
     * @param surveyId 
     */
    public surveysControllerRemove(surveyId: number, options?: Configuration): Promise<void> {
    	const result = this.api.surveysControllerRemove(surveyId, options);
        return result.toPromise();
    }
	
    /**
     * @param surveyId 
     * @param surveyDto 
     */
    public surveysControllerUpdate(surveyId: number, surveyDto: SurveyDto, options?: Configuration): Promise<void> {
    	const result = this.api.surveysControllerUpdate(surveyId, surveyDto, options);
        return result.toPromise();
    }
	

}




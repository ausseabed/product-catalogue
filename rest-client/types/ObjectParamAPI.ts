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

import { ObservableCompilationsApi } from "./ObservableAPI";
import { CompilationsApiRequestFactory, CompilationsApiResponseProcessor} from "../apis/CompilationsApi";

export interface CompilationsApiCompilationsControllerCreateRequest {
    /**
     * 
     * @type CompilationDto
     * @memberof CompilationsApicompilationsControllerCreate
     */
    compilationDto: CompilationDto
}

export interface CompilationsApiCompilationsControllerFindAllRequest {
    /**
     * 
     * @type string
     * @memberof CompilationsApicompilationsControllerFindAll
     */
    snapshotDateTime?: string
}

export interface CompilationsApiCompilationsControllerFindOneRequest {
    /**
     * 
     * @type number
     * @memberof CompilationsApicompilationsControllerFindOne
     */
    compilationId: number
}

export interface CompilationsApiCompilationsControllerRemoveRequest {
    /**
     * 
     * @type number
     * @memberof CompilationsApicompilationsControllerRemove
     */
    compilationId: number
}

export interface CompilationsApiCompilationsControllerUpdateRequest {
    /**
     * 
     * @type number
     * @memberof CompilationsApicompilationsControllerUpdate
     */
    compilationId: number
    /**
     * 
     * @type CompilationDto
     * @memberof CompilationsApicompilationsControllerUpdate
     */
    compilationDto: CompilationDto
}


export class ObjectCompilationsApi {
    private api: ObservableCompilationsApi

    public constructor(configuration: Configuration, requestFactory?: CompilationsApiRequestFactory, responseProcessor?: CompilationsApiResponseProcessor) {
        this.api = new ObservableCompilationsApi(configuration, requestFactory, responseProcessor);
	}

    /**
     * @param param the request object
     */
    public compilationsControllerCreate(param: CompilationsApiCompilationsControllerCreateRequest, options?: Configuration): Promise<Compilation> {
        return this.api.compilationsControllerCreate(param.compilationDto,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public compilationsControllerFindAll(param: CompilationsApiCompilationsControllerFindAllRequest, options?: Configuration): Promise<Array<Compilation>> {
        return this.api.compilationsControllerFindAll(param.snapshotDateTime,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public compilationsControllerFindOne(param: CompilationsApiCompilationsControllerFindOneRequest, options?: Configuration): Promise<Compilation> {
        return this.api.compilationsControllerFindOne(param.compilationId,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public compilationsControllerRemove(param: CompilationsApiCompilationsControllerRemoveRequest, options?: Configuration): Promise<void> {
        return this.api.compilationsControllerRemove(param.compilationId,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public compilationsControllerUpdate(param: CompilationsApiCompilationsControllerUpdateRequest, options?: Configuration): Promise<void> {
        return this.api.compilationsControllerUpdate(param.compilationId, param.compilationDto,  options).toPromise();
    }
	

}




import { ObservableProductRelationsApi } from "./ObservableAPI";
import { ProductRelationsApiRequestFactory, ProductRelationsApiResponseProcessor} from "../apis/ProductRelationsApi";

export interface ProductRelationsApiProductRelationsControllerCreateCompilationRequest {
    /**
     * 
     * @type CompilationL3RelationDto
     * @memberof ProductRelationsApiproductRelationsControllerCreateCompilation
     */
    compilationL3RelationDto: CompilationL3RelationDto
}

export interface ProductRelationsApiProductRelationsControllerCreateL0SurveyRequest {
    /**
     * 
     * @type SurveyL0RelationDto
     * @memberof ProductRelationsApiproductRelationsControllerCreateL0Survey
     */
    surveyL0RelationDto: SurveyL0RelationDto
}

export interface ProductRelationsApiProductRelationsControllerCreateL2SurveyRequest {
    /**
     * 
     * @type SurveyL2RelationDto
     * @memberof ProductRelationsApiproductRelationsControllerCreateL2Survey
     */
    surveyL2RelationDto: SurveyL2RelationDto
}

export interface ProductRelationsApiProductRelationsControllerCreateL3SurveyRequest {
    /**
     * 
     * @type SurveyL3RelationDto
     * @memberof ProductRelationsApiproductRelationsControllerCreateL3Survey
     */
    surveyL3RelationDto: SurveyL3RelationDto
}

export interface ProductRelationsApiProductRelationsControllerDeleteCompilationRequest {
    /**
     * 
     * @type number
     * @memberof ProductRelationsApiproductRelationsControllerDeleteCompilation
     */
    relationId: number
}

export interface ProductRelationsApiProductRelationsControllerDeleteL0SurveyRequest {
    /**
     * 
     * @type number
     * @memberof ProductRelationsApiproductRelationsControllerDeleteL0Survey
     */
    relationId: number
}

export interface ProductRelationsApiProductRelationsControllerDeleteL2SurveyRequest {
    /**
     * 
     * @type number
     * @memberof ProductRelationsApiproductRelationsControllerDeleteL2Survey
     */
    relationId: number
}

export interface ProductRelationsApiProductRelationsControllerDeleteL3SurveyRequest {
    /**
     * 
     * @type number
     * @memberof ProductRelationsApiproductRelationsControllerDeleteL3Survey
     */
    relationId: number
}

export interface ProductRelationsApiProductRelationsControllerFindAllL0SurveyRequest {
    /**
     * 
     * @type string
     * @memberof ProductRelationsApiproductRelationsControllerFindAllL0Survey
     */
    snapshotDateTime?: string
}

export interface ProductRelationsApiProductRelationsControllerFindAllL2SurveyRequest {
    /**
     * 
     * @type string
     * @memberof ProductRelationsApiproductRelationsControllerFindAllL2Survey
     */
    snapshotDateTime?: string
}

export interface ProductRelationsApiProductRelationsControllerFindAllL3CompilationRequest {
    /**
     * 
     * @type string
     * @memberof ProductRelationsApiproductRelationsControllerFindAllL3Compilation
     */
    snapshotDateTime?: string
}

export interface ProductRelationsApiProductRelationsControllerFindAllL3SurveyRequest {
    /**
     * 
     * @type string
     * @memberof ProductRelationsApiproductRelationsControllerFindAllL3Survey
     */
    snapshotDateTime?: string
}

export interface ProductRelationsApiProductRelationsControllerFindConditionalCompilationRequest {
    /**
     * 
     * @type number
     * @memberof ProductRelationsApiproductRelationsControllerFindConditionalCompilation
     */
    compilationId: number
}

export interface ProductRelationsApiProductRelationsControllerFindConditionalL0SurveyRequest {
    /**
     * 
     * @type number
     * @memberof ProductRelationsApiproductRelationsControllerFindConditionalL0Survey
     */
    surveyId: number
}

export interface ProductRelationsApiProductRelationsControllerFindConditionalL2SurveyRequest {
    /**
     * 
     * @type number
     * @memberof ProductRelationsApiproductRelationsControllerFindConditionalL2Survey
     */
    surveyId: number
}

export interface ProductRelationsApiProductRelationsControllerFindConditionalL3SurveyRequest {
    /**
     * 
     * @type number
     * @memberof ProductRelationsApiproductRelationsControllerFindConditionalL3Survey
     */
    surveyId: number
}

export interface ProductRelationsApiProductRelationsControllerFindOneCompilationRequest {
    /**
     * 
     * @type number
     * @memberof ProductRelationsApiproductRelationsControllerFindOneCompilation
     */
    relationId: number
}

export interface ProductRelationsApiProductRelationsControllerFindOneL0SurveyRequest {
    /**
     * 
     * @type number
     * @memberof ProductRelationsApiproductRelationsControllerFindOneL0Survey
     */
    relationId: number
}

export interface ProductRelationsApiProductRelationsControllerFindOneL2SurveyRequest {
    /**
     * 
     * @type number
     * @memberof ProductRelationsApiproductRelationsControllerFindOneL2Survey
     */
    relationId: number
}

export interface ProductRelationsApiProductRelationsControllerFindOneL3SurveyRequest {
    /**
     * 
     * @type number
     * @memberof ProductRelationsApiproductRelationsControllerFindOneL3Survey
     */
    relationId: number
}

export interface ProductRelationsApiProductRelationsControllerUpdateCompilationRequest {
    /**
     * 
     * @type number
     * @memberof ProductRelationsApiproductRelationsControllerUpdateCompilation
     */
    relationId: number
    /**
     * 
     * @type CompilationL3RelationDto
     * @memberof ProductRelationsApiproductRelationsControllerUpdateCompilation
     */
    compilationL3RelationDto: CompilationL3RelationDto
}

export interface ProductRelationsApiProductRelationsControllerUpdateL0SurveyRequest {
    /**
     * 
     * @type number
     * @memberof ProductRelationsApiproductRelationsControllerUpdateL0Survey
     */
    relationId: number
    /**
     * 
     * @type SurveyL0RelationDto
     * @memberof ProductRelationsApiproductRelationsControllerUpdateL0Survey
     */
    surveyL0RelationDto: SurveyL0RelationDto
}

export interface ProductRelationsApiProductRelationsControllerUpdateL2SurveyRequest {
    /**
     * 
     * @type number
     * @memberof ProductRelationsApiproductRelationsControllerUpdateL2Survey
     */
    relationId: number
    /**
     * 
     * @type SurveyL2RelationDto
     * @memberof ProductRelationsApiproductRelationsControllerUpdateL2Survey
     */
    surveyL2RelationDto: SurveyL2RelationDto
}

export interface ProductRelationsApiProductRelationsControllerUpdateL3SurveyRequest {
    /**
     * 
     * @type number
     * @memberof ProductRelationsApiproductRelationsControllerUpdateL3Survey
     */
    relationId: number
    /**
     * 
     * @type SurveyL3RelationDto
     * @memberof ProductRelationsApiproductRelationsControllerUpdateL3Survey
     */
    surveyL3RelationDto: SurveyL3RelationDto
}


export class ObjectProductRelationsApi {
    private api: ObservableProductRelationsApi

    public constructor(configuration: Configuration, requestFactory?: ProductRelationsApiRequestFactory, responseProcessor?: ProductRelationsApiResponseProcessor) {
        this.api = new ObservableProductRelationsApi(configuration, requestFactory, responseProcessor);
	}

    /**
     * @param param the request object
     */
    public productRelationsControllerCreateCompilation(param: ProductRelationsApiProductRelationsControllerCreateCompilationRequest, options?: Configuration): Promise<CompilationL3Relation> {
        return this.api.productRelationsControllerCreateCompilation(param.compilationL3RelationDto,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public productRelationsControllerCreateL0Survey(param: ProductRelationsApiProductRelationsControllerCreateL0SurveyRequest, options?: Configuration): Promise<SurveyL0Relation> {
        return this.api.productRelationsControllerCreateL0Survey(param.surveyL0RelationDto,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public productRelationsControllerCreateL2Survey(param: ProductRelationsApiProductRelationsControllerCreateL2SurveyRequest, options?: Configuration): Promise<SurveyL2Relation> {
        return this.api.productRelationsControllerCreateL2Survey(param.surveyL2RelationDto,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public productRelationsControllerCreateL3Survey(param: ProductRelationsApiProductRelationsControllerCreateL3SurveyRequest, options?: Configuration): Promise<SurveyL3Relation> {
        return this.api.productRelationsControllerCreateL3Survey(param.surveyL3RelationDto,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public productRelationsControllerDeleteCompilation(param: ProductRelationsApiProductRelationsControllerDeleteCompilationRequest, options?: Configuration): Promise<void> {
        return this.api.productRelationsControllerDeleteCompilation(param.relationId,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public productRelationsControllerDeleteL0Survey(param: ProductRelationsApiProductRelationsControllerDeleteL0SurveyRequest, options?: Configuration): Promise<void> {
        return this.api.productRelationsControllerDeleteL0Survey(param.relationId,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public productRelationsControllerDeleteL2Survey(param: ProductRelationsApiProductRelationsControllerDeleteL2SurveyRequest, options?: Configuration): Promise<void> {
        return this.api.productRelationsControllerDeleteL2Survey(param.relationId,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public productRelationsControllerDeleteL3Survey(param: ProductRelationsApiProductRelationsControllerDeleteL3SurveyRequest, options?: Configuration): Promise<void> {
        return this.api.productRelationsControllerDeleteL3Survey(param.relationId,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public productRelationsControllerFindAllL0Survey(param: ProductRelationsApiProductRelationsControllerFindAllL0SurveyRequest, options?: Configuration): Promise<Array<RelationSummaryDto>> {
        return this.api.productRelationsControllerFindAllL0Survey(param.snapshotDateTime,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public productRelationsControllerFindAllL2Survey(param: ProductRelationsApiProductRelationsControllerFindAllL2SurveyRequest, options?: Configuration): Promise<Array<RelationSummaryDto>> {
        return this.api.productRelationsControllerFindAllL2Survey(param.snapshotDateTime,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public productRelationsControllerFindAllL3Compilation(param: ProductRelationsApiProductRelationsControllerFindAllL3CompilationRequest, options?: Configuration): Promise<Array<RelationSummaryDto>> {
        return this.api.productRelationsControllerFindAllL3Compilation(param.snapshotDateTime,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public productRelationsControllerFindAllL3Survey(param: ProductRelationsApiProductRelationsControllerFindAllL3SurveyRequest, options?: Configuration): Promise<Array<RelationSummaryDto>> {
        return this.api.productRelationsControllerFindAllL3Survey(param.snapshotDateTime,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public productRelationsControllerFindConditionalCompilation(param: ProductRelationsApiProductRelationsControllerFindConditionalCompilationRequest, options?: Configuration): Promise<CompilationL3Relation> {
        return this.api.productRelationsControllerFindConditionalCompilation(param.compilationId,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public productRelationsControllerFindConditionalL0Survey(param: ProductRelationsApiProductRelationsControllerFindConditionalL0SurveyRequest, options?: Configuration): Promise<SurveyL0Relation> {
        return this.api.productRelationsControllerFindConditionalL0Survey(param.surveyId,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public productRelationsControllerFindConditionalL2Survey(param: ProductRelationsApiProductRelationsControllerFindConditionalL2SurveyRequest, options?: Configuration): Promise<SurveyL2Relation> {
        return this.api.productRelationsControllerFindConditionalL2Survey(param.surveyId,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public productRelationsControllerFindConditionalL3Survey(param: ProductRelationsApiProductRelationsControllerFindConditionalL3SurveyRequest, options?: Configuration): Promise<SurveyL3Relation> {
        return this.api.productRelationsControllerFindConditionalL3Survey(param.surveyId,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public productRelationsControllerFindOneCompilation(param: ProductRelationsApiProductRelationsControllerFindOneCompilationRequest, options?: Configuration): Promise<CompilationL3Relation> {
        return this.api.productRelationsControllerFindOneCompilation(param.relationId,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public productRelationsControllerFindOneL0Survey(param: ProductRelationsApiProductRelationsControllerFindOneL0SurveyRequest, options?: Configuration): Promise<SurveyL0Relation> {
        return this.api.productRelationsControllerFindOneL0Survey(param.relationId,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public productRelationsControllerFindOneL2Survey(param: ProductRelationsApiProductRelationsControllerFindOneL2SurveyRequest, options?: Configuration): Promise<SurveyL2Relation> {
        return this.api.productRelationsControllerFindOneL2Survey(param.relationId,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public productRelationsControllerFindOneL3Survey(param: ProductRelationsApiProductRelationsControllerFindOneL3SurveyRequest, options?: Configuration): Promise<SurveyL3Relation> {
        return this.api.productRelationsControllerFindOneL3Survey(param.relationId,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public productRelationsControllerUpdateCompilation(param: ProductRelationsApiProductRelationsControllerUpdateCompilationRequest, options?: Configuration): Promise<void> {
        return this.api.productRelationsControllerUpdateCompilation(param.relationId, param.compilationL3RelationDto,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public productRelationsControllerUpdateL0Survey(param: ProductRelationsApiProductRelationsControllerUpdateL0SurveyRequest, options?: Configuration): Promise<void> {
        return this.api.productRelationsControllerUpdateL0Survey(param.relationId, param.surveyL0RelationDto,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public productRelationsControllerUpdateL2Survey(param: ProductRelationsApiProductRelationsControllerUpdateL2SurveyRequest, options?: Configuration): Promise<void> {
        return this.api.productRelationsControllerUpdateL2Survey(param.relationId, param.surveyL2RelationDto,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public productRelationsControllerUpdateL3Survey(param: ProductRelationsApiProductRelationsControllerUpdateL3SurveyRequest, options?: Configuration): Promise<void> {
        return this.api.productRelationsControllerUpdateL3Survey(param.relationId, param.surveyL3RelationDto,  options).toPromise();
    }
	

}




import { ObservableProductsL0DistApi } from "./ObservableAPI";
import { ProductsL0DistApiRequestFactory, ProductsL0DistApiResponseProcessor} from "../apis/ProductsL0DistApi";

export interface ProductsL0DistApiProductsL0DistControllerCreateRequest {
    /**
     * 
     * @type number
     * @memberof ProductsL0DistApiproductsL0DistControllerCreate
     */
    productL0SrcId: number
    /**
     * 
     * @type ProductL0DistDto
     * @memberof ProductsL0DistApiproductsL0DistControllerCreate
     */
    productL0DistDto: ProductL0DistDto
}

export interface ProductsL0DistApiProductsL0DistControllerCreateInstrumentRequest {
    /**
     * 
     * @type number
     * @memberof ProductsL0DistApiproductsL0DistControllerCreateInstrument
     */
    productId: number
    /**
     * 
     * @type ProductL0InstrumentFileDto
     * @memberof ProductsL0DistApiproductsL0DistControllerCreateInstrument
     */
    productL0InstrumentFileDto: ProductL0InstrumentFileDto
}

export interface ProductsL0DistApiProductsL0DistControllerDeleteRequest {
    /**
     * 
     * @type number
     * @memberof ProductsL0DistApiproductsL0DistControllerDelete
     */
    productId: number
}

export interface ProductsL0DistApiProductsL0DistControllerDeleteInstrumentRequest {
    /**
     * 
     * @type number
     * @memberof ProductsL0DistApiproductsL0DistControllerDeleteInstrument
     */
    productId: number
    /**
     * 
     * @type number
     * @memberof ProductsL0DistApiproductsL0DistControllerDeleteInstrument
     */
    instrumentId: number
}

export interface ProductsL0DistApiProductsL0DistControllerFindAllRequest {
    /**
     * 
     * @type number
     * @memberof ProductsL0DistApiproductsL0DistControllerFindAll
     */
    filterByProductSrcId?: number
    /**
     * 
     * @type string
     * @memberof ProductsL0DistApiproductsL0DistControllerFindAll
     */
    snapshotDateTime?: string
}

export interface ProductsL0DistApiProductsL0DistControllerFindInstrumentsRequest {
    /**
     * 
     * @type number
     * @memberof ProductsL0DistApiproductsL0DistControllerFindInstruments
     */
    productId: number
    /**
     * 
     * @type string
     * @memberof ProductsL0DistApiproductsL0DistControllerFindInstruments
     */
    snapshotDateTime?: string
}

export interface ProductsL0DistApiProductsL0DistControllerFindOneRequest {
    /**
     * 
     * @type number
     * @memberof ProductsL0DistApiproductsL0DistControllerFindOne
     */
    productId: number
}

export interface ProductsL0DistApiProductsL0DistControllerFindOneInstrumentRequest {
    /**
     * 
     * @type number
     * @memberof ProductsL0DistApiproductsL0DistControllerFindOneInstrument
     */
    productId: number
    /**
     * 
     * @type number
     * @memberof ProductsL0DistApiproductsL0DistControllerFindOneInstrument
     */
    instrumentId: number
    /**
     * 
     * @type string
     * @memberof ProductsL0DistApiproductsL0DistControllerFindOneInstrument
     */
    snapshotDateTime?: string
}

export interface ProductsL0DistApiProductsL0DistControllerUpdateRequest {
    /**
     * 
     * @type number
     * @memberof ProductsL0DistApiproductsL0DistControllerUpdate
     */
    productId: number
    /**
     * 
     * @type ProductL0DistDto
     * @memberof ProductsL0DistApiproductsL0DistControllerUpdate
     */
    productL0DistDto: ProductL0DistDto
}

export interface ProductsL0DistApiProductsL0DistControllerUpdateInstrumentRequest {
    /**
     * 
     * @type number
     * @memberof ProductsL0DistApiproductsL0DistControllerUpdateInstrument
     */
    productId: number
    /**
     * 
     * @type number
     * @memberof ProductsL0DistApiproductsL0DistControllerUpdateInstrument
     */
    instrumentId: number
    /**
     * 
     * @type ProductL0InstrumentFileDto
     * @memberof ProductsL0DistApiproductsL0DistControllerUpdateInstrument
     */
    productL0InstrumentFileDto: ProductL0InstrumentFileDto
}


export class ObjectProductsL0DistApi {
    private api: ObservableProductsL0DistApi

    public constructor(configuration: Configuration, requestFactory?: ProductsL0DistApiRequestFactory, responseProcessor?: ProductsL0DistApiResponseProcessor) {
        this.api = new ObservableProductsL0DistApi(configuration, requestFactory, responseProcessor);
	}

    /**
     * @param param the request object
     */
    public productsL0DistControllerCreate(param: ProductsL0DistApiProductsL0DistControllerCreateRequest, options?: Configuration): Promise<ProductL0Dist> {
        return this.api.productsL0DistControllerCreate(param.productL0SrcId, param.productL0DistDto,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public productsL0DistControllerCreateInstrument(param: ProductsL0DistApiProductsL0DistControllerCreateInstrumentRequest, options?: Configuration): Promise<ProductL0InstrumentFile> {
        return this.api.productsL0DistControllerCreateInstrument(param.productId, param.productL0InstrumentFileDto,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public productsL0DistControllerDelete(param: ProductsL0DistApiProductsL0DistControllerDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.productsL0DistControllerDelete(param.productId,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public productsL0DistControllerDeleteInstrument(param: ProductsL0DistApiProductsL0DistControllerDeleteInstrumentRequest, options?: Configuration): Promise<void> {
        return this.api.productsL0DistControllerDeleteInstrument(param.productId, param.instrumentId,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public productsL0DistControllerFindAll(param: ProductsL0DistApiProductsL0DistControllerFindAllRequest, options?: Configuration): Promise<Array<ProductL0Dist>> {
        return this.api.productsL0DistControllerFindAll(param.filterByProductSrcId, param.snapshotDateTime,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public productsL0DistControllerFindInstruments(param: ProductsL0DistApiProductsL0DistControllerFindInstrumentsRequest, options?: Configuration): Promise<Array<ProductL0InstrumentFile>> {
        return this.api.productsL0DistControllerFindInstruments(param.productId, param.snapshotDateTime,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public productsL0DistControllerFindOne(param: ProductsL0DistApiProductsL0DistControllerFindOneRequest, options?: Configuration): Promise<ProductL0Dist> {
        return this.api.productsL0DistControllerFindOne(param.productId,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public productsL0DistControllerFindOneInstrument(param: ProductsL0DistApiProductsL0DistControllerFindOneInstrumentRequest, options?: Configuration): Promise<ProductL0InstrumentFile> {
        return this.api.productsL0DistControllerFindOneInstrument(param.productId, param.instrumentId, param.snapshotDateTime,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public productsL0DistControllerUpdate(param: ProductsL0DistApiProductsL0DistControllerUpdateRequest, options?: Configuration): Promise<void> {
        return this.api.productsL0DistControllerUpdate(param.productId, param.productL0DistDto,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public productsL0DistControllerUpdateInstrument(param: ProductsL0DistApiProductsL0DistControllerUpdateInstrumentRequest, options?: Configuration): Promise<void> {
        return this.api.productsL0DistControllerUpdateInstrument(param.productId, param.instrumentId, param.productL0InstrumentFileDto,  options).toPromise();
    }
	

}




import { ObservableProductsL0SrcApi } from "./ObservableAPI";
import { ProductsL0SrcApiRequestFactory, ProductsL0SrcApiResponseProcessor} from "../apis/ProductsL0SrcApi";

export interface ProductsL0SrcApiProductsL0SrcControllerCreateRequest {
    /**
     * 
     * @type ProductL0SrcDto
     * @memberof ProductsL0SrcApiproductsL0SrcControllerCreate
     */
    productL0SrcDto: ProductL0SrcDto
}

export interface ProductsL0SrcApiProductsL0SrcControllerDeleteRequest {
    /**
     * 
     * @type number
     * @memberof ProductsL0SrcApiproductsL0SrcControllerDelete
     */
    productId: number
}

export interface ProductsL0SrcApiProductsL0SrcControllerFindAllRequest {
    /**
     * 
     * @type string
     * @memberof ProductsL0SrcApiproductsL0SrcControllerFindAll
     */
    snapshotDateTime?: string
}

export interface ProductsL0SrcApiProductsL0SrcControllerFindOneRequest {
    /**
     * 
     * @type number
     * @memberof ProductsL0SrcApiproductsL0SrcControllerFindOne
     */
    productId: number
}

export interface ProductsL0SrcApiProductsL0SrcControllerUpdateRequest {
    /**
     * 
     * @type number
     * @memberof ProductsL0SrcApiproductsL0SrcControllerUpdate
     */
    productId: number
    /**
     * 
     * @type ProductL0SrcDto
     * @memberof ProductsL0SrcApiproductsL0SrcControllerUpdate
     */
    productL0SrcDto: ProductL0SrcDto
}


export class ObjectProductsL0SrcApi {
    private api: ObservableProductsL0SrcApi

    public constructor(configuration: Configuration, requestFactory?: ProductsL0SrcApiRequestFactory, responseProcessor?: ProductsL0SrcApiResponseProcessor) {
        this.api = new ObservableProductsL0SrcApi(configuration, requestFactory, responseProcessor);
	}

    /**
     * @param param the request object
     */
    public productsL0SrcControllerCreate(param: ProductsL0SrcApiProductsL0SrcControllerCreateRequest, options?: Configuration): Promise<ProductL0Src> {
        return this.api.productsL0SrcControllerCreate(param.productL0SrcDto,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public productsL0SrcControllerDelete(param: ProductsL0SrcApiProductsL0SrcControllerDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.productsL0SrcControllerDelete(param.productId,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public productsL0SrcControllerFindAll(param: ProductsL0SrcApiProductsL0SrcControllerFindAllRequest, options?: Configuration): Promise<Array<ProductL0Src>> {
        return this.api.productsL0SrcControllerFindAll(param.snapshotDateTime,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public productsL0SrcControllerFindOne(param: ProductsL0SrcApiProductsL0SrcControllerFindOneRequest, options?: Configuration): Promise<ProductL0Src> {
        return this.api.productsL0SrcControllerFindOne(param.productId,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public productsL0SrcControllerUpdate(param: ProductsL0SrcApiProductsL0SrcControllerUpdateRequest, options?: Configuration): Promise<void> {
        return this.api.productsL0SrcControllerUpdate(param.productId, param.productL0SrcDto,  options).toPromise();
    }
	

}




import { ObservableProductsL2SrcApi } from "./ObservableAPI";
import { ProductsL2SrcApiRequestFactory, ProductsL2SrcApiResponseProcessor} from "../apis/ProductsL2SrcApi";

export interface ProductsL2SrcApiProductsL2SrcControllerCreateRequest {
    /**
     * 
     * @type ProductL2SrcDto
     * @memberof ProductsL2SrcApiproductsL2SrcControllerCreate
     */
    productL2SrcDto: ProductL2SrcDto
}

export interface ProductsL2SrcApiProductsL2SrcControllerDeleteRequest {
    /**
     * 
     * @type number
     * @memberof ProductsL2SrcApiproductsL2SrcControllerDelete
     */
    productId: number
}

export interface ProductsL2SrcApiProductsL2SrcControllerFindAllRequest {
    /**
     * 
     * @type string
     * @memberof ProductsL2SrcApiproductsL2SrcControllerFindAll
     */
    snapshotDateTime?: string
}

export interface ProductsL2SrcApiProductsL2SrcControllerFindOneRequest {
    /**
     * 
     * @type number
     * @memberof ProductsL2SrcApiproductsL2SrcControllerFindOne
     */
    productId: number
}

export interface ProductsL2SrcApiProductsL2SrcControllerUpdateRequest {
    /**
     * 
     * @type number
     * @memberof ProductsL2SrcApiproductsL2SrcControllerUpdate
     */
    productId: number
    /**
     * 
     * @type ProductL2SrcDto
     * @memberof ProductsL2SrcApiproductsL2SrcControllerUpdate
     */
    productL2SrcDto: ProductL2SrcDto
}


export class ObjectProductsL2SrcApi {
    private api: ObservableProductsL2SrcApi

    public constructor(configuration: Configuration, requestFactory?: ProductsL2SrcApiRequestFactory, responseProcessor?: ProductsL2SrcApiResponseProcessor) {
        this.api = new ObservableProductsL2SrcApi(configuration, requestFactory, responseProcessor);
	}

    /**
     * @param param the request object
     */
    public productsL2SrcControllerCreate(param: ProductsL2SrcApiProductsL2SrcControllerCreateRequest, options?: Configuration): Promise<ProductL2Src> {
        return this.api.productsL2SrcControllerCreate(param.productL2SrcDto,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public productsL2SrcControllerDelete(param: ProductsL2SrcApiProductsL2SrcControllerDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.productsL2SrcControllerDelete(param.productId,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public productsL2SrcControllerFindAll(param: ProductsL2SrcApiProductsL2SrcControllerFindAllRequest, options?: Configuration): Promise<Array<ProductL2Src>> {
        return this.api.productsL2SrcControllerFindAll(param.snapshotDateTime,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public productsL2SrcControllerFindOne(param: ProductsL2SrcApiProductsL2SrcControllerFindOneRequest, options?: Configuration): Promise<ProductL2Src> {
        return this.api.productsL2SrcControllerFindOne(param.productId,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public productsL2SrcControllerUpdate(param: ProductsL2SrcApiProductsL2SrcControllerUpdateRequest, options?: Configuration): Promise<void> {
        return this.api.productsL2SrcControllerUpdate(param.productId, param.productL2SrcDto,  options).toPromise();
    }
	

}




import { ObservableProductsL3DistApi } from "./ObservableAPI";
import { ProductsL3DistApiRequestFactory, ProductsL3DistApiResponseProcessor} from "../apis/ProductsL3DistApi";

export interface ProductsL3DistApiProductsL3DistControllerCreateRequest {
    /**
     * 
     * @type number
     * @memberof ProductsL3DistApiproductsL3DistControllerCreate
     */
    productL3SrcId: number
    /**
     * 
     * @type ProductL3DistDto
     * @memberof ProductsL3DistApiproductsL3DistControllerCreate
     */
    productL3DistDto: ProductL3DistDto
}

export interface ProductsL3DistApiProductsL3DistControllerDeleteRequest {
    /**
     * 
     * @type number
     * @memberof ProductsL3DistApiproductsL3DistControllerDelete
     */
    productId: number
}

export interface ProductsL3DistApiProductsL3DistControllerFindAllRequest {
    /**
     * 
     * @type number
     * @memberof ProductsL3DistApiproductsL3DistControllerFindAll
     */
    filterByProductSrcId?: number
    /**
     * 
     * @type string
     * @memberof ProductsL3DistApiproductsL3DistControllerFindAll
     */
    snapshotDateTime?: string
}

export interface ProductsL3DistApiProductsL3DistControllerFindOneRequest {
    /**
     * 
     * @type number
     * @memberof ProductsL3DistApiproductsL3DistControllerFindOne
     */
    productId: number
}

export interface ProductsL3DistApiProductsL3DistControllerUpdateRequest {
    /**
     * 
     * @type number
     * @memberof ProductsL3DistApiproductsL3DistControllerUpdate
     */
    productId: number
    /**
     * 
     * @type ProductL3DistDto
     * @memberof ProductsL3DistApiproductsL3DistControllerUpdate
     */
    productL3DistDto: ProductL3DistDto
}


export class ObjectProductsL3DistApi {
    private api: ObservableProductsL3DistApi

    public constructor(configuration: Configuration, requestFactory?: ProductsL3DistApiRequestFactory, responseProcessor?: ProductsL3DistApiResponseProcessor) {
        this.api = new ObservableProductsL3DistApi(configuration, requestFactory, responseProcessor);
	}

    /**
     * @param param the request object
     */
    public productsL3DistControllerCreate(param: ProductsL3DistApiProductsL3DistControllerCreateRequest, options?: Configuration): Promise<ProductL3Dist> {
        return this.api.productsL3DistControllerCreate(param.productL3SrcId, param.productL3DistDto,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public productsL3DistControllerDelete(param: ProductsL3DistApiProductsL3DistControllerDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.productsL3DistControllerDelete(param.productId,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public productsL3DistControllerFindAll(param: ProductsL3DistApiProductsL3DistControllerFindAllRequest, options?: Configuration): Promise<Array<ProductL3Dist>> {
        return this.api.productsL3DistControllerFindAll(param.filterByProductSrcId, param.snapshotDateTime,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public productsL3DistControllerFindOne(param: ProductsL3DistApiProductsL3DistControllerFindOneRequest, options?: Configuration): Promise<ProductL3Dist> {
        return this.api.productsL3DistControllerFindOne(param.productId,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public productsL3DistControllerUpdate(param: ProductsL3DistApiProductsL3DistControllerUpdateRequest, options?: Configuration): Promise<void> {
        return this.api.productsL3DistControllerUpdate(param.productId, param.productL3DistDto,  options).toPromise();
    }
	

}




import { ObservableProductsL3SrcApi } from "./ObservableAPI";
import { ProductsL3SrcApiRequestFactory, ProductsL3SrcApiResponseProcessor} from "../apis/ProductsL3SrcApi";

export interface ProductsL3SrcApiProductsL3SrcControllerCreateRequest {
    /**
     * 
     * @type ProductL3SrcDto
     * @memberof ProductsL3SrcApiproductsL3SrcControllerCreate
     */
    productL3SrcDto: ProductL3SrcDto
}

export interface ProductsL3SrcApiProductsL3SrcControllerDeleteRequest {
    /**
     * 
     * @type number
     * @memberof ProductsL3SrcApiproductsL3SrcControllerDelete
     */
    productId: number
}

export interface ProductsL3SrcApiProductsL3SrcControllerFindAllRequest {
    /**
     * 
     * @type string
     * @memberof ProductsL3SrcApiproductsL3SrcControllerFindAll
     */
    snapshotDateTime?: string
}

export interface ProductsL3SrcApiProductsL3SrcControllerFindOneRequest {
    /**
     * 
     * @type number
     * @memberof ProductsL3SrcApiproductsL3SrcControllerFindOne
     */
    productId: number
}

export interface ProductsL3SrcApiProductsL3SrcControllerUpdateRequest {
    /**
     * 
     * @type number
     * @memberof ProductsL3SrcApiproductsL3SrcControllerUpdate
     */
    productId: number
    /**
     * 
     * @type ProductL3SrcDto
     * @memberof ProductsL3SrcApiproductsL3SrcControllerUpdate
     */
    productL3SrcDto: ProductL3SrcDto
}


export class ObjectProductsL3SrcApi {
    private api: ObservableProductsL3SrcApi

    public constructor(configuration: Configuration, requestFactory?: ProductsL3SrcApiRequestFactory, responseProcessor?: ProductsL3SrcApiResponseProcessor) {
        this.api = new ObservableProductsL3SrcApi(configuration, requestFactory, responseProcessor);
	}

    /**
     * @param param the request object
     */
    public productsL3SrcControllerCreate(param: ProductsL3SrcApiProductsL3SrcControllerCreateRequest, options?: Configuration): Promise<ProductL3Src> {
        return this.api.productsL3SrcControllerCreate(param.productL3SrcDto,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public productsL3SrcControllerDelete(param: ProductsL3SrcApiProductsL3SrcControllerDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.productsL3SrcControllerDelete(param.productId,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public productsL3SrcControllerFindAll(param: ProductsL3SrcApiProductsL3SrcControllerFindAllRequest, options?: Configuration): Promise<Array<ProductL3Src>> {
        return this.api.productsL3SrcControllerFindAll(param.snapshotDateTime,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public productsL3SrcControllerFindOne(param: ProductsL3SrcApiProductsL3SrcControllerFindOneRequest, options?: Configuration): Promise<ProductL3Src> {
        return this.api.productsL3SrcControllerFindOne(param.productId,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public productsL3SrcControllerUpdate(param: ProductsL3SrcApiProductsL3SrcControllerUpdateRequest, options?: Configuration): Promise<void> {
        return this.api.productsL3SrcControllerUpdate(param.productId, param.productL3SrcDto,  options).toPromise();
    }
	

}




import { ObservableStylesApi } from "./ObservableAPI";
import { StylesApiRequestFactory, StylesApiResponseProcessor} from "../apis/StylesApi";

export interface StylesApiStylesControllerFindAllRequest {
}


export class ObjectStylesApi {
    private api: ObservableStylesApi

    public constructor(configuration: Configuration, requestFactory?: StylesApiRequestFactory, responseProcessor?: StylesApiResponseProcessor) {
        this.api = new ObservableStylesApi(configuration, requestFactory, responseProcessor);
	}

    /**
     * @param param the request object
     */
    public stylesControllerFindAll(param: StylesApiStylesControllerFindAllRequest, options?: Configuration): Promise<Array<Style>> {
        return this.api.stylesControllerFindAll( options).toPromise();
    }
	

}




import { ObservableSurveysApi } from "./ObservableAPI";
import { SurveysApiRequestFactory, SurveysApiResponseProcessor} from "../apis/SurveysApi";

export interface SurveysApiSurveysControllerCreateRequest {
    /**
     * 
     * @type SurveyDto
     * @memberof SurveysApisurveysControllerCreate
     */
    surveyDto: SurveyDto
}

export interface SurveysApiSurveysControllerFindAllRequest {
    /**
     * 
     * @type string
     * @memberof SurveysApisurveysControllerFindAll
     */
    snapshotDateTime?: string
}

export interface SurveysApiSurveysControllerFindOneRequest {
    /**
     * 
     * @type number
     * @memberof SurveysApisurveysControllerFindOne
     */
    surveyId: number
}

export interface SurveysApiSurveysControllerRemoveRequest {
    /**
     * 
     * @type number
     * @memberof SurveysApisurveysControllerRemove
     */
    surveyId: number
}

export interface SurveysApiSurveysControllerUpdateRequest {
    /**
     * 
     * @type number
     * @memberof SurveysApisurveysControllerUpdate
     */
    surveyId: number
    /**
     * 
     * @type SurveyDto
     * @memberof SurveysApisurveysControllerUpdate
     */
    surveyDto: SurveyDto
}


export class ObjectSurveysApi {
    private api: ObservableSurveysApi

    public constructor(configuration: Configuration, requestFactory?: SurveysApiRequestFactory, responseProcessor?: SurveysApiResponseProcessor) {
        this.api = new ObservableSurveysApi(configuration, requestFactory, responseProcessor);
	}

    /**
     * @param param the request object
     */
    public surveysControllerCreate(param: SurveysApiSurveysControllerCreateRequest, options?: Configuration): Promise<Survey> {
        return this.api.surveysControllerCreate(param.surveyDto,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public surveysControllerFindAll(param: SurveysApiSurveysControllerFindAllRequest, options?: Configuration): Promise<Array<Survey>> {
        return this.api.surveysControllerFindAll(param.snapshotDateTime,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public surveysControllerFindOne(param: SurveysApiSurveysControllerFindOneRequest, options?: Configuration): Promise<Survey> {
        return this.api.surveysControllerFindOne(param.surveyId,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public surveysControllerRemove(param: SurveysApiSurveysControllerRemoveRequest, options?: Configuration): Promise<void> {
        return this.api.surveysControllerRemove(param.surveyId,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public surveysControllerUpdate(param: SurveysApiSurveysControllerUpdateRequest, options?: Configuration): Promise<void> {
        return this.api.surveysControllerUpdate(param.surveyId, param.surveyDto,  options).toPromise();
    }
	

}




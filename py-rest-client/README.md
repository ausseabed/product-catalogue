# product-catalogue-py-rest-client
The API description for the Ausseabed product catalogue inventory

This Python package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 0.1.9
- Package version: 1.0.0
- Build package: org.openapitools.codegen.languages.PythonClientCodegen
For more information, please visit [http://ausseabed.gov.au/](http://ausseabed.gov.au/)

## Requirements.

Python 2.7 and 3.4+

## Installation & Usage
### pip install

If the python package is hosted on a repository, you can install directly using:

```sh
pip install git+https://github.com/ausseabed/product-catalogue.git#subdirectory=py-rest-client\&ignore=.git
```
(you may need to run `pip` with root permission: `sudo pip install git+https://github.com/ausseabed/product-catalogue.git#subdirectory=py-rest-client\&ignore=.git`)

Then import the package:
```python
import product_catalogue_py_rest_client
```

### Setuptools

Install via [Setuptools](http://pypi.python.org/pypi/setuptools).

```sh
python setup.py install --user
```
(or `sudo python setup.py install` to install the package for all users)

Then import the package:
```python
import product_catalogue_py_rest_client
```

## Getting Started

Please follow the [installation procedure](#installation--usage) and then run the following:

```python
from __future__ import print_function

import time
import product_catalogue_py_rest_client
from product_catalogue_py_rest_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost/rest
# See configuration.py for a list of all supported configuration parameters.
configuration = product_catalogue_py_rest_client.Configuration(
    host = "http://localhost/rest"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): access-token
configuration = product_catalogue_py_rest_client.Configuration(
    access_token = 'YOUR_BEARER_TOKEN'
)


# Enter a context with an instance of the API client
with product_catalogue_py_rest_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = product_catalogue_py_rest_client.CompilationsApi(api_client)
    compilation_dto = product_catalogue_py_rest_client.CompilationDto() # CompilationDto | 

    try:
        api_response = api_instance.compilations_controller_create(compilation_dto)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling CompilationsApi->compilations_controller_create: %s\n" % e)
    
```

## Documentation for API Endpoints

All URIs are relative to *http://localhost/rest*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*CompilationsApi* | [**compilations_controller_create**](docs/CompilationsApi.md#compilations_controller_create) | **POST** /compilations | 
*CompilationsApi* | [**compilations_controller_find_all**](docs/CompilationsApi.md#compilations_controller_find_all) | **GET** /compilations | 
*CompilationsApi* | [**compilations_controller_find_one**](docs/CompilationsApi.md#compilations_controller_find_one) | **GET** /compilations/{compilationId} | 
*CompilationsApi* | [**compilations_controller_remove**](docs/CompilationsApi.md#compilations_controller_remove) | **DELETE** /compilations/{compilationId} | 
*CompilationsApi* | [**compilations_controller_update**](docs/CompilationsApi.md#compilations_controller_update) | **PUT** /compilations/{compilationId} | 
*ProductRelationsApi* | [**product_relations_controller_create_compilation**](docs/ProductRelationsApi.md#product_relations_controller_create_compilation) | **POST** /product-relations/compilation-to-l3 | 
*ProductRelationsApi* | [**product_relations_controller_create_l0_survey**](docs/ProductRelationsApi.md#product_relations_controller_create_l0_survey) | **POST** /product-relations/surveys-to-l0 | 
*ProductRelationsApi* | [**product_relations_controller_create_l3_survey**](docs/ProductRelationsApi.md#product_relations_controller_create_l3_survey) | **POST** /product-relations/surveys-to-l3 | 
*ProductRelationsApi* | [**product_relations_controller_delete_compilation**](docs/ProductRelationsApi.md#product_relations_controller_delete_compilation) | **DELETE** /product-relations/compilation-to-l3/{relationId} | 
*ProductRelationsApi* | [**product_relations_controller_delete_l0_survey**](docs/ProductRelationsApi.md#product_relations_controller_delete_l0_survey) | **DELETE** /product-relations/surveys-to-l0/{relationId} | 
*ProductRelationsApi* | [**product_relations_controller_delete_l3_survey**](docs/ProductRelationsApi.md#product_relations_controller_delete_l3_survey) | **DELETE** /product-relations/surveys-to-l3/{relationId} | 
*ProductRelationsApi* | [**product_relations_controller_find_all_l0_survey**](docs/ProductRelationsApi.md#product_relations_controller_find_all_l0_survey) | **GET** /product-relations/surveys-to-l0 | 
*ProductRelationsApi* | [**product_relations_controller_find_all_l3_compilation**](docs/ProductRelationsApi.md#product_relations_controller_find_all_l3_compilation) | **GET** /product-relations/compilation-to-l3 | 
*ProductRelationsApi* | [**product_relations_controller_find_all_l3_survey**](docs/ProductRelationsApi.md#product_relations_controller_find_all_l3_survey) | **GET** /product-relations/surveys-to-l3 | 
*ProductRelationsApi* | [**product_relations_controller_find_conditional_compilation**](docs/ProductRelationsApi.md#product_relations_controller_find_conditional_compilation) | **GET** /product-relations/compilation-to-l3/compilation/{compilationId} | 
*ProductRelationsApi* | [**product_relations_controller_find_conditional_l0_survey**](docs/ProductRelationsApi.md#product_relations_controller_find_conditional_l0_survey) | **GET** /product-relations/surveys-to-l0/survey/{surveyId} | 
*ProductRelationsApi* | [**product_relations_controller_find_conditional_l3_survey**](docs/ProductRelationsApi.md#product_relations_controller_find_conditional_l3_survey) | **GET** /product-relations/surveys-to-l3/survey/{surveyId} | 
*ProductRelationsApi* | [**product_relations_controller_find_one_compilation**](docs/ProductRelationsApi.md#product_relations_controller_find_one_compilation) | **GET** /product-relations/compilation-to-l3/{relationId} | 
*ProductRelationsApi* | [**product_relations_controller_find_one_l0_survey**](docs/ProductRelationsApi.md#product_relations_controller_find_one_l0_survey) | **GET** /product-relations/surveys-to-l0/{relationId} | 
*ProductRelationsApi* | [**product_relations_controller_find_one_l3_survey**](docs/ProductRelationsApi.md#product_relations_controller_find_one_l3_survey) | **GET** /product-relations/surveys-to-l3/{relationId} | 
*ProductRelationsApi* | [**product_relations_controller_update_compilation**](docs/ProductRelationsApi.md#product_relations_controller_update_compilation) | **PUT** /product-relations/compilation-to-l3/{relationId} | 
*ProductRelationsApi* | [**product_relations_controller_update_l0_survey**](docs/ProductRelationsApi.md#product_relations_controller_update_l0_survey) | **PUT** /product-relations/surveys-to-l0/{relationId} | 
*ProductRelationsApi* | [**product_relations_controller_update_l3_survey**](docs/ProductRelationsApi.md#product_relations_controller_update_l3_survey) | **PUT** /product-relations/surveys-to-l3/{relationId} | 
*ProductsL0DistApi* | [**products_l0_dist_controller_create**](docs/ProductsL0DistApi.md#products_l0_dist_controller_create) | **POST** /products/l0-dist | 
*ProductsL0DistApi* | [**products_l0_dist_controller_create_instrument**](docs/ProductsL0DistApi.md#products_l0_dist_controller_create_instrument) | **POST** /products/l0-dist/{productId}/instrument-files | 
*ProductsL0DistApi* | [**products_l0_dist_controller_delete**](docs/ProductsL0DistApi.md#products_l0_dist_controller_delete) | **DELETE** /products/l0-dist/{productId} | 
*ProductsL0DistApi* | [**products_l0_dist_controller_delete_instrument**](docs/ProductsL0DistApi.md#products_l0_dist_controller_delete_instrument) | **DELETE** /products/l0-dist/{productId}/instrument-files/{instrumentId} | 
*ProductsL0DistApi* | [**products_l0_dist_controller_find_all**](docs/ProductsL0DistApi.md#products_l0_dist_controller_find_all) | **GET** /products/l0-dist | 
*ProductsL0DistApi* | [**products_l0_dist_controller_find_instruments**](docs/ProductsL0DistApi.md#products_l0_dist_controller_find_instruments) | **GET** /products/l0-dist/{productId}/instrument-files | 
*ProductsL0DistApi* | [**products_l0_dist_controller_find_one**](docs/ProductsL0DistApi.md#products_l0_dist_controller_find_one) | **GET** /products/l0-dist/{productId} | 
*ProductsL0DistApi* | [**products_l0_dist_controller_find_one_instrument**](docs/ProductsL0DistApi.md#products_l0_dist_controller_find_one_instrument) | **GET** /products/l0-dist/{productId}/instrument-files/{instrumentId} | 
*ProductsL0DistApi* | [**products_l0_dist_controller_update**](docs/ProductsL0DistApi.md#products_l0_dist_controller_update) | **PUT** /products/l0-dist/{productId} | 
*ProductsL0DistApi* | [**products_l0_dist_controller_update_instrument**](docs/ProductsL0DistApi.md#products_l0_dist_controller_update_instrument) | **PUT** /products/l0-dist/{productId}/instrument-files/{instrumentId} | 
*ProductsL0SrcApi* | [**products_l0_src_controller_create**](docs/ProductsL0SrcApi.md#products_l0_src_controller_create) | **POST** /products/l0-src | 
*ProductsL0SrcApi* | [**products_l0_src_controller_delete**](docs/ProductsL0SrcApi.md#products_l0_src_controller_delete) | **DELETE** /products/l0-src/{productId} | 
*ProductsL0SrcApi* | [**products_l0_src_controller_find_all**](docs/ProductsL0SrcApi.md#products_l0_src_controller_find_all) | **GET** /products/l0-src | 
*ProductsL0SrcApi* | [**products_l0_src_controller_find_one**](docs/ProductsL0SrcApi.md#products_l0_src_controller_find_one) | **GET** /products/l0-src/{productId} | 
*ProductsL0SrcApi* | [**products_l0_src_controller_update**](docs/ProductsL0SrcApi.md#products_l0_src_controller_update) | **PUT** /products/l0-src/{productId} | 
*ProductsL3DistApi* | [**products_l3_dist_controller_create**](docs/ProductsL3DistApi.md#products_l3_dist_controller_create) | **POST** /products/l3-dist | 
*ProductsL3DistApi* | [**products_l3_dist_controller_delete**](docs/ProductsL3DistApi.md#products_l3_dist_controller_delete) | **DELETE** /products/l3-dist/{productId} | 
*ProductsL3DistApi* | [**products_l3_dist_controller_find_all**](docs/ProductsL3DistApi.md#products_l3_dist_controller_find_all) | **GET** /products/l3-dist | 
*ProductsL3DistApi* | [**products_l3_dist_controller_find_one**](docs/ProductsL3DistApi.md#products_l3_dist_controller_find_one) | **GET** /products/l3-dist/{productId} | 
*ProductsL3DistApi* | [**products_l3_dist_controller_update**](docs/ProductsL3DistApi.md#products_l3_dist_controller_update) | **PUT** /products/l3-dist/{productId} | 
*ProductsL3SrcApi* | [**products_l3_src_controller_create**](docs/ProductsL3SrcApi.md#products_l3_src_controller_create) | **POST** /products/l3-src | 
*ProductsL3SrcApi* | [**products_l3_src_controller_delete**](docs/ProductsL3SrcApi.md#products_l3_src_controller_delete) | **DELETE** /products/l3-src/{productId} | 
*ProductsL3SrcApi* | [**products_l3_src_controller_find_all**](docs/ProductsL3SrcApi.md#products_l3_src_controller_find_all) | **GET** /products/l3-src | 
*ProductsL3SrcApi* | [**products_l3_src_controller_find_one**](docs/ProductsL3SrcApi.md#products_l3_src_controller_find_one) | **GET** /products/l3-src/{productId} | 
*ProductsL3SrcApi* | [**products_l3_src_controller_update**](docs/ProductsL3SrcApi.md#products_l3_src_controller_update) | **PUT** /products/l3-src/{productId} | 
*SurveysApi* | [**surveys_controller_create**](docs/SurveysApi.md#surveys_controller_create) | **POST** /surveys | 
*SurveysApi* | [**surveys_controller_find_all**](docs/SurveysApi.md#surveys_controller_find_all) | **GET** /surveys | 
*SurveysApi* | [**surveys_controller_find_one**](docs/SurveysApi.md#surveys_controller_find_one) | **GET** /surveys/{surveyId} | 
*SurveysApi* | [**surveys_controller_remove**](docs/SurveysApi.md#surveys_controller_remove) | **DELETE** /surveys/{surveyId} | 
*SurveysApi* | [**surveys_controller_update**](docs/SurveysApi.md#surveys_controller_update) | **PUT** /surveys/{surveyId} | 


## Documentation For Models

 - [Compilation](docs/Compilation.md)
 - [CompilationDto](docs/CompilationDto.md)
 - [CompilationL3Relation](docs/CompilationL3Relation.md)
 - [CompilationL3RelationDto](docs/CompilationL3RelationDto.md)
 - [ProductL0Dist](docs/ProductL0Dist.md)
 - [ProductL0DistDto](docs/ProductL0DistDto.md)
 - [ProductL0InstrumentFile](docs/ProductL0InstrumentFile.md)
 - [ProductL0InstrumentFileDto](docs/ProductL0InstrumentFileDto.md)
 - [ProductL0Src](docs/ProductL0Src.md)
 - [ProductL0SrcDto](docs/ProductL0SrcDto.md)
 - [ProductL3Dist](docs/ProductL3Dist.md)
 - [ProductL3DistDto](docs/ProductL3DistDto.md)
 - [ProductL3Src](docs/ProductL3Src.md)
 - [ProductL3SrcDto](docs/ProductL3SrcDto.md)
 - [RelationSummaryDto](docs/RelationSummaryDto.md)
 - [Survey](docs/Survey.md)
 - [SurveyDto](docs/SurveyDto.md)
 - [SurveyL0Relation](docs/SurveyL0Relation.md)
 - [SurveyL0RelationDto](docs/SurveyL0RelationDto.md)
 - [SurveyL3Relation](docs/SurveyL3Relation.md)
 - [SurveyL3RelationDto](docs/SurveyL3RelationDto.md)


## Documentation For Authorization


## access-token

- **Type**: Bearer authentication (JWT)


## Author

AusSeabed@ga.gov.au


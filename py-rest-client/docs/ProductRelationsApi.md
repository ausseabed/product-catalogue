# product_catalogue_py_rest_client.ProductRelationsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**product_relations_controller_create_compilation**](ProductRelationsApi.md#product_relations_controller_create_compilation) | **POST** /product-relations/compilation-to-l3 | 
[**product_relations_controller_create_l0_survey**](ProductRelationsApi.md#product_relations_controller_create_l0_survey) | **POST** /product-relations/surveys-to-l0 | 
[**product_relations_controller_create_l3_survey**](ProductRelationsApi.md#product_relations_controller_create_l3_survey) | **POST** /product-relations/surveys-to-l3 | 
[**product_relations_controller_delete_compilation**](ProductRelationsApi.md#product_relations_controller_delete_compilation) | **DELETE** /product-relations/compilation-to-l3/{relationId} | 
[**product_relations_controller_delete_l0_survey**](ProductRelationsApi.md#product_relations_controller_delete_l0_survey) | **DELETE** /product-relations/surveys-to-l0/{relationId} | 
[**product_relations_controller_delete_l3_survey**](ProductRelationsApi.md#product_relations_controller_delete_l3_survey) | **DELETE** /product-relations/surveys-to-l3/{relationId} | 
[**product_relations_controller_find_all_l0_survey**](ProductRelationsApi.md#product_relations_controller_find_all_l0_survey) | **GET** /product-relations/surveys-to-l0 | 
[**product_relations_controller_find_all_l3_compilation**](ProductRelationsApi.md#product_relations_controller_find_all_l3_compilation) | **GET** /product-relations/compilation-to-l3 | 
[**product_relations_controller_find_all_l3_survey**](ProductRelationsApi.md#product_relations_controller_find_all_l3_survey) | **GET** /product-relations/surveys-to-l3 | 
[**product_relations_controller_find_conditional_compilation**](ProductRelationsApi.md#product_relations_controller_find_conditional_compilation) | **GET** /product-relations/compilation-to-l3/compilation/{compilationId} | 
[**product_relations_controller_find_conditional_l0_survey**](ProductRelationsApi.md#product_relations_controller_find_conditional_l0_survey) | **GET** /product-relations/surveys-to-l0/survey/{surveyId} | 
[**product_relations_controller_find_conditional_l3_survey**](ProductRelationsApi.md#product_relations_controller_find_conditional_l3_survey) | **GET** /product-relations/surveys-to-l3/survey/{surveyId} | 
[**product_relations_controller_find_one_compilation**](ProductRelationsApi.md#product_relations_controller_find_one_compilation) | **GET** /product-relations/compilation-to-l3/{relationId} | 
[**product_relations_controller_find_one_l0_survey**](ProductRelationsApi.md#product_relations_controller_find_one_l0_survey) | **GET** /product-relations/surveys-to-l0/{relationId} | 
[**product_relations_controller_find_one_l3_survey**](ProductRelationsApi.md#product_relations_controller_find_one_l3_survey) | **GET** /product-relations/surveys-to-l3/{relationId} | 
[**product_relations_controller_update_compilation**](ProductRelationsApi.md#product_relations_controller_update_compilation) | **PUT** /product-relations/compilation-to-l3/{relationId} | 
[**product_relations_controller_update_l0_survey**](ProductRelationsApi.md#product_relations_controller_update_l0_survey) | **PUT** /product-relations/surveys-to-l0/{relationId} | 
[**product_relations_controller_update_l3_survey**](ProductRelationsApi.md#product_relations_controller_update_l3_survey) | **PUT** /product-relations/surveys-to-l3/{relationId} | 


# **product_relations_controller_create_compilation**
> object product_relations_controller_create_compilation(compilation_l3_relation_dto)



### Example

* Bearer (JWT) Authentication (access-token):
```python
from __future__ import print_function
import time
import product_catalogue_py_rest_client
from product_catalogue_py_rest_client.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = product_catalogue_py_rest_client.Configuration(
    host = "http://localhost"
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
    api_instance = product_catalogue_py_rest_client.ProductRelationsApi(api_client)
    compilation_l3_relation_dto = product_catalogue_py_rest_client.CompilationL3RelationDto() # CompilationL3RelationDto | 

    try:
        api_response = api_instance.product_relations_controller_create_compilation(compilation_l3_relation_dto)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ProductRelationsApi->product_relations_controller_create_compilation: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **compilation_l3_relation_dto** | [**CompilationL3RelationDto**](CompilationL3RelationDto.md)|  | 

### Return type

**object**

### Authorization

[access-token](../README.md#access-token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **product_relations_controller_create_l0_survey**
> object product_relations_controller_create_l0_survey(survey_l0_relation_dto)



### Example

* Bearer (JWT) Authentication (access-token):
```python
from __future__ import print_function
import time
import product_catalogue_py_rest_client
from product_catalogue_py_rest_client.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = product_catalogue_py_rest_client.Configuration(
    host = "http://localhost"
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
    api_instance = product_catalogue_py_rest_client.ProductRelationsApi(api_client)
    survey_l0_relation_dto = product_catalogue_py_rest_client.SurveyL0RelationDto() # SurveyL0RelationDto | 

    try:
        api_response = api_instance.product_relations_controller_create_l0_survey(survey_l0_relation_dto)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ProductRelationsApi->product_relations_controller_create_l0_survey: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **survey_l0_relation_dto** | [**SurveyL0RelationDto**](SurveyL0RelationDto.md)|  | 

### Return type

**object**

### Authorization

[access-token](../README.md#access-token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **product_relations_controller_create_l3_survey**
> object product_relations_controller_create_l3_survey(survey_l3_relation_dto)



### Example

* Bearer (JWT) Authentication (access-token):
```python
from __future__ import print_function
import time
import product_catalogue_py_rest_client
from product_catalogue_py_rest_client.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = product_catalogue_py_rest_client.Configuration(
    host = "http://localhost"
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
    api_instance = product_catalogue_py_rest_client.ProductRelationsApi(api_client)
    survey_l3_relation_dto = product_catalogue_py_rest_client.SurveyL3RelationDto() # SurveyL3RelationDto | 

    try:
        api_response = api_instance.product_relations_controller_create_l3_survey(survey_l3_relation_dto)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ProductRelationsApi->product_relations_controller_create_l3_survey: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **survey_l3_relation_dto** | [**SurveyL3RelationDto**](SurveyL3RelationDto.md)|  | 

### Return type

**object**

### Authorization

[access-token](../README.md#access-token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **product_relations_controller_delete_compilation**
> object product_relations_controller_delete_compilation(relation_id)



### Example

* Bearer (JWT) Authentication (access-token):
```python
from __future__ import print_function
import time
import product_catalogue_py_rest_client
from product_catalogue_py_rest_client.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = product_catalogue_py_rest_client.Configuration(
    host = "http://localhost"
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
    api_instance = product_catalogue_py_rest_client.ProductRelationsApi(api_client)
    relation_id = 3.4 # float | 

    try:
        api_response = api_instance.product_relations_controller_delete_compilation(relation_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ProductRelationsApi->product_relations_controller_delete_compilation: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relation_id** | **float**|  | 

### Return type

**object**

### Authorization

[access-token](../README.md#access-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**400** | Could not find the compilation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **product_relations_controller_delete_l0_survey**
> object product_relations_controller_delete_l0_survey(relation_id)



### Example

* Bearer (JWT) Authentication (access-token):
```python
from __future__ import print_function
import time
import product_catalogue_py_rest_client
from product_catalogue_py_rest_client.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = product_catalogue_py_rest_client.Configuration(
    host = "http://localhost"
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
    api_instance = product_catalogue_py_rest_client.ProductRelationsApi(api_client)
    relation_id = 3.4 # float | 

    try:
        api_response = api_instance.product_relations_controller_delete_l0_survey(relation_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ProductRelationsApi->product_relations_controller_delete_l0_survey: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relation_id** | **float**|  | 

### Return type

**object**

### Authorization

[access-token](../README.md#access-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**400** | Could not find the compilation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **product_relations_controller_delete_l3_survey**
> object product_relations_controller_delete_l3_survey(relation_id)



### Example

* Bearer (JWT) Authentication (access-token):
```python
from __future__ import print_function
import time
import product_catalogue_py_rest_client
from product_catalogue_py_rest_client.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = product_catalogue_py_rest_client.Configuration(
    host = "http://localhost"
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
    api_instance = product_catalogue_py_rest_client.ProductRelationsApi(api_client)
    relation_id = 3.4 # float | 

    try:
        api_response = api_instance.product_relations_controller_delete_l3_survey(relation_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ProductRelationsApi->product_relations_controller_delete_l3_survey: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relation_id** | **float**|  | 

### Return type

**object**

### Authorization

[access-token](../README.md#access-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**400** | Could not find the compilation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **product_relations_controller_find_all_l0_survey**
> list[RelationSummaryDto] product_relations_controller_find_all_l0_survey()



### Example

* Bearer (JWT) Authentication (access-token):
```python
from __future__ import print_function
import time
import product_catalogue_py_rest_client
from product_catalogue_py_rest_client.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = product_catalogue_py_rest_client.Configuration(
    host = "http://localhost"
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
    api_instance = product_catalogue_py_rest_client.ProductRelationsApi(api_client)
    
    try:
        api_response = api_instance.product_relations_controller_find_all_l0_survey()
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ProductRelationsApi->product_relations_controller_find_all_l0_survey: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**list[RelationSummaryDto]**](RelationSummaryDto.md)

### Authorization

[access-token](../README.md#access-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **product_relations_controller_find_all_l3_compilation**
> list[RelationSummaryDto] product_relations_controller_find_all_l3_compilation()



### Example

* Bearer (JWT) Authentication (access-token):
```python
from __future__ import print_function
import time
import product_catalogue_py_rest_client
from product_catalogue_py_rest_client.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = product_catalogue_py_rest_client.Configuration(
    host = "http://localhost"
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
    api_instance = product_catalogue_py_rest_client.ProductRelationsApi(api_client)
    
    try:
        api_response = api_instance.product_relations_controller_find_all_l3_compilation()
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ProductRelationsApi->product_relations_controller_find_all_l3_compilation: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**list[RelationSummaryDto]**](RelationSummaryDto.md)

### Authorization

[access-token](../README.md#access-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **product_relations_controller_find_all_l3_survey**
> list[RelationSummaryDto] product_relations_controller_find_all_l3_survey()



### Example

* Bearer (JWT) Authentication (access-token):
```python
from __future__ import print_function
import time
import product_catalogue_py_rest_client
from product_catalogue_py_rest_client.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = product_catalogue_py_rest_client.Configuration(
    host = "http://localhost"
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
    api_instance = product_catalogue_py_rest_client.ProductRelationsApi(api_client)
    
    try:
        api_response = api_instance.product_relations_controller_find_all_l3_survey()
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ProductRelationsApi->product_relations_controller_find_all_l3_survey: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**list[RelationSummaryDto]**](RelationSummaryDto.md)

### Authorization

[access-token](../README.md#access-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **product_relations_controller_find_conditional_compilation**
> object product_relations_controller_find_conditional_compilation(compilation_id)



### Example

* Bearer (JWT) Authentication (access-token):
```python
from __future__ import print_function
import time
import product_catalogue_py_rest_client
from product_catalogue_py_rest_client.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = product_catalogue_py_rest_client.Configuration(
    host = "http://localhost"
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
    api_instance = product_catalogue_py_rest_client.ProductRelationsApi(api_client)
    compilation_id = 3.4 # float | 

    try:
        api_response = api_instance.product_relations_controller_find_conditional_compilation(compilation_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ProductRelationsApi->product_relations_controller_find_conditional_compilation: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **compilation_id** | **float**|  | 

### Return type

**object**

### Authorization

[access-token](../README.md#access-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**400** | Could not find the compilation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **product_relations_controller_find_conditional_l0_survey**
> object product_relations_controller_find_conditional_l0_survey(survey_id)



### Example

* Bearer (JWT) Authentication (access-token):
```python
from __future__ import print_function
import time
import product_catalogue_py_rest_client
from product_catalogue_py_rest_client.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = product_catalogue_py_rest_client.Configuration(
    host = "http://localhost"
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
    api_instance = product_catalogue_py_rest_client.ProductRelationsApi(api_client)
    survey_id = 3.4 # float | 

    try:
        api_response = api_instance.product_relations_controller_find_conditional_l0_survey(survey_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ProductRelationsApi->product_relations_controller_find_conditional_l0_survey: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **survey_id** | **float**|  | 

### Return type

**object**

### Authorization

[access-token](../README.md#access-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**400** | Could not find the survey |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **product_relations_controller_find_conditional_l3_survey**
> object product_relations_controller_find_conditional_l3_survey(survey_id)



### Example

* Bearer (JWT) Authentication (access-token):
```python
from __future__ import print_function
import time
import product_catalogue_py_rest_client
from product_catalogue_py_rest_client.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = product_catalogue_py_rest_client.Configuration(
    host = "http://localhost"
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
    api_instance = product_catalogue_py_rest_client.ProductRelationsApi(api_client)
    survey_id = 3.4 # float | 

    try:
        api_response = api_instance.product_relations_controller_find_conditional_l3_survey(survey_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ProductRelationsApi->product_relations_controller_find_conditional_l3_survey: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **survey_id** | **float**|  | 

### Return type

**object**

### Authorization

[access-token](../README.md#access-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**400** | Could not find the survey |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **product_relations_controller_find_one_compilation**
> object product_relations_controller_find_one_compilation(relation_id)



### Example

* Bearer (JWT) Authentication (access-token):
```python
from __future__ import print_function
import time
import product_catalogue_py_rest_client
from product_catalogue_py_rest_client.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = product_catalogue_py_rest_client.Configuration(
    host = "http://localhost"
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
    api_instance = product_catalogue_py_rest_client.ProductRelationsApi(api_client)
    relation_id = 3.4 # float | 

    try:
        api_response = api_instance.product_relations_controller_find_one_compilation(relation_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ProductRelationsApi->product_relations_controller_find_one_compilation: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relation_id** | **float**|  | 

### Return type

**object**

### Authorization

[access-token](../README.md#access-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**400** | Could not find the compilation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **product_relations_controller_find_one_l0_survey**
> object product_relations_controller_find_one_l0_survey(relation_id)



### Example

* Bearer (JWT) Authentication (access-token):
```python
from __future__ import print_function
import time
import product_catalogue_py_rest_client
from product_catalogue_py_rest_client.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = product_catalogue_py_rest_client.Configuration(
    host = "http://localhost"
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
    api_instance = product_catalogue_py_rest_client.ProductRelationsApi(api_client)
    relation_id = 3.4 # float | 

    try:
        api_response = api_instance.product_relations_controller_find_one_l0_survey(relation_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ProductRelationsApi->product_relations_controller_find_one_l0_survey: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relation_id** | **float**|  | 

### Return type

**object**

### Authorization

[access-token](../README.md#access-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**400** | Could not find the compilation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **product_relations_controller_find_one_l3_survey**
> object product_relations_controller_find_one_l3_survey(relation_id)



### Example

* Bearer (JWT) Authentication (access-token):
```python
from __future__ import print_function
import time
import product_catalogue_py_rest_client
from product_catalogue_py_rest_client.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = product_catalogue_py_rest_client.Configuration(
    host = "http://localhost"
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
    api_instance = product_catalogue_py_rest_client.ProductRelationsApi(api_client)
    relation_id = 3.4 # float | 

    try:
        api_response = api_instance.product_relations_controller_find_one_l3_survey(relation_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ProductRelationsApi->product_relations_controller_find_one_l3_survey: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relation_id** | **float**|  | 

### Return type

**object**

### Authorization

[access-token](../README.md#access-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**400** | Could not find the survey |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **product_relations_controller_update_compilation**
> object product_relations_controller_update_compilation(relation_id, compilation_l3_relation_dto)



### Example

* Bearer (JWT) Authentication (access-token):
```python
from __future__ import print_function
import time
import product_catalogue_py_rest_client
from product_catalogue_py_rest_client.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = product_catalogue_py_rest_client.Configuration(
    host = "http://localhost"
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
    api_instance = product_catalogue_py_rest_client.ProductRelationsApi(api_client)
    relation_id = 3.4 # float | 
compilation_l3_relation_dto = product_catalogue_py_rest_client.CompilationL3RelationDto() # CompilationL3RelationDto | 

    try:
        api_response = api_instance.product_relations_controller_update_compilation(relation_id, compilation_l3_relation_dto)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ProductRelationsApi->product_relations_controller_update_compilation: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relation_id** | **float**|  | 
 **compilation_l3_relation_dto** | [**CompilationL3RelationDto**](CompilationL3RelationDto.md)|  | 

### Return type

**object**

### Authorization

[access-token](../README.md#access-token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**400** | Could not find the compilation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **product_relations_controller_update_l0_survey**
> object product_relations_controller_update_l0_survey(relation_id, survey_l0_relation_dto)



### Example

* Bearer (JWT) Authentication (access-token):
```python
from __future__ import print_function
import time
import product_catalogue_py_rest_client
from product_catalogue_py_rest_client.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = product_catalogue_py_rest_client.Configuration(
    host = "http://localhost"
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
    api_instance = product_catalogue_py_rest_client.ProductRelationsApi(api_client)
    relation_id = 3.4 # float | 
survey_l0_relation_dto = product_catalogue_py_rest_client.SurveyL0RelationDto() # SurveyL0RelationDto | 

    try:
        api_response = api_instance.product_relations_controller_update_l0_survey(relation_id, survey_l0_relation_dto)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ProductRelationsApi->product_relations_controller_update_l0_survey: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relation_id** | **float**|  | 
 **survey_l0_relation_dto** | [**SurveyL0RelationDto**](SurveyL0RelationDto.md)|  | 

### Return type

**object**

### Authorization

[access-token](../README.md#access-token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**400** | Could not find the survey |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **product_relations_controller_update_l3_survey**
> object product_relations_controller_update_l3_survey(relation_id, survey_l3_relation_dto)



### Example

* Bearer (JWT) Authentication (access-token):
```python
from __future__ import print_function
import time
import product_catalogue_py_rest_client
from product_catalogue_py_rest_client.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = product_catalogue_py_rest_client.Configuration(
    host = "http://localhost"
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
    api_instance = product_catalogue_py_rest_client.ProductRelationsApi(api_client)
    relation_id = 3.4 # float | 
survey_l3_relation_dto = product_catalogue_py_rest_client.SurveyL3RelationDto() # SurveyL3RelationDto | 

    try:
        api_response = api_instance.product_relations_controller_update_l3_survey(relation_id, survey_l3_relation_dto)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ProductRelationsApi->product_relations_controller_update_l3_survey: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relation_id** | **float**|  | 
 **survey_l3_relation_dto** | [**SurveyL3RelationDto**](SurveyL3RelationDto.md)|  | 

### Return type

**object**

### Authorization

[access-token](../README.md#access-token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**400** | Could not find the survey |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


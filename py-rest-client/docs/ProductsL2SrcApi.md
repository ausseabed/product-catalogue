# product_catalogue_py_rest_client.ProductsL2SrcApi

All URIs are relative to *http://localhost/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**products_l2_src_controller_create**](ProductsL2SrcApi.md#products_l2_src_controller_create) | **POST** /products/l2-src | 
[**products_l2_src_controller_delete**](ProductsL2SrcApi.md#products_l2_src_controller_delete) | **DELETE** /products/l2-src/{productId} | 
[**products_l2_src_controller_find_all**](ProductsL2SrcApi.md#products_l2_src_controller_find_all) | **GET** /products/l2-src | 
[**products_l2_src_controller_find_one**](ProductsL2SrcApi.md#products_l2_src_controller_find_one) | **GET** /products/l2-src/{productId} | 
[**products_l2_src_controller_update**](ProductsL2SrcApi.md#products_l2_src_controller_update) | **PUT** /products/l2-src/{productId} | 


# **products_l2_src_controller_create**
> ProductL2Src products_l2_src_controller_create(product_l2_src_dto)



### Example

* Bearer (JWT) Authentication (access-token):
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
    api_instance = product_catalogue_py_rest_client.ProductsL2SrcApi(api_client)
    product_l2_src_dto = product_catalogue_py_rest_client.ProductL2SrcDto() # ProductL2SrcDto | 

    try:
        api_response = api_instance.products_l2_src_controller_create(product_l2_src_dto)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ProductsL2SrcApi->products_l2_src_controller_create: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_l2_src_dto** | [**ProductL2SrcDto**](ProductL2SrcDto.md)|  | 

### Return type

[**ProductL2Src**](ProductL2Src.md)

### Authorization

[access-token](../README.md#access-token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** |  |  -  |
**401** | Unable to authenticate request. |  -  |
**408** | Server took too long to respond. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **products_l2_src_controller_delete**
> products_l2_src_controller_delete(product_id)



### Example

* Bearer (JWT) Authentication (access-token):
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
    api_instance = product_catalogue_py_rest_client.ProductsL2SrcApi(api_client)
    product_id = 3.4 # float | 

    try:
        api_instance.products_l2_src_controller_delete(product_id)
    except ApiException as e:
        print("Exception when calling ProductsL2SrcApi->products_l2_src_controller_delete: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **float**|  | 

### Return type

void (empty response body)

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
**401** | Unable to authenticate request. |  -  |
**408** | Server took too long to respond. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **products_l2_src_controller_find_all**
> list[ProductL2Src] products_l2_src_controller_find_all(snapshot_date_time=snapshot_date_time)



### Example

* Bearer (JWT) Authentication (access-token):
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
    api_instance = product_catalogue_py_rest_client.ProductsL2SrcApi(api_client)
    snapshot_date_time = '2013-10-20' # date |  (optional)

    try:
        api_response = api_instance.products_l2_src_controller_find_all(snapshot_date_time=snapshot_date_time)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ProductsL2SrcApi->products_l2_src_controller_find_all: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **snapshot_date_time** | [**date**](.md)|  | [optional] 

### Return type

[**list[ProductL2Src]**](ProductL2Src.md)

### Authorization

[access-token](../README.md#access-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**401** | Unable to authenticate request. |  -  |
**408** | Server took too long to respond. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **products_l2_src_controller_find_one**
> ProductL2Src products_l2_src_controller_find_one(product_id)



### Example

* Bearer (JWT) Authentication (access-token):
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
    api_instance = product_catalogue_py_rest_client.ProductsL2SrcApi(api_client)
    product_id = 3.4 # float | 

    try:
        api_response = api_instance.products_l2_src_controller_find_one(product_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ProductsL2SrcApi->products_l2_src_controller_find_one: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **float**|  | 

### Return type

[**ProductL2Src**](ProductL2Src.md)

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
**401** | Unable to authenticate request. |  -  |
**408** | Server took too long to respond. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **products_l2_src_controller_update**
> products_l2_src_controller_update(product_id, product_l2_src_dto)



### Example

* Bearer (JWT) Authentication (access-token):
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
    api_instance = product_catalogue_py_rest_client.ProductsL2SrcApi(api_client)
    product_id = 3.4 # float | 
product_l2_src_dto = product_catalogue_py_rest_client.ProductL2SrcDto() # ProductL2SrcDto | 

    try:
        api_instance.products_l2_src_controller_update(product_id, product_l2_src_dto)
    except ApiException as e:
        print("Exception when calling ProductsL2SrcApi->products_l2_src_controller_update: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **float**|  | 
 **product_l2_src_dto** | [**ProductL2SrcDto**](ProductL2SrcDto.md)|  | 

### Return type

void (empty response body)

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
**401** | Unable to authenticate request. |  -  |
**408** | Server took too long to respond. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


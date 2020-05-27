# product_catalogue_py_rest_client.ProductsL0DistApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**products_l0_dist_controller_create**](ProductsL0DistApi.md#products_l0_dist_controller_create) | **POST** /products/l0-dist | 
[**products_l0_dist_controller_create_instrument**](ProductsL0DistApi.md#products_l0_dist_controller_create_instrument) | **POST** /products/l0-dist/{productId}/instrument-files | 
[**products_l0_dist_controller_delete**](ProductsL0DistApi.md#products_l0_dist_controller_delete) | **DELETE** /products/l0-dist/{productId} | 
[**products_l0_dist_controller_delete_instrument**](ProductsL0DistApi.md#products_l0_dist_controller_delete_instrument) | **DELETE** /products/l0-dist/{productId}/instrument-files/{instrumentId} | 
[**products_l0_dist_controller_find_all**](ProductsL0DistApi.md#products_l0_dist_controller_find_all) | **GET** /products/l0-dist | 
[**products_l0_dist_controller_find_instruments**](ProductsL0DistApi.md#products_l0_dist_controller_find_instruments) | **GET** /products/l0-dist/{productId}/instrument-files | 
[**products_l0_dist_controller_find_one**](ProductsL0DistApi.md#products_l0_dist_controller_find_one) | **GET** /products/l0-dist/{productId} | 
[**products_l0_dist_controller_find_one_instrument**](ProductsL0DistApi.md#products_l0_dist_controller_find_one_instrument) | **GET** /products/l0-dist/{productId}/instrument-files/{instrumentId} | 
[**products_l0_dist_controller_update**](ProductsL0DistApi.md#products_l0_dist_controller_update) | **PUT** /products/l0-dist/{productId} | 
[**products_l0_dist_controller_update_instrument**](ProductsL0DistApi.md#products_l0_dist_controller_update_instrument) | **PUT** /products/l0-dist/{productId}/instrument-files/{instrumentId} | 


# **products_l0_dist_controller_create**
> object products_l0_dist_controller_create(product_l0_src_id, product_l0_dist_dto)



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
    api_instance = product_catalogue_py_rest_client.ProductsL0DistApi(api_client)
    product_l0_src_id = 3.4 # float | 
product_l0_dist_dto = product_catalogue_py_rest_client.ProductL0DistDto() # ProductL0DistDto | 

    try:
        api_response = api_instance.products_l0_dist_controller_create(product_l0_src_id, product_l0_dist_dto)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ProductsL0DistApi->products_l0_dist_controller_create: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_l0_src_id** | **float**|  | 
 **product_l0_dist_dto** | [**ProductL0DistDto**](ProductL0DistDto.md)|  | 

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

# **products_l0_dist_controller_create_instrument**
> object products_l0_dist_controller_create_instrument(product_id, product_l0_instrument_file_dto)



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
    api_instance = product_catalogue_py_rest_client.ProductsL0DistApi(api_client)
    product_id = 3.4 # float | 
product_l0_instrument_file_dto = product_catalogue_py_rest_client.ProductL0InstrumentFileDto() # ProductL0InstrumentFileDto | 

    try:
        api_response = api_instance.products_l0_dist_controller_create_instrument(product_id, product_l0_instrument_file_dto)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ProductsL0DistApi->products_l0_dist_controller_create_instrument: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **float**|  | 
 **product_l0_instrument_file_dto** | [**ProductL0InstrumentFileDto**](ProductL0InstrumentFileDto.md)|  | 

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

# **products_l0_dist_controller_delete**
> object products_l0_dist_controller_delete(product_id)



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
    api_instance = product_catalogue_py_rest_client.ProductsL0DistApi(api_client)
    product_id = 3.4 # float | 

    try:
        api_response = api_instance.products_l0_dist_controller_delete(product_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ProductsL0DistApi->products_l0_dist_controller_delete: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **float**|  | 

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

# **products_l0_dist_controller_delete_instrument**
> object products_l0_dist_controller_delete_instrument(product_id, instrument_id)



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
    api_instance = product_catalogue_py_rest_client.ProductsL0DistApi(api_client)
    product_id = 3.4 # float | 
instrument_id = 3.4 # float | 

    try:
        api_response = api_instance.products_l0_dist_controller_delete_instrument(product_id, instrument_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ProductsL0DistApi->products_l0_dist_controller_delete_instrument: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **float**|  | 
 **instrument_id** | **float**|  | 

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
**400** | Could not find the instrument |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **products_l0_dist_controller_find_all**
> object products_l0_dist_controller_find_all()



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
    api_instance = product_catalogue_py_rest_client.ProductsL0DistApi(api_client)
    
    try:
        api_response = api_instance.products_l0_dist_controller_find_all()
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ProductsL0DistApi->products_l0_dist_controller_find_all: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **products_l0_dist_controller_find_instruments**
> object products_l0_dist_controller_find_instruments(product_id)



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
    api_instance = product_catalogue_py_rest_client.ProductsL0DistApi(api_client)
    product_id = 3.4 # float | 

    try:
        api_response = api_instance.products_l0_dist_controller_find_instruments(product_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ProductsL0DistApi->products_l0_dist_controller_find_instruments: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **float**|  | 

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **products_l0_dist_controller_find_one**
> object products_l0_dist_controller_find_one(product_id)



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
    api_instance = product_catalogue_py_rest_client.ProductsL0DistApi(api_client)
    product_id = 3.4 # float | 

    try:
        api_response = api_instance.products_l0_dist_controller_find_one(product_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ProductsL0DistApi->products_l0_dist_controller_find_one: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **float**|  | 

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

# **products_l0_dist_controller_find_one_instrument**
> object products_l0_dist_controller_find_one_instrument(product_id, instrument_id)



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
    api_instance = product_catalogue_py_rest_client.ProductsL0DistApi(api_client)
    product_id = 3.4 # float | 
instrument_id = 3.4 # float | 

    try:
        api_response = api_instance.products_l0_dist_controller_find_one_instrument(product_id, instrument_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ProductsL0DistApi->products_l0_dist_controller_find_one_instrument: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **float**|  | 
 **instrument_id** | **float**|  | 

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **products_l0_dist_controller_update**
> object products_l0_dist_controller_update(product_id, product_l0_dist_dto)



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
    api_instance = product_catalogue_py_rest_client.ProductsL0DistApi(api_client)
    product_id = 3.4 # float | 
product_l0_dist_dto = product_catalogue_py_rest_client.ProductL0DistDto() # ProductL0DistDto | 

    try:
        api_response = api_instance.products_l0_dist_controller_update(product_id, product_l0_dist_dto)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ProductsL0DistApi->products_l0_dist_controller_update: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **float**|  | 
 **product_l0_dist_dto** | [**ProductL0DistDto**](ProductL0DistDto.md)|  | 

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

# **products_l0_dist_controller_update_instrument**
> object products_l0_dist_controller_update_instrument(product_id, instrument_id, product_l0_instrument_file_dto)



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
    api_instance = product_catalogue_py_rest_client.ProductsL0DistApi(api_client)
    product_id = 3.4 # float | 
instrument_id = 3.4 # float | 
product_l0_instrument_file_dto = product_catalogue_py_rest_client.ProductL0InstrumentFileDto() # ProductL0InstrumentFileDto | 

    try:
        api_response = api_instance.products_l0_dist_controller_update_instrument(product_id, instrument_id, product_l0_instrument_file_dto)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ProductsL0DistApi->products_l0_dist_controller_update_instrument: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **float**|  | 
 **instrument_id** | **float**|  | 
 **product_l0_instrument_file_dto** | [**ProductL0InstrumentFileDto**](ProductL0InstrumentFileDto.md)|  | 

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
**400** | Could not find the instrument |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


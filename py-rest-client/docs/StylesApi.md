# product_catalogue_py_rest_client.StylesApi

All URIs are relative to *http://localhost/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**styles_controller_find_all**](StylesApi.md#styles_controller_find_all) | **GET** /styles | 


# **styles_controller_find_all**
> list[Style] styles_controller_find_all()



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
    api_instance = product_catalogue_py_rest_client.StylesApi(api_client)
    
    try:
        api_response = api_instance.styles_controller_find_all()
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling StylesApi->styles_controller_find_all: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**list[Style]**](Style.md)

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


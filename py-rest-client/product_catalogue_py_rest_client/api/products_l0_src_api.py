# coding: utf-8

"""
    AusSeabed product catalogue

    The API description for the Ausseabed product catalogue inventory  # noqa: E501

    The version of the OpenAPI document: 0.2.1
    Contact: AusSeabed@ga.gov.au
    Generated by: https://openapi-generator.tech
"""


from __future__ import absolute_import

import re  # noqa: F401

# python 2 and python 3 compatibility library
import six

from product_catalogue_py_rest_client.api_client import ApiClient
from product_catalogue_py_rest_client.exceptions import (  # noqa: F401
    ApiTypeError,
    ApiValueError
)


class ProductsL0SrcApi(object):
    """NOTE: This class is auto generated by OpenAPI Generator
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    def __init__(self, api_client=None):
        if api_client is None:
            api_client = ApiClient()
        self.api_client = api_client

    def products_l0_src_controller_create(self, product_l0_src_dto, **kwargs):  # noqa: E501
        """products_l0_src_controller_create  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True

        >>> thread = api.products_l0_src_controller_create(product_l0_src_dto, async_req=True)
        >>> result = thread.get()

        :param product_l0_src_dto: (required)
        :type product_l0_src_dto: ProductL0SrcDto
        :param async_req: Whether to execute the request asynchronously.
        :type async_req: bool, optional
        :param _preload_content: if False, the urllib3.HTTPResponse object will
                                 be returned without reading/decoding response
                                 data. Default is True.
        :type _preload_content: bool, optional
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :return: Returns the result object.
                 If the method is called asynchronously,
                 returns the request thread.
        :rtype: ProductL0Src
        """
        kwargs['_return_http_data_only'] = True
        return self.products_l0_src_controller_create_with_http_info(product_l0_src_dto, **kwargs)  # noqa: E501

    def products_l0_src_controller_create_with_http_info(self, product_l0_src_dto, **kwargs):  # noqa: E501
        """products_l0_src_controller_create  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True

        >>> thread = api.products_l0_src_controller_create_with_http_info(product_l0_src_dto, async_req=True)
        >>> result = thread.get()

        :param product_l0_src_dto: (required)
        :type product_l0_src_dto: ProductL0SrcDto
        :param async_req: Whether to execute the request asynchronously.
        :type async_req: bool, optional
        :param _return_http_data_only: response data without head status code
                                       and headers
        :type _return_http_data_only: bool, optional
        :param _preload_content: if False, the urllib3.HTTPResponse object will
                                 be returned without reading/decoding response
                                 data. Default is True.
        :type _preload_content: bool, optional
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the authentication
                              in the spec for a single request.
        :type _request_auth: dict, optional
        :return: Returns the result object.
                 If the method is called asynchronously,
                 returns the request thread.
        :rtype: tuple(ProductL0Src, status_code(int), headers(HTTPHeaderDict))
        """

        local_var_params = locals()

        all_params = [
            'product_l0_src_dto'
        ]
        all_params.extend(
            [
                'async_req',
                '_return_http_data_only',
                '_preload_content',
                '_request_timeout',
                '_request_auth'
            ]
        )

        for key, val in six.iteritems(local_var_params['kwargs']):
            if key not in all_params:
                raise ApiTypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method products_l0_src_controller_create" % key
                )
            local_var_params[key] = val
        del local_var_params['kwargs']
        # verify the required parameter 'product_l0_src_dto' is set
        if self.api_client.client_side_validation and ('product_l0_src_dto' not in local_var_params or  # noqa: E501
                                                        local_var_params['product_l0_src_dto'] is None):  # noqa: E501
            raise ApiValueError("Missing the required parameter `product_l0_src_dto` when calling `products_l0_src_controller_create`")  # noqa: E501

        collection_formats = {}

        path_params = {}

        query_params = []

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        if 'product_l0_src_dto' in local_var_params:
            body_params = local_var_params['product_l0_src_dto']
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['application/json'])  # noqa: E501

        # HTTP header `Content-Type`
        header_params['Content-Type'] = self.api_client.select_header_content_type(  # noqa: E501
            ['application/json'])  # noqa: E501

        # Authentication setting
        auth_settings = ['access-token']  # noqa: E501

        return self.api_client.call_api(
            '/products/l0-src', 'POST',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='ProductL0Src',  # noqa: E501
            auth_settings=auth_settings,
            async_req=local_var_params.get('async_req'),
            _return_http_data_only=local_var_params.get('_return_http_data_only'),  # noqa: E501
            _preload_content=local_var_params.get('_preload_content', True),
            _request_timeout=local_var_params.get('_request_timeout'),
            collection_formats=collection_formats,
            _request_auth=local_var_params.get('_request_auth'))

    def products_l0_src_controller_delete(self, product_id, **kwargs):  # noqa: E501
        """products_l0_src_controller_delete  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True

        >>> thread = api.products_l0_src_controller_delete(product_id, async_req=True)
        >>> result = thread.get()

        :param product_id: (required)
        :type product_id: float
        :param async_req: Whether to execute the request asynchronously.
        :type async_req: bool, optional
        :param _preload_content: if False, the urllib3.HTTPResponse object will
                                 be returned without reading/decoding response
                                 data. Default is True.
        :type _preload_content: bool, optional
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :return: Returns the result object.
                 If the method is called asynchronously,
                 returns the request thread.
        :rtype: None
        """
        kwargs['_return_http_data_only'] = True
        return self.products_l0_src_controller_delete_with_http_info(product_id, **kwargs)  # noqa: E501

    def products_l0_src_controller_delete_with_http_info(self, product_id, **kwargs):  # noqa: E501
        """products_l0_src_controller_delete  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True

        >>> thread = api.products_l0_src_controller_delete_with_http_info(product_id, async_req=True)
        >>> result = thread.get()

        :param product_id: (required)
        :type product_id: float
        :param async_req: Whether to execute the request asynchronously.
        :type async_req: bool, optional
        :param _return_http_data_only: response data without head status code
                                       and headers
        :type _return_http_data_only: bool, optional
        :param _preload_content: if False, the urllib3.HTTPResponse object will
                                 be returned without reading/decoding response
                                 data. Default is True.
        :type _preload_content: bool, optional
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the authentication
                              in the spec for a single request.
        :type _request_auth: dict, optional
        :return: Returns the result object.
                 If the method is called asynchronously,
                 returns the request thread.
        :rtype: None
        """

        local_var_params = locals()

        all_params = [
            'product_id'
        ]
        all_params.extend(
            [
                'async_req',
                '_return_http_data_only',
                '_preload_content',
                '_request_timeout',
                '_request_auth'
            ]
        )

        for key, val in six.iteritems(local_var_params['kwargs']):
            if key not in all_params:
                raise ApiTypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method products_l0_src_controller_delete" % key
                )
            local_var_params[key] = val
        del local_var_params['kwargs']
        # verify the required parameter 'product_id' is set
        if self.api_client.client_side_validation and ('product_id' not in local_var_params or  # noqa: E501
                                                        local_var_params['product_id'] is None):  # noqa: E501
            raise ApiValueError("Missing the required parameter `product_id` when calling `products_l0_src_controller_delete`")  # noqa: E501

        collection_formats = {}

        path_params = {}
        if 'product_id' in local_var_params:
            path_params['productId'] = local_var_params['product_id']  # noqa: E501

        query_params = []

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['application/json'])  # noqa: E501

        # Authentication setting
        auth_settings = ['access-token']  # noqa: E501

        return self.api_client.call_api(
            '/products/l0-src/{productId}', 'DELETE',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type=None,  # noqa: E501
            auth_settings=auth_settings,
            async_req=local_var_params.get('async_req'),
            _return_http_data_only=local_var_params.get('_return_http_data_only'),  # noqa: E501
            _preload_content=local_var_params.get('_preload_content', True),
            _request_timeout=local_var_params.get('_request_timeout'),
            collection_formats=collection_formats,
            _request_auth=local_var_params.get('_request_auth'))

    def products_l0_src_controller_find_all(self, **kwargs):  # noqa: E501
        """products_l0_src_controller_find_all  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True

        >>> thread = api.products_l0_src_controller_find_all(async_req=True)
        >>> result = thread.get()

        :param snapshot_date_time:
        :type snapshot_date_time: date
        :param async_req: Whether to execute the request asynchronously.
        :type async_req: bool, optional
        :param _preload_content: if False, the urllib3.HTTPResponse object will
                                 be returned without reading/decoding response
                                 data. Default is True.
        :type _preload_content: bool, optional
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :return: Returns the result object.
                 If the method is called asynchronously,
                 returns the request thread.
        :rtype: list[ProductL0Src]
        """
        kwargs['_return_http_data_only'] = True
        return self.products_l0_src_controller_find_all_with_http_info(**kwargs)  # noqa: E501

    def products_l0_src_controller_find_all_with_http_info(self, **kwargs):  # noqa: E501
        """products_l0_src_controller_find_all  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True

        >>> thread = api.products_l0_src_controller_find_all_with_http_info(async_req=True)
        >>> result = thread.get()

        :param snapshot_date_time:
        :type snapshot_date_time: date
        :param async_req: Whether to execute the request asynchronously.
        :type async_req: bool, optional
        :param _return_http_data_only: response data without head status code
                                       and headers
        :type _return_http_data_only: bool, optional
        :param _preload_content: if False, the urllib3.HTTPResponse object will
                                 be returned without reading/decoding response
                                 data. Default is True.
        :type _preload_content: bool, optional
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the authentication
                              in the spec for a single request.
        :type _request_auth: dict, optional
        :return: Returns the result object.
                 If the method is called asynchronously,
                 returns the request thread.
        :rtype: tuple(list[ProductL0Src], status_code(int), headers(HTTPHeaderDict))
        """

        local_var_params = locals()

        all_params = [
            'snapshot_date_time'
        ]
        all_params.extend(
            [
                'async_req',
                '_return_http_data_only',
                '_preload_content',
                '_request_timeout',
                '_request_auth'
            ]
        )

        for key, val in six.iteritems(local_var_params['kwargs']):
            if key not in all_params:
                raise ApiTypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method products_l0_src_controller_find_all" % key
                )
            local_var_params[key] = val
        del local_var_params['kwargs']

        collection_formats = {}

        path_params = {}

        query_params = []
        if 'snapshot_date_time' in local_var_params and local_var_params['snapshot_date_time'] is not None:  # noqa: E501
            query_params.append(('snapshotDateTime', local_var_params['snapshot_date_time']))  # noqa: E501

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['application/json'])  # noqa: E501

        # Authentication setting
        auth_settings = ['access-token']  # noqa: E501

        return self.api_client.call_api(
            '/products/l0-src', 'GET',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='list[ProductL0Src]',  # noqa: E501
            auth_settings=auth_settings,
            async_req=local_var_params.get('async_req'),
            _return_http_data_only=local_var_params.get('_return_http_data_only'),  # noqa: E501
            _preload_content=local_var_params.get('_preload_content', True),
            _request_timeout=local_var_params.get('_request_timeout'),
            collection_formats=collection_formats,
            _request_auth=local_var_params.get('_request_auth'))

    def products_l0_src_controller_find_one(self, product_id, **kwargs):  # noqa: E501
        """products_l0_src_controller_find_one  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True

        >>> thread = api.products_l0_src_controller_find_one(product_id, async_req=True)
        >>> result = thread.get()

        :param product_id: (required)
        :type product_id: float
        :param async_req: Whether to execute the request asynchronously.
        :type async_req: bool, optional
        :param _preload_content: if False, the urllib3.HTTPResponse object will
                                 be returned without reading/decoding response
                                 data. Default is True.
        :type _preload_content: bool, optional
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :return: Returns the result object.
                 If the method is called asynchronously,
                 returns the request thread.
        :rtype: ProductL0Src
        """
        kwargs['_return_http_data_only'] = True
        return self.products_l0_src_controller_find_one_with_http_info(product_id, **kwargs)  # noqa: E501

    def products_l0_src_controller_find_one_with_http_info(self, product_id, **kwargs):  # noqa: E501
        """products_l0_src_controller_find_one  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True

        >>> thread = api.products_l0_src_controller_find_one_with_http_info(product_id, async_req=True)
        >>> result = thread.get()

        :param product_id: (required)
        :type product_id: float
        :param async_req: Whether to execute the request asynchronously.
        :type async_req: bool, optional
        :param _return_http_data_only: response data without head status code
                                       and headers
        :type _return_http_data_only: bool, optional
        :param _preload_content: if False, the urllib3.HTTPResponse object will
                                 be returned without reading/decoding response
                                 data. Default is True.
        :type _preload_content: bool, optional
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the authentication
                              in the spec for a single request.
        :type _request_auth: dict, optional
        :return: Returns the result object.
                 If the method is called asynchronously,
                 returns the request thread.
        :rtype: tuple(ProductL0Src, status_code(int), headers(HTTPHeaderDict))
        """

        local_var_params = locals()

        all_params = [
            'product_id'
        ]
        all_params.extend(
            [
                'async_req',
                '_return_http_data_only',
                '_preload_content',
                '_request_timeout',
                '_request_auth'
            ]
        )

        for key, val in six.iteritems(local_var_params['kwargs']):
            if key not in all_params:
                raise ApiTypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method products_l0_src_controller_find_one" % key
                )
            local_var_params[key] = val
        del local_var_params['kwargs']
        # verify the required parameter 'product_id' is set
        if self.api_client.client_side_validation and ('product_id' not in local_var_params or  # noqa: E501
                                                        local_var_params['product_id'] is None):  # noqa: E501
            raise ApiValueError("Missing the required parameter `product_id` when calling `products_l0_src_controller_find_one`")  # noqa: E501

        collection_formats = {}

        path_params = {}
        if 'product_id' in local_var_params:
            path_params['productId'] = local_var_params['product_id']  # noqa: E501

        query_params = []

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['application/json'])  # noqa: E501

        # Authentication setting
        auth_settings = ['access-token']  # noqa: E501

        return self.api_client.call_api(
            '/products/l0-src/{productId}', 'GET',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='ProductL0Src',  # noqa: E501
            auth_settings=auth_settings,
            async_req=local_var_params.get('async_req'),
            _return_http_data_only=local_var_params.get('_return_http_data_only'),  # noqa: E501
            _preload_content=local_var_params.get('_preload_content', True),
            _request_timeout=local_var_params.get('_request_timeout'),
            collection_formats=collection_formats,
            _request_auth=local_var_params.get('_request_auth'))

    def products_l0_src_controller_update(self, product_id, product_l0_src_dto, **kwargs):  # noqa: E501
        """products_l0_src_controller_update  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True

        >>> thread = api.products_l0_src_controller_update(product_id, product_l0_src_dto, async_req=True)
        >>> result = thread.get()

        :param product_id: (required)
        :type product_id: float
        :param product_l0_src_dto: (required)
        :type product_l0_src_dto: ProductL0SrcDto
        :param async_req: Whether to execute the request asynchronously.
        :type async_req: bool, optional
        :param _preload_content: if False, the urllib3.HTTPResponse object will
                                 be returned without reading/decoding response
                                 data. Default is True.
        :type _preload_content: bool, optional
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :return: Returns the result object.
                 If the method is called asynchronously,
                 returns the request thread.
        :rtype: None
        """
        kwargs['_return_http_data_only'] = True
        return self.products_l0_src_controller_update_with_http_info(product_id, product_l0_src_dto, **kwargs)  # noqa: E501

    def products_l0_src_controller_update_with_http_info(self, product_id, product_l0_src_dto, **kwargs):  # noqa: E501
        """products_l0_src_controller_update  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True

        >>> thread = api.products_l0_src_controller_update_with_http_info(product_id, product_l0_src_dto, async_req=True)
        >>> result = thread.get()

        :param product_id: (required)
        :type product_id: float
        :param product_l0_src_dto: (required)
        :type product_l0_src_dto: ProductL0SrcDto
        :param async_req: Whether to execute the request asynchronously.
        :type async_req: bool, optional
        :param _return_http_data_only: response data without head status code
                                       and headers
        :type _return_http_data_only: bool, optional
        :param _preload_content: if False, the urllib3.HTTPResponse object will
                                 be returned without reading/decoding response
                                 data. Default is True.
        :type _preload_content: bool, optional
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the authentication
                              in the spec for a single request.
        :type _request_auth: dict, optional
        :return: Returns the result object.
                 If the method is called asynchronously,
                 returns the request thread.
        :rtype: None
        """

        local_var_params = locals()

        all_params = [
            'product_id',
            'product_l0_src_dto'
        ]
        all_params.extend(
            [
                'async_req',
                '_return_http_data_only',
                '_preload_content',
                '_request_timeout',
                '_request_auth'
            ]
        )

        for key, val in six.iteritems(local_var_params['kwargs']):
            if key not in all_params:
                raise ApiTypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method products_l0_src_controller_update" % key
                )
            local_var_params[key] = val
        del local_var_params['kwargs']
        # verify the required parameter 'product_id' is set
        if self.api_client.client_side_validation and ('product_id' not in local_var_params or  # noqa: E501
                                                        local_var_params['product_id'] is None):  # noqa: E501
            raise ApiValueError("Missing the required parameter `product_id` when calling `products_l0_src_controller_update`")  # noqa: E501
        # verify the required parameter 'product_l0_src_dto' is set
        if self.api_client.client_side_validation and ('product_l0_src_dto' not in local_var_params or  # noqa: E501
                                                        local_var_params['product_l0_src_dto'] is None):  # noqa: E501
            raise ApiValueError("Missing the required parameter `product_l0_src_dto` when calling `products_l0_src_controller_update`")  # noqa: E501

        collection_formats = {}

        path_params = {}
        if 'product_id' in local_var_params:
            path_params['productId'] = local_var_params['product_id']  # noqa: E501

        query_params = []

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        if 'product_l0_src_dto' in local_var_params:
            body_params = local_var_params['product_l0_src_dto']
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['application/json'])  # noqa: E501

        # HTTP header `Content-Type`
        header_params['Content-Type'] = self.api_client.select_header_content_type(  # noqa: E501
            ['application/json'])  # noqa: E501

        # Authentication setting
        auth_settings = ['access-token']  # noqa: E501

        return self.api_client.call_api(
            '/products/l0-src/{productId}', 'PUT',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type=None,  # noqa: E501
            auth_settings=auth_settings,
            async_req=local_var_params.get('async_req'),
            _return_http_data_only=local_var_params.get('_return_http_data_only'),  # noqa: E501
            _preload_content=local_var_params.get('_preload_content', True),
            _request_timeout=local_var_params.get('_request_timeout'),
            collection_formats=collection_formats,
            _request_auth=local_var_params.get('_request_auth'))

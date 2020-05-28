# coding: utf-8

"""
    AusSeabed product catalogue

    The API description for the Ausseabed product catalogue inventory  # noqa: E501

    The version of the OpenAPI document: 0.1.9
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


class CompilationsApi(object):
    """NOTE: This class is auto generated by OpenAPI Generator
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    def __init__(self, api_client=None):
        if api_client is None:
            api_client = ApiClient()
        self.api_client = api_client

    def compilations_controller_create(self, compilation_dto, **kwargs):  # noqa: E501
        """compilations_controller_create  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.compilations_controller_create(compilation_dto, async_req=True)
        >>> result = thread.get()

        :param async_req bool: execute request asynchronously
        :param CompilationDto compilation_dto: (required)
        :param _preload_content: if False, the urllib3.HTTPResponse object will
                                 be returned without reading/decoding response
                                 data. Default is True.
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :return: Compilation
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        return self.compilations_controller_create_with_http_info(compilation_dto, **kwargs)  # noqa: E501

    def compilations_controller_create_with_http_info(self, compilation_dto, **kwargs):  # noqa: E501
        """compilations_controller_create  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.compilations_controller_create_with_http_info(compilation_dto, async_req=True)
        >>> result = thread.get()

        :param async_req bool: execute request asynchronously
        :param CompilationDto compilation_dto: (required)
        :param _return_http_data_only: response data without head status code
                                       and headers
        :param _preload_content: if False, the urllib3.HTTPResponse object will
                                 be returned without reading/decoding response
                                 data. Default is True.
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :return: tuple(Compilation, status_code(int), headers(HTTPHeaderDict))
                 If the method is called asynchronously,
                 returns the request thread.
        """

        local_var_params = locals()

        all_params = [
            'compilation_dto'
        ]
        all_params.extend(
            [
                'async_req',
                '_return_http_data_only',
                '_preload_content',
                '_request_timeout'
            ]
        )

        for key, val in six.iteritems(local_var_params['kwargs']):
            if key not in all_params:
                raise ApiTypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method compilations_controller_create" % key
                )
            local_var_params[key] = val
        del local_var_params['kwargs']
        # verify the required parameter 'compilation_dto' is set
        if self.api_client.client_side_validation and ('compilation_dto' not in local_var_params or  # noqa: E501
                                                        local_var_params['compilation_dto'] is None):  # noqa: E501
            raise ApiValueError("Missing the required parameter `compilation_dto` when calling `compilations_controller_create`")  # noqa: E501

        collection_formats = {}

        path_params = {}

        query_params = []

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        if 'compilation_dto' in local_var_params:
            body_params = local_var_params['compilation_dto']
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['application/json'])  # noqa: E501

        # HTTP header `Content-Type`
        header_params['Content-Type'] = self.api_client.select_header_content_type(  # noqa: E501
            ['application/json'])  # noqa: E501

        # Authentication setting
        auth_settings = ['access-token']  # noqa: E501

        return self.api_client.call_api(
            '/compilations', 'POST',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='Compilation',  # noqa: E501
            auth_settings=auth_settings,
            async_req=local_var_params.get('async_req'),
            _return_http_data_only=local_var_params.get('_return_http_data_only'),  # noqa: E501
            _preload_content=local_var_params.get('_preload_content', True),
            _request_timeout=local_var_params.get('_request_timeout'),
            collection_formats=collection_formats)

    def compilations_controller_find_all(self, **kwargs):  # noqa: E501
        """compilations_controller_find_all  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.compilations_controller_find_all(async_req=True)
        >>> result = thread.get()

        :param async_req bool: execute request asynchronously
        :param _preload_content: if False, the urllib3.HTTPResponse object will
                                 be returned without reading/decoding response
                                 data. Default is True.
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :return: list[Compilation]
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        return self.compilations_controller_find_all_with_http_info(**kwargs)  # noqa: E501

    def compilations_controller_find_all_with_http_info(self, **kwargs):  # noqa: E501
        """compilations_controller_find_all  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.compilations_controller_find_all_with_http_info(async_req=True)
        >>> result = thread.get()

        :param async_req bool: execute request asynchronously
        :param _return_http_data_only: response data without head status code
                                       and headers
        :param _preload_content: if False, the urllib3.HTTPResponse object will
                                 be returned without reading/decoding response
                                 data. Default is True.
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :return: tuple(list[Compilation], status_code(int), headers(HTTPHeaderDict))
                 If the method is called asynchronously,
                 returns the request thread.
        """

        local_var_params = locals()

        all_params = [
        ]
        all_params.extend(
            [
                'async_req',
                '_return_http_data_only',
                '_preload_content',
                '_request_timeout'
            ]
        )

        for key, val in six.iteritems(local_var_params['kwargs']):
            if key not in all_params:
                raise ApiTypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method compilations_controller_find_all" % key
                )
            local_var_params[key] = val
        del local_var_params['kwargs']

        collection_formats = {}

        path_params = {}

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
            '/compilations', 'GET',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='list[Compilation]',  # noqa: E501
            auth_settings=auth_settings,
            async_req=local_var_params.get('async_req'),
            _return_http_data_only=local_var_params.get('_return_http_data_only'),  # noqa: E501
            _preload_content=local_var_params.get('_preload_content', True),
            _request_timeout=local_var_params.get('_request_timeout'),
            collection_formats=collection_formats)

    def compilations_controller_find_one(self, compilation_id, **kwargs):  # noqa: E501
        """compilations_controller_find_one  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.compilations_controller_find_one(compilation_id, async_req=True)
        >>> result = thread.get()

        :param async_req bool: execute request asynchronously
        :param float compilation_id: (required)
        :param _preload_content: if False, the urllib3.HTTPResponse object will
                                 be returned without reading/decoding response
                                 data. Default is True.
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :return: Compilation
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        return self.compilations_controller_find_one_with_http_info(compilation_id, **kwargs)  # noqa: E501

    def compilations_controller_find_one_with_http_info(self, compilation_id, **kwargs):  # noqa: E501
        """compilations_controller_find_one  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.compilations_controller_find_one_with_http_info(compilation_id, async_req=True)
        >>> result = thread.get()

        :param async_req bool: execute request asynchronously
        :param float compilation_id: (required)
        :param _return_http_data_only: response data without head status code
                                       and headers
        :param _preload_content: if False, the urllib3.HTTPResponse object will
                                 be returned without reading/decoding response
                                 data. Default is True.
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :return: tuple(Compilation, status_code(int), headers(HTTPHeaderDict))
                 If the method is called asynchronously,
                 returns the request thread.
        """

        local_var_params = locals()

        all_params = [
            'compilation_id'
        ]
        all_params.extend(
            [
                'async_req',
                '_return_http_data_only',
                '_preload_content',
                '_request_timeout'
            ]
        )

        for key, val in six.iteritems(local_var_params['kwargs']):
            if key not in all_params:
                raise ApiTypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method compilations_controller_find_one" % key
                )
            local_var_params[key] = val
        del local_var_params['kwargs']
        # verify the required parameter 'compilation_id' is set
        if self.api_client.client_side_validation and ('compilation_id' not in local_var_params or  # noqa: E501
                                                        local_var_params['compilation_id'] is None):  # noqa: E501
            raise ApiValueError("Missing the required parameter `compilation_id` when calling `compilations_controller_find_one`")  # noqa: E501

        collection_formats = {}

        path_params = {}
        if 'compilation_id' in local_var_params:
            path_params['compilationId'] = local_var_params['compilation_id']  # noqa: E501

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
            '/compilations/{compilationId}', 'GET',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='Compilation',  # noqa: E501
            auth_settings=auth_settings,
            async_req=local_var_params.get('async_req'),
            _return_http_data_only=local_var_params.get('_return_http_data_only'),  # noqa: E501
            _preload_content=local_var_params.get('_preload_content', True),
            _request_timeout=local_var_params.get('_request_timeout'),
            collection_formats=collection_formats)

    def compilations_controller_remove(self, compilation_id, **kwargs):  # noqa: E501
        """compilations_controller_remove  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.compilations_controller_remove(compilation_id, async_req=True)
        >>> result = thread.get()

        :param async_req bool: execute request asynchronously
        :param float compilation_id: (required)
        :param _preload_content: if False, the urllib3.HTTPResponse object will
                                 be returned without reading/decoding response
                                 data. Default is True.
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :return: None
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        return self.compilations_controller_remove_with_http_info(compilation_id, **kwargs)  # noqa: E501

    def compilations_controller_remove_with_http_info(self, compilation_id, **kwargs):  # noqa: E501
        """compilations_controller_remove  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.compilations_controller_remove_with_http_info(compilation_id, async_req=True)
        >>> result = thread.get()

        :param async_req bool: execute request asynchronously
        :param float compilation_id: (required)
        :param _return_http_data_only: response data without head status code
                                       and headers
        :param _preload_content: if False, the urllib3.HTTPResponse object will
                                 be returned without reading/decoding response
                                 data. Default is True.
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :return: None
                 If the method is called asynchronously,
                 returns the request thread.
        """

        local_var_params = locals()

        all_params = [
            'compilation_id'
        ]
        all_params.extend(
            [
                'async_req',
                '_return_http_data_only',
                '_preload_content',
                '_request_timeout'
            ]
        )

        for key, val in six.iteritems(local_var_params['kwargs']):
            if key not in all_params:
                raise ApiTypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method compilations_controller_remove" % key
                )
            local_var_params[key] = val
        del local_var_params['kwargs']
        # verify the required parameter 'compilation_id' is set
        if self.api_client.client_side_validation and ('compilation_id' not in local_var_params or  # noqa: E501
                                                        local_var_params['compilation_id'] is None):  # noqa: E501
            raise ApiValueError("Missing the required parameter `compilation_id` when calling `compilations_controller_remove`")  # noqa: E501

        collection_formats = {}

        path_params = {}
        if 'compilation_id' in local_var_params:
            path_params['compilationId'] = local_var_params['compilation_id']  # noqa: E501

        query_params = []

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        # Authentication setting
        auth_settings = ['access-token']  # noqa: E501

        return self.api_client.call_api(
            '/compilations/{compilationId}', 'DELETE',
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
            collection_formats=collection_formats)

    def compilations_controller_update(self, compilation_id, compilation_dto, **kwargs):  # noqa: E501
        """compilations_controller_update  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.compilations_controller_update(compilation_id, compilation_dto, async_req=True)
        >>> result = thread.get()

        :param async_req bool: execute request asynchronously
        :param float compilation_id: (required)
        :param CompilationDto compilation_dto: (required)
        :param _preload_content: if False, the urllib3.HTTPResponse object will
                                 be returned without reading/decoding response
                                 data. Default is True.
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :return: None
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        return self.compilations_controller_update_with_http_info(compilation_id, compilation_dto, **kwargs)  # noqa: E501

    def compilations_controller_update_with_http_info(self, compilation_id, compilation_dto, **kwargs):  # noqa: E501
        """compilations_controller_update  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.compilations_controller_update_with_http_info(compilation_id, compilation_dto, async_req=True)
        >>> result = thread.get()

        :param async_req bool: execute request asynchronously
        :param float compilation_id: (required)
        :param CompilationDto compilation_dto: (required)
        :param _return_http_data_only: response data without head status code
                                       and headers
        :param _preload_content: if False, the urllib3.HTTPResponse object will
                                 be returned without reading/decoding response
                                 data. Default is True.
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :return: None
                 If the method is called asynchronously,
                 returns the request thread.
        """

        local_var_params = locals()

        all_params = [
            'compilation_id',
            'compilation_dto'
        ]
        all_params.extend(
            [
                'async_req',
                '_return_http_data_only',
                '_preload_content',
                '_request_timeout'
            ]
        )

        for key, val in six.iteritems(local_var_params['kwargs']):
            if key not in all_params:
                raise ApiTypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method compilations_controller_update" % key
                )
            local_var_params[key] = val
        del local_var_params['kwargs']
        # verify the required parameter 'compilation_id' is set
        if self.api_client.client_side_validation and ('compilation_id' not in local_var_params or  # noqa: E501
                                                        local_var_params['compilation_id'] is None):  # noqa: E501
            raise ApiValueError("Missing the required parameter `compilation_id` when calling `compilations_controller_update`")  # noqa: E501
        # verify the required parameter 'compilation_dto' is set
        if self.api_client.client_side_validation and ('compilation_dto' not in local_var_params or  # noqa: E501
                                                        local_var_params['compilation_dto'] is None):  # noqa: E501
            raise ApiValueError("Missing the required parameter `compilation_dto` when calling `compilations_controller_update`")  # noqa: E501

        collection_formats = {}

        path_params = {}
        if 'compilation_id' in local_var_params:
            path_params['compilationId'] = local_var_params['compilation_id']  # noqa: E501

        query_params = []

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        if 'compilation_dto' in local_var_params:
            body_params = local_var_params['compilation_dto']
        # HTTP header `Content-Type`
        header_params['Content-Type'] = self.api_client.select_header_content_type(  # noqa: E501
            ['application/json'])  # noqa: E501

        # Authentication setting
        auth_settings = ['access-token']  # noqa: E501

        return self.api_client.call_api(
            '/compilations/{compilationId}', 'PUT',
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
            collection_formats=collection_formats)

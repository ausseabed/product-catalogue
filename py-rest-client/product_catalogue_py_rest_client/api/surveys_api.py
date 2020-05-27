# coding: utf-8

"""
    AusSeabed product catalogue

    The API description for the Ausseabed product catalogue inventory  # noqa: E501

    The version of the OpenAPI document: 0.1.7
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


class SurveysApi(object):
    """NOTE: This class is auto generated by OpenAPI Generator
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    def __init__(self, api_client=None):
        if api_client is None:
            api_client = ApiClient()
        self.api_client = api_client

    def surveys_controller_create(self, survey_dto, **kwargs):  # noqa: E501
        """surveys_controller_create  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.surveys_controller_create(survey_dto, async_req=True)
        >>> result = thread.get()

        :param async_req bool: execute request asynchronously
        :param SurveyDto survey_dto: (required)
        :param _preload_content: if False, the urllib3.HTTPResponse object will
                                 be returned without reading/decoding response
                                 data. Default is True.
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :return: object
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        return self.surveys_controller_create_with_http_info(survey_dto, **kwargs)  # noqa: E501

    def surveys_controller_create_with_http_info(self, survey_dto, **kwargs):  # noqa: E501
        """surveys_controller_create  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.surveys_controller_create_with_http_info(survey_dto, async_req=True)
        >>> result = thread.get()

        :param async_req bool: execute request asynchronously
        :param SurveyDto survey_dto: (required)
        :param _return_http_data_only: response data without head status code
                                       and headers
        :param _preload_content: if False, the urllib3.HTTPResponse object will
                                 be returned without reading/decoding response
                                 data. Default is True.
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :return: tuple(object, status_code(int), headers(HTTPHeaderDict))
                 If the method is called asynchronously,
                 returns the request thread.
        """

        local_var_params = locals()

        all_params = [
            'survey_dto'
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
                    " to method surveys_controller_create" % key
                )
            local_var_params[key] = val
        del local_var_params['kwargs']
        # verify the required parameter 'survey_dto' is set
        if self.api_client.client_side_validation and ('survey_dto' not in local_var_params or  # noqa: E501
                                                        local_var_params['survey_dto'] is None):  # noqa: E501
            raise ApiValueError("Missing the required parameter `survey_dto` when calling `surveys_controller_create`")  # noqa: E501

        collection_formats = {}

        path_params = {}

        query_params = []

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        if 'survey_dto' in local_var_params:
            body_params = local_var_params['survey_dto']
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['application/json'])  # noqa: E501

        # HTTP header `Content-Type`
        header_params['Content-Type'] = self.api_client.select_header_content_type(  # noqa: E501
            ['application/json'])  # noqa: E501

        # Authentication setting
        auth_settings = ['access-token']  # noqa: E501

        return self.api_client.call_api(
            '/surveys', 'POST',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='object',  # noqa: E501
            auth_settings=auth_settings,
            async_req=local_var_params.get('async_req'),
            _return_http_data_only=local_var_params.get('_return_http_data_only'),  # noqa: E501
            _preload_content=local_var_params.get('_preload_content', True),
            _request_timeout=local_var_params.get('_request_timeout'),
            collection_formats=collection_formats)

    def surveys_controller_find_all(self, **kwargs):  # noqa: E501
        """surveys_controller_find_all  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.surveys_controller_find_all(async_req=True)
        >>> result = thread.get()

        :param async_req bool: execute request asynchronously
        :param _preload_content: if False, the urllib3.HTTPResponse object will
                                 be returned without reading/decoding response
                                 data. Default is True.
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :return: object
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        return self.surveys_controller_find_all_with_http_info(**kwargs)  # noqa: E501

    def surveys_controller_find_all_with_http_info(self, **kwargs):  # noqa: E501
        """surveys_controller_find_all  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.surveys_controller_find_all_with_http_info(async_req=True)
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
        :return: tuple(object, status_code(int), headers(HTTPHeaderDict))
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
                    " to method surveys_controller_find_all" % key
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
            '/surveys', 'GET',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='object',  # noqa: E501
            auth_settings=auth_settings,
            async_req=local_var_params.get('async_req'),
            _return_http_data_only=local_var_params.get('_return_http_data_only'),  # noqa: E501
            _preload_content=local_var_params.get('_preload_content', True),
            _request_timeout=local_var_params.get('_request_timeout'),
            collection_formats=collection_formats)

    def surveys_controller_find_one(self, survey_id, **kwargs):  # noqa: E501
        """surveys_controller_find_one  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.surveys_controller_find_one(survey_id, async_req=True)
        >>> result = thread.get()

        :param async_req bool: execute request asynchronously
        :param float survey_id: (required)
        :param _preload_content: if False, the urllib3.HTTPResponse object will
                                 be returned without reading/decoding response
                                 data. Default is True.
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :return: object
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        return self.surveys_controller_find_one_with_http_info(survey_id, **kwargs)  # noqa: E501

    def surveys_controller_find_one_with_http_info(self, survey_id, **kwargs):  # noqa: E501
        """surveys_controller_find_one  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.surveys_controller_find_one_with_http_info(survey_id, async_req=True)
        >>> result = thread.get()

        :param async_req bool: execute request asynchronously
        :param float survey_id: (required)
        :param _return_http_data_only: response data without head status code
                                       and headers
        :param _preload_content: if False, the urllib3.HTTPResponse object will
                                 be returned without reading/decoding response
                                 data. Default is True.
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :return: tuple(object, status_code(int), headers(HTTPHeaderDict))
                 If the method is called asynchronously,
                 returns the request thread.
        """

        local_var_params = locals()

        all_params = [
            'survey_id'
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
                    " to method surveys_controller_find_one" % key
                )
            local_var_params[key] = val
        del local_var_params['kwargs']
        # verify the required parameter 'survey_id' is set
        if self.api_client.client_side_validation and ('survey_id' not in local_var_params or  # noqa: E501
                                                        local_var_params['survey_id'] is None):  # noqa: E501
            raise ApiValueError("Missing the required parameter `survey_id` when calling `surveys_controller_find_one`")  # noqa: E501

        collection_formats = {}

        path_params = {}
        if 'survey_id' in local_var_params:
            path_params['surveyId'] = local_var_params['survey_id']  # noqa: E501

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
            '/surveys/{surveyId}', 'GET',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='object',  # noqa: E501
            auth_settings=auth_settings,
            async_req=local_var_params.get('async_req'),
            _return_http_data_only=local_var_params.get('_return_http_data_only'),  # noqa: E501
            _preload_content=local_var_params.get('_preload_content', True),
            _request_timeout=local_var_params.get('_request_timeout'),
            collection_formats=collection_formats)

    def surveys_controller_remove(self, survey_id, **kwargs):  # noqa: E501
        """surveys_controller_remove  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.surveys_controller_remove(survey_id, async_req=True)
        >>> result = thread.get()

        :param async_req bool: execute request asynchronously
        :param float survey_id: (required)
        :param _preload_content: if False, the urllib3.HTTPResponse object will
                                 be returned without reading/decoding response
                                 data. Default is True.
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :return: object
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        return self.surveys_controller_remove_with_http_info(survey_id, **kwargs)  # noqa: E501

    def surveys_controller_remove_with_http_info(self, survey_id, **kwargs):  # noqa: E501
        """surveys_controller_remove  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.surveys_controller_remove_with_http_info(survey_id, async_req=True)
        >>> result = thread.get()

        :param async_req bool: execute request asynchronously
        :param float survey_id: (required)
        :param _return_http_data_only: response data without head status code
                                       and headers
        :param _preload_content: if False, the urllib3.HTTPResponse object will
                                 be returned without reading/decoding response
                                 data. Default is True.
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :return: tuple(object, status_code(int), headers(HTTPHeaderDict))
                 If the method is called asynchronously,
                 returns the request thread.
        """

        local_var_params = locals()

        all_params = [
            'survey_id'
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
                    " to method surveys_controller_remove" % key
                )
            local_var_params[key] = val
        del local_var_params['kwargs']
        # verify the required parameter 'survey_id' is set
        if self.api_client.client_side_validation and ('survey_id' not in local_var_params or  # noqa: E501
                                                        local_var_params['survey_id'] is None):  # noqa: E501
            raise ApiValueError("Missing the required parameter `survey_id` when calling `surveys_controller_remove`")  # noqa: E501

        collection_formats = {}

        path_params = {}
        if 'survey_id' in local_var_params:
            path_params['surveyId'] = local_var_params['survey_id']  # noqa: E501

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
            '/surveys/{surveyId}', 'DELETE',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='object',  # noqa: E501
            auth_settings=auth_settings,
            async_req=local_var_params.get('async_req'),
            _return_http_data_only=local_var_params.get('_return_http_data_only'),  # noqa: E501
            _preload_content=local_var_params.get('_preload_content', True),
            _request_timeout=local_var_params.get('_request_timeout'),
            collection_formats=collection_formats)

    def surveys_controller_update(self, survey_id, survey_dto, **kwargs):  # noqa: E501
        """surveys_controller_update  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.surveys_controller_update(survey_id, survey_dto, async_req=True)
        >>> result = thread.get()

        :param async_req bool: execute request asynchronously
        :param float survey_id: (required)
        :param SurveyDto survey_dto: (required)
        :param _preload_content: if False, the urllib3.HTTPResponse object will
                                 be returned without reading/decoding response
                                 data. Default is True.
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :return: object
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        return self.surveys_controller_update_with_http_info(survey_id, survey_dto, **kwargs)  # noqa: E501

    def surveys_controller_update_with_http_info(self, survey_id, survey_dto, **kwargs):  # noqa: E501
        """surveys_controller_update  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.surveys_controller_update_with_http_info(survey_id, survey_dto, async_req=True)
        >>> result = thread.get()

        :param async_req bool: execute request asynchronously
        :param float survey_id: (required)
        :param SurveyDto survey_dto: (required)
        :param _return_http_data_only: response data without head status code
                                       and headers
        :param _preload_content: if False, the urllib3.HTTPResponse object will
                                 be returned without reading/decoding response
                                 data. Default is True.
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :return: tuple(object, status_code(int), headers(HTTPHeaderDict))
                 If the method is called asynchronously,
                 returns the request thread.
        """

        local_var_params = locals()

        all_params = [
            'survey_id',
            'survey_dto'
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
                    " to method surveys_controller_update" % key
                )
            local_var_params[key] = val
        del local_var_params['kwargs']
        # verify the required parameter 'survey_id' is set
        if self.api_client.client_side_validation and ('survey_id' not in local_var_params or  # noqa: E501
                                                        local_var_params['survey_id'] is None):  # noqa: E501
            raise ApiValueError("Missing the required parameter `survey_id` when calling `surveys_controller_update`")  # noqa: E501
        # verify the required parameter 'survey_dto' is set
        if self.api_client.client_side_validation and ('survey_dto' not in local_var_params or  # noqa: E501
                                                        local_var_params['survey_dto'] is None):  # noqa: E501
            raise ApiValueError("Missing the required parameter `survey_dto` when calling `surveys_controller_update`")  # noqa: E501

        collection_formats = {}

        path_params = {}
        if 'survey_id' in local_var_params:
            path_params['surveyId'] = local_var_params['survey_id']  # noqa: E501

        query_params = []

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        if 'survey_dto' in local_var_params:
            body_params = local_var_params['survey_dto']
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['application/json'])  # noqa: E501

        # HTTP header `Content-Type`
        header_params['Content-Type'] = self.api_client.select_header_content_type(  # noqa: E501
            ['application/json'])  # noqa: E501

        # Authentication setting
        auth_settings = ['access-token']  # noqa: E501

        return self.api_client.call_api(
            '/surveys/{surveyId}', 'PUT',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='object',  # noqa: E501
            auth_settings=auth_settings,
            async_req=local_var_params.get('async_req'),
            _return_http_data_only=local_var_params.get('_return_http_data_only'),  # noqa: E501
            _preload_content=local_var_params.get('_preload_content', True),
            _request_timeout=local_var_params.get('_request_timeout'),
            collection_formats=collection_formats)

# coding: utf-8

"""
    AusSeabed product catalogue

    The API description for the Ausseabed product catalogue inventory  # noqa: E501

    The version of the OpenAPI document: 0.1.7
    Contact: AusSeabed@ga.gov.au
    Generated by: https://openapi-generator.tech
"""


from __future__ import absolute_import

import unittest

import product_catalogue_py_rest_client
from product_catalogue_py_rest_client.api.surveys_api import SurveysApi  # noqa: E501
from product_catalogue_py_rest_client.rest import ApiException


class TestSurveysApi(unittest.TestCase):
    """SurveysApi unit test stubs"""

    def setUp(self):
        self.api = product_catalogue_py_rest_client.api.surveys_api.SurveysApi()  # noqa: E501

    def tearDown(self):
        pass

    def test_surveys_controller_create(self):
        """Test case for surveys_controller_create

        """
        pass

    def test_surveys_controller_find_all(self):
        """Test case for surveys_controller_find_all

        """
        pass

    def test_surveys_controller_find_one(self):
        """Test case for surveys_controller_find_one

        """
        pass

    def test_surveys_controller_remove(self):
        """Test case for surveys_controller_remove

        """
        pass

    def test_surveys_controller_update(self):
        """Test case for surveys_controller_update

        """
        pass


if __name__ == '__main__':
    unittest.main()

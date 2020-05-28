# coding: utf-8

"""
    AusSeabed product catalogue

    The API description for the Ausseabed product catalogue inventory  # noqa: E501

    The version of the OpenAPI document: 0.1.9
    Contact: AusSeabed@ga.gov.au
    Generated by: https://openapi-generator.tech
"""


from __future__ import absolute_import

import unittest
import datetime

import product_catalogue_py_rest_client
from product_catalogue_py_rest_client.models.survey import Survey  # noqa: E501
from product_catalogue_py_rest_client.rest import ApiException

class TestSurvey(unittest.TestCase):
    """Survey unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional):
        """Test Survey
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # model = product_catalogue_py_rest_client.models.survey.Survey()  # noqa: E501
        if include_optional :
            return Survey(
                id = 1.337, 
                name = '0', 
                uuid = '0', 
                year = '0'
            )
        else :
            return Survey(
                id = 1.337,
                name = '0',
                uuid = '0',
                year = '0',
        )

    def testSurvey(self):
        """Test Survey"""
        inst_req_only = self.make_instance(include_optional=False)
        inst_req_and_optional = self.make_instance(include_optional=True)


if __name__ == '__main__':
    unittest.main()

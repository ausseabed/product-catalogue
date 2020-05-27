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
import datetime

import product_catalogue_py_rest_client
from product_catalogue_py_rest_client.models.survey_l3_relation_dto import SurveyL3RelationDto  # noqa: E501
from product_catalogue_py_rest_client.rest import ApiException

class TestSurveyL3RelationDto(unittest.TestCase):
    """SurveyL3RelationDto unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional):
        """Test SurveyL3RelationDto
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # model = product_catalogue_py_rest_client.models.survey_l3_relation_dto.SurveyL3RelationDto()  # noqa: E501
        if include_optional :
            return SurveyL3RelationDto(
                product_l3_src = 1.337, 
                survey = 1.337
            )
        else :
            return SurveyL3RelationDto(
                product_l3_src = 1.337,
                survey = 1.337,
        )

    def testSurveyL3RelationDto(self):
        """Test SurveyL3RelationDto"""
        inst_req_only = self.make_instance(include_optional=False)
        inst_req_and_optional = self.make_instance(include_optional=True)


if __name__ == '__main__':
    unittest.main()

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
from product_catalogue_py_rest_client.models.survey_l3_relation import SurveyL3Relation  # noqa: E501
from product_catalogue_py_rest_client.rest import ApiException

class TestSurveyL3Relation(unittest.TestCase):
    """SurveyL3Relation unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional):
        """Test SurveyL3Relation
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # model = product_catalogue_py_rest_client.models.survey_l3_relation.SurveyL3Relation()  # noqa: E501
        if include_optional :
            return SurveyL3Relation(
                id = 1.337, 
                product_l3_src = product_catalogue_py_rest_client.models.product_l3_src.ProductL3Src(
                    id = 1.337, 
                    metadata_persistent_id = '0', 
                    name = '0', 
                    product_tif_location = '0', 
                    resolution = '0', 
                    srs = '0', 
                    uuid = '0', ), 
                survey = product_catalogue_py_rest_client.models.survey.Survey(
                    id = 1.337, 
                    name = '0', 
                    uuid = '0', 
                    year = '0', )
            )
        else :
            return SurveyL3Relation(
                id = 1.337,
                product_l3_src = product_catalogue_py_rest_client.models.product_l3_src.ProductL3Src(
                    id = 1.337, 
                    metadata_persistent_id = '0', 
                    name = '0', 
                    product_tif_location = '0', 
                    resolution = '0', 
                    srs = '0', 
                    uuid = '0', ),
                survey = product_catalogue_py_rest_client.models.survey.Survey(
                    id = 1.337, 
                    name = '0', 
                    uuid = '0', 
                    year = '0', ),
        )

    def testSurveyL3Relation(self):
        """Test SurveyL3Relation"""
        inst_req_only = self.make_instance(include_optional=False)
        inst_req_and_optional = self.make_instance(include_optional=True)


if __name__ == '__main__':
    unittest.main()
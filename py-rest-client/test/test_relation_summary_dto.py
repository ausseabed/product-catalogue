# coding: utf-8

"""
    AusSeabed product catalogue

    The API description for the Ausseabed product catalogue inventory  # noqa: E501

    The version of the OpenAPI document: 0.2.2
    Contact: AusSeabed@ga.gov.au
    Generated by: https://openapi-generator.tech
"""


from __future__ import absolute_import

import unittest
import datetime

import product_catalogue_py_rest_client
from product_catalogue_py_rest_client.models.relation_summary_dto import RelationSummaryDto  # noqa: E501
from product_catalogue_py_rest_client.rest import ApiException

class TestRelationSummaryDto(unittest.TestCase):
    """RelationSummaryDto unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional):
        """Test RelationSummaryDto
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # model = product_catalogue_py_rest_client.models.relation_summary_dto.RelationSummaryDto()  # noqa: E501
        if include_optional :
            return RelationSummaryDto(
                relation_id = None, 
                survey_id = None, 
                product_id = None, 
                product_name = None
            )
        else :
            return RelationSummaryDto(
                relation_id = None,
                survey_id = None,
                product_id = None,
                product_name = None,
        )

    def testRelationSummaryDto(self):
        """Test RelationSummaryDto"""
        inst_req_only = self.make_instance(include_optional=False)
        inst_req_and_optional = self.make_instance(include_optional=True)


if __name__ == '__main__':
    unittest.main()

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
from product_catalogue_py_rest_client.models.compilation_l3_relation_dto import CompilationL3RelationDto  # noqa: E501
from product_catalogue_py_rest_client.rest import ApiException

class TestCompilationL3RelationDto(unittest.TestCase):
    """CompilationL3RelationDto unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional):
        """Test CompilationL3RelationDto
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # model = product_catalogue_py_rest_client.models.compilation_l3_relation_dto.CompilationL3RelationDto()  # noqa: E501
        if include_optional :
            return CompilationL3RelationDto(
                compilation = 1.337, 
                product_l3_src = 1.337
            )
        else :
            return CompilationL3RelationDto(
                compilation = 1.337,
                product_l3_src = 1.337,
        )

    def testCompilationL3RelationDto(self):
        """Test CompilationL3RelationDto"""
        inst_req_only = self.make_instance(include_optional=False)
        inst_req_and_optional = self.make_instance(include_optional=True)


if __name__ == '__main__':
    unittest.main()

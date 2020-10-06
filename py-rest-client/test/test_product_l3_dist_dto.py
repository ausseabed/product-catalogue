# coding: utf-8

"""
    AusSeabed product catalogue

    The API description for the Ausseabed product catalogue inventory  # noqa: E501

    The version of the OpenAPI document: 0.1.15
    Contact: AusSeabed@ga.gov.au
    Generated by: https://openapi-generator.tech
"""


from __future__ import absolute_import

import unittest
import datetime

import product_catalogue_py_rest_client
from product_catalogue_py_rest_client.models.product_l3_dist_dto import ProductL3DistDto  # noqa: E501
from product_catalogue_py_rest_client.rest import ApiException

class TestProductL3DistDto(unittest.TestCase):
    """ProductL3DistDto unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional):
        """Test ProductL3DistDto
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # model = product_catalogue_py_rest_client.models.product_l3_dist_dto.ProductL3DistDto()  # noqa: E501
        if include_optional :
            return ProductL3DistDto(
                bathymetry_bag_location = '0', 
                bathymetry_location = '0', 
                hillshade_location = '0', 
                l3_coverage_location = '0'
            )
        else :
            return ProductL3DistDto(
                bathymetry_bag_location = '0',
                bathymetry_location = '0',
                hillshade_location = '0',
                l3_coverage_location = '0',
        )

    def testProductL3DistDto(self):
        """Test ProductL3DistDto"""
        inst_req_only = self.make_instance(include_optional=False)
        inst_req_and_optional = self.make_instance(include_optional=True)


if __name__ == '__main__':
    unittest.main()

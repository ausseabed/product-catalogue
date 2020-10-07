# coding: utf-8

"""
    AusSeabed product catalogue

    The API description for the Ausseabed product catalogue inventory  # noqa: E501

    The version of the OpenAPI document: 0.2.1
    Contact: AusSeabed@ga.gov.au
    Generated by: https://openapi-generator.tech
"""


from __future__ import absolute_import

import unittest
import datetime

import product_catalogue_py_rest_client
from product_catalogue_py_rest_client.models.product_l3_dist import ProductL3Dist  # noqa: E501
from product_catalogue_py_rest_client.rest import ApiException

class TestProductL3Dist(unittest.TestCase):
    """ProductL3Dist unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional):
        """Test ProductL3Dist
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # model = product_catalogue_py_rest_client.models.product_l3_dist.ProductL3Dist()  # noqa: E501
        if include_optional :
            return ProductL3Dist(
                bathymetry_bag_location = '0', 
                bathymetry_location = '0', 
                hillshade_location = '0', 
                id = 56, 
                l3_coverage_location = '0', 
                source_product = product_catalogue_py_rest_client.models.product_l3_src.ProductL3Src(
                    id = 56, 
                    metadata_persistent_id = '0', 
                    name = '0', 
                    product_bag_location = '0', 
                    product_tif_location = '0', 
                    resolution = '0', 
                    srs = '0', 
                    uuid = '0', 
                    vertical_datum = 'Unknown', )
            )
        else :
            return ProductL3Dist(
                bathymetry_bag_location = '0',
                bathymetry_location = '0',
                hillshade_location = '0',
                id = 56,
                l3_coverage_location = '0',
                source_product = product_catalogue_py_rest_client.models.product_l3_src.ProductL3Src(
                    id = 56, 
                    metadata_persistent_id = '0', 
                    name = '0', 
                    product_bag_location = '0', 
                    product_tif_location = '0', 
                    resolution = '0', 
                    srs = '0', 
                    uuid = '0', 
                    vertical_datum = 'Unknown', ),
        )

    def testProductL3Dist(self):
        """Test ProductL3Dist"""
        inst_req_only = self.make_instance(include_optional=False)
        inst_req_and_optional = self.make_instance(include_optional=True)


if __name__ == '__main__':
    unittest.main()

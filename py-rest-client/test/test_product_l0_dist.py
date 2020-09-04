# coding: utf-8

"""
    AusSeabed product catalogue

    The API description for the Ausseabed product catalogue inventory  # noqa: E501

    The version of the OpenAPI document: 0.1.14
    Contact: AusSeabed@ga.gov.au
    Generated by: https://openapi-generator.tech
"""


from __future__ import absolute_import

import unittest
import datetime

import product_catalogue_py_rest_client
from product_catalogue_py_rest_client.models.product_l0_dist import ProductL0Dist  # noqa: E501
from product_catalogue_py_rest_client.rest import ApiException

class TestProductL0Dist(unittest.TestCase):
    """ProductL0Dist unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional):
        """Test ProductL0Dist
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # model = product_catalogue_py_rest_client.models.product_l0_dist.ProductL0Dist()  # noqa: E501
        if include_optional :
            return ProductL0Dist(
                id = 56, 
                l0_coverage_location = '0', 
                l0_instrument_files = [
                    product_catalogue_py_rest_client.models.product_l0_instrument_file.ProductL0InstrumentFile(
                        id = 56, 
                        l0_instrument_file = '0', )
                    ], 
                source_product = product_catalogue_py_rest_client.models.product_l0_src.ProductL0Src(
                    id = 56, 
                    l0_instrument_location = '0', 
                    metadata_persistent_id = '0', 
                    name = '0', 
                    srs = '0', 
                    uuid = '0', 
                    vertical_datum = 'Unknown', )
            )
        else :
            return ProductL0Dist(
                id = 56,
                l0_coverage_location = '0',
                l0_instrument_files = [
                    product_catalogue_py_rest_client.models.product_l0_instrument_file.ProductL0InstrumentFile(
                        id = 56, 
                        l0_instrument_file = '0', )
                    ],
                source_product = product_catalogue_py_rest_client.models.product_l0_src.ProductL0Src(
                    id = 56, 
                    l0_instrument_location = '0', 
                    metadata_persistent_id = '0', 
                    name = '0', 
                    srs = '0', 
                    uuid = '0', 
                    vertical_datum = 'Unknown', ),
        )

    def testProductL0Dist(self):
        """Test ProductL0Dist"""
        inst_req_only = self.make_instance(include_optional=False)
        inst_req_and_optional = self.make_instance(include_optional=True)


if __name__ == '__main__':
    unittest.main()

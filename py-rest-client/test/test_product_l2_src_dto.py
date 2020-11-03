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
from product_catalogue_py_rest_client.models.product_l2_src_dto import ProductL2SrcDto  # noqa: E501
from product_catalogue_py_rest_client.rest import ApiException

class TestProductL2SrcDto(unittest.TestCase):
    """ProductL2SrcDto unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional):
        """Test ProductL2SrcDto
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # model = product_catalogue_py_rest_client.models.product_l2_src_dto.ProductL2SrcDto()  # noqa: E501
        if include_optional :
            return ProductL2SrcDto(
                metadata_persistent_id = '0', 
                name = '0', 
                product_gsf_location = '0', 
                product_posmv_location = '0', 
                srs = '0', 
                uuid = '0', 
                vertical_datum = 'Unknown', 
                vessel_file_location = '0'
            )
        else :
            return ProductL2SrcDto(
                metadata_persistent_id = '0',
                name = '0',
                product_gsf_location = '0',
                product_posmv_location = '0',
                srs = '0',
                uuid = '0',
                vertical_datum = 'Unknown',
                vessel_file_location = '0',
        )

    def testProductL2SrcDto(self):
        """Test ProductL2SrcDto"""
        inst_req_only = self.make_instance(include_optional=False)
        inst_req_and_optional = self.make_instance(include_optional=True)


if __name__ == '__main__':
    unittest.main()

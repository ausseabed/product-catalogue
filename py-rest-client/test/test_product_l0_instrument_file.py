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
from product_catalogue_py_rest_client.models.product_l0_instrument_file import ProductL0InstrumentFile  # noqa: E501
from product_catalogue_py_rest_client.rest import ApiException

class TestProductL0InstrumentFile(unittest.TestCase):
    """ProductL0InstrumentFile unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional):
        """Test ProductL0InstrumentFile
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # model = product_catalogue_py_rest_client.models.product_l0_instrument_file.ProductL0InstrumentFile()  # noqa: E501
        if include_optional :
            return ProductL0InstrumentFile(
                id = 56, 
                l0_instrument_file = '0'
            )
        else :
            return ProductL0InstrumentFile(
                id = 56,
                l0_instrument_file = '0',
        )

    def testProductL0InstrumentFile(self):
        """Test ProductL0InstrumentFile"""
        inst_req_only = self.make_instance(include_optional=False)
        inst_req_and_optional = self.make_instance(include_optional=True)


if __name__ == '__main__':
    unittest.main()

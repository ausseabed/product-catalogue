# coding: utf-8

# flake8: noqa

"""
    AusSeabed product catalogue

    The API description for the Ausseabed product catalogue inventory  # noqa: E501

    The version of the OpenAPI document: 0.2.2
    Contact: AusSeabed@ga.gov.au
    Generated by: https://openapi-generator.tech
"""


from __future__ import absolute_import

__version__ = "1.0.0"

# import apis into sdk package
from product_catalogue_py_rest_client.api.compilations_api import CompilationsApi
from product_catalogue_py_rest_client.api.product_relations_api import ProductRelationsApi
from product_catalogue_py_rest_client.api.products_l0_dist_api import ProductsL0DistApi
from product_catalogue_py_rest_client.api.products_l0_src_api import ProductsL0SrcApi
from product_catalogue_py_rest_client.api.products_l2_src_api import ProductsL2SrcApi
from product_catalogue_py_rest_client.api.products_l3_dist_api import ProductsL3DistApi
from product_catalogue_py_rest_client.api.products_l3_src_api import ProductsL3SrcApi
from product_catalogue_py_rest_client.api.styles_api import StylesApi
from product_catalogue_py_rest_client.api.surveys_api import SurveysApi

# import ApiClient
from product_catalogue_py_rest_client.api_client import ApiClient
from product_catalogue_py_rest_client.configuration import Configuration
from product_catalogue_py_rest_client.exceptions import OpenApiException
from product_catalogue_py_rest_client.exceptions import ApiTypeError
from product_catalogue_py_rest_client.exceptions import ApiValueError
from product_catalogue_py_rest_client.exceptions import ApiKeyError
from product_catalogue_py_rest_client.exceptions import ApiAttributeError
from product_catalogue_py_rest_client.exceptions import ApiException
# import models into sdk package
from product_catalogue_py_rest_client.models.compilation import Compilation
from product_catalogue_py_rest_client.models.compilation_dto import CompilationDto
from product_catalogue_py_rest_client.models.compilation_l3_relation import CompilationL3Relation
from product_catalogue_py_rest_client.models.compilation_l3_relation_dto import CompilationL3RelationDto
from product_catalogue_py_rest_client.models.error_dto import ErrorDto
from product_catalogue_py_rest_client.models.product_l0_dist import ProductL0Dist
from product_catalogue_py_rest_client.models.product_l0_dist_dto import ProductL0DistDto
from product_catalogue_py_rest_client.models.product_l0_instrument_file import ProductL0InstrumentFile
from product_catalogue_py_rest_client.models.product_l0_instrument_file_dto import ProductL0InstrumentFileDto
from product_catalogue_py_rest_client.models.product_l0_src import ProductL0Src
from product_catalogue_py_rest_client.models.product_l0_src_dto import ProductL0SrcDto
from product_catalogue_py_rest_client.models.product_l2_src import ProductL2Src
from product_catalogue_py_rest_client.models.product_l2_src_dto import ProductL2SrcDto
from product_catalogue_py_rest_client.models.product_l3_dist import ProductL3Dist
from product_catalogue_py_rest_client.models.product_l3_dist_dto import ProductL3DistDto
from product_catalogue_py_rest_client.models.product_l3_src import ProductL3Src
from product_catalogue_py_rest_client.models.product_l3_src_dto import ProductL3SrcDto
from product_catalogue_py_rest_client.models.relation_summary_dto import RelationSummaryDto
from product_catalogue_py_rest_client.models.style import Style
from product_catalogue_py_rest_client.models.survey import Survey
from product_catalogue_py_rest_client.models.survey_dto import SurveyDto
from product_catalogue_py_rest_client.models.survey_l0_relation import SurveyL0Relation
from product_catalogue_py_rest_client.models.survey_l0_relation_dto import SurveyL0RelationDto
from product_catalogue_py_rest_client.models.survey_l2_relation import SurveyL2Relation
from product_catalogue_py_rest_client.models.survey_l2_relation_dto import SurveyL2RelationDto
from product_catalogue_py_rest_client.models.survey_l3_relation import SurveyL3Relation
from product_catalogue_py_rest_client.models.survey_l3_relation_dto import SurveyL3RelationDto


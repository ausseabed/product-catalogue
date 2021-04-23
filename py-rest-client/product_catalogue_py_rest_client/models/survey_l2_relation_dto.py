# coding: utf-8

"""
    AusSeabed product catalogue

    The API description for the Ausseabed product catalogue inventory  # noqa: E501

    The version of the OpenAPI document: 0.2.2
    Contact: AusSeabed@ga.gov.au
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six

from product_catalogue_py_rest_client.configuration import Configuration


class SurveyL2RelationDto(object):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    """
    Attributes:
      openapi_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    openapi_types = {
        'product_l2_src': 'float',
        'survey': 'float'
    }

    attribute_map = {
        'product_l2_src': 'productL2Src',
        'survey': 'survey'
    }

    def __init__(self, product_l2_src=None, survey=None, local_vars_configuration=None):  # noqa: E501
        """SurveyL2RelationDto - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration()
        self.local_vars_configuration = local_vars_configuration

        self._product_l2_src = None
        self._survey = None
        self.discriminator = None

        self.product_l2_src = product_l2_src
        self.survey = survey

    @property
    def product_l2_src(self):
        """Gets the product_l2_src of this SurveyL2RelationDto.  # noqa: E501

        Identifier of the product produced as part of the survey  # noqa: E501

        :return: The product_l2_src of this SurveyL2RelationDto.  # noqa: E501
        :rtype: float
        """
        return self._product_l2_src

    @product_l2_src.setter
    def product_l2_src(self, product_l2_src):
        """Sets the product_l2_src of this SurveyL2RelationDto.

        Identifier of the product produced as part of the survey  # noqa: E501

        :param product_l2_src: The product_l2_src of this SurveyL2RelationDto.  # noqa: E501
        :type product_l2_src: float
        """
        if self.local_vars_configuration.client_side_validation and product_l2_src is None:  # noqa: E501
            raise ValueError("Invalid value for `product_l2_src`, must not be `None`")  # noqa: E501

        self._product_l2_src = product_l2_src

    @property
    def survey(self):
        """Gets the survey of this SurveyL2RelationDto.  # noqa: E501

        Identifier of the survey that produced the products  # noqa: E501

        :return: The survey of this SurveyL2RelationDto.  # noqa: E501
        :rtype: float
        """
        return self._survey

    @survey.setter
    def survey(self, survey):
        """Sets the survey of this SurveyL2RelationDto.

        Identifier of the survey that produced the products  # noqa: E501

        :param survey: The survey of this SurveyL2RelationDto.  # noqa: E501
        :type survey: float
        """
        if self.local_vars_configuration.client_side_validation and survey is None:  # noqa: E501
            raise ValueError("Invalid value for `survey`, must not be `None`")  # noqa: E501

        self._survey = survey

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.openapi_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, SurveyL2RelationDto):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, SurveyL2RelationDto):
            return True

        return self.to_dict() != other.to_dict()
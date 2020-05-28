# coding: utf-8

"""
    AusSeabed product catalogue

    The API description for the Ausseabed product catalogue inventory  # noqa: E501

    The version of the OpenAPI document: 0.1.9
    Contact: AusSeabed@ga.gov.au
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six

from product_catalogue_py_rest_client.configuration import Configuration


class RelationSummaryDto(object):
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
        'product_id': 'object',
        'product_name': 'object',
        'relation_id': 'object',
        'survey_id': 'object'
    }

    attribute_map = {
        'product_id': 'product_id',
        'product_name': 'product_name',
        'relation_id': 'relation_id',
        'survey_id': 'survey_id'
    }

    def __init__(self, product_id=None, product_name=None, relation_id=None, survey_id=None, local_vars_configuration=None):  # noqa: E501
        """RelationSummaryDto - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration()
        self.local_vars_configuration = local_vars_configuration

        self._product_id = None
        self._product_name = None
        self._relation_id = None
        self._survey_id = None
        self.discriminator = None

        self.product_id = product_id
        self.product_name = product_name
        self.relation_id = relation_id
        self.survey_id = survey_id

    @property
    def product_id(self):
        """Gets the product_id of this RelationSummaryDto.  # noqa: E501

        Identifier of the products  # noqa: E501

        :return: The product_id of this RelationSummaryDto.  # noqa: E501
        :rtype: object
        """
        return self._product_id

    @product_id.setter
    def product_id(self, product_id):
        """Sets the product_id of this RelationSummaryDto.

        Identifier of the products  # noqa: E501

        :param product_id: The product_id of this RelationSummaryDto.  # noqa: E501
        :type: object
        """
        if self.local_vars_configuration.client_side_validation and product_id is None:  # noqa: E501
            raise ValueError("Invalid value for `product_id`, must not be `None`")  # noqa: E501

        self._product_id = product_id

    @property
    def product_name(self):
        """Gets the product_name of this RelationSummaryDto.  # noqa: E501

        The name of the product  # noqa: E501

        :return: The product_name of this RelationSummaryDto.  # noqa: E501
        :rtype: object
        """
        return self._product_name

    @product_name.setter
    def product_name(self, product_name):
        """Sets the product_name of this RelationSummaryDto.

        The name of the product  # noqa: E501

        :param product_name: The product_name of this RelationSummaryDto.  # noqa: E501
        :type: object
        """
        if self.local_vars_configuration.client_side_validation and product_name is None:  # noqa: E501
            raise ValueError("Invalid value for `product_name`, must not be `None`")  # noqa: E501

        self._product_name = product_name

    @property
    def relation_id(self):
        """Gets the relation_id of this RelationSummaryDto.  # noqa: E501

        Identifier of the relation between the products  # noqa: E501

        :return: The relation_id of this RelationSummaryDto.  # noqa: E501
        :rtype: object
        """
        return self._relation_id

    @relation_id.setter
    def relation_id(self, relation_id):
        """Sets the relation_id of this RelationSummaryDto.

        Identifier of the relation between the products  # noqa: E501

        :param relation_id: The relation_id of this RelationSummaryDto.  # noqa: E501
        :type: object
        """
        if self.local_vars_configuration.client_side_validation and relation_id is None:  # noqa: E501
            raise ValueError("Invalid value for `relation_id`, must not be `None`")  # noqa: E501

        self._relation_id = relation_id

    @property
    def survey_id(self):
        """Gets the survey_id of this RelationSummaryDto.  # noqa: E501

        Identifier of the survey/compilation that contains the products  # noqa: E501

        :return: The survey_id of this RelationSummaryDto.  # noqa: E501
        :rtype: object
        """
        return self._survey_id

    @survey_id.setter
    def survey_id(self, survey_id):
        """Sets the survey_id of this RelationSummaryDto.

        Identifier of the survey/compilation that contains the products  # noqa: E501

        :param survey_id: The survey_id of this RelationSummaryDto.  # noqa: E501
        :type: object
        """
        if self.local_vars_configuration.client_side_validation and survey_id is None:  # noqa: E501
            raise ValueError("Invalid value for `survey_id`, must not be `None`")  # noqa: E501

        self._survey_id = survey_id

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
        if not isinstance(other, RelationSummaryDto):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, RelationSummaryDto):
            return True

        return self.to_dict() != other.to_dict()

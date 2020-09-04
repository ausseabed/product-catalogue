# coding: utf-8

"""
    AusSeabed product catalogue

    The API description for the Ausseabed product catalogue inventory  # noqa: E501

    The version of the OpenAPI document: 0.1.14
    Contact: AusSeabed@ga.gov.au
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six

from product_catalogue_py_rest_client.configuration import Configuration


class CompilationL3Relation(object):
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
        'compilation': 'Compilation',
        'id': 'int',
        'product_l3_src': 'ProductL3Src'
    }

    attribute_map = {
        'compilation': 'compilation',
        'id': 'id',
        'product_l3_src': 'productL3Src'
    }

    def __init__(self, compilation=None, id=None, product_l3_src=None, local_vars_configuration=None):  # noqa: E501
        """CompilationL3Relation - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration()
        self.local_vars_configuration = local_vars_configuration

        self._compilation = None
        self._id = None
        self._product_l3_src = None
        self.discriminator = None

        self.compilation = compilation
        self.id = id
        self.product_l3_src = product_l3_src

    @property
    def compilation(self):
        """Gets the compilation of this CompilationL3Relation.  # noqa: E501


        :return: The compilation of this CompilationL3Relation.  # noqa: E501
        :rtype: Compilation
        """
        return self._compilation

    @compilation.setter
    def compilation(self, compilation):
        """Sets the compilation of this CompilationL3Relation.


        :param compilation: The compilation of this CompilationL3Relation.  # noqa: E501
        :type: Compilation
        """
        if self.local_vars_configuration.client_side_validation and compilation is None:  # noqa: E501
            raise ValueError("Invalid value for `compilation`, must not be `None`")  # noqa: E501

        self._compilation = compilation

    @property
    def id(self):
        """Gets the id of this CompilationL3Relation.  # noqa: E501


        :return: The id of this CompilationL3Relation.  # noqa: E501
        :rtype: int
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this CompilationL3Relation.


        :param id: The id of this CompilationL3Relation.  # noqa: E501
        :type: int
        """
        if self.local_vars_configuration.client_side_validation and id is None:  # noqa: E501
            raise ValueError("Invalid value for `id`, must not be `None`")  # noqa: E501

        self._id = id

    @property
    def product_l3_src(self):
        """Gets the product_l3_src of this CompilationL3Relation.  # noqa: E501


        :return: The product_l3_src of this CompilationL3Relation.  # noqa: E501
        :rtype: ProductL3Src
        """
        return self._product_l3_src

    @product_l3_src.setter
    def product_l3_src(self, product_l3_src):
        """Sets the product_l3_src of this CompilationL3Relation.


        :param product_l3_src: The product_l3_src of this CompilationL3Relation.  # noqa: E501
        :type: ProductL3Src
        """
        if self.local_vars_configuration.client_side_validation and product_l3_src is None:  # noqa: E501
            raise ValueError("Invalid value for `product_l3_src`, must not be `None`")  # noqa: E501

        self._product_l3_src = product_l3_src

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
        if not isinstance(other, CompilationL3Relation):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, CompilationL3Relation):
            return True

        return self.to_dict() != other.to_dict()

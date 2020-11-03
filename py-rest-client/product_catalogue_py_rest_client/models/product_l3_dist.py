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


class ProductL3Dist(object):
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
        'bathymetry_bag_location': 'str',
        'bathymetry_location': 'str',
        'hillshade_location': 'str',
        'id': 'int',
        'l3_coverage_location': 'str',
        'source_product': 'ProductL3Src'
    }

    attribute_map = {
        'bathymetry_bag_location': 'bathymetryBagLocation',
        'bathymetry_location': 'bathymetryLocation',
        'hillshade_location': 'hillshadeLocation',
        'id': 'id',
        'l3_coverage_location': 'l3CoverageLocation',
        'source_product': 'sourceProduct'
    }

    def __init__(self, bathymetry_bag_location=None, bathymetry_location=None, hillshade_location=None, id=None, l3_coverage_location=None, source_product=None, local_vars_configuration=None):  # noqa: E501
        """ProductL3Dist - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration()
        self.local_vars_configuration = local_vars_configuration

        self._bathymetry_bag_location = None
        self._bathymetry_location = None
        self._hillshade_location = None
        self._id = None
        self._l3_coverage_location = None
        self._source_product = None
        self.discriminator = None

        self.bathymetry_bag_location = bathymetry_bag_location
        self.bathymetry_location = bathymetry_location
        self.hillshade_location = hillshade_location
        self.id = id
        self.l3_coverage_location = l3_coverage_location
        self.source_product = source_product

    @property
    def bathymetry_bag_location(self):
        """Gets the bathymetry_bag_location of this ProductL3Dist.  # noqa: E501


        :return: The bathymetry_bag_location of this ProductL3Dist.  # noqa: E501
        :rtype: str
        """
        return self._bathymetry_bag_location

    @bathymetry_bag_location.setter
    def bathymetry_bag_location(self, bathymetry_bag_location):
        """Sets the bathymetry_bag_location of this ProductL3Dist.


        :param bathymetry_bag_location: The bathymetry_bag_location of this ProductL3Dist.  # noqa: E501
        :type bathymetry_bag_location: str
        """
        if self.local_vars_configuration.client_side_validation and bathymetry_bag_location is None:  # noqa: E501
            raise ValueError("Invalid value for `bathymetry_bag_location`, must not be `None`")  # noqa: E501

        self._bathymetry_bag_location = bathymetry_bag_location

    @property
    def bathymetry_location(self):
        """Gets the bathymetry_location of this ProductL3Dist.  # noqa: E501


        :return: The bathymetry_location of this ProductL3Dist.  # noqa: E501
        :rtype: str
        """
        return self._bathymetry_location

    @bathymetry_location.setter
    def bathymetry_location(self, bathymetry_location):
        """Sets the bathymetry_location of this ProductL3Dist.


        :param bathymetry_location: The bathymetry_location of this ProductL3Dist.  # noqa: E501
        :type bathymetry_location: str
        """
        if self.local_vars_configuration.client_side_validation and bathymetry_location is None:  # noqa: E501
            raise ValueError("Invalid value for `bathymetry_location`, must not be `None`")  # noqa: E501

        self._bathymetry_location = bathymetry_location

    @property
    def hillshade_location(self):
        """Gets the hillshade_location of this ProductL3Dist.  # noqa: E501


        :return: The hillshade_location of this ProductL3Dist.  # noqa: E501
        :rtype: str
        """
        return self._hillshade_location

    @hillshade_location.setter
    def hillshade_location(self, hillshade_location):
        """Sets the hillshade_location of this ProductL3Dist.


        :param hillshade_location: The hillshade_location of this ProductL3Dist.  # noqa: E501
        :type hillshade_location: str
        """
        if self.local_vars_configuration.client_side_validation and hillshade_location is None:  # noqa: E501
            raise ValueError("Invalid value for `hillshade_location`, must not be `None`")  # noqa: E501

        self._hillshade_location = hillshade_location

    @property
    def id(self):
        """Gets the id of this ProductL3Dist.  # noqa: E501


        :return: The id of this ProductL3Dist.  # noqa: E501
        :rtype: int
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this ProductL3Dist.


        :param id: The id of this ProductL3Dist.  # noqa: E501
        :type id: int
        """
        if self.local_vars_configuration.client_side_validation and id is None:  # noqa: E501
            raise ValueError("Invalid value for `id`, must not be `None`")  # noqa: E501

        self._id = id

    @property
    def l3_coverage_location(self):
        """Gets the l3_coverage_location of this ProductL3Dist.  # noqa: E501


        :return: The l3_coverage_location of this ProductL3Dist.  # noqa: E501
        :rtype: str
        """
        return self._l3_coverage_location

    @l3_coverage_location.setter
    def l3_coverage_location(self, l3_coverage_location):
        """Sets the l3_coverage_location of this ProductL3Dist.


        :param l3_coverage_location: The l3_coverage_location of this ProductL3Dist.  # noqa: E501
        :type l3_coverage_location: str
        """
        if self.local_vars_configuration.client_side_validation and l3_coverage_location is None:  # noqa: E501
            raise ValueError("Invalid value for `l3_coverage_location`, must not be `None`")  # noqa: E501

        self._l3_coverage_location = l3_coverage_location

    @property
    def source_product(self):
        """Gets the source_product of this ProductL3Dist.  # noqa: E501


        :return: The source_product of this ProductL3Dist.  # noqa: E501
        :rtype: ProductL3Src
        """
        return self._source_product

    @source_product.setter
    def source_product(self, source_product):
        """Sets the source_product of this ProductL3Dist.


        :param source_product: The source_product of this ProductL3Dist.  # noqa: E501
        :type source_product: ProductL3Src
        """
        if self.local_vars_configuration.client_side_validation and source_product is None:  # noqa: E501
            raise ValueError("Invalid value for `source_product`, must not be `None`")  # noqa: E501

        self._source_product = source_product

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
        if not isinstance(other, ProductL3Dist):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, ProductL3Dist):
            return True

        return self.to_dict() != other.to_dict()

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


class ProductL3DistDto(object):
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
        'bathymetry_location': 'str',
        'hillshade_location': 'str',
        'l3_coverage_location': 'str'
    }

    attribute_map = {
        'bathymetry_location': 'bathymetryLocation',
        'hillshade_location': 'hillshadeLocation',
        'l3_coverage_location': 'l3CoverageLocation'
    }

    def __init__(self, bathymetry_location=None, hillshade_location=None, l3_coverage_location=None, local_vars_configuration=None):  # noqa: E501
        """ProductL3DistDto - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration()
        self.local_vars_configuration = local_vars_configuration

        self._bathymetry_location = None
        self._hillshade_location = None
        self._l3_coverage_location = None
        self.discriminator = None

        self.bathymetry_location = bathymetry_location
        self.hillshade_location = hillshade_location
        self.l3_coverage_location = l3_coverage_location

    @property
    def bathymetry_location(self):
        """Gets the bathymetry_location of this ProductL3DistDto.  # noqa: E501

        Location of the raster bathymetry  # noqa: E501

        :return: The bathymetry_location of this ProductL3DistDto.  # noqa: E501
        :rtype: str
        """
        return self._bathymetry_location

    @bathymetry_location.setter
    def bathymetry_location(self, bathymetry_location):
        """Sets the bathymetry_location of this ProductL3DistDto.

        Location of the raster bathymetry  # noqa: E501

        :param bathymetry_location: The bathymetry_location of this ProductL3DistDto.  # noqa: E501
        :type: str
        """
        if self.local_vars_configuration.client_side_validation and bathymetry_location is None:  # noqa: E501
            raise ValueError("Invalid value for `bathymetry_location`, must not be `None`")  # noqa: E501

        self._bathymetry_location = bathymetry_location

    @property
    def hillshade_location(self):
        """Gets the hillshade_location of this ProductL3DistDto.  # noqa: E501

        S3 location of hillshade  # noqa: E501

        :return: The hillshade_location of this ProductL3DistDto.  # noqa: E501
        :rtype: str
        """
        return self._hillshade_location

    @hillshade_location.setter
    def hillshade_location(self, hillshade_location):
        """Sets the hillshade_location of this ProductL3DistDto.

        S3 location of hillshade  # noqa: E501

        :param hillshade_location: The hillshade_location of this ProductL3DistDto.  # noqa: E501
        :type: str
        """
        if self.local_vars_configuration.client_side_validation and hillshade_location is None:  # noqa: E501
            raise ValueError("Invalid value for `hillshade_location`, must not be `None`")  # noqa: E501

        self._hillshade_location = hillshade_location

    @property
    def l3_coverage_location(self):
        """Gets the l3_coverage_location of this ProductL3DistDto.  # noqa: E501

        Location of coverage extent of L3 product  # noqa: E501

        :return: The l3_coverage_location of this ProductL3DistDto.  # noqa: E501
        :rtype: str
        """
        return self._l3_coverage_location

    @l3_coverage_location.setter
    def l3_coverage_location(self, l3_coverage_location):
        """Sets the l3_coverage_location of this ProductL3DistDto.

        Location of coverage extent of L3 product  # noqa: E501

        :param l3_coverage_location: The l3_coverage_location of this ProductL3DistDto.  # noqa: E501
        :type: str
        """
        if self.local_vars_configuration.client_side_validation and l3_coverage_location is None:  # noqa: E501
            raise ValueError("Invalid value for `l3_coverage_location`, must not be `None`")  # noqa: E501

        self._l3_coverage_location = l3_coverage_location

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
        if not isinstance(other, ProductL3DistDto):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, ProductL3DistDto):
            return True

        return self.to_dict() != other.to_dict()
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


class Style(object):
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
        'id': 'str',
        'name': 'str',
        'geoserver_style_name': 'str',
        'description': 'str'
    }

    attribute_map = {
        'id': 'id',
        'name': 'name',
        'geoserver_style_name': 'geoserverStyleName',
        'description': 'description'
    }

    def __init__(self, id=None, name=None, geoserver_style_name=None, description=None, local_vars_configuration=None):  # noqa: E501
        """Style - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration()
        self.local_vars_configuration = local_vars_configuration

        self._id = None
        self._name = None
        self._geoserver_style_name = None
        self._description = None
        self.discriminator = None

        self.id = id
        self.name = name
        self.geoserver_style_name = geoserver_style_name
        self.description = description

    @property
    def id(self):
        """Gets the id of this Style.  # noqa: E501


        :return: The id of this Style.  # noqa: E501
        :rtype: str
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this Style.


        :param id: The id of this Style.  # noqa: E501
        :type id: str
        """
        if self.local_vars_configuration.client_side_validation and id is None:  # noqa: E501
            raise ValueError("Invalid value for `id`, must not be `None`")  # noqa: E501

        self._id = id

    @property
    def name(self):
        """Gets the name of this Style.  # noqa: E501


        :return: The name of this Style.  # noqa: E501
        :rtype: str
        """
        return self._name

    @name.setter
    def name(self, name):
        """Sets the name of this Style.


        :param name: The name of this Style.  # noqa: E501
        :type name: str
        """
        if self.local_vars_configuration.client_side_validation and name is None:  # noqa: E501
            raise ValueError("Invalid value for `name`, must not be `None`")  # noqa: E501

        self._name = name

    @property
    def geoserver_style_name(self):
        """Gets the geoserver_style_name of this Style.  # noqa: E501


        :return: The geoserver_style_name of this Style.  # noqa: E501
        :rtype: str
        """
        return self._geoserver_style_name

    @geoserver_style_name.setter
    def geoserver_style_name(self, geoserver_style_name):
        """Sets the geoserver_style_name of this Style.


        :param geoserver_style_name: The geoserver_style_name of this Style.  # noqa: E501
        :type geoserver_style_name: str
        """
        if self.local_vars_configuration.client_side_validation and geoserver_style_name is None:  # noqa: E501
            raise ValueError("Invalid value for `geoserver_style_name`, must not be `None`")  # noqa: E501

        self._geoserver_style_name = geoserver_style_name

    @property
    def description(self):
        """Gets the description of this Style.  # noqa: E501


        :return: The description of this Style.  # noqa: E501
        :rtype: str
        """
        return self._description

    @description.setter
    def description(self, description):
        """Sets the description of this Style.


        :param description: The description of this Style.  # noqa: E501
        :type description: str
        """
        if self.local_vars_configuration.client_side_validation and description is None:  # noqa: E501
            raise ValueError("Invalid value for `description`, must not be `None`")  # noqa: E501

        self._description = description

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
        if not isinstance(other, Style):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, Style):
            return True

        return self.to_dict() != other.to_dict()

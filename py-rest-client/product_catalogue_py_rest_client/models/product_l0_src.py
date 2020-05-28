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


class ProductL0Src(object):
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
        'id': 'float',
        'l0_instrument_location': 'str',
        'metadata_persistent_id': 'str',
        'name': 'str',
        'srs': 'str',
        'uuid': 'str'
    }

    attribute_map = {
        'id': 'id',
        'l0_instrument_location': 'l0InstrumentLocation',
        'metadata_persistent_id': 'metadataPersistentId',
        'name': 'name',
        'srs': 'srs',
        'uuid': 'uuid'
    }

    def __init__(self, id=None, l0_instrument_location=None, metadata_persistent_id=None, name=None, srs=None, uuid=None, local_vars_configuration=None):  # noqa: E501
        """ProductL0Src - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration()
        self.local_vars_configuration = local_vars_configuration

        self._id = None
        self._l0_instrument_location = None
        self._metadata_persistent_id = None
        self._name = None
        self._srs = None
        self._uuid = None
        self.discriminator = None

        self.id = id
        self.l0_instrument_location = l0_instrument_location
        self.metadata_persistent_id = metadata_persistent_id
        self.name = name
        self.srs = srs
        self.uuid = uuid

    @property
    def id(self):
        """Gets the id of this ProductL0Src.  # noqa: E501


        :return: The id of this ProductL0Src.  # noqa: E501
        :rtype: float
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this ProductL0Src.


        :param id: The id of this ProductL0Src.  # noqa: E501
        :type: float
        """
        if self.local_vars_configuration.client_side_validation and id is None:  # noqa: E501
            raise ValueError("Invalid value for `id`, must not be `None`")  # noqa: E501

        self._id = id

    @property
    def l0_instrument_location(self):
        """Gets the l0_instrument_location of this ProductL0Src.  # noqa: E501


        :return: The l0_instrument_location of this ProductL0Src.  # noqa: E501
        :rtype: str
        """
        return self._l0_instrument_location

    @l0_instrument_location.setter
    def l0_instrument_location(self, l0_instrument_location):
        """Sets the l0_instrument_location of this ProductL0Src.


        :param l0_instrument_location: The l0_instrument_location of this ProductL0Src.  # noqa: E501
        :type: str
        """
        if self.local_vars_configuration.client_side_validation and l0_instrument_location is None:  # noqa: E501
            raise ValueError("Invalid value for `l0_instrument_location`, must not be `None`")  # noqa: E501

        self._l0_instrument_location = l0_instrument_location

    @property
    def metadata_persistent_id(self):
        """Gets the metadata_persistent_id of this ProductL0Src.  # noqa: E501


        :return: The metadata_persistent_id of this ProductL0Src.  # noqa: E501
        :rtype: str
        """
        return self._metadata_persistent_id

    @metadata_persistent_id.setter
    def metadata_persistent_id(self, metadata_persistent_id):
        """Sets the metadata_persistent_id of this ProductL0Src.


        :param metadata_persistent_id: The metadata_persistent_id of this ProductL0Src.  # noqa: E501
        :type: str
        """
        if self.local_vars_configuration.client_side_validation and metadata_persistent_id is None:  # noqa: E501
            raise ValueError("Invalid value for `metadata_persistent_id`, must not be `None`")  # noqa: E501

        self._metadata_persistent_id = metadata_persistent_id

    @property
    def name(self):
        """Gets the name of this ProductL0Src.  # noqa: E501


        :return: The name of this ProductL0Src.  # noqa: E501
        :rtype: str
        """
        return self._name

    @name.setter
    def name(self, name):
        """Sets the name of this ProductL0Src.


        :param name: The name of this ProductL0Src.  # noqa: E501
        :type: str
        """
        if self.local_vars_configuration.client_side_validation and name is None:  # noqa: E501
            raise ValueError("Invalid value for `name`, must not be `None`")  # noqa: E501

        self._name = name

    @property
    def srs(self):
        """Gets the srs of this ProductL0Src.  # noqa: E501


        :return: The srs of this ProductL0Src.  # noqa: E501
        :rtype: str
        """
        return self._srs

    @srs.setter
    def srs(self, srs):
        """Sets the srs of this ProductL0Src.


        :param srs: The srs of this ProductL0Src.  # noqa: E501
        :type: str
        """
        if self.local_vars_configuration.client_side_validation and srs is None:  # noqa: E501
            raise ValueError("Invalid value for `srs`, must not be `None`")  # noqa: E501

        self._srs = srs

    @property
    def uuid(self):
        """Gets the uuid of this ProductL0Src.  # noqa: E501


        :return: The uuid of this ProductL0Src.  # noqa: E501
        :rtype: str
        """
        return self._uuid

    @uuid.setter
    def uuid(self, uuid):
        """Sets the uuid of this ProductL0Src.


        :param uuid: The uuid of this ProductL0Src.  # noqa: E501
        :type: str
        """
        if self.local_vars_configuration.client_side_validation and uuid is None:  # noqa: E501
            raise ValueError("Invalid value for `uuid`, must not be `None`")  # noqa: E501

        self._uuid = uuid

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
        if not isinstance(other, ProductL0Src):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, ProductL0Src):
            return True

        return self.to_dict() != other.to_dict()

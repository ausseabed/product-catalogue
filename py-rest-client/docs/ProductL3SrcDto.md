# ProductL3SrcDto

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **str** | Unique identifier for reference purposes | 
**name** | **str** | Name of product for display purposes - from gazeteer | 
**srs** | **str** | Spatial Reference of product | 
**metadata_persistent_id** | **str** | Persistent Id of final product | 
**resolution** | **str** | Resolution of product for display purposes  | 
**product_tif_location** | **str** | Location of final tif product  | 
**product_bag_location** | **str** | Location of final bag product  | 
**vertical_datum** | **str** | Vertical datum of bathymetry * &#x60;LAT&#x60; - Lowest Astronomical Tide * &#x60;AHD&#x60; - Australian Height Datum * &#x60;LMSL&#x60; - LMSL - Local Mean Sea Level (or just Mean Sea Level) * &#x60;WGS84&#x60; - WGS84 &#39;Ellipsoid&#39; | 
**default_style** | [**Style**](Style.md) |  | [optional] 
**available_styles** | [**list[Style]**](Style.md) | Available styles in web map service | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



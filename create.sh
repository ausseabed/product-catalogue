#!/bin/bash
mkdir asb-pc-api-fetch
(cd asb-pc-api-fetch
curl http://localhost:3000/api-json | python -m json.tool > openapi-definition.json
openapi-generator-typescript generate -g typescript -i openapi-definition.json \
--additional-properties="npmName=@ausseabed/pc-api-fetch,npmRepository=git://github.com/ausseabed/product-catalogue.git" 
)
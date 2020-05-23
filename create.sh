#!/bin/bash
mkdir rest-client
(cd rest-client
curl http://localhost:3000/api-json | python -m json.tool > openapi-definition.json
openapi-generator-typescript generate -g typescript -i openapi-definition.json \
--additional-properties="npmName=@ausseabed/product-catalogue-rest-client,npmRepository=https://npm.pkg.github.com/" 
)

#!/bin/bash

# Create a python library for working with restful backend
# Requires openapi-generator v5 (https://github.com/OpenAPITools/openapi-generator)
# make sure that you run yarn start (not yarn dev) in the server folder to push out all metadata

mkdir rest-client
(cd rest-client
curl http://localhost:3000/api-json | python -m json.tool > openapi-definition.json
openapi-generator-typescript generate -g typescript -i openapi-definition.json \
--additional-properties="npmName=@ausseabed/product-catalogue-rest-client,npmRepository=https://npm.pkg.github.com/" 
)

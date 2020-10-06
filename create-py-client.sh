#!/bin/bash

# Create a python library for working with restful backend
# Requires openapi-generator v5 (https://github.com/OpenAPITools/openapi-generator)
# make sure that you run yarn start (not yarn dev) in the server folder to push out all metadata

mkdir py-rest-client
(cd py-rest-client
curl http://localhost:3000/api-json | python -m json.tool > openapi-definition.json
/usr/bin/java -jar ~/externals/openapi-generator-cli-5.0.0-beta2.jar generate -g python -i openapi-definition.json \
   --git-user-id "ausseabed" \
   --git-repo-id "product-catalogue.git#subdirectory=py-rest-client\&ignore=" \
   --additional-properties="packageName=product_catalogue_py_rest_client,projectName=product-catalogue-py-rest-client" 
)


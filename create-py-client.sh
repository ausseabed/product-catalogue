#!/bin/bash
mkdir py-rest-client
(cd py-rest-client
curl http://localhost:3000/api-json | python -m json.tool > openapi-definition.json
openapi-generator generate -g python -i openapi-definition.json \
   --git-user-id "ausseabed" \
   --git-repo-id "product-catalogue.git#subdirectory=py-rest-client\&ignore=" \
   --additional-properties="packageName=product_catalogue_py_rest_client,projectName=product-catalogue-py-rest-client" 
)


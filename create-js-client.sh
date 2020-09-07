#!/bin/bash

# Create a python library for working with restful backend
# Requires openapi-generator v5 (https://github.com/OpenAPITools/openapi-generator)
# make sure that you run yarn start (not yarn dev) in the server folder to push out all metadata
#
# wget https://repo1.maven.org/maven2/org/openapitools/openapi-generator-cli/5.0.0-beta2/openapi-generator-cli-5.0.0-beta2.jar

mkdir rest-client
(cd rest-client
curl http://localhost:3000/api-json | python -m json.tool > openapi-definition.json
/usr/bin/java -jar ~/externals/openapi-generator-cli-5.0.0-beta2.jar generate -g typescript -i openapi-definition.json \
--additional-properties="npmName=@ausseabed/product-catalogue-rest-client,npmRepository=https://npm.pkg.github.com/" 
)

echo "Fix the license in package.json and associate with git account to publish"
echo "cd rest-client"
echo "npm install"
echo "npm run build"
echo "npm publish"

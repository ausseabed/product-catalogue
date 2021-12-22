# Marine MH370 Data Discovery API
This is a Node.js application that gets deployed to the same container where the product-catalogue server is running.
It listens on port 3002 and it's publicly accessible.
Terraform configuration is in the repo at https://github.com/ausseabed/ausseabed-aws-foundation

## Environments

The public facing URLs that point to this service are:

* nonprod: https://mh370-api.dev.ausseabed.gov.au
* production: https://mh370-api.ausseabed.gov.au

## Environment Variables

Environment variables required for this service to run are:

POSTGRES_HOSTNAME
POSTGRES_DATABASE
POSTGRES_USER
POSTGRES_PASSWORD - A JSON string from AWS Secrets Manager secret TF_VAR_postgres_admin_password
POSTGRES_PORT

## Local development

When running/testing locally you will need to set the following environment variables appropriately:

* AWS_DEFAULT_REGION
* AWS_PROFILE
* POSTGRES_HOSTNAME
* POSTGRES_DATABASE
* POSTGRES_USER
* POSTGRES_PORT

### Installing Dependencies

Navigate to mh370-api and run `yarn install`

### Running locally

Navigate to marine-api and run `yarn run local`

### Running tests
Navigate to marine-api and run `yarn run test`

## Build and Deployment
The MH370 API will deploy along with the product catalogue server, so refer to the deployment instructions in the root of the project.

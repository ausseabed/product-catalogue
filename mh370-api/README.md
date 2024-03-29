# Marine MH370 Data Discovery API
This is a Node.js application that gets deployed to the same container where the product-catalogue server is running.
It listens on port 3002 and it's publicly accessible.
Terraform configuration is in the repo at https://github.com/ausseabed/ausseabed-aws-foundation

## Environments

The public facing URLs that point to this service are:

* nonprod: https://mh370-api.dev.ausseabed.gov.au
* production: https://mh370-api.ausseabed.gov.au

## Local development

When running/testing locally you will need an IAM user with read access to secrets manager, then set the environment variables appropriately:

* AWS_DEFAULT_REGION
* AWS_PROFILE

The database server is not publicly accessible so to test database functionality you will need to:
1. Have an EC2 in the VPC you can connect to.
2. Add an entry to your hosts file for 127.0.0.1 to the database domain name.
3. SSH tunnel into the EC2 and forward port 5432 to the database domain name.

### Installing Dependencies

Navigate to mh370-api and run `yarn install`

### Running locally

Navigate to marine-api and run `yarn run local`

### Running tests
Navigate to marine-api and run `yarn run test`

## Build and Deployment
The MH370 API will deploy along with the product catalogue server, so refer to the deployment instructions in the root of the project.

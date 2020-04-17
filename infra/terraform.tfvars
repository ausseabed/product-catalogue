aws_region = "ap-southeast-2"

# geoserver/mapserver vars
server_cpu    = 512
server_memory = 2048
#------- compute vars---------------

client_image = AWS_ECR_ACCOUNT_URL_ENV_VAR_NAME + "ausseabed-product-catalogue-client:latest"
server_image = AWS_ECR_ACCOUNT_URL_ENV_VAR_NAME + "ausseabed-product-catalogue-client:latest"



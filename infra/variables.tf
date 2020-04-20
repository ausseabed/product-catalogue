variable "aws_region" {}

variable "server_cpu" {}
variable "server_memory" {}

variable "client_image" {}
variable "server_image" {}

variable "product_catalogue_environment_vars" {
  type = object({
    pc_auth_host      = string,
    pc_client_id      = string,
    postgres_password = string,
    postgres_port     = number,
    postgres_user     = string,
    postgres_database = string,
    postgres_hostname = string
  })
}
variable "ga_sb_domain" {}

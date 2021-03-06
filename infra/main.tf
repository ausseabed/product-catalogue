locals {
  env = terraform.workspace
}

provider "aws" {
  region  = var.aws_region
  version = "2.54"
}

terraform {
  backend "s3" {
    bucket = "ausseabed-aws-foundation-tf-infra"
    key    = "terraform/terraform-product-catalogue-infra.tfstate"
    region = "ap-southeast-2"
  }
}

module "networking" {
  ga_sb_domain = var.ga_sb_domain
  source       = "./networking"
  env          = local.env
}

module "ancillary" {
  source = "./ancillary"
  env    = local.env
}

module "service" {
  source                             = "./service"
  server_cpu                         = var.server_cpu
  server_memory                      = var.server_memory
  ecs_task_execution_role_svc_arn    = module.ancillary.pc_ecs_task_execution_role_svc_arn
  client_image                       = var.client_image
  server_image                       = var.server_image
  networking                         = module.networking
  product_catalogue_environment_vars = var.product_catalogue_environment_vars
  env                                = local.env
}


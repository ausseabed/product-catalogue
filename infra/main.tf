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
  source = "./networking"
}

module "ancillary" {
  source = "./ancillary"
}

module "service" {
  source                          = "./service"
  server_cpu                      = var.server_cpu
  server_memory                   = var.server_memory
  ecs_task_execution_role_svc_arn = module.ancillary.pc_ecs_task_execution_role_svc_arn
  public_subnets                  = module.networking.app_tier_subnets
  client_image                    = var.client_image
  server_image                    = var.server_image
  # aws_ecs_lb_target_group_geoserver_arn = module.networking.aws_ecs_lb_target_group_geoserver_arn
  networking = module.networking
}


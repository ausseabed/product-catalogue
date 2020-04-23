#-----networking/outputs.tf

output "db_tier_subnets" {
  value = data.aws_subnet_ids.db_tier_subnets.ids
}

output "app_tier_subnets" {
  value = data.aws_subnet_ids.app_tier_subnets.ids
}

output "vpc_id" {
  value = data.aws_vpc.ga_sb_vpc.id
}

output "vpc_arn" {
  value = data.aws_vpc.ga_sb_vpc.arn
}

output "aws_ecs_lb_target_group_product_catalogue_arn" {
  value = aws_lb_target_group.ga_sb_pc_load_balancer_outside.arn
}

output "ecs_pc_security_group_id" {
  value = aws_security_group.ga_sb_env_pc_public_sg.id
}

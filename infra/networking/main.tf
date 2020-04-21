data "aws_availability_zones" "available" {}

data "aws_vpc" "ga_sb_vpc" {
  tags = {
    Name = "ga_sb_vpc"
  }
}

data "aws_subnet" "web_tier_subnet" {
  filter {
    name = "tag:Name"
    values = [
      "ga_sb_vpc_web_1"
    ]
  }
}

data "aws_subnet_ids" "app_tier_subnets" {
  vpc_id = data.aws_vpc.ga_sb_vpc.id
  filter {
    name = "tag:Tier"
    values = [
      "ga_sb_vpc_app"
    ]
  }
}

data "aws_subnet_ids" "db_tier_subnets" {
  vpc_id = data.aws_vpc.ga_sb_vpc.id
  filter {
    name = "tag:Tier"
    values = [
      "ga_sb_vpc_db"
    ]
  }
}

data "aws_security_group" "ga_sb_default_wh_public_sg" {
  name = "ga_sb_default_wh_public_sg"
}

#TODO

#resource "aws_eip" "ga_sb_pc_eip" {
#  count = 1
#  vpc   = true
#}

resource "aws_lb" "ga_sb_pc_load_balancer" {
  name     = "ga-sb-pc-load-balancer"
  internal = false
  #load_balancer_type = "application"
  load_balancer_type = "network"
  #  subnet_mapping {
  #    subnet_id     = data.aws_subnet_ids.app_tier_subnets.id
  #    allocation_id = aws_eip.ga_sb_pc_eip[0].id
  #  }
  subnets = data.aws_subnet_ids.app_tier_subnets.ids
  tags = {
    Environment = "nonproduction"
  }
}
resource "aws_lb_target_group" "ga_sb_pc_load_balancer_outside" {
  name        = "ga-sb-pc-load-balancer-outside"
  port        = 80
  protocol    = "TCP"
  vpc_id      = data.aws_vpc.ga_sb_vpc.id
  target_type = "ip"
  stickiness {
    enabled = false
    type    = "lb_cookie"
  }
}

resource "aws_lb_listener" "ga_sb_pc_load_balancer_listener" {
  load_balancer_arn = aws_lb.ga_sb_pc_load_balancer.arn
  port              = 80
  protocol          = "TCP"
  #port              = "443"
  #protocol          = "HTTPS"
  #ssl_policy        = "ELBSecurityPolicy-2016-08"
  #certificate_arn   = data.aws_acm_certificate.certificate.arn
  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.ga_sb_pc_load_balancer_outside.arn
  }
}


# data "aws_acm_certificate" "certificate" {
#   provider    = aws.us
#   domain      = var.ga_sb_domain
#   types       = ["AMAZON_ISSUED"]
#   most_recent = true
# }

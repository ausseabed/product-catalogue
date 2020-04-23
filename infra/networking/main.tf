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

data "aws_subnet_ids" "web_tier_subnets" {
  vpc_id = data.aws_vpc.ga_sb_vpc.id
  filter {
    name = "tag:Tier"
    values = [
      "ga_sb_vpc_web"
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

#TODO
resource "aws_acm_certificate" "cert" {
  domain_name       = "catalogue.dev.ausseabed.gov.au"
  validation_method = "DNS"
}

data "aws_route53_zone" "zone" {
  name         = "dev.ausseabed.gov.au"
  private_zone = false
}

resource "aws_route53_record" "cert_validation" {
  name    = aws_acm_certificate.cert.domain_validation_options.0.resource_record_name
  type    = aws_acm_certificate.cert.domain_validation_options.0.resource_record_type
  zone_id = data.aws_route53_zone.zone.id
  records = [aws_acm_certificate.cert.domain_validation_options.0.resource_record_value]
  ttl     = 60
}

resource "aws_route53_record" "ga_sb_pc_route53" {
  name    = "catalogue.dev.ausseabed.gov.au"
  zone_id = data.aws_route53_zone.zone.id
  type    = "A"
  alias {
    name                   = aws_lb.ga_sb_pc_load_balancer.dns_name
    zone_id                = aws_lb.ga_sb_pc_load_balancer.zone_id
    evaluate_target_health = false
  }
}

resource "aws_security_group" "ga_sb_env_pc_public_sg" {
  name        = "ga_sb_env_pc_public_sg"
  description = "Used for access to the public instances"
  vpc_id      = data.aws_vpc.ga_sb_vpc.id

  #HTTP
  ingress {
    from_port   = 3001
    to_port     = 3001
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  #LB
  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}


resource "aws_acm_certificate_validation" "cert" {
  certificate_arn         = aws_acm_certificate.cert.arn
  validation_record_fqdns = [aws_route53_record.cert_validation.fqdn]
}

resource "aws_lb_listener" "ga_sb_pc_load_balancer_listener" {
  load_balancer_arn = aws_lb.ga_sb_pc_load_balancer.arn
  port              = "443"
  protocol          = "HTTPS"
  ssl_policy        = "ELBSecurityPolicy-2016-08"
  certificate_arn   = aws_acm_certificate.cert.arn
  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.ga_sb_pc_load_balancer_outside.arn
  }
}


resource "aws_lb" "ga_sb_pc_load_balancer" {
  name               = "ga-sb-pc-load-balancer"
  internal           = false
  load_balancer_type = "application"
  subnets            = data.aws_subnet_ids.web_tier_subnets.ids
  security_groups    = [aws_security_group.ga_sb_env_pc_public_sg.id]
  tags = {
    Environment = "nonproduction"
  }
}
resource "aws_lb_target_group" "ga_sb_pc_load_balancer_outside" {
  name        = "ga-sb-pc-load-balancer-outside"
  port        = 3001
  protocol    = "HTTP"
  vpc_id      = data.aws_vpc.ga_sb_vpc.id
  target_type = "ip"
  stickiness {
    enabled = false
    type    = "lb_cookie"
  }
}


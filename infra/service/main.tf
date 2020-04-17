

# TODO need to get the geoserver cluster (don't think we need 2 of these)
resource "aws_ecs_cluster" "ga_sb_wh_product_catalogue_cluster" {
  name = "ga_sb_wh_product_catalogue_cluster"
}

# TODO need to specify this for product catalogue
resource "aws_ecs_task_definition" "product_catalogue" {
  family                   = "ga_sb_wh_product_catalogue"
  cpu                      = var.server_cpu
  memory                   = var.server_memory
  network_mode             = "awsvpc"
  execution_role_arn       = var.ecs_task_execution_role_svc_arn
  task_role_arn            = var.ecs_task_execution_role_svc_arn
  requires_compatibilities = ["FARGATE"]
  container_definitions    = <<DEFINITION
[
  {
    "logConfiguration": {
      "logDriver": "awslogs",
      "secretOptions": null,
      "options": {
        "awslogs-group": "/ecs/product_catalogue",
        "awslogs-region": "ap-southeast-2",
        "awslogs-stream-prefix": "ecs"
      }
    },
    "image": "${var.product_catalogue_image}",
    "name": "product_catalogue_task",
    "networkMode": "awsvpc",
    "environment": [
      {
        "name": "GEOSERVER_URL",
        "value": "http://localhost:8080/product_catalogue"
      },
      {
        "name": "LIST_PATH",
        "value": "https://ausseabed-public-bathymetry-nonprod.s3-ap-southeast-2.amazonaws.com/registered_files.json"
      },

    ],
    "portMappings": [
      {
        "containerPort": 8080,
        "hostPort": 8080
      }
    ]
  }
]
DEFINITION
}


resource "aws_ecs_service" "product_catalogue_service" {
  name            = "product_catalogue_service"
  cluster         = aws_ecs_cluster.ga_sb_wh_product_catalogue_cluster.id # REPLACE THIS
  task_definition = aws_ecs_task_definition.product_catalogue.arn
  desired_count   = 1
  launch_type     = "FARGATE"

  load_balancer {
    target_group_arn = var.aws_ecs_lb_target_group_product_catalogue_arn # THIS NEEDS TO BE DEFINED
    container_name   = "product_catalogue_task"
    container_port   = 8080
  }

  network_configuration {
    subnets = [var.networking.app_tier_subnets[0]]
    //    security_groups= var.public_sg
    assign_public_ip = true
  }

}

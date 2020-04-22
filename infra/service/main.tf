


data "aws_ecs_cluster" "ga_sb_default_geoserver_cluster" {
  cluster_name = "ga_sb_default_geoserver_cluster"
}

# TODO need to specify this for product catalogue
resource "aws_ecs_task_definition" "ga_sb_pc_serverclient" {
  family                   = "ga_sb_pc_serverclient"
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
        "awslogs-stream-prefix": "server"
      }
    },
    "image": "${var.server_image}",
    "name": "product_catalogue_server_task",
    "networkMode": "awsvpc",
    "environment": [
      {
        "name": "AUTH_HOST",
        "value": "${var.product_catalogue_environment_vars.pc_auth_host}"
      },
      {
        "name": "AUTH_CLIENT_ID",
        "value": "${var.product_catalogue_environment_vars.pc_client_id}"
      },
            {
        "name": "POSTGRES_PASSWORD",
        "value": "${var.product_catalogue_environment_vars.postgres_password}"
      },
      {
        "name": "POSTGRES_PORT",
        "value": "${var.product_catalogue_environment_vars.postgres_port}"
      },
            {
        "name": "POSTGRES_USER",
        "value": "${var.product_catalogue_environment_vars.postgres_user}"
      },
      {
        "name": "POSTGRES_DATABASE",
        "value": "${var.product_catalogue_environment_vars.postgres_database}"
      },{
        "name": "POSTGRES_HOSTNAME",
        "value": "${var.product_catalogue_environment_vars.postgres_hostname}"
      }
    ],
    "portMappings": [
      {
        "containerPort": 3000
      }
    ]
  },
    {
    "logConfiguration": {
      "logDriver": "awslogs",
      "secretOptions": null,
      "options": {
        "awslogs-group": "/ecs/product_catalogue",
        "awslogs-region": "ap-southeast-2",
        "awslogs-stream-prefix": "client"
      }
    },
    "image": "${var.client_image}",
    "name": "product_catalogue_client_task",
    "networkMode": "awsvpc",
    "environment": [
      {
        "name": "AUTH_HOST",
        "value": "${var.product_catalogue_environment_vars.pc_auth_host}"
      },
      {
        "name": "AUTH_CLIENT_ID",
        "value": "${var.product_catalogue_environment_vars.pc_client_id}"
      }

    ],
    "portMappings": [
      {
        "containerPort": 3001,
        "hostPort":80
      }
    ]
  }
]
DEFINITION
}


resource "aws_ecs_service" "ga_sb_pc_service" {
  name            = "ga_sb_pc_service"
  cluster         = data.aws_ecs_cluster.ga_sb_default_geoserver_cluster.id
  task_definition = aws_ecs_task_definition.ga_sb_pc_serverclient.arn
  desired_count   = 1
  launch_type     = "FARGATE"

  #load_balancer {
  #  target_group_arn = var.aws_ecs_lb_target_group_product_catalogue_arn # THIS NEEDS TO BE DEFINED
  #  container_name   = "product_catalogue_task"
  #  container_port   = 80
  #}

  network_configuration {
    subnets          = [var.networking.app_tier_subnets[0]]
    security_groups  = [var.networking.public_sg]
    assign_public_ip = true
  }

}

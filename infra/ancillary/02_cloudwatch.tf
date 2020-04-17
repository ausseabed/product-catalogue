

resource "aws_cloudwatch_log_group" "product_catalogue" {
  name = "/ecs/product_catalogue"

  tags = {
    Environment = "poc"
    Application = "product_catalogue"
  }
}

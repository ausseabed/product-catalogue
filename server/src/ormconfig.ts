import { TypeOrmModuleOptions } from "@nestjs/typeorm";

const devsetup: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOSTNAME,
  port: parseInt(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: JSON.parse(process.env.POSTGRES_PASSWORD)["TF_VAR_postgres_admin_password"],
  database: process.env.POSTGRES_DATABASE,
  entities: [__dirname + '/**/*.{entity,dto}{.ts,.js}'],
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  cli: {
    // Location of migration should be inside src folder
    // to be compiled into dist/ folder.
    migrationsDir: 'src/migrations',
  },
  autoLoadEntities: true,
  synchronize: false,
  keepConnectionAlive: true,
  logging: "all"
};
export = devsetup;

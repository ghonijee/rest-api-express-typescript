import { config } from "dotenv"
import { DataSourceOptions } from "typeorm";

config()

export const DbConfig: DataSourceOptions = {
  host: process.env.DB_HOST,
  port: Number.parseInt(process.env.DB_PORT!),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  logging: false,
  synchronize: false,
  entities: [
    "src/entities/*.ts"
  ],
  migrations: [
    "src/database/migrations/*.ts"
  ],
  type: "mysql"
};

export default DbConfig;
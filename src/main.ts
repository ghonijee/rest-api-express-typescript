import "reflect-metadata";

import express, { Express } from "express";
import { config } from "dotenv"
import { initializeDatabase } from "src/utils/database";
import ApiRouter from "src/routers/rest.api";
import { ErrorHandler } from "./commons/response-error.helper";

config()

const app: Express = express();
app.use(express.json());
app.use(ApiRouter);
app.use(ErrorHandler);
const port = process.env['PORT'] || 3000;

app.listen(port, async () => {
  console.clear();
  initializeDatabase().then(() => {
    console.log(`Server is Fire at http://127.0.0.1:${port}`)
  })
});
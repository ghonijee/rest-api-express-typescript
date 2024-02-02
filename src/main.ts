import "reflect-metadata";

import express, { Express } from "express";
import { config } from "dotenv"
import { initializeDatabase } from "utils/database";
import ApiRouter from "routers/rest.api";

config()

const app: Express = express();
app.use(express.json());
app.use(ApiRouter);
const port = process.env['PORT'] || 3000;

app.listen(port, async () => {
  console.clear();
  initializeDatabase().then(() => {
    console.log(`Server is Fire at http://127.0.0.1:${port}`)
  })
});
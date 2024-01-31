import "reflect-metadata";

import express, { Express } from "express";
import dotenv from "dotenv"
import { initializeDatabase } from "./utils/database";

dotenv.config()

const app: Express = express();
const port = process.env['PORT'] || 3000;

app.listen(port, async () => {
  console.clear();
  initializeDatabase().then(() => {
    console.log(`Server is Fire at http://127.0.0.1:${port}`)
  })
});
import express, { Express, Request, Response } from "express";

import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("Tes");
});

app.get("/:names", (req: Request, res: Response) => {
  res.send(`${req.params.names}`);
});

app.listen(port, () => {
  console.log(`this is port ${port}`);
});

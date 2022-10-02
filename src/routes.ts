import { Express, Request, Response } from "express";
import { listRouter } from "./router/list.router";

const routes = (app: Express) => {
  app.get("/", (req: Request, res: Response) => {
    res.send({ msg: "Todo API v1.0.0" });
  });

  app.use("/api/lists", listRouter);
};

export default routes;

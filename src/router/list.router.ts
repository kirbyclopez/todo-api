import express, { Request, Response } from "express";

export const listRouter = express.Router();

listRouter.get("/", async (req: Request, res: Response) => {
  try {
    res.status(200).send({ msg: "GET Lists" });
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});

listRouter.get("/:id", async (req: Request, res: Response) => {
  res.status(200).send({ msg: "GET List by ID" });
});

listRouter.post("/", async (req: Request, res: Response) => {
  res.status(200).send({ msg: "POST List" });
});

listRouter.put("/:id", async (req: Request, res: Response) => {
  res.status(200).send({ msg: "PUT List by ID" });
});

listRouter.patch("/:id", async (req: Request, res: Response) => {
  res.status(200).send({ msg: "PATCH List by ID" });
});

listRouter.delete("/:id", async (req: Request, res: Response) => {
  res.status(200).send({ msg: "DELETE List by ID" });
});

import express, { Request, Response } from "express";
import { createUserSessionHandler } from "../controller/session.controller";
import validateResource from "../middleware/validateResource.middleware";
import { createSessionSchema } from "../schema/session.schema";

export const sessionRouter = express.Router();

// User Login
sessionRouter.post(
  "/login",
  validateResource(createSessionSchema),
  createUserSessionHandler
);

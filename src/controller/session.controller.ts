import { Request, Response } from "express";
import { createSession } from "../service/session.service";
import { validatePassword } from "../service/user.service";
import { signJwt } from "../utils/jwt.utils";

export const createUserSessionHandler = async (req: Request, res: Response) => {
  const user = await validatePassword(req.body);

  if (!user) return res.status(401).send("Invalid email or password");

  const session = await createSession(user._id, req.get("user-agent") || "");

  const accessToken = signJwt(
    { user_id: user._id, email: user.email, session: session._id },
    { expiresIn: process.env.ACCESSTOKENTTL }
  );

  const refreshToken = signJwt(
    { user_id: user._id, email: user.email, session: session._id },
    { expiresIn: process.env.REFRESHTOKENTTL }
  );

  return res.send({ accessToken, refreshToken });
};

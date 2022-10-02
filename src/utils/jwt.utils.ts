import jwt from "jsonwebtoken";

const privateKey = ((process.env.PRIVATEKEY as string) || "").replace(
  /\\n/g,
  "\n"
);
const publicKey = ((process.env.PUBLICKEY as string) || "").replace(
  /\\n/g,
  "\n"
);

export const signJwt = (
  object: Object,
  options?: jwt.SignOptions | undefined
) => {
  return jwt.sign(object, privateKey, {
    ...(options && options),
    algorithm: "RS256",
  });
};

export const verifyJwt = (token: string) => {
  try {
    const decoded = jwt.verify(token, publicKey);

    return { valid: true, expired: false, decoded };
  } catch (e: any) {
    return {
      valid: false,
      expired: e.message === "jwt expired",
      decoded: null,
    };
  }
};

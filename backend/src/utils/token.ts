import jwt from "jsonwebtoken";

const createAccessToken = (payload: object) => {
    const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
    if (!accessTokenSecret) {
      throw new Error("Access token secret not provided");
    }
    return jwt.sign(payload, accessTokenSecret, {
      expiresIn: "1d",
    });
  };

export { createAccessToken };
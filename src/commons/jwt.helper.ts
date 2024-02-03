import { sign, verify } from "jsonwebtoken"

const config = {
  secret: process.env.JWT_SECRET,
  expiresIn: process.env.JWT_EXP || 24 * 60 * 60 // 1 Hour
}
const generateToken = (payload: any) => {
  return sign(payload, config.secret, {
    expiresIn: config.expiresIn
  })
}
const verifyToken = (token: string) => {
  try {
    const decode = verify(token, config.secret);
    return decode;
  } catch (err) {
    throw err;
  }
}

export const jwt = {
  generateToken,
  verifyToken
}
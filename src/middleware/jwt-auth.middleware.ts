import { jwt } from "src/commons/jwt.helper";
import { ExceptionError } from "src/commons/response-error.helper";


export const AuthVerify = (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res.status(401).json({
        status: 401,
        message: "Unauthorized"
      })
    }

    const token = req.headers.authorization.split(" ")[1];
    const payload = jwt.verifyToken(token);
    req.user = payload;
    next()
  } catch (error) {
    throw new ExceptionError("Unauthorized", 401)
  }
}
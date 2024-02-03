import { UserRepository } from "src/repositories/user.repository"
import { AuthLoginDTO } from "./login.dto"
import { ExceptionError } from "src/commons/response-error.helper"
import { jwt } from "src/commons/jwt.helper"
import { Password } from "src/commons/password.helper"


export const loginController = async (req, res, next) => {
  try {
    const repository = new UserRepository()
    const data = AuthLoginDTO.fromBody(req)
    await data.validate()

    const user = await repository.findOneBy({ email: data.email })
    if (!user) {
      throw new ExceptionError("User not found", 404)
    }

    if (Password.checkPassword(data.password, user.password) == false) {
      throw new ExceptionError("User unauthorized", 401)
    }

    const token = jwt.generateToken({
      id: user.id,
      email: user.email,
      username: user.username,
      fullname: user.fullname,
      loginAt: new Date()
    })

    res.status(200).json({
      status: 200,
      message: "User authenticated",
      data: {
        access_token: token,
        user: user
      }
    })
  } catch (error) {
    next(error)
  }
}
import { UserRepository } from "src/repositories/user.repository"
import { CreateUserDto } from "./create-user.dto"

export const createUserController = async (req, res, next) => {
  try {
    const repository = new UserRepository()
    const data = CreateUserDto.fromBody(req)
    await data.validate()
    var result = await repository.save(data.toEntity());

    res.status(201).json({
      status: 201,
      message: "Create data success",
      data: result
    })
  } catch (error) {
    next(error)
  }
}
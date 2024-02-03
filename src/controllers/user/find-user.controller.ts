import { UserRepository } from "src/repositories/user.repository";

export const findAllUserController = async (req, res, next) => {
  try {
    const repository = new UserRepository()
    const [users, count] = await repository.findAll()
    res.status(200).json({
      status: 200,
      message: "Get data success",
      data: users
    })
  } catch (error) {
    next(error)
  }
}

export const findOneUserController = async (req, res, next) => {
  try {
    const repository = new UserRepository()
    const user = await repository.findOneBy({ id: req.params.id })
    let message = "Get detail success"
    if (!user) {
      message = "Get detail not found"
    }
    res.status(200).json({
      status: 200,
      message: message,
      data: user
    })
  } catch (error) {
    next(error)
  }
}
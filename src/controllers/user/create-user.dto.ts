import { IsNotEmpty, ValidationError, validate } from "class-validator"
import { Request } from "express"
import { RequestDTO } from "src/commons/dto"
import { hashPassword } from "src/commons/password.helper"
import { User } from "src/entities/user.entity"

export class CreateUserDto extends RequestDTO {
  @IsNotEmpty()
  fullname: string
  @IsNotEmpty()
  username: string
  @IsNotEmpty()
  email: string
  @IsNotEmpty()
  password: string

  constructor(fullname?: string, username?: string, email?: string, password?: string) {
    super()
    this.fullname = fullname
    this.username = username
    this.email = email
    this.password = password
  }

  static fromBody(request: Request) {
    const user = new CreateUserDto()
    user.fullname = request.body.fullname
    user.username = request.body.username
    user.email = request.body.email
    user.password = request.body.password
    return user
  }

  toEntity() {
    const user = new User()
    user.fullname = this.fullname
    user.username = this.username
    user.email = this.email
    user.password = hashPassword(this.password)
    return user;
  }
}
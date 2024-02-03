import { IsEmail, IsNotEmpty } from "class-validator"
import { Request } from "express"
import { RequestDTO } from "src/commons/dto"


export class AuthLoginDTO extends RequestDTO {
  @IsNotEmpty()
  @IsEmail()
  email: string

  @IsNotEmpty()
  password: string

  static fromBody(request: Request) {
    const user = new AuthLoginDTO()
    user.email = request.body.email
    user.password = request.body.password
    return user
  }
}
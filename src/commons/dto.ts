import { ValidationError, validate } from "class-validator";
import { ExceptionError } from "./response-error.helper";

export class RequestDTO {
  async validate() {
    const errors: ValidationError[] = await validate(this);
    if (errors.length > 0) {
      const messages = errors.map((error) => {
        return error.constraints?.[Object.keys(error.constraints)[0]]
      })
      throw new ExceptionError(messages.join(', '), 422)
    }
  }
}
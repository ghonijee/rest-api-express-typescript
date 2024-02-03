import { hashSync, compareSync } from "bcrypt"


const salt = 10
const hashPassword = (password: string) => {
  return hashSync(password, salt);
}

const checkPassword = (password: string, hash: string) => {
  return compareSync(password, hash);
}

export const Password = {
  hashPassword,
  checkPassword
}


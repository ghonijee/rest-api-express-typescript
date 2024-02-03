import { hashSync, compareSync } from "bcrypt"


const salt = 10
export const hashPassword = (password: string) => {
  return hashSync(password, salt);
}

export const checkPassword = (password: string, hash: string) => {
  return compareSync(password, hash);
}


import { User } from "src/entities/user.entity";
import dataSource from "src/utils/database";
import { Repository } from "typeorm";


export class UserRepository {
  private readonly repository: Repository<User>;
  constructor() {
    this.repository = dataSource.getRepository(User)
  }

  save(user: User) {
    return this.repository.save(user)
  }

  async findOneBy(params: any) {
    return this.repository.findOneBy(params)
  }

  remove(id: number) {
    return this.repository.delete(id)
  }

  findAll() {
    return this.repository.findAndCount()
  }

}
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const userFound = this.usersRepository.findByEmail(email);
    if (userFound) throw new Error("User exists already");
    const user = this.usersRepository.create({ name, email });
    return user;
  }
}

export { CreateUserUseCase };

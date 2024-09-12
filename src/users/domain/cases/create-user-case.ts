import { UserRepository } from "../ports/driven/user-repository";
import { CreateUserUseCase } from '../ports/driver/create-user_use_case/case';
import { User } from '../models/user';
import { IdGenerator } from '../../../domain/ports/driven/id-generator/id-generator';
import {CreateUserUseCaseRequest} from "../ports/driver/create-user_use_case/request";
import { CreateUserUseCaseResponse } from "../ports/driver/create-user_use_case/response";

export class CreateUserCase implements CreateUserUseCase {
  private userRepository: UserRepository;
  private idGenerator: IdGenerator;
  constructor(userRepository: UserRepository, idGenerator: IdGenerator) {
    this.userRepository = userRepository;
    this.idGenerator = idGenerator;
  }

  async handle(request: CreateUserUseCaseRequest): Promise<CreateUserUseCaseResponse> {
    const id = this.idGenerator.generate();
    const { name, lastName, age, email } = request;
    const user: User = {
      id,
      name,
      lastName,
      age,
      email,
    }
    await this.userRepository.create(user);
    return { user }
  }
}

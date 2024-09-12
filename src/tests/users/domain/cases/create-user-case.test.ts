import { MemoryRepository } from "../../../../users/adapters/driven/user-repository/memory-repository";
import { CreateUserCase } from "../../../../users/domain/cases/create-user-case";
import { CreateUserUseCase } from "../../../../users/domain/ports/driver/create-user_use_case/case";
import { LocalIdGenerator } from "../../../../adapters/driven/id-generator/local-id-generator";
import { CreateUserUseCaseRequest } from "../../../../users/domain/ports/driver/create-user_use_case/request";
import { CreateUserUseCaseResponse } from "../../../../users/domain/ports/driver/create-user_use_case/response";
import { v4 as uuidv4 } from "uuid";

describe("CreateUserCase", () => {
  it("should create a new user when it is called", async () => {
    const userRepository = new MemoryRepository();
    const idGenerator = new LocalIdGenerator();
    const id = uuidv4();
    idGenerator.setIdToGenerate(id);
    let createUserCase: CreateUserUseCase = new CreateUserCase(userRepository, idGenerator);
    const request: CreateUserUseCaseRequest = {
      name: 'Vanessa',
      lastName: 'Iniguez',
      age: 23,
      email: 'vanessa@gmail.com'
    }
    const response: CreateUserUseCaseResponse = await createUserCase.handle(request);

    const { user } = response;

    expect(user).toEqual({
      id,
      name: 'Vanessa',
      lastName: 'Iniguez',
      age: 23,
      email: 'vanessa@gmail.com'
    });
  })
});

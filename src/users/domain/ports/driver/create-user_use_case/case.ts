import {CreateUserUseCaseRequest} from "./request";
import { CreateUserUseCaseResponse } from "./response";

export interface CreateUserUseCase {
  handle(request: CreateUserUseCaseRequest): Promise<CreateUserUseCaseResponse>;
}

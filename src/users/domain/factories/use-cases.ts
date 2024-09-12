import {RandomIdGenerator} from "../../../adapters/driven/id-generator/random-id-generator";
import {CreateUserCase} from "../cases/create-user-case";
import {CreateUserUseCase} from "../ports/driver/create-user_use_case/case";
import {getDatabaseRepository} from "./repositories";

export const createUserUseCase = (): CreateUserUseCase => {
    const userRepositoryInstance = getDatabaseRepository();
    const idGenerationInstance = new RandomIdGenerator();
    return new CreateUserCase(userRepositoryInstance, idGenerationInstance);
}
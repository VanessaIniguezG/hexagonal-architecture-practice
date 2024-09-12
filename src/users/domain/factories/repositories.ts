import {DatabaseRepository} from "../../adapters/driven/user-repository/database-repository";
import {UserRepository} from "../ports/driven/user-repository";

export const getDatabaseRepository = (): UserRepository => {
  return new DatabaseRepository();
}

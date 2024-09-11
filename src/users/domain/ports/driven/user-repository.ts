import { User } from "../../models/user";

export interface UserRepository {
  getById(id: string): Promise<User | null>;

  get(): Promise<User[]>;

  create(user: User): Promise<User>;

  update(): Promise<User>;

  delete(): Promise<User>;

}
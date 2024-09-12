import { User } from "../../../domain/models/user";
import { UserRepository } from "../../../domain/ports/driven/user-repository";

export class MemoryRepository implements UserRepository {
  users: User[] = [];

  constructor() {
    this.users = [];
  }

  getById(id: string): Promise<User | null> {
    throw new Error("Method not implemented.");
  }

  get(): Promise<User[]> {
    throw new Error("Method not implemented.");
  }

  async create(user: User): Promise<User> {
    const createdUser: User = {...user};
    this.users.push(createdUser);
    return createdUser;
  }

  update(): Promise<User> {
    throw new Error("Method not implemented.");
  }
  
  delete(): Promise<User> {
    throw new Error("Method not implemented.");
  }
}

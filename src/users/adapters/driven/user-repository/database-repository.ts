import { PrismaClient } from "@prisma/client";
import { User } from "../../../domain/models/user";
import { UserRepository } from "../../../domain/ports/driven/user-repository";

const prisma = new PrismaClient();

export class DatabaseRepository implements UserRepository {
  getById(id: string): Promise<User | null> {
    throw new Error("Method not implemented.");
  }
  get(): Promise<User[]> {
    throw new Error("Method not implemented.");
  }

  async create(user: User): Promise<User> {
    const { id, name, lastName, age, email } = user;
    const createdUser = await prisma.user.create({
      data: {
        id,
        name,
        lastName,
        age,
        email,
      },
    });
    return createdUser;
  }
  update(): Promise<User> {
    throw new Error("Method not implemented.");
  }
  delete(): Promise<User> {
    throw new Error("Method not implemented.");
  }
}

export class User {
  id: string;
  name: string;
  lastName: string;
  age: number;
  email: string;

  constructor(
    id: string,
    name: string,
    lastName: string,
    age: number,
    email: string,
  ) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
  }
}

import { IdGenerator } from "../../../domain/ports/driven/id-generator/id-generator";
import { v4 as uuidv4 } from "uuid";

export class RandomIdGenerator implements IdGenerator {
  generate(): string {
    return uuidv4();
  }
}

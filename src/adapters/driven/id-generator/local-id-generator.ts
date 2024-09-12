import { IdGenerator } from "../../../domain/ports/driven/id-generator/id-generator";
import { v4 as uuidv4 } from "uuid";


export class LocalIdGenerator implements IdGenerator {

  id: string = '';

  generate(): string {
    return this.id || uuidv4();
  }

  setIdToGenerate(id: string) {
    this.id = id;
  }

  getGeneratedId() {
    this.id = this.generate();
    return this.id;
  }
}
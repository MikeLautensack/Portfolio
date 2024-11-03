import { type SchemaTypeDefinition } from "sanity";
import { projectType } from "./projectType";
import { skillType } from "./skillType";
import { certType } from "./certType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectType, skillType, certType],
};

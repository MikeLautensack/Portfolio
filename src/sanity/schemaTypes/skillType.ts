import { defineField, defineType } from "sanity";

export const skillType = defineType({
  name: "skill",
  title: "Skill",
  type: "document",
  fields: [
    defineField({
      name: "skillName",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "skillDescription",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "skillImg",
      type: "image",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "index",
      type: "number",
    }),
  ],
});

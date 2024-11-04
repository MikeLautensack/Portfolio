import { defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "projectName",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "projectType",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "projectSummary",
      type: "string",
    }),
    defineField({
      name: "projectDescription",
      type: "string",
    }),
    defineField({
      name: "pathVar",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "prod",
      type: "url",
    }),
    defineField({
      name: "github",
      type: "url",
    }),
    defineField({
      name: "projectImg",
      type: "image",
    }),
    defineField({
      name: "galary",
      type: "array",
      of: [{ type: "image" }],
    }),
    defineField({
      name: "features",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "technology",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "index",
      type: "number",
    }),
  ],
});

import { defineField, defineType } from "sanity";

export const certType = defineType({
  name: "certification",
  title: "Certification",
  type: "document",
  fields: [
    defineField({
      name: "certName",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "certDescription",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "issuedBy",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "issuedOn",
      type: "datetime",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "certId",
      type: "string",
    }),
    defineField({
      name: "certURL",
      type: "url",
    }),
    defineField({
      name: "certImg",
      type: "image",
    }),
  ],
});

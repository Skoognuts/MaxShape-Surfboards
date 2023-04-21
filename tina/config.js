import { defineConfig } from "tinacms";
import { blogFields } from "./templates";
import { galerieFields } from "./templates";
import { mod_leFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "c6874fd0-7833-4779-af18-6a26f54b0d01", // Get this from tina.io
  token: "1e16385526e6a8a0eb636d08de0d269c1804a1a0", // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        format: "md",
        label: "Modèles",
        name: "mod_les",
        path: "src/models",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...mod_leFields(),
        ],
      },
      {
        format: "md",
        label: "Blog",
        name: "blog",
        path: "src/content/blog",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...blogFields(),
        ],
      },
      {
        format: "md",
        label: "Galerie",
        name: "galerie",
        path: "src/content/galerie",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...galerieFields(),
        ],
      },
    ],
  },
});

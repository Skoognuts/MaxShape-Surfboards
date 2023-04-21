export function blogFields() {
  return [
    {
      type: "string",
      name: "titre",
      label: "Titre",
      required: true,
    },
    {
      type: "string",
      name: "description",
      label: "Description",
      ui: {
        component: "textarea",
      },
      required: true,
    },
    {
      type: "string",
      name: "lien",
      label: "Lien",
      required: true,
    },
    {
      type: "image",
      name: "image",
      label: "Image",
    },
  ];
}
export function galerieFields() {
  return [
    {
      type: "image",
      name: "photo",
      label: "Photo",
    },
    {
      type: "string",
      name: "description",
      label: "Description",
      required: true,
    },
  ];
}
export function mod_leFields() {
  return [
    {
      type: "string",
      name: "custom_id",
      nameOverride: "id",
      label: "ID",
      required: true,
    },
    {
      type: "string",
      name: "titre",
      label: "Titre",
      required: true,
    },
    {
      type: "string",
      name: "prix",
      label: "Prix",
      required: true,
    },
    {
      type: "string",
      name: "longueur",
      label: "Longueur",
      required: true,
    },
    {
      type: "string",
      name: "largeur",
      label: "Largeur",
      required: true,
    },
    {
      type: "string",
      name: "epaisseur",
      label: "Epaisseur",
      required: true,
    },
    {
      type: "string",
      name: "tail",
      label: "Tail",
      required: true,
    },
    {
      type: "string",
      name: "shape",
      label: "Shape",
      required: true,
    },
    {
      type: "string",
      name: "derives",
      label: "Dérives",
      required: true,
    },
    {
      type: "string",
      name: "niveau",
      label: "Niveau",
      required: true,
    },
    {
      type: "string",
      name: "description",
      label: "Description",
      ui: {
        component: "textarea",
      },
      required: true,
    },
    {
      type: "image",
      name: "image_principale_face",
      label: "Image Principale Face",
    },
    {
      type: "image",
      name: "galerie_image_planche",
      label: "Galerie Image Planche",
      list: true,
    },
  ];
}

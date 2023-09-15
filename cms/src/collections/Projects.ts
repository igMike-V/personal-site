import { CollectionConfig } from "payload/types";

const Projects: CollectionConfig = {
  slug: "projects",
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
    },
    {
      name: 'description',
      label: 'Description',
      type: 'richText',
      required: true,
    },
    {
      name: 'coverImage',
      label: 'Cover Image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'content',
      label: 'Page Content',
      type: 'richText',
      required: false,
    },
    {
      name: 'technologies',
      label: 'Technologies in project',
      type: 'relationship',
      relationTo: 'technologies',
      hasMany: true,
    },
  ],
};

export default Projects;
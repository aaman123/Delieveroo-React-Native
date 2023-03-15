import {Rule} from 'sanity'

const Category = {
  name: 'category',
  title: 'Restaurant Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Category Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Category Image',
      type: 'image',
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
}

export default Category

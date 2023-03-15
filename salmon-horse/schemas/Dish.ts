import {Rule} from 'sanity'

const Dish = {
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Dish Name',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      type: 'text',
      title: 'Short Description',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
  ],
}

export default Dish

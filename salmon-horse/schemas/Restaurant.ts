import {Rule} from 'sanity'

const Restaurant = {
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Restaurant Name',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      type: 'text',
      title: 'Short Description',
      validation: (Rule: Rule) => Rule.max(200),
    },
    {
      name: 'address',
      type: 'text',
      title: 'Address',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'genre',
      type: 'string',
      title: 'Genre',
    },
    {
      name: 'lat',
      type: 'number',
      title: 'Latitude',
    },
    {
      name: 'long',
      type: 'number',
      title: 'Longitude',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image of the restaurant',
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Enter a rating between 1 and 5',
      validation: (Rule: Rule) =>
        Rule.required().min(1).max(5).error('Please enter a number between 1 and 5'),
    },
    {
      name: 'category',
      type: 'reference',
      title: 'Category',
      validation: (Rule: Rule) => Rule.required(),
      to: [{type: 'category'}],
    },
    {
      name: 'dish',
      title: 'Dishes',
      validation: (Rule: Rule) => Rule.required(),
      type: 'reference',
      to: [{type: 'dish'}],
    },
  ],
}

export default Restaurant

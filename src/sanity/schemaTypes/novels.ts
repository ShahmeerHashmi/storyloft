export default {
  name: 'novel',
  title: 'Novel',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: { required: () => any; }) => Rule.required()
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
      validation: (Rule: { required: () => any; }) => Rule.required()
    },
    {
      name: 'content',
      title: 'Content',
      type: 'text',
      validation: (Rule: { required: () => any; }) => Rule.required()
    },
    {
      name: 'genre',
      title: 'Genre',
      type: 'string',
      options: {
        list: [
          { title: 'Fantasy', value: 'Fantasy' },
          { title: 'Science Fiction', value: 'Sci-Fi' },
          { title: 'Mystery', value: 'Mystery' },
          { title: 'Romance', value: 'Romance' },
          { title: 'Thriller', value: 'Thriller' },
          { title: 'Historical', value: 'Historical' }
        ],
        layout: 'dropdown'
      },
      validation: (Rule: { required: () => any; }) => Rule.required()
    }
  ],
};
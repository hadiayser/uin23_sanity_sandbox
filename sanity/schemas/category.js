export default {
  name: 'categories',
  type: 'document',
  title: 'Kategorier',
  fields: [
    {
      name: 'category_Title',
      type: 'string',
      title: 'KategoryNavn',
    },
    {
      name: 'category_image',
      type: 'image',
      title: 'Bilde',
    },
  ],
}

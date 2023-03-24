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
      name: 'category_slug',
      type: 'slug',
      title: 'URL-tittel',
      options: {
        source: 'category_Title',
        slugify: input => input
                             .toLowerCase() 
                             .replace(/\s+/g, '-')
                             .slice(0, 150)
      }
    },
    {
      name: 'category_image',
      type: 'image',
      title: 'Bilde',
    },
  ],
}

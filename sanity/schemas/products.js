export default {
    name: 'products',
    type: 'document',
    title: 'Produkter',
    fields: [
        {
            title: 'ProduktNavn',
            name: 'product_title',
            type: 'string'

        },
        {
            name: "slug",
            type: "slug",
            title: "URL-tittel",
            options: {
                source: 'product_title',
                slugify: input => input
                                     .toLowerCase() 
                                     .replace(/\s+/g, '-')
                                     .slice(0, 200)
              }
        },
        {
            title: 'Pris',
            name: 'price',
            type: 'number'
        },
        {
            title: 'Antall',
            name: 'quantity',
            type: 'number'
        },
        {
            name: 'product_image',
            type: 'image',
            title: 'ProduktBilde'
        },
        {
            title: "Kategori",
            name: "category",
            type: "reference",
            to: [{type: "categories"}]
        }
    ]

}
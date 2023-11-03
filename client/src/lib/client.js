//import sanityClient from '../../thistle-lion/node_modules/@sanity/client'
//import sanityClient from '../thistle-lion/node_modules/@sanity/client'
import imageUrlBuilder from '../thistle-lion/node_modules/@sanity/image-url'
const { createClient } = require('../thistle-lion/node_modules/@sanity/client')



export const client = createClient({
    projectId: 't55mjo0y',
    dataset: 'production',
    apiVersion: '2023-07-11',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);





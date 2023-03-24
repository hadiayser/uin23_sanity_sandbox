import {createClient} from '@sanity/client';

export const client = createClient({
    projectId: "nur9aj2o",
    dataset: "production",
    useCdn: true, 
    apiVersion: "2021-10-21"
})

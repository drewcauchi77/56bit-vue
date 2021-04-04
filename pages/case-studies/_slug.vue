<template>
    <div>
        <h1>{{ caseStudies.CaseStudyTitle }}</h1>
    </div>
</template>

<script>
// Getting the single case study from the query in caseStudy.js according to the slug passed in the graphql
// This will be a data array within the apollo query below 
import { caseStudyQuery } from '~/queries/collection/case-studies/caseStudy'

export default {
    data:() => ({
        // Returning the data short notation, an array with 1 value according to the where slug condition in caseStudy.js
        caseStudies: {},
        api_url: process.env.strapiBaseUri
    }),
    apollo: {
        caseStudies: {
            // Making the obtaining condition faster
            prefetch: true,
            query: caseStudyQuery,
            // Passing the variable slug to the graphql condition
            variables () {
                return { slug: this.$route.params.slug }
            },
            // The data to be returned is updated with the first value since there would be only one case study with a specific slug
            update: data => data.caseStudies[0]
        }
    }
}
</script>
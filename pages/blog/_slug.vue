<template>
    <main role="main" class="page-content single-blog-main">
        <section class="introduction-section" v-if="blogs.BlogFeaturedImage" v-bind:style="{ 'background-image': 'url(' + api_url + blogs.BlogFeaturedImage.url + ')' }">
        </section>

        <section class="post-section">
            <div class="container post-container">
                <div @click="goBack" class="go-back-button">
                    <div class="rotator"></div>
                    <span class="go-back-text">Back</span>
                </div>

                <h1 class="title">{{ blogs.BlogPostTitle }}</h1>

                <div class="post-content" v-if="blogs.BlogContent" v-html="blogs.BlogContent"></div>
            </div>
        </section>
    </main>
</template>

<script>
// Getting the single case study from the query in caseStudy.js according to the slug passed in the graphql
// This will be a data array within the apollo query below 
import { blogQuery } from '~/queries/collection/blog/blog'

export default {
    transition: 'slide-bottom',
    data:() => ({
        // Returning the data short notation, an array with 1 value according to the where slug condition in caseStudy.js
        blogs: {},
        api_url: process.env.strapiBaseUri,
    }),
    apollo: {
        blogs: {
            // Making the obtaining condition faster
            prefetch: true,
            query: blogQuery,
            // Passing the variable slug to the graphql condition
            variables () {
                return { slug: this.$route.params.slug }
            },
            // The data to be returned is updated with the first value since there would be only one case study with a specific slug
            update: data => data.blogs[0]
        }
    },
    // computed: {
        // Since the content is a chunk and images are to be included in the content, we would need to include the API url
        // The images without API url would return of the current website
        // cleanContent : function () {
            // Search for uploads and attach api_url to it - then v-html back the content 
            // return this.blogs.BlogContent.split('/uploads/').join(`${this.api_url}/uploads/`)
        // }
    // },
    methods: {
        // Method called by the click of the Back button which sends the router back in history to get the last page before
        goBack() {
            this.$router.go(-1)
        }
    }
}
</script>
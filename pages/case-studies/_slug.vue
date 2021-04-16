<template>
    <main role="main" class="page-content single-case-study-main">
        <section class="introduction-section" v-if="caseStudies.ContentBackgroundImage" v-bind:style="{ 'background-image': 'url(' + api_url + caseStudies.ContentBackgroundImage.url + ')' }">
            <div class="introduction-inner-section">
                <div class="container introduction-container">
                    <div class="introduction-content">
                        <span class="introduction-body">{{ caseStudies.ClientName }} Case Study</span>

                        <h1 class="introduction-title">{{ caseStudies.CaseStudyTitle }}</h1>
                    </div>
                </div>
            </div>
        </section>

        <section class="post-section">
            <div class="container post-container">
                <div @click="goBack" class="go-back-button">
                    <div class="rotator"></div>
                    <span class="go-back-text">Back</span>
                </div>

                <div class="post-content" v-if="caseStudies.CaseStudyContent" v-html="cleanContent"></div>
            </div>
        </section>
    </main>
</template>

<script>
// Getting the single case study from the query in caseStudy.js according to the slug passed in the graphql
// This will be a data array within the apollo query below 
import { caseStudyQuery } from '~/queries/collection/case-studies/caseStudy'

export default {
    transition: 'slide-bottom',
    data:() => ({
        // Returning the data short notation, an array with 1 value according to the where slug condition in caseStudy.js
        caseStudies: {},
        api_url: process.env.strapiBaseUri,
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
    },
    computed: {
        // Since the content is a chunk and images are to be included in the content, we would need to include the API url
        // The images without API url would return of the current website
        cleanContent : function () {
            // Search for uploads and attach api_url to it - then v-html back the content 
            return this.caseStudies.CaseStudyContent.split('/uploads/').join(`${this.api_url}/uploads/`)
        }
    },
    // The Nuxt provider to change the page title
    head() {
        return {
            title: '56Bit - ' + this.caseStudies.CaseStudyTitle,
            meta: [
                // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                {
                hid: 'description',
                name: 'description',
                content: this.caseStudies.CaseStudyExcerpt,
                }
            ]
        }
    },
    methods: {
        // Method called by the click of the Back button which sends the router back in history to get the last page before
        goBack() {
            this.$router.go(-1)
        }
    }
}
</script>
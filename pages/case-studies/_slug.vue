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

                <div class="post-content" v-if="caseStudies.CaseStudyContent" v-html="caseStudies.CaseStudyContent"></div>

                <div class="post-images" v-if="caseStudies.CaseStudyImages">
                    <div class="picture" v-for="(image, index) in caseStudies.CaseStudyImages" :key="index">
                        <img :src="api_url + image.url" :alt="image.alternativeText" @click="copySource">
                        <span v-html="image.caption"></span>
                    </div>
                </div>
            </div>

            <div class="lightbox" v-if="lightBox">
                <div class="lightbox-content" @click.self="closeLightbox">
                    <div class="close" @click="closeLightbox"></div>
                    <img :src="imageSource">
                </div>
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
        imageSource: '',
        lightBox: false
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
    // The Nuxt provider to change the page title
    head() {
        return {
            title: '56Bit - ' + this.caseStudies.CaseStudyTitle,
            meta: [
                // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                {
                hid: 'description',
                name: 'description',
                content: 'Best practise implementation, high availability, auto-healing, disaster recovery, DevOps, DevSecOps, Infrastructure as Code (IaC), DDoS protection.',
                }
            ]
        }
    },
    methods: {
        // Method called by the click of the Back button which sends the router back in history to get the last page before
        goBack() {
            this.$router.go(-1)
        },
        copySource(img) {
            this.lightBox = true
            this.imageSource = img.srcElement.src
            document.documentElement.style.overflowY = 'hidden'
        },
        closeLightbox() {
            this.lightBox = false
            document.documentElement.style.overflowY = 'auto'
        }
    }
}
</script>
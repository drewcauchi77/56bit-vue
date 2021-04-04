<template>
    <section class="case-studies-section">
      <div class="case-studies-container">
        <div class="upper-container container">
            <h2 class="case-studies-title">Case Studies</h2>

            <div class="view-all-button button">
                <NuxtLink to="/case-studies">
                    <span class="button-text">View All</span>
                </NuxtLink>
            </div>
        </div>

        <div class="case-studies-listings">
            <VueSlickCarousel v-bind="settingsOne">
                <NuxtLink v-for="caseStudy in caseStudies" :key="caseStudy.slug" :to="{ name: 'case-studies-slug', params: {slug: caseStudy.slug} }" class="single-case-link">
                    <img :src="api_url + caseStudy.ClientFeaturedImage.url" :alt="caseStudy.ClientFeaturedImage.alternativeText" class="single-case-study-image">
                    <h3 class="single-case-study-title">{{ caseStudy.CaseStudyTitle }}</h3>
                    <div class="single-case-study-excerpt">
                        <p v-html="caseStudy.CaseStudyExcerpt"></p>
                    </div>
                    <div class="read-more-button">
                        <span class="read-more-text">Read more</span>
                        <div class="rotator"></div>
                    </div>
                </NuxtLink>
            </VueSlickCarousel>
        </div>
      </div>
    </section>
</template>

<script>
// Getting all the case studies from the query in caseStudies.js 
// This will be a data array within the apollo query below
import { caseStudiesQuery } from '~/queries/collection/case-studies/caseStudies'

import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    components: { 
        VueSlickCarousel 
    },
    data() {
        return {
            // The api url called from nuxt.config file to get the images from
            api_url: process.env.strapiBaseUri,
            settingsOne: {
                arrows: true,
                dots: false,
                autoplay: true,
                autoplaySpeed: 6000,
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                fade: true,
                speed: 1000,
                responsive: [
                    {
                        breakpoint: 992,
                        settings: {
                            arrows: true,
                            slidesToShow: 2.5,
                            infinite: false,
                            fade: false,
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            arrows: false,
                            slidesToShow: 1.5,
                            infinite: false,
                            fade: false,
                        }
                    },
                ]
            }
        }
    },
    apollo: {
        // The query that has been imported in array form caseStudies
        // This is looped to get each value from the loop in the NuxtLink above by parameter slug for the url
        caseStudies: {
            query: caseStudiesQuery,
        }
    }
}
</script>
<template>
  <main role="main" class="page-content case-studies-main">
    
    <section class="introduction-section">
      <div class="introduction-inner-section">
        <div class="container introduction-container">
            <div class="introduction-content">
              <h1 class="introduction-title">Case Studies</h1>
            </div>
        </div>
      </div>
    </section>

    <section class="listings-section">
      <div class="container listings-container">
        <div class="listings">
          <div class="single-listing" v-for="caseStudy in caseStudies" :key="caseStudy.slug">
            <div class="single-image">
              <NuxtLink :to="{ name: 'case-studies-slug', params: {slug: caseStudy.slug} }" class="single-image-link">
                <img :src="api_url + caseStudy.ClientFeaturedImage.url" :alt="caseStudy.ClientFeaturedImage.alternativeText" class="single-image">
              </NuxtLink>
            </div>

            <div class="single-listing-details">
              <span class="single-client">{{ caseStudy.ClientName }}</span>

              <h3 class="single-title">{{ caseStudy.CaseStudyTitle }}</h3>

              <div class="single-excerpt">
                  <p v-html="caseStudy.CaseStudyExcerpt"></p>
              </div>

              <div class="single-button button">
                <NuxtLink :to="{ name: 'case-studies-slug', params: {slug: caseStudy.slug} }" class="single-button-link">
                  <span class="button-text">Read More</span>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </main>
</template>

<script>
// Getting all the case studies from the query in caseStudies.js 
// This will be a data array within the apollo query below
import { caseStudiesQuery } from '~/queries/collection/case-studies/caseStudies'

export default {
    transition: 'slide-bottom',
    data() {
        return {
            caseStudies: [],
            // The api url called from nuxt.config file to get the images from
            api_url: process.env.strapiBaseUri,
        }
    },
    apollo: {
        // This is looped to get each value from the loop in the NuxtLink above by parameter slug for the url
        caseStudies: {
            // Prefetch to eliminate issue that Slick Slider renders with no children
            prefetch: true,
            // The query that has been imported in array form caseStudies
            query: caseStudiesQuery,
            // Updating the data that is passed to rendered variable above
            update: data => data.caseStudies
        }
    }
}
</script>
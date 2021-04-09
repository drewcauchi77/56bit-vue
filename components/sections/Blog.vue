<template>
    <section class="blog-section">
      <div class="blog-container">
        <div class="upper-container container">
            <h2 class="blog-title">Blog</h2>

            <div class="view-all-button button">
                <NuxtLink to="/blog">
                    <span class="button-text">View All</span>
                </NuxtLink>
            </div>
        </div>

        <div class="blog-listings">
            <VueSlickCarousel v-bind="settings" v-if="blogs.length">
                <NuxtLink v-for="blog in blogs" :key="blog.slug" :to="{ name: 'blog-slug', params: {slug: blog.slug} }" class="single-blog-link">
                    <img :src="api_url + blog.BlogFeaturedImage.url" :alt="blog.BlogFeaturedImage.alternativeText" class="single-blog-image">
                    <h3 class="single-blog-title">{{ blog.BlogPostTitle }}</h3>
                    <div class="single-blog-excerpt">
                        <p v-html="blog.BlogPostExcerpt"></p>
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
import { blogsLimitQuery } from '~/queries/collection/blog/blogsLimit'

// Slick slider components and importation
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    components: { 
        VueSlickCarousel 
    },
    data() {
        return {
            // Pre render caseStudies array to eliminate Slick Slider rendering with no children
            blogs: [],
            // The api url called from nuxt.config file to get the images from
            api_url: process.env.strapiBaseUri,
            settings: {
                arrows: true,
                dots: false,
                autoplay: true,
                autoplaySpeed: 10000,
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                speed: 1000,
                fade: true,
                responsive: [
                    {
                        breakpoint: 9999,
                        settings: "unslick"
                    },
                    {
                        breakpoint: 991,
                        settings: {
                            arrows: false,
                            slidesToShow: 2.5,
                            infinite: false,
                            fade: false,
                        }
                    },
                    {
                        breakpoint: 767,
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
        // This is looped to get each value from the loop in the NuxtLink above by parameter slug for the url
        blogs: {
            // Prefetch to eliminate issue that Slick Slider renders with no children
            prefetch: true,
            // The query that has been imported in array form caseStudies
            query: blogsLimitQuery,
            // Updating the data that is passed to rendered variable above
            update: data => data.blogs
        }
    }
}
</script>
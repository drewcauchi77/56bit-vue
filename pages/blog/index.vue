<template>
  <main role="main" class="page-content blog-main">
    <section class="listings-section">
      <div class="container listings-container">
        <div class="listings-title">
          <h1 class="page-title">Blog</h1>
        </div>

        <div class="listings" :class="{ load: loadMore}">
          <div class="single-blog" v-for="blog in blogs" :key="blog.slug">
            <div class="single-image">
              <NuxtLink :to="{ name: 'blog-slug', params: {slug: blog.slug} }" class="single-image-link">
                <img :src="api_url + blog.BlogFeaturedImage.url" :alt="blog.BlogFeaturedImage.alternativeText" class="single-image">
              </NuxtLink>
            </div>

            <div class="single-blog-details">
              <h3 class="single-title">{{ blog.BlogPostTitle }}</h3>

              <div class="single-excerpt">
                <p v-html="blog.BlogPostExcerpt"></p>
              </div>

              <div class="single-button button">
                <NuxtLink :to="{ name: 'blog-slug', params: {slug: blog.slug} }" class="single-button-link">
                  <span class="button-text">Read More</span>              
                </NuxtLink>
              </div>
            </div>
          </div>

          <div class="load-more-button" @click="loadMore = !loadMore">
            <span class="load-more-text" :class="{ hide: loadMore }">Load more</span>
            <span class="load-less-text" :class="{ show: loadMore }">Load less</span>
            <div class="rotator" :class="{ rotated: loadMore }"></div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
// Getting all the blogs from the query in blogs.js 
// This will be a data array within the apollo query below
import { blogsQuery } from '~/queries/collection/blog/blogs'

export default {
    transition: 'slide-bottom',
    data() {
        return {
            // To keep the blogs list after rendering
            blogs: [],
            loadMore: false,
            // The api url called from nuxt.config file to get the images from
            api_url: process.env.strapiBaseUri,
        }
    },
    apollo: {
        // This is looped to get each value from the loop in the NuxtLink above by parameter slug for the url
        blogs: {
            // Prefetch for pre-rendering
            prefetch: true,
            // The query that has been imported in array form blogs
            query: blogsQuery,
            // Updating the data that is passed to rendered variable above
            update: data => data.blogs
        }
    },
}
</script>
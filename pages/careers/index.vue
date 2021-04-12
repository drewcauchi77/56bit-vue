<template>
  <main role="main" class="page-content careers-main">
    <section class="details-section">
      <div class="container details-container">
        <div class="details">
          <h1 class="details-title">Join the 56Bit winning team</h1>

          <div class="details-body">
            <p>Interested in cloud infrastructure? Are you interested in devops?  Do you have an eye for detail?  Are you very client-centred? Do you enjoy discussing technology with like-minded professionals? Do you have or are you working on AWS or similar certifications?</p>
            <p>At 56Bit we have a killer team of professional, experienced, cloud infrastructure experts who are obsessed with quality, high standards and customer service. We are interested in the quality of our people, the quality of their delivery and the client experience in our projects. Most other things tend to be secondary. This makes us indifferent to gender, race, age or any other characteristics since we focus on building our team with elements that enable us to keep delivering the 56Bit dream to our clients.</p>
            <p>Do you think you have what it takes to be part of the 56Bit dream? Reach out to us, let’s have a chat.</p>
          </div>

          <div class="details-button button">
            <NuxtLink to="/contact">
              <span class="button-text">Reach Out</span>
            </NuxtLink>
          </div>
        </div>

        <div class="details-image">
          <img src="~/assets/images/careers-page/careers-page-image.png" alt="56Bit Careers">
        </div>

        <div class="scroll-down" @click="scrollToElement">
          <span class="scroll-text">scroll</span>
          <div class="rotator"></div>
        </div>
      </div>
    </section>
    
    <section class="listings-section">
      <div class="container listings-container">
        
        <div class="careers">
          <h2 v-if="!careers.length" class="empty-careers-title">There are no open vacancies at the moment</h2>

          <div class="single-career" v-else v-for="career in careers" :key="career.id">
            <div class="single-career-upper">
              <h2 class="single-career-title">{{ career.VacancyTitle }}</h2>

              <div class="open-button">
                <span></span>
                <span></span>
              </div>
            </div>

            <div class="single-career-details" v-html="career.VacancyContent"></div>

            <div class="apply-button button">
              <span class="button-text">Apply</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { careersQuery } from '~/queries/collection/careers/careers'

export default {
  transition: 'slide-bottom',
  data() {
    return {
      // To keep the careers list after rendering
      careers: [],
    }
  },
  apollo: {
      // This is looped to get each value from the loop
      careers: {
          // Prefetch for pre-rendering
          prefetch: true,
          // The query that has been imported in array form careers
          query: careersQuery,
          // Updating the data that is passed to rendered variable above
          update: data => data.careers
      }
  },
  // The Nuxt provider to change the page title
  head() {
    return {
      title: '56Bit - Careers',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: '56Bit delivers best-practice cloud expertise to organisations of any size'
        }
      ]
    }
  },
  methods: {
    // Method is called when the arrow to float to next section is pressed - only shown on desktop (.scroll-down class)
    scrollToElement() {
      // Get the element that has the class listings-container which is the next section we would like to scroll to
      const el = this.$el.getElementsByClassName('listings-container')[0]

      if (el) {
        // Use el.scrollIntoView() to instantly scroll to the element
        el.scrollIntoView({behavior: 'smooth'})
      }
    }
  },
}
</script>
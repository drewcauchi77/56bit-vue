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

          <div class="details-button button" @click="showApplicationForm = !showApplicationForm">
            <span class="button-text">Reach Out</span>
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

          <div class="single-career" v-else v-for="career in careers" :key="career.id" :class="{ open: (setContent.includes(career.id)) }">
            <div class="single-career-upper" v-bind:id="career.id" @click="selectContent">
              <h2 class="single-career-title">{{ career.VacancyTitle }}</h2>

              <div class="open-button" :class="{ minus: (setContent.includes(career.id)) }">
                <span></span>
                <span></span>
              </div>
            </div>

            <div class="single-career-contents">
              <div class="single-career-details" v-html="career.VacancyContent"></div>

              <div class="apply-button button" @click="showApplicationForm = !showApplicationForm">
                <span class="button-text">Apply</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="application-section"  :class="{ open: showApplicationForm }">
      <div class="container application-container">

        <div class="form-container">
          <div class="form-container-upper">
            <div class="application-details">
              <h2 class="application-title">Application Form</h2>
            </div>
              
            <div class="close"  @click="showApplicationForm = !showApplicationForm">
              <span></span>
              <span></span>
            </div>
          </div>

          <div class="form-section" v-if="!isBot">
            <form @submit.prevent="sendApplication" ref="uploadForm">
              <label for="position">Desired Position</label>
              <select v-model="position" required name="position">
                <option disabled value="" default>Desired Position*</option>
                <option v-for="career in careers" :key="career.id">{{ career.VacancyTitle }}</option>
              </select>

              <label for="name">First Name</label>
              <input type="text" name="name" placeholder="First Name*" required>

              <label for="surname">Last Name</label>
              <input type="text" name="surname" placeholder="Last Name*" required>

              <label for="email">Email</label>
              <input type="email" name="email" placeholder="Email*" required>

              <div class="hidden">
                <label>Don’t fill this out if you're human: </label>
                <input v-model="website" name="website" placeholder="This field is only for the robots." />
              </div>

              <label for="phone">Phone</label>
              <input type="tel" name="phone" placeholder="Phone">

              <div class="file-uploads">
                <input type="file" name="resume" accept=".doc,.docx,.txt,application/pdf">

                <input type="file" name="certification" accept=".doc,.docx,.txt,application/pdf">

                <input type="file" name="letter" accept=".doc,.docx,.txt,application/pdf">
              </div>

              <div class="submit-button button">
                <button type="submit">
                  {{ loading ? "Sending Message..." : "Submit" }}
                </button>
              </div>

              <div v-if="success" class="form-message">
                <p class="success-message">Thank you, your application has been received successfully!</p>
              </div>
              
              <div v-if="error" class="form-message">
                <p class="error-message">Bummer, something went wrong. Did you fill out all of the required fields?</p>
              </div>

              <div v-if="incorrectFiles" class="form-message">
                <p class="error-message">Accepted file formats are PDF, DOC, DOCX and TXT.</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <section class="tagline-section">
      <div class="container tagline-container">
        <span class="tagline-text">Our attention to detail coupled with the use of best practices ensures an unrivalled level of quality in everything we deliver to our clients.</span>
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
      api_url: process.env.strapiBaseUri,
      // To keep the careers list after rendering
      careers: [],
      // setContent is an array so that it can handle multiple numbers for multiple sections open
      setContent: [],
      loading: false,
      success: false,
      error: false,
      incorrectFiles: false,
      isBot: false,
      position: '',
      website: null,
      showApplicationForm: false,
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
    },
    selectContent(event) {
      // If the array includes the id number gained, then execute the below
      if(this.setContent.includes(event.currentTarget.id)){
        // Get the key value of the the id number which is already existing in the array
        var valueIndex = this.setContent.indexOf(event.currentTarget.id)
        if(valueIndex >= 0){
          // Remove the value from the array so that the section closes
          this.setContent.splice(valueIndex, 1)
        }
      }else{
        // setFounder variable is set to the id and then the condition is met to open on mobile
        this.setContent.push(event.currentTarget.id)
      }
    },
    sendApplication() {
      this.loading = true
      this.incorrectFiles = false
      this.success = false
      this.error = false

      if(this.website != null){
        this.isBot = true;
      }else{
        let form = this.$refs["uploadForm"];
        let formData = new FormData();
        let formElements = form.elements;
        let data = {};

        formElements.forEach(currentElement => {
          if (!["submit", "file"].includes(currentElement.type)) {
            data[currentElement.name] = currentElement.value;
          } else if (currentElement.type === "file") {
            if (currentElement.files.length === 1) {
              const file = currentElement.files[0];
              const fileExtension = file.name.split('.').pop();
              if(fileExtension === 'pdf' || fileExtension === 'doc' || fileExtension === 'docx' || fileExtension === 'txt'){
                formData.append(`files.${currentElement.name}`, file, file.name);
                if(this.incorrectFiles != true){
                  this.incorrectFiles = false
                }
              }else{
                this.incorrectFiles = true;
              }
            } else {
              for (let i = 0; i < currentElement.files.length; i++) {
                const file = currentElement.files[i];
                const fileExtension = file.name.split('.').pop();
                if(fileExtension === 'pdf' || fileExtension === 'doc' || fileExtension === 'docx' || fileExtension === 'txt'){
                  formData.append(`files.${currentElement.name}`, file, file.name);
                  if(this.incorrectFiles != true){
                    this.incorrectFiles = false
                  }
                }else{
                  this.incorrectFiles = true;
                }
              }
            }
          }
        });

        formData.append("data", JSON.stringify(data));
        
        if(this.incorrectFiles != true) {
          this.$axios.post(this.api_url +"/applications", formData)
            .then(res => {
              this.success = true
              this.error = false
            }).catch(error => {
              this.error = true
            }).finally(() => {
              this.loading = false
            });
        }else{
          this.error = true
          this.loading = false
        }
        
      }
    }
  },
  watch: {
    // Function to watch #VAR1 and stop body scroll or renable according to @click behaviour true or false
    showApplicationForm: function() {
      // If true #VAR1 and #VAR3, set body to no scroll on html document and return
      if(this.showApplicationForm){
        document.documentElement.style.overflowY = 'hidden'
        return
      }
      // Else reset scroll to auto on html document
      document.documentElement.style.overflowY = 'auto'
    }
  },
}
</script>
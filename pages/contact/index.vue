<template>
  <main role="main" class="page-content contact-main">
    <section class="contact-section">
      <div class="container contact-container">
        <div class="details-section">
          <h1 class="details-title">How can we help you?</h1>

          <p class="details-body">56Bit cloud infrastructure experts are more than happy to add value to your business. Please do send us a message below...we’re more than happy to respond.</p>
        </div>

        <div class="form-container">
          <div class="form-section" v-if="!isBot">
            <form v-on:submit.prevent="sendMessage">
              <p>Dear 56Bit cloud infrastructure experts, <br><br> At&nbsp;

                <label for="company">company</label>
                <input v-model="company" required name="company" id="company" placeholder="company" />

                we could really do with some expertise relating to &nbsp;

                <label for="query">query</label>
                <select v-model="query" required name="query" id="query">
                  <option disabled value="">query</option>
                  <option>Query A</option>
                  <option>Query B</option>
                  <option>Query C</option>
                </select>

                . <br><br>Please do reach out to me on

                <label for="email">email</label>
                <input v-model="email" required name="email" id="email" type="email" placeholder="email" />

                . <br><br> I look forward to hearing from you,

                  <label for="full_name">full name</label>
                  <input v-model="name" required name="name" id="full_name" placeholder="full name" />
              </p>  

              <div class="hidden">
                <label>Don’t fill this out if you're human: </label>
                <input v-model="website" name="website" placeholder="This field is only for the robots." />
              </div>
              
              <div class="submit-button button">
                <button type="submit">
                  {{ loading ? "Sending Message..." : "Submit" }}
                </button>
              </div>

              <div v-if="success" class="form-message">
                <p class="success-message">Thank you for contacting us! Your message has been sent successfully.</p>
              </div>
              
              <div v-if="error" class="form-message">
                <p class="error-message">Bummer, something went wrong. Did you fill out all of the fields?</p>
              </div>
            </form>
          </div>
        </div>

        <div class="contact-details-section">
          <div class="phone-section contact-sect">
            <div class="icon">
              <PagesContactPhone />
            </div>
            <span class="phone">(+356) 9978 7661</span>
          </div>

          <div class="email-section contact-sect">
            <div class="icon">
              <PagesContactMail />
            </div>
            <span class="email">info@56bit.com</span>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  transition: 'slide-bottom',
  data() {
    return {
      api_url: process.env.strapiBaseUri,
      loading: false,
      success: false,
      error: false,
      isBot: false,
      company: '',
      query: '',
      email: '',
      name: '',
      website: null,
    }
  },
  methods: {
    sendMessage() {
      this.loading = true
      if(this.website != null){
        this.isBot = true;
      }else{
        this.$axios.post(this.api_url + "/messages", {
          Company: this.company,
          Query: this.query,
          Email: this.email,
          FullName: this.name,
        }).then(response => {
          this.success = true
          this.error = false
        }).catch(error => {
          this.error = true
        }).finally(() => {
          this.loading = false
        });
      }
    }
  }
}
</script>
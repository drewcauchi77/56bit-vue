<template>
  <main role="main" class="page-content about-main">
    <section class="introduction-section" :class="{ height: increaseHeight }">
      <div class="introduction-inner-section">
        <div class="container introduction-container">
          <div class="introduction-content">
            <h1 class="introduction-title">About us</h1>

            <div class="introduction-body" :class="{ more: increaseHeight }">
              <div class="introduction-excerpt">
                <p>Our founders had a dream and they set up 56Bit to deliver this dream. They dreamt of creating a team of qualified, skilled and experienced cloud infrastructure experts who were able to deliver the most cost-effective, stable, resilient and future-proof cloud infrastructure solutions possible to their clients. They dreamt of treating their clients like partners where the 56Bit/client team were both working together with the same objective of achieving excellence for the client.</p>
                <p>At 56Bit we now live this dream… and our clients are a key part of the dream!</p>
              </div>

              <div class="introduction-complete">
                <p>Our clients are companies who invest in cloud infrastructure that will take their business to new heights.  At 56Bit we partner with our clients to ensure that their investment delivers the most efficient, best performing cloud infrastructure their budget can buy.  We do this while following our principles of using best practice and highly skilled technical staff to deliver these high availability setups.  We top this with the principle that delivering a setup is not enough.  Working together with our clients, we take this many steps further by ensuring that the infrastructure operates smoothly into the future and is continually optimised to cater for the changes in the external environments, in usage and in technological advancement.</p>
              </div>

              <div class="read-more-button" @click="increaseHeight = !increaseHeight">
                <span class="read-more-text" :class="{ hide: increaseHeight }">Read more</span>
                <span class="read-less-text" :class="{ show: increaseHeight }">Read less</span>
                <div class="rotator" :class="{ rotated: increaseHeight }"></div>
              </div>
            </div>
          </div>

          <div class="scroll-down rotator" @click="scrollToElement"></div>
        </div>
      </div>
    </section>

    <section class="founders-section">
      <div class="container founders-container">
        <h2 class="founders-title">Meet our Founders</h2>

        <div class="founders-listing">
          <div class="single-founder">
            <div class="single-founder-content">
              <div class="single-founder-image-section" id="1" @click="selectFounder">
                <div class="single-founder-image">
                  <img src="~/assets/images/about-us-page/test-image.png" alt="Patrick Camilleri">
                </div>

                <div class="single-founder-name">
                  <h3 class="name">Patrick Camilleri</h3>
                </div>

                <div class="plus-symbol">
                  <span class="plus-text">+</span>
                </div>
              </div>

              <div class="single-founder-body" :class="{ show: (setFounder == 1) }">
                <div class="single-founder-body-content container">

                  <div class="content">
                    <div class="close" @click="resetFounder">
                    </div>
                    
                    <div class="information">
                      <h3 class="info-title">Patrick Camilleri</h3>
                      <ul class="custom-list">
                        <li>
                          <p>A self-professed technology geek who started his career in networks and infrastructure then progressed into becoming a cloud infrastructure advocate. Patrick is also a serial entrepreneur having founded and successfully grown a number of technology companies while being responsible for their technology foundation, planning and strategy.</p>
                        </li>
                        <li>
                          <p>Patrick also has an interest in giving back to the industry by ensuring that practitioners are well founded and skilled to carry out their roles. He does this by delivering training at various institutions to newcomers into the industry as well as to seasoned practitioners. Being a certified AWS trainer also enables him to train highly technical and experienced cloud infrastructure teams and to empower them to achieve the next level of performance.</p>
                        </li>
                        <li>
                          <p>In founding 56Bit, Patrick married his entrepreneurial trait with his passion for everything cloud and his obsession for perfection in customer service delivery.</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="single-founder">
            <div class="single-founder-content">
              <div class="single-founder-image-section" id="2" @click="selectFounder">
                <div class="single-founder-image">
                  <img src="~/assets/images/about-us-page/test-image.png" alt="Stefan Caruana">
                </div>

                <div class="single-founder-name">
                  <h3 class="name">Stefan Caruana</h3>
                </div>

                <div class="plus-symbol">
                  <span class="plus-text">+</span>
                </div>
              </div>

              <div class="single-founder-body" :class="{ show: (setFounder == 2) }">
                <div class="single-founder-body-content container">
                  <div class="content">
                    <div class="close" @click="resetFounder">
                      <span></span>
                      <span></span>
                    </div>
                    
                    <div class="information">
                      <h3 class="info-title">Stefan Caruana</h3>
                      <ul class="custom-list">
                        <li>
                          <p>Coming from a technical infrastructure background, Stefan worked on many projects relating to infrastructure, operations and systems maintenance. He enjoys a very practical approach to problem solving and employs vast knowledge and experience to deliver the best solutions to different scenarios he encounters. Despite being very technical at the core, Stefan also bridged into the business aspect of technical projects through his involvement in project management.</p>
                        </li>
                        <li>
                          <p>Stefan’s development led him to port his skills to the cloud where he moved into AWS and Azure infrastructures and he combined his technical and project management background to evolve into becoming a devops champion.</p>
                        </li>
                        <li>
                          <p>In founding 56Bit, Stefan sought to combine his devops drive with his passion for cloud infrastructure and a firm belief in quality delivery.</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>  
        </div>
      </div>
    </section>

    <section class="our-team-section">
      <div class="our-team-inner-container">
        <div class="container our-team-container">
          <h2 class="our-team-title">Our Team</h2>

          <div class="our-team-content">
            <ul class="custom-list">
              <li>
                <p>At 56Bit, our vision is to be the leading cloud solutions provider in Europe. No matter the complexity, we aim to be the partner of choice for highly reliable, efficient, scalable and secure cloud solutions.</p>
              </li>
              <li>
                <p>Our strength therefore lies in our team, our work ethic and the pool of internal knowledge that we harness to deliver our quality solutions.</p>
              </li>
              <li>
                <p>Our founders lead a team that is vast in its skills and experience where we cover multiple platforms like AWS and Azure where our team holds multiple certifications in the different technologies as well as years of hands-on industry experience in designing, building, deploying and maintaining infrastructures on these platforms.</p>
              </li>
              <li>
                <p>If you feel you have what it takes to join our team then visit our <NuxtLink to="/careers" class="navigation-link"><strong>careers page</strong></NuxtLink>.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="badges-section">
      <div class="container badges-container">
        <div class="single-badge">
          <NuxtLink to="/aws">
            <img src="~/assets/images/badges/mcsa-web-applications-2019.png" alt="MSCA Web Applications 2019">
          </NuxtLink>
        </div>

        <div class="single-badge">
          <NuxtLink to="/aws">
            <img src="~/assets/images/badges/mscd-app-builder-2019.png" alt="MSCD App Builder 2019">
          </NuxtLink>
        </div>

        <div class="single-badge">
          <NuxtLink to="/aws">
            <img src="~/assets/images/badges/microsoft-certified-trainer-2019-2020.png" alt="Microsoft Certified Trainer 2019-20">
          </NuxtLink>
        </div>

        <div class="single-badge">
          <NuxtLink to="/aws">
            <img src="~/assets/images/badges/azure-fundamentals.png" alt="Azure Fundamentals">
          </NuxtLink>
        </div>

        <div class="single-badge">
          <NuxtLink to="/aws">
            <img src="~/assets/images/badges/azure-administrator-associate.png" alt="Azure Administrator Associate">
          </NuxtLink>
        </div>

        <div class="single-badge">
          <NuxtLink to="/aws">
            <img src="~/assets/images/badges/champion-accredited-instructor.png" alt="Champion Accredited Instructor">
          </NuxtLink>
        </div>

        <div class="single-badge">
          <NuxtLink to="/aws">
            <img src="~/assets/images/badges/aws-consulting-partner.png" alt="AWS Consulting Partner">
          </NuxtLink>
        </div>

        <div class="single-badge">
          <NuxtLink to="/aws">
            <img src="~/assets/images/badges/cloud-practitioner.png" alt="Cloud Practitioner">
          </NuxtLink>
        </div>

        <div class="single-badge">
          <NuxtLink to="/aws">
            <img src="~/assets/images/badges/solutions-architect-associate.png" alt="Solutions Architect Associate">
          </NuxtLink>
        </div>

        <div class="single-badge">
          <NuxtLink to="/aws">
            <img src="~/assets/images/badges/sysops-administrator-associate.png" alt="SYSOPS Administrator Associate">
          </NuxtLink>
        </div>

        <div class="single-badge">
          <NuxtLink to="/aws">
            <img src="~/assets/images/badges/developer-associate.png" alt="Developer Associate">
          </NuxtLink>
        </div>

        <div class="single-badge">
          <NuxtLink to="/aws">
            <img src="~/assets/images/badges/solutions-architect-professional.png" alt="Solutions Architect Professional">
          </NuxtLink>
        </div>

        <div class="single-badge">
          <NuxtLink to="/aws">
            <img src="~/assets/images/badges/devops-engineer-professional.png" alt="DevOps Engineer Professional">
          </NuxtLink>
        </div>

        <div class="single-badge">
          <NuxtLink to="/aws">
            <img src="~/assets/images/badges/security-specialty.png" alt="Security Specialty">
          </NuxtLink>
        </div>
      </div>
    </section>

    <testimonials />
  </main>
</template>

<script>
import Testimonials from '../../components/sections/Testimonials.vue'

export default {
  components: { 
    Testimonials 
  },
  transition: 'slide-bottom',
  data() {
    return {
      // #VAR5
      // A variable that is toggled by when the Read More button in the introduction section is pressed
      // Behaviours attached to this toggling is increase height of div, display block of text, rotation of arrow and change of read more text
      increaseHeight: false,
      // #VAR6
      // A variable that is set to which founder you press, which is then transferred as a condition to the class add 
      setFounder: null,
      // #VAR7
      // To detect whether the device has a burger menu or a full header menu since media query is set at 992px
      isMobile: false
    }
  },
  // The Nuxt provider to change the page title
  head() {
    return {
      title: '56Bit - About Us',
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
    // Method is called when the arrow to float to next section is pressed - only shown on mobile (.scroll-down class)
    scrollToElement() {
      // Get the element that has the class founders-section which is the next section we would like to scroll to
      const el = this.$el.getElementsByClassName('founders-section')[0]

      if (el) {
        // Use el.scrollIntoView() to instantly scroll to the element
        el.scrollIntoView({behavior: 'smooth'})
      }
    },
    // Method that gains id of div on click through the event and if the condition of isMobile is successful, then execute
    selectFounder(event) {
      if(this.isMobile == true){
        // setFounder variable is set to the id and then the condition is met to open on mobile
        this.setFounder = event.currentTarget.id
        // Stopping body scroll
        document.documentElement.style.overflowY = 'hidden'
      }
    },
    // Method that cancels the setFounder variable to start from the beginning
    resetFounder(event) {
      // Setting #VAR7 as null
      this.setFounder = null
      // Allow scroll again
      document.documentElement.style.overflowY = 'auto'
    },
    // Method called when window resize is triggered from mounted
    getWindowWidth() {
      // If true that the width of the window is less than 992, set #VAR3 to true and return
      if(window.innerWidth < 992){
        this.isMobile = true
        return
      }
      // Else set #VAR3 to false
      this.isMobile = false
    }
  },
  mounted() {
    // On window resize and load, execute method getWindowWidth
    window.addEventListener('resize', this.getWindowWidth)
    window.addEventListener('load', this.getWindowWidth)
  },
  created() {
    this.getWindowWidth()
  }
}
</script>
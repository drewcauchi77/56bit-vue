<template>
  <main role="main" class="page-content home-main">
    <section class="introduction-section">
      <div class="introduction-inner-section">
        <div class="container introduction-container">
            <div class="introduction-content">
              <h1 class="introduction-title">Making Cloud Expertise Accessible</h1>

              <div class="introduction-body">
                <NuxtLink to="/services#consultancy">
                  <span class="button-text">Cloud-Native Architectures</span>
                </NuxtLink>
                  <span class="separator">&nbsp;//&nbsp;</span>
                <NuxtLink to="/services#implement">
                  <span class="button-text">Perpetual Availability</span>
                </NuxtLink>
                  <span class="separator">&nbsp;//&nbsp;</span>
                <NuxtLink to="/services#architect-design">
                  <span class="button-text">Top-notch Expertise</span>
                </NuxtLink>
                  <span class="separator">&nbsp;//&nbsp;</span>
                <NuxtLink to="/services#maintain">
                  <span class="button-text">Supporting Business Needs</span>
                </NuxtLink>
              </div>

              <div class="introduction-button button">
                <NuxtLink to="/contact">
                  <span class="button-text">Contact Us</span>
                </NuxtLink>
              </div>
            </div>
        </div>
      </div>
    </section>

    <section class="aws-section">
      <div class="aws-content">
        <NuxtLink to="/aws">
          <img src="~/assets/images/badges/aws-consulting-partner.png" alt="AWS Consulting Partner">
        </NuxtLink>
      </div>
    </section>

    <section class="services-section">
        <div class="services-container">
            <h2 class="container services-title">56Bit Services</h2>

            <div class="services-list">
              <VueSlickCarousel v-bind="settingsOne">
                <div class="single-services">
                  <NuxtLink to="/services#architect-design" class="single-service-link">
                    <div class="single-services-content">
                        <div class="service-icon">
                          <PagesHomeServicesArchitectAndDesign />
                        </div>
                        <h3 class="service-title">Architect &amp; Design</h3>
                        <p class="service-text">Concept and design of tailored architectures to cater for the client needs of today and tomorrow</p>
                    </div>
                  </NuxtLink>
                </div>

                <div class="single-services">
                  <NuxtLink to="/services#prototype" class="single-service-link">
                    <div class="single-services-content">
                        <div class="service-icon">
                          <PagesHomeServicesPrototype />
                        </div>
                        <h3 class="service-title">Prototype</h3>
                        <p class="service-text">Building tailored proof of concept architectures for peace of mind</p>
                    </div>
                  </NuxtLink>
                </div>

                <div class="single-services">
                  <NuxtLink to="/services#implement" class="single-service-link">
                    <div class="single-services-content">
                        <div class="service-icon">
                          <PagesHomeServicesImplement />
                        </div>
                        <h3 class="service-title">Implement</h3>
                        <p class="service-text">Deploy live, at scale, resilient and future proof topologies</p>
                    </div>
                  </NuxtLink>
                </div>

                <div class="single-services">
                  <NuxtLink to="/services#maintain" class="single-service-link">
                    <div class="single-services-content">
                        <div class="service-icon">
                          <PagesHomeServicesMaintain />
                        </div>
                        <h3 class="service-title">Maintain</h3>
                        <p class="service-text">Carry out preventive maintenance and monitoring to ensure that infrastructures operate smoothly into the future</p>
                    </div>
                  </NuxtLink>
                </div>

                <div class="single-services">
                  <NuxtLink to="/services#consultancy" class="single-service-link">
                    <div class="single-services-content">
                        <div class="service-icon">
                          <PagesHomeServicesConsultancy />
                        </div>
                        <h3 class="service-title">Consultancy</h3>
                        <p class="service-text">Expert input from experienced and AWS-certified personnel</p>
                    </div>
                  </NuxtLink>
                </div>

                <div class="single-services">
                  <NuxtLink to="/services#migration" class="single-service-link">
                    <div class="single-services-content">
                        <div class="service-icon">
                          <PagesHomeServicesMigration />
                        </div>
                        <h3 class="service-title">Migration</h3>
                        <p class="service-text">Guiding the smooth move to a cloud infrastructure or between cloud infrastructures</p>
                    </div>
                  </NuxtLink>
                </div>

                <div class="single-services">
                  <NuxtLink to="/services#staff-augmentation" class="single-service-link">
                    <div class="single-services-content">
                        <div class="service-icon">
                          <PagesHomeServicesStaffAugmentation />
                        </div>
                        <h3 class="service-title">Staff Augmentation</h3>
                        <p class="service-text">Assisting companies cope with increases in demand by using 56Bit professionals as additional hands-on-deck</p>
                    </div>
                  </NuxtLink>
                </div>
              </VueSlickCarousel>
            </div>
        </div>
    </section>

    <section class="tagline-section">
      <div class="container tagline-container">
        <span class="tagline-text">Our attention to detail coupled with the use of best practices ensures an unrivalled level of quality in everything we deliver to our clients.</span>
      </div>
    </section>

    <section class="methodology-section">
      <div class="container methodology-container">
        <h2 class="methodology-title">The 56Bit Methodology Cycle</h2>

        <div class="methodology-life-cycle">
            <div class="single-item">
              <div class="circle-item" id="1" @click="selectCycle">
                <div class="dot-item" :class="{ bigger: (setCycle == 1) }"></div>
              </div>

              <div class="circle-text">
                <span>DISCOVER</span>
              </div>
            </div>

            <div class="single-item">
              <div class="circle-item" id="2" @click="selectCycle">
                <div class="dot-item" :class="{ bigger: (setCycle == 2) }"></div>
              </div>

              <div class="circle-text">
                <span>BUILD</span>
              </div>
            </div>

            <div class="single-item">
              <div class="circle-item" id="3" @click="selectCycle">
                <div class="dot-item" :class="{ bigger: (setCycle == 3) }"></div>
              </div>

              <div class="circle-text">
                <span>PLAN <br>DEPLOYMENT</span>
              </div>
            </div>

            <div class="single-item">
              <div class="circle-item" id="4" @click="selectCycle">
                <div class="dot-item" :class="{ bigger: (setCycle == 4) }"></div>
              </div>

              <div class="circle-text">
                <span>DEPLOY</span>
              </div>
            </div>

            <div class="single-item">
              <div class="circle-item" id="5" @click="selectCycle">
                <div class="dot-item" :class="{ bigger: (setCycle == 5) }"></div>
              </div>

              <div class="circle-text">
                <span>OPTIMIZE</span>
              </div>
            </div>

            <div class="tapper">
              <PagesHomeMethodologyCursorClick />
              
              <div class="tapper-text">
                <span class="mobile-show">Tap each point</span>
                <span class="desktop-show">Click through each point</span>
              </div>
            </div>
        </div>

        <div class="methodology-slider" :class="{ open: openCycleWindow }">
          <div class="container methodology-container">
            <div class="methodology-upper">
              <div class="slider-counter">
                <span><strong>0{{ setCycle }}</strong>/05</span>
              </div>

              <div class="close" @click="closeCycleWindow">
                <span></span>
                <span></span>
              </div>
            </div>

            <div class="slider-content">
              <div class="single-slider" :class="{ view: (setCycle == 1) }">
                <h3>Discover</h3>

                <div class="single-slider-body">
                  <p>Each assignment starts with an exploration of the client needs by extracting and understanding the real business requirements.</p>
                  <p>We draw up technical specifications and architect the eventual solution.</p>
                  <p>The discovery phase closes by us defining key deliverables and timelines for the eventual project</p>
                </div>
              </div>

              <div class="single-slider" :class="{ view: (setCycle == 2) }">
                <h3>Build</h3>

                <div class="single-slider-body">
                  <p>The technical specifications are built using industry-standard services, rock-solid skills and industry best-practice.</p>
                  <p>All infrastructure is built to be resilient, to cater for current and future projected needs and to last into the future.</p>
                </div>
              </div>

              <div class="single-slider" :class="{ view: (setCycle == 3) }">
                <h3>Plan Deployment</h3>

                <div class="single-slider-body">
                  <p>Plan the deployment process to be carried out based on the current infrastructure in place. It is important that the migration process is smooth, the operation is not impacted and that there are safeguards along the way.</p>
                </div>
              </div>

              <div class="single-slider" :class="{ view: (setCycle == 4) }">
                <h3>Deploy</h3>

                <div class="single-slider-body">
                  <p>Execute the migration plan and ensure that measures are in place to ensure that the plan has been executed successfully and that the implemented infrastructure is delivering the intended results.</p>
                </div>
              </div>

              <div class="single-slider" :class="{ view: (setCycle == 5) }">
                <h3>Optimize</h3>

                <div class="single-slider-body">
                  <p>Live infrastructure operates in dynamic online and business environments. Preventive maintenance is crucial to ensure that it will cope with the multiple unplanned changes in these environments.</p>
                  <p>Monitoring is crucial to put in place in order to keep confirming that, despite the environment changes, the infrastructure is still performing up to expectations.</p>
                  <p>Infrastructure optimisation also includes constant exploration of how costs can be better managed or reduced based on technology advances or re-configuration.  Any changes will follow this cycle once more from the Discovery stage onwards...</p>
                </div>
              </div>
            </div>

            <div class="navigators">
              <div class="prev-button navig" id="prev" @click="cycleNavigator"></div>

              <div class="next-button navig" id="next" @click="cycleNavigator"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="technical-section">
      <div class="technical-container">
        <h2 class="container technical-title">Our Technical Credo</h2>

        <div class="technical-list">
            <VueSlickCarousel v-bind="settingsTwo">
                <div class="single-technical">
                    <div class="single-technical-content">
                        <div class="technical-icon">
                          <PagesHomeTechnicalInfrastructureAsCode />
                        </div>
                        <h3 class="technical-title">Infrastructure as Code</h3>
                        <p class="technical-text">We build infrastructure one line of code at a time resulting in highly flexible and adaptable environments.</p>
                    </div>
                </div>

                <div class="single-technical">
                    <div class="single-technical-content">
                        <div class="technical-icon">
                          <PagesHomeTechnicalHighAvailability />
                        </div>
                        <h3 class="technical-title">High Availability</h3>
                        <p class="technical-text">Businesses depend on our infrastructures so we design them from the ground up to be dependable and constantly available.</p>
                    </div>
                </div>

                <div class="single-technical">
                    <div class="single-technical-content">
                        <div class="technical-icon">
                          <PagesHomeTechnicalDisasterRecovery />
                        </div>
                        <h3 class="technical-title">Disaster Recovery</h3>
                        <p class="technical-text">Our solutions are robust providing high uptime.  In the unlikely eventuality of a disaster we also cater for alternative scenarios to keep your business running.</p>
                    </div>
                </div>

                <div class="single-technical">
                    <div class="single-technical-content">
                        <div class="technical-icon">
                          <PagesHomeTechnicalTimeToMarket />
                        </div>
                        <h3 class="technical-title">Time to Market</h3>
                        <p class="technical-text">Our expertise, best-of-breed technologies and internal methodologies enable us to deliver live platforms in weeks.</p>
                    </div>
                </div>

                <div class="single-technical">
                    <div class="single-technical-content">
                        <div class="technical-icon">
                          <PagesHomeTechnicalCICD />
                        </div>
                        <h3 class="technical-title">CI/CD</h3>
                        <p class="technical-text">Our work enables developers to deploy their code on live systems in an effortless and simple manner.</p>
                    </div>
                </div>

                <div class="single-technical">
                    <div class="single-technical-content">
                        <div class="technical-icon">
                          <PagesHomeTechnicalIndustryStandards />
                        </div>
                        <h3 class="technical-title">Industry Standards</h3>
                        <p class="technical-text">Industry best practices are built into everything we do. This way we deliver peace of mind and quality in every project we embark on.</p>
                    </div>
                </div>
            </VueSlickCarousel>
        </div>
      </div>
    </section>

    <section class="tagline-section">
      <div class="container tagline-container">
        <span class="tagline-text">We seek to build a relationship based on trust with our clients. We do this by ensuring that all communications and dealings are transparent, open and honest.</span>
      </div>
    </section>

    <section class="expertise-section">
      <div class="container expertise-container">
        <div class="expertise-details">
          <h2 class="expertise-title">Qualified AWS expertise at your service</h2>

          <p class="expertise-content">Our partnership with Amazon Web Services provides additional quality and value to our clients. At 56Bit, AWS gurus exceed client expectations with their value delivery. With the additional backup and support from Amazon Web Services, new heights are achieved in both service delivery and customer engagement.</p>

          <div class="expertise-button button">
            <NuxtLink to="/aws">
              <span class="button-text">Discover More</span>
            </NuxtLink>
          </div>
        </div>

        <div class="expertise-image">
          <NuxtLink to="/aws">
            <img src="~/assets/images/badges/aws-consulting-partner.png" alt="AWS Consulting Partner">
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- <section class="awards-section">
        <div class="awards-container">
            <h2 class="container awards-title">Awards</h2>

            <div class="awards-list">
              <VueSlickCarousel v-bind="settingsThree">
                <div class="single-awards">
                  <div class="single-awards-content">
                      <div class="award-icon">
                        <PagesHomeAwardsAward />
                      </div>
                      <h3 class="award-title">Lorem ipsum dolor sit amet consectetur.</h3>
                  </div>
                </div>

                <div class="single-awards">
                  <div class="single-awards-content">
                      <div class="award-icon">
                        <PagesHomeAwardsAward />
                      </div>
                      <h3 class="award-title">Lorem ipsum dolor sit amet consectetur.</h3>
                  </div>
                </div>

                <div class="single-awards">
                  <div class="single-awards-content">
                      <div class="award-icon">
                        <PagesHomeAwardsAward />
                      </div>
                      <h3 class="award-title">Lorem ipsum dolor sit amet consectetur.</h3>
                  </div>
                </div>

                <div class="single-awards">
                  <div class="single-awards-content">
                      <div class="award-icon">
                        <PagesHomeAwardsAward />
                      </div>
                      <h3 class="award-title">Lorem ipsum dolor sit amet consectetur.</h3>
                  </div>
                </div>
              </VueSlickCarousel>
            </div>
        </div>
    </section> -->

    <!-- <blog /> -->

    <case-studies />

    <testimonials />
  </main>
</template>

<script>
// Slick slider components and importation
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import Blog from '../components/sections/Blog.vue'
import CaseStudies from '../components/sections/CaseStudies.vue'
import Testimonials from '../components/sections/Testimonials.vue'

export default {
    components: { 
        VueSlickCarousel,
        Blog,
        CaseStudies,
        Testimonials,
    },
    transition: 'slide-bottom',
    data() {
        return {
            // Slick slider carousels for the carousels on page
            settingsOne: {
                arrows: true,
                dots: false,
                autoplay: true,
                autoplaySpeed: 10000,
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                responsive: [
                    {
                        breakpoint: 1199,
                        settings: {
                            slidesToShow: 3,
                        }
                    },
                    {
                        breakpoint: 991,
                        settings: {
                            arrows: false,
                            slidesToShow: 2.5,
                            infinite: false,
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            arrows: false,
                            slidesToShow: 1.5,
                            infinite: false,
                        }
                    },
                ]
            },
            settingsTwo: {
                arrows: true,
                dots: false,
                autoplay: true,
                autoplaySpeed: 10000,
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                responsive: [
                    {
                        breakpoint: 991,
                        settings: {
                            arrows: false,
                            slidesToShow: 1.5,
                            infinite: false,
                        }
                    },
                ]
            },
            settingsThree: {
              arrows: true,
              dots: false,
              autoplay: false,
              autoplaySpeed: 10000,
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              responsive: [
                  {
                      breakpoint: 991,
                      settings: {
                          arrows: false,
                          slidesToShow: 2.5,
                          infinite: false,
                      }
                  },
                  {
                      breakpoint: 767,
                      settings: {
                          arrows: false,
                          slidesToShow: 1.5,
                          infinite: false,
                      }
                  },
              ]
            },
            // Set the methodology cycle starting point to always be 1 - DISCOVER
            setCycle: 1,
            // Toggle the sliding page for the cycle used on mobile (< 992px)
            openCycleWindow: false,
            // Variable to set whether the width is mobile or not
            isMobile: false
        }
    },
    methods: {
      // On click of each dot, execute this method
      selectCycle(event) {
        // This is set on the click of the dots, get the id of the dot (which would be the numbers)
        this.setCycle = event.currentTarget.id
        // Check if the device is a mobile or not
        if(this.isMobile == true){
          // If abided, open window
          this.openCycleWindow = true
          // Stop the scrolling of the page
          document.documentElement.style.overflowY = 'hidden'
        }
      },
      // On click of the close button within the cycle window
      closeCycleWindow() {
        // Check if device is mobile and execute
        if(this.isMobile == true){
          // Close window and reset the scrolling on body to work again
          this.openCycleWindow = false
          document.documentElement.style.overflowY = 'auto'
        }
      },
      // To cycle within the navigation buttons - previous and next buttons in an infinite way
      cycleNavigator(event){
        // Get the id of the target and if it is previous, decrease setCycle variable amount or else if it is 1, reset from 5
        if(event.currentTarget.id == 'prev'){
          if(this.setCycle == 1){
            this.setCycle = 5
          }else{
            this.setCycle--
          }
        // Get the id of the target and if it is next, increase setCycle variable amount or else if it is 5, reset from 1
        }else if(event.currentTarget.id == 'next'){
          if(this.setCycle == 5){
            this.setCycle = 1
          }else{
            this.setCycle++
          }
        }
      },
      // Method called when window resize is triggered from mounted or created
      getWindowWidth() {
        // Set variable according to the width
        if(window.innerWidth < 992){
          this.isMobile = true
          return
        }else{
          this.isMobile = false
        }
      }
    },
    mounted() {
      // On window resize and load, execute method getWindowWidth
      window.addEventListener('resize', this.getWindowWidth)
      window.addEventListener('load', this.getWindowWidth)
    },
    // When the page is rendered, execute the method to not allow for errors on load
    created() {
      this.getWindowWidth()
    }
}
</script>
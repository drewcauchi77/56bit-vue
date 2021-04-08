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
        <div class="container services-container">
            <h2 class="services-title">56Bit Services</h2>

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
      </div>
    </section>

    <section class="technical-section">
      <div class="container technical-container">
        <h2 class="technical-title">Our Technical Credo</h2>

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
  </main>
</template>

<script>
// Slick slider components and importation
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    components: { 
        VueSlickCarousel 
    },
    transition: 'slide-bottom',
    data() {
        return {
            settingsOne: {
                arrows: true,
                dots: false,
                autoplay: false,
                autoplaySpeed: 6000,
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
                            slidesToShow: 2,
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
                autoplay: false,
                autoplaySpeed: 6000,
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                responsive: [
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 1,
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
        }
    },
}
</script>
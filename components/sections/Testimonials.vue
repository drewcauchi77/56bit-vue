<template>
    <section class="testimonials-section">
        <div class="container testimonials-container">
            <h2 class="testimonials-title">Testimonials</h2>

            <div class="testimonials-list">
                <VueSlickCarousel v-bind="settings">
                    <div class="single-testimonial">
                        <div class="single-testimonial-content">
                            <p class="testimonial-text">They are incredibly efficient, they work hard and we feel safe in their hands.</p>

                            <span class="testimonial-name">Bettina Falzon - COO - Lovinmalta</span>
                        </div>
                    </div>

                    <div class="single-testimonial">
                        <div class="single-testimonial-content">
                            <p class="testimonial-text">We have found 56Bit to be an excellent partner in building our AWS environments, all work was on time and they have advised us very professionally on what we required.</p>

                            <span class="testimonial-name">Christopher Dalton - CEO – Jobmate</span>
                        </div>
                    </div>

                    <div class="single-testimonial">
                        <div class="single-testimonial-content">
                            <p class="testimonial-text">Ever since teaming up with 56Bit I have found that I have more peace of mind on our infrastructure setup. They provide an efficient service, have a wealth of knowledge and suggest cost reduction tweaks where possible.</p>

                            <span class="testimonial-name">Jean Schaak - CEO – Keepmeposted</span>
                        </div>
                    </div>

                    <div class="single-testimonial">
                        <div class="single-testimonial-content">
                            <p class="testimonial-text">We have been working with 56Bit for the last few months and what we can say is that the service is top notch. Great service and great team.</p>

                            <span class="testimonial-name">Jerico Spiteri - IT Manager – Eurosport</span>
                        </div>
                    </div>

                    <div class="single-testimonial">
                        <div class="single-testimonial-content">
                            <p class="testimonial-text">I have worked with the people at 56Bit for the past 4 years. They are very professional, ready to help, and give valuable consultancy. We have 3 infrastructures that were all built by 56Bit and we are very happy with them.</p>

                            <span class="testimonial-name">Charlo Callus - Managing Director - Cloudlabs</span>
                        </div>
                    </div>
                </VueSlickCarousel>
            </div>
        </div>
    </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    components: { 
        VueSlickCarousel 
    },
    data() {
        return {
            settings: {
                arrows: true,
                dots: false,
                autoplay: true,
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
                ]
            },
        }
    },
}
</script> 
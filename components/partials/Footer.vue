<template>
  <footer class="footer-section">
    <div class="container footer-container">
      <div class="footer-inner-container">
        <div class="logo-section">
          <PartialsLogo />
        </div>

        <div class="social-section">
          <div class="social-item">
            <a href="https://www.linkedin.com/company/56bit/" target="_blank">
              <FooterLinkedin />
            </a>
          </div>

          <div class="social-item">
            <a href="https://www.facebook.com/56Bit" target="_blank">
              <FooterFacebook />
            </a>
          </div>

          <div class="social-item">
            <a href="https://twitter.com/a56bit" target="_blank">
              <FooterTwitter />
            </a>
          </div>
        </div>

        <div class="links-section navigation-section">
          <div class="links-section-title navigation-section-title">
            <span class="title">Links</span>
          </div>
          
          <ul class="links-section-navigation navigation">
            <li class="navigation-item">
              <NuxtLink to="/about-us" class="navigation-link">
                <span class="navigation-text">About us</span>
              </NuxtLink>
            </li>

            <li class="navigation-item">
              <NuxtLink to="/services" class="navigation-link">
                <span class="navigation-text">Services</span>
              </NuxtLink>
            </li>

            <li class="navigation-item">
              <NuxtLink to="/careers" class="navigation-link">
                <span class="navigation-text">Careers</span>
              </NuxtLink>
            </li>

            <!-- <li class="navigation-item">
              <NuxtLink to="/blog" class="navigation-link">
                <span class="navigation-text">Blog</span>
              </NuxtLink>
            </li> -->

            <li class="navigation-item">
              <NuxtLink to="/aws" class="navigation-link">
                <span class="navigation-text">AWS</span>
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div class="legal-section navigation-section">
          <div class="legal-section-title navigation-section-title" @click="showLegalMenu = !showLegalMenu">
            <span class="title">Legal</span>
            <div class="rotator" :class="{ rotated: showLegalMenu }"></div>
          </div>
          
          <ul class="legal-section-navigation navigation" :class="{ open: showLegalMenu }">
            <li class="navigation-item">
              <NuxtLink to="/privacy-policy" class="navigation-link">
                <span class="navigation-text">Privacy Policy</span>
              </NuxtLink>
            </li>

            <li class="navigation-item">
              <NuxtLink to="/cookie-policy" class="navigation-link">
                <span class="navigation-text">Cookie Policy</span>
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div class="contact-section navigation-section">
          <div class="contact-section-title navigation-section-title">
            <NuxtLink to="/contact" class="navigation-link">
              <span class="title">Get in touch</span>
            </NuxtLink>
          </div>

          <div class="contact-details">
            <span class="contact-details-title">Contact us</span>
            <span class="phone-number">(+356) 9978 7661</span>
            <span class="email">info@56bit.com</span>
          </div>
        </div>

        <div class="copyright-section">
          <span class="copyright-text">Copyright &#169; {{ new Date().getFullYear() }} 56BIT. All rights reserved.</span>
        </div>

        <div class="steves-section">
          <span class="steves-text">another website by</span>

          <a href="https://stevesandco.com" target="_blank">
            <FooterStevesAndCo />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    data() {
      return{
        // #VAR4
        // A variable that determines whether the legal menu should be shown or not on mobile
        // The value of this variable is changed by a click on legal-section-title
        showLegalMenu: false
      }
    },
  }
</script>
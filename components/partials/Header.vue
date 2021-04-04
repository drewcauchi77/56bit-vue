<template>
  <header class="header-section" :class="{ shrink: shrinkDesktopMenu }">
    <div class="container header-container">
      <div class="site-logo">
        <NuxtLink to="/" class="back-to-home">
          <PartialsLogo />
        </NuxtLink>
      </div>

      <div class="main-menu">
        <div class="menu-toggle" @click="showMobileMenu = !showMobileMenu" :class="{ transform: showMobileMenu }">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav class="header-menu" :class="{ open: showMobileMenu }">
          <ul class="navigation-list">
            <li class="primary-navigation-item" @click="showMobileMenu = !showMobileMenu">
              <NuxtLink to="/about-us" class="navigation-link">
                About Us
              </NuxtLink>
            </li>

            <li class="primary-navigation-item has-child" @click="showMobileMenu = !showMobileMenu">
              <NuxtLink to="/services" class="navigation-link">
                Services
              </NuxtLink>

              <ul class="child-navigation-list">
                <li class="child-navigation-item">
                  <NuxtLink to="/services#architect-design" class="navigation-link">
                    Architect &amp; Design
                  </NuxtLink>
                </li>

                <li class="child-navigation-item">
                  <NuxtLink to="/services#prototype" class="navigation-link">
                    Prototype
                  </NuxtLink>
                </li>

                <li class="child-navigation-item">
                  <NuxtLink to="/services#implement" class="navigation-link">
                    Implement
                  </NuxtLink>
                </li>

                <li class="child-navigation-item">
                  <NuxtLink to="/services#migration" class="navigation-link">
                    Migration
                  </NuxtLink>
                </li>

                <li class="child-navigation-item">
                  <NuxtLink to="/services#maintain" class="navigation-link">
                    Maintain
                  </NuxtLink>
                </li>

                <li class="child-navigation-item">
                  <NuxtLink to="/services#consultancy" class="navigation-link">
                    Consultancy
                  </NuxtLink>
                </li>

                <li class="child-navigation-item">
                  <NuxtLink to="/services#staff-augmentation" class="navigation-link">
                    Staff Augmentation
                  </NuxtLink>
                </li>
              </ul>
            </li>

            <li class="primary-navigation-item" @click="showMobileMenu = !showMobileMenu" >
              <NuxtLink to="/case-studies" class="navigation-link">
                Case Studies
              </NuxtLink>
            </li>

            <li class="primary-navigation-item" @click="showMobileMenu = !showMobileMenu">
              <NuxtLink to="/contact" class="navigation-link">
                Contact Us
              </NuxtLink>
            </li>

            <li class="primary-navigation-item" @click="showMobileMenu = !showMobileMenu">
              <NuxtLink to="/careers" class="navigation-link">
                Careers
              </NuxtLink>
            </li>

            <li class="primary-navigation-item" @click="showMobileMenu = !showMobileMenu">
              <NuxtLink to="/blog" class="navigation-link">
                Blog
              </NuxtLink>
            </li>

            <li class="primary-navigation-item" @click="showMobileMenu = !showMobileMenu">
              <NuxtLink to="/aws" class="navigation-link">
                AWS
              </NuxtLink>
            </li>

            <li class="secondary-navigation-item" @click="showMobileMenu = !showMobileMenu">
              <NuxtLink to="/privacy-policy" class="navigation-link">
                Privacy Policy
              </NuxtLink>
            </li>

            <li class="secondary-navigation-item" @click="showMobileMenu = !showMobileMenu">
              <NuxtLink to="/cookie-policy" class="navigation-link">
                Cookie Policy
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    data() {
      return {
        // #VAR1
        // To toggle the mobile menu, start with false and toggled by @click on menu-toggle in turn toggles class on header-menu 
        // Also toggled when a menu item is clicked so that the menu closes if it is open
        showMobileMenu: false,
        // #VAR2
        // To toggle and change the height of the header menu on desktop, start with false and toggled change by method updateScroll
        shrinkDesktopMenu: false,
        // #VAR3
        // To detect whether the device has a burger menu or a full header menu since media query is set at 992px
        isMobile: false
      }
    },
    watch: {
      // Function to watch #VAR1 and stop body scroll or renable according to @click behaviour true or false
      showMobileMenu: function() {
        // If true #VAR1 and #VAR3, set body to no scroll on html document and return
        if(this.showMobileMenu && this.isMobile){
          document.documentElement.style.overflowY = 'hidden'
          return
        }
        // Else reset scroll to auto on html document
        document.documentElement.style.overflowY = 'auto'
      }
    },
    methods: {
      // Method called when the window scroll is triggered from mounted
      updateScroll() {
        // If true scroll distance from top is bigger than 0, set #VAR2 to true and return
        if(window.scrollY > 0){
          this.shrinkDesktopMenu = true
          return
        }
        // Else set #VAR2 to false
        this.shrinkDesktopMenu = false
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
      // On window scroll, execute method updateScroll
      window.addEventListener('scroll', this.updateScroll)
      // On window resize and load, execute method getWindowWidth
      window.addEventListener('resize', this.getWindowWidth)
      window.addEventListener('load', this.getWindowWidth)
    }
  }
</script>
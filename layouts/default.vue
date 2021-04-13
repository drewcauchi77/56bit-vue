<template>
  <div class="full-page-content">
    <PartialsHeader />
    <Nuxt />
    <PartialsFooter />
    <CookieControl>
      <template v-slot:bar>
        <h3>Cookies</h3>
        <p>We use our own cookies and third-party cookies so that we can show you this website and better understand how you use it, with a view to improving the services we offer. If you continue browsing, we consider that you have accepted the cookies. <NuxtLink to="/cookie-policy">Learn more.</NuxtLink></p>
      </template>
    </CookieControl>
  </div>
</template>
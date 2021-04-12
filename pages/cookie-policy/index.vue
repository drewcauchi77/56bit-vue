<template>
  <main role="main" class="page-content privacy-cookies-main">
    
    <section class="contents-section">
      <div class="contents-container container">
        <div class="contents-inner-container">
          <span class="contents-tagline">Version 1</span>

          <h2 class="contents-title">Cookie Policy</h2>

          <span class="contents-sect-title">Contents</span>

          <ol class="contents-list">
            <li>Version Control</li>
            <li>Purpose</li>
            <li>What are Cookies?</li>
            <li>Categorization and types of Cookies</li>
            <li>How do we use Cookies?</li>
            <li>How can you manage Cookies?</li>
            <li>Changes to this Cookie Policy</li>
          </ol>
        </div>
      </div>
    </section>

    <section class="details-section">
      <div class="details-container container">
        <div class="single-privacy-content" :class="{ open: (setContent.includes('1')) }">
          <div class="single-privacy-upper" id="1" @click="selectContent">
            <h3 class="single-privacy-title">1. Version Control</h3>

            <div class="open-button" :class="{ minus: (setContent.includes('1')) }">
              <span></span><span></span>
            </div>
          </div>

          <div class="single-privacy-details post-content">
            <p>Version: 1 <br>
              Date: 1st August 2020<br>
              Summary of Updates: Creation of this policy</p>
          </div>
        </div>

        <div class="single-privacy-content" :class="{ open: (setContent.includes('2')) }">
          <div class="single-privacy-upper" id="2" @click="selectContent">
            <h3 class="single-privacy-title">2. Purpose</h3>

            <div class="open-button" :class="{ minus: (setContent.includes('2')) }">
              <span></span><span></span>
            </div>
          </div>

          <div class="single-privacy-details post-content">
            <p>This cookies policy explains what these technologies are, their types, what cookies we use on our website, what information they gather and how you can have control on the use of such cookies.</p>
            <p>This policy was drafted with the aim of providing clarity and information. Should you have any queries please feel free to contact us.</p>

            <p>Our contact details are the following:</p>
            <ul class="custom-list">
              <li><p>Address: 32, Triq il-Gewwinija, Ghaxaq GXQ1970</p></li>
              <li><p>Contact number: +356 99787661</p></li>
              <li><p>Email: legal@56bit.com</p></li>
            </ul>
          </div>
        </div>

        <div class="single-privacy-content" :class="{ open: (setContent.includes('3')) }">
          <div class="single-privacy-upper" id="3" @click="selectContent">
            <h3 class="single-privacy-title">3. What are Cookies?</h3>

            <div class="open-button" :class="{ minus: (setContent.includes('3')) }">
              <span></span><span></span>
            </div>
          </div>

          <div class="single-privacy-details post-content">
            <p>Cookies are small data (text) files that a website stores on a user’s computer or mobile device when the user visits the website. Cookies are sent back to the originating website on each subsequent visit and are used to make a website work, make a website work more efficiently or to provide information. </p>
          </div>
        </div>

        <div class="single-privacy-content" :class="{ open: (setContent.includes('4')) }">
          <div class="single-privacy-upper" id="4" @click="selectContent">
            <h3 class="single-privacy-title">4. Categorization and types of Cookies</h3>

            <div class="open-button" :class="{ minus: (setContent.includes('4')) }">
              <span></span><span></span>
            </div>
          </div>

          <div class="single-privacy-details post-content">
            <p>The use/purpose of cookies varies depending on the type of cookie being used. Some cookies are needed for carrying out the transmission of a communication over an electronic communications network. Others may be necessary for the provision of a service over the Internet, in which case they have to be used. Other cookies may be desirable to improve your experience, in which case consent to use them is requested.</p>

            <p>Generally, cookies can be categorized as follows:</p>
            <ul class="custom-list">
              <li><p><strong>Duration</strong> – cookies that are deleted as soon as the user closes the browser are referred to as session cookies, whilst those that are stored on the user’s device until deletion or expiry are called persistent cookies.</p></li>
              <li><p><strong>Provenance</strong> – cookies that are set by the website the user is visiting are referred to as first-party cookies. A website may use external services which set their own cookies, referred to as third-party cookies.</p></li>
              <li><p><strong>Purpose</strong> – <br></p>
                <p class="special-margin">a. strictly necessary cookies: these are cookies that are essential for the browsing of the site and cannot be switched off; <br>
                b. functional/preference cookies: these enhance the performance, functionality and personalization of the website but are not essential for the use of the website itself. Some functions of the website may become unavailable when such cookies are disabled; <br>
                c. performance cookies: these cookies analyze and collect information on how users use and interact with the website and its content. They generally assist to know which pages are mostly visited and user trends in using the site. <br>
                d. targeting/marketing cookies: these cookies are used to build a profile of the user’s interest and show the user relevant adverts or generally to customize advertising.
              </p></li>
            </ul>
          </div>
        </div>

        <div class="single-privacy-content" :class="{ open: (setContent.includes('5')) }">
          <div class="single-privacy-upper" id="5" @click="selectContent">
            <h3 class="single-privacy-title">5. How do we use Cookies?</h3>

            <div class="open-button" :class="{ minus: (setContent.includes('5')) }">
              <span></span><span></span>
            </div>
          </div>

          <div class="single-privacy-details post-content">
            <p>The specific cookies used through our website, their provenance and the purpose are listed below:</p>
            <table>
              <tr>
                <th>Name</th>
                <th>Host</th>
                <th>Duration</th>
                <th>Provenance</th>
                <th>Purpose</th>
                <th>Description</th>
              </tr>
              <tr>
                <td>_ga</td>
                <td>emailjs.com</td>
                <td>2 years</td>
                <td>3rd party</td>
                <td>Performance</td>
                <td>Google Analytics for emailjs.com. Emailjs.com is used to send messages through the contact form.</td>
              </tr>
              <tr>
                <td>_gid</td>
                <td>emailjs.com</td>
                <td>1 day</td>
                <td>3rd party</td>
                <td>Performance</td>
                <td>Google Analytics for emailjs.com. Emailjs.com is used to send messages through the contact form.</td>
              </tr>
            </table>
          </div>
        </div>

        <div class="single-privacy-content" :class="{ open: (setContent.includes('6')) }">
          <div class="single-privacy-upper" id="6" @click="selectContent">
            <h3 class="single-privacy-title">6. How can you manage Cookies?</h3>

            <div class="open-button" :class="{ minus: (setContent.includes('6')) }">
              <span></span><span></span>
            </div>
          </div>

          <div class="single-privacy-details post-content">
            <p>In accordance with the General Data Protection Regulation (GDPR), this website requires your free consent for the use of cookies. You have the right to accept the use of cookies. The first time you visit this website you will be informed that we use cookies and you can refer to this policy for information on what cookies we use and how we use them. Your acceptance of the Cookie Notice popup or/and continued use of this site indicates your acceptance towards this cookies policy.</p>
            <p>You can disable cookies and/or delete cookies that are already on your device through your browser settings. Please note that while disabling cookies will probably not have any adverse effects on site usage, you may find that the site does not work as expected if cookies are disabled.</p>            
            <p>To find out more about cookies, including how cookies have been set and how to manage and delete them, visit <a href="https://aboutcookies.org/" target="_blank" class="custom-link">www.aboutcookies.org</a> or <a href="https://www.allaboutcookies.org/" target="_blank" class="custom-link">www.allaboutcookies.org</a>.</p>
          </div>
        </div>

        <div class="single-privacy-content" :class="{ open: (setContent.includes('7')) }">
          <div class="single-privacy-upper" id="7" @click="selectContent">
            <h3 class="single-privacy-title">7. Changes to this Cookies Policy</h3>

            <div class="open-button" :class="{ minus: (setContent.includes('7')) }">
              <span></span><span></span>
            </div>
          </div>

          <div class="single-privacy-details post-content">
            <p>We keep our cookies policy under regular review. If on review any changes are undertaken and such changes are significant and will affect the way we collect or process any personal data, we will take reasonable steps to provide you with prior notice. A notice on our website will be uploaded in cases of other changes not deemed significant. Your continued use of services or websites after any change to this privacy notice will constitute your acceptance of such change.</p>
            <p>This policy has been last updated and approved on the 1st of August 2020.</p>
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
      // setContent is an array so that it can handle multiple numbers for multiple sections open
      setContent: [],
      isMobile: false,
    }
  },
  methods: {
    // Method that gains id of div on click through the event and if the condition of isMobile is successful, then execute
    selectContent(event) {
      if(this.isMobile == true){
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
      }
    },
    // Method called when window resize is triggered from mounted
    getWindowWidth() {
      // If true that the width of the window is less than 992, set #VAR3 to true and return
      if(window.innerWidth < 768){
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
  }
}
</script>
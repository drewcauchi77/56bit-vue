<template>
    <VueCookieAcceptDecline
        :ref="'myPanel1'"
        :elementId="'myPanel1'"
        :debug="false"
        :position="'bottom-left'"
        :type="'floating'"
        :disableDecline="false"
        :transitionName="'slideFromBottom'"
        @status="cookieStatus"
        @clicked-accept="cookieClickedAccept"
        @clicked-decline="cookieClickedDecline">
    
        <div slot="message">
            <h3>Cookies</h3>
            <p>We use our own cookies and third-party cookies so that we can show you this website and better understand how you use it, with a view to improving the services we offer. If you continue browsing, we consider that you have accepted the cookies. 
                <NuxtLink to="/cookie-policy">Learn more.</NuxtLink>
            </p>
        </div>
    
        <div slot="declineContent" @click="deleteCookies">
            DECLINE ALL
        </div>
    
        <div slot="acceptContent">
            ACCEPT ALL
        </div>
    </VueCookieAcceptDecline>
</template>

<script>
import VueCookieAcceptDecline from 'vue-cookie-accept-decline'

export default {
    data() {
        return {
            status: null
        }
    },
    components: {
        VueCookieAcceptDecline
    },
    methods: {
        cookieStatus (status) {
            this.status = status
        },
        cookieClickedAccept() {
            this.status = 'accept'
        },
        cookieClickedDecline() {
            this.status = 'decline'
        },
        cookieRemovedCookie() {
            this.status = null
            this.$refs.myPanel1.init()
        },
        removeCookie() {
            this.$refs.myPanel1.removeCookie()
        },
        deleteCookies() {
            var cookies = document.cookie.split(";")

            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i]
                var eqPos = cookie.indexOf("=")
                var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie
                document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT"
            }
        }
    },
    mounted() {
        if(this.status == 'decline'){
            this.deleteCookies()
        }
    },
    computed: {
        statusText () {
            return this.status || 'No cookie set'
        }
    }
}
</script>
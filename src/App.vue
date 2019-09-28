<template>
    <v-app>
        <app-header />

        <v-content>
            <router-view />
        </v-content>

        <feedback />
    </v-app>
</template>

<script>
    import apiConfig from './components/api/apiConfig';

    import AppHeader from './components/header/AppHeader.vue';
    import Feedback from './components/feedback/Feedback.vue';

    export default {
        name: 'App',
        components: { AppHeader, Feedback },
        mixins: [apiConfig],
        created() {
            this.createInterceptors();

            if (window.localStorage.authToken && window.localStorage.userId) {
                this.$store.commit('setAuthToken', window.localStorage.authToken);
                this.$store.commit('setUserId', window.localStorage.userId);
            } else {
                this.$router.push('/');
            }
        },
    };
</script>

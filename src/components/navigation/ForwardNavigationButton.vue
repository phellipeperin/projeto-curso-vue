<template>
    <v-btn
        text
        small
        color="primary"
        @click="goToDetails"
    >
        Ver Detalhes
    </v-btn>
</template>

<script>
    export default {
        name: 'ForwardNavigationButton',
        props: {
            url: { type: String, required: true },
        },
        methods: {
            goToDetails() {
                this.$router.push(this.url);
            },
        },
    };
</script>

<style scoped>

</style>

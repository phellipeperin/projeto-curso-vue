<template>
    <v-card class="mx-auto book-card">
        <v-card-title class="pb-3">
            <span>{{ shelf.title }}</span>
        </v-card-title>

        <v-card-text>
            <span>
                Número de Livros:
                <span class="font-weight-medium ml-1">{{ shelf.volumeCount }}</span>
            </span>
        </v-card-text>

        <v-card-actions>
            <forward-navigation-button :url="entryPageUrl" />
        </v-card-actions>
    </v-card>
</template>

<script>
    import ForwardNavigationButton from '../navigation/ForwardNavigationButton.vue';

    export default {
        name: 'LibraryItem',
        components: { ForwardNavigationButton },
        props: {
            shelf: { type: Object, required: true },
        },
        computed: {
            entryPageUrl() {
                return `/library/${this.shelf.id}`;
            },
        },
    };
</script>

<style scoped>

</style>

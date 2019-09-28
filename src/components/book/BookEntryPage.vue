<template>
    <v-container fluid>
        <back-button />

        <v-row v-if="book && book.volumeInfo">
            <v-col
                cols="12"
                md="3"
                class="text-center"
            >
                <book-entry-image :book="book" />
            </v-col>

            <v-col
                cols="12"
                md="9"
            >
                <book-entry-data :book="book" />
                <book-entry-authors :book="book" />
                <book-entry-categories :book="book" />
                <book-entry-actions :book="book" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import api from '../api/api';
    import bookService from './bookService';

    import BackButton from '../navigation/BackButton.vue';
    import BookEntryImage from './BookEntryImage.vue';
    import BookEntryData from './BookEntryData.vue';
    import BookEntryAuthors from './BookEntryAuthors.vue';
    import BookEntryCategories from './BookEntryCategories.vue';
    import BookEntryActions from './BookEntryActions.vue';

    export default {
        name: 'BookEntryPage',
        components: {
            BookEntryActions,
            BookEntryCategories,
            BookEntryAuthors,
            BookEntryData,
            BookEntryImage,
            BackButton,
        },
        mixins: [api, bookService],
        data() {
            return {
                book: {},
            };
        },
        created() {
            this.get(`/volumes/${this.$route.params.id}`).then((response) => {
                this.book = response.data;
            });
        },
    };
</script>

<style scoped>

</style>

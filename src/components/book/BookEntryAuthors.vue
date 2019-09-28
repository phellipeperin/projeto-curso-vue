<template>
    <div>
        <div v-if="book.volumeInfo.authors && book.volumeInfo.authors.length">
            <v-subheader>Autores</v-subheader>
            <v-divider class="mb-2" />

            <v-chip
                v-for="(author, i) in book.volumeInfo.authors"
                :key="i"
                pill
                class="mr-3"
            >
                <v-avatar
                    left
                    color="primary white--text"
                >
                    {{ author.substring(0, 1) }}
                </v-avatar>
                {{ author }}
            </v-chip>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'BookEntryAuthors',
        props: {
            book: { type: Object, required: true },
        },
    };
</script>

<style scoped>

</style>

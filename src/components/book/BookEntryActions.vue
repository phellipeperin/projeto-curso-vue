<template>
    <div>
        <div
            v-if="book.volumeInfo.previewLink"
            class="mt-4"
        >
            <v-subheader>Ações</v-subheader>
            <v-divider class="mb-2" />

            <v-btn
                text
                color="primary"
                @click="goToPreview(book)"
            >
                Ver Preview
            </v-btn>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'BookEntryActions',
        props: {
            book: { type: Object, required: true },
        },
    };
</script>

<style scoped>

</style>

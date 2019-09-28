<template>
    <div>
        <div v-if="book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail">
            <img :src="book.volumeInfo.imageLinks.thumbnail">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'BookEntryImage',
        props: {
            book: { type: Object, required: true },
        },
    };
</script>

<style scoped>

</style>

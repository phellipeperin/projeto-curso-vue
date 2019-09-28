<template>
    <div>
        <h4 class="display-1">{{ book.volumeInfo.title }}</h4>
        <h5 class="headline">{{ book.volumeInfo.subtitle || 'Sem descrição' }}</h5>

        <p class="mt-2">{{ book.volumeInfo.description }}</p>
        <!-- <p v-html="book.volumeInfo.description" /> -->
    </div>
</template>

<script>
    export default {
        name: 'BookEntryData',
        props: {
            book: { type: Object, required: true },
        },
    };
</script>

<style scoped>

</style>

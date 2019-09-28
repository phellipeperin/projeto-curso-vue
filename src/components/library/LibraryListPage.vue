<template>
    <v-container fluid>
        <v-row>
            <v-col
                cols="12"
                md="4"
                lg="3"
            >
                <h6 class="display-1 text-uppercase">Estantes</h6>
            </v-col>
        </v-row>

        <library-list />
    </v-container>
</template>

<script>
    import LibraryList from './LibraryList.vue';

    export default {
        name: 'LibraryListPage',
        components: { LibraryList },
    };
</script>

<style scoped>

</style>

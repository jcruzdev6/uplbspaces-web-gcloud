<template>
    <div>
        <PageBreadcrumbs />
        <div class="container-fluid" id="innerpage">
            <div class="container-lg" id="innerpageBody">
                <PageHeader />
                <div id="innerpageBodyContent">
                    {{ pageStore.page.content }}
                    <p>&nbsp;</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const route = useRoute();
const pageStore = usePageStore();

await pageStore.fetchPage(route.params.id);

</script>
<template>
    <div class="container-fluid" id="innerpageHeader">
        <div class="container-lg" id="innerpageHeaderContent">
            <div class="spacesBreadcrumbs">
                <NuxtLink to="/">Home</NuxtLink> <span>
                    <IconsCaretRight />
                </span>&nbsp;{{ pageStore.page.name }}
            </div>
        </div>
    </div>
</template>

<script setup>
const pageStore = usePageStore();
const props = defineProps({
    page_name: String,
});
</script>

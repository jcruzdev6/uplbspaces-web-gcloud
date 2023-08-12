<template>
    <div class="innerpageImgContainer">
        <img :src="useImage('page', pageStore.page.id)">
        <div class="innerpageImgText">
            <p>{{ pageStore.page.name }}</p>
            <img class="innerpageImgTextLogo" src="@/assets/images/uplbspaces_mono_dark_275.png">
        </div>
    </div>
</template>

<script setup>
const pageStore = usePageStore();
</script>
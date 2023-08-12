<template>
    <div class="tileClip">
        <div class="tile">            
            <img :src="useImage('facility_type', props.facility_type.id )">
            <NuxtLink :to="'/spaces/'+props.facility_type.id" class="tileTint">
                <div class="tileContent">
                    <h3 class="tileTitle">{{props.facility_type.name}}</h3>
                    <p>description here {{props.facility_type.description}}</p>
                </div>
            </NuxtLink>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    facility_type: {
        type: Object,
    },
});
</script>

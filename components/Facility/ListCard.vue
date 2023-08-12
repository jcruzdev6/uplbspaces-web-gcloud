<template>
    <div>
        <div class="spacesTileCard">
            <div class="spacesTileClip">
                <div class="spacesTileImg">
                    <img :src="useImage('facility', props.facility.id, props.facility.facility_type_id)">
                    <NuxtLink :to="'/spaces/space/'+props.facility.id" class="spacesTileTint"></NuxtLink>
                </div>
            </div>
            <div class="spacesTileDescriptionBox">
                <div class="spacesTileTitleClip">
                    <h4 class="spacesTileTitle"><a href="ncas.html">{{ props.facility.name }}</a></h4>
                </div>
                <div class="spacesTileText">
                    <address>{{ props.facility.address }}</address>
                    <div class="spacesTileTable">
                        <div class="row1 label">Capacity:</div>
                        <div class="row1">{{ props.facility.min_capacity }} - {{ props.facility.max_capacity }}</div>
                        <div class="row2 label">Availability:</div>
                        <div class="row2">{{ props.facility.available_days_grp }}, {{ props.facility.available_hrs }}</div>
                        <div class="row1 label">U.P. Rate:</div>
                        <div class="row1">Php 1,000.00 / hr</div>
                        <div class="row2 label">Non-U.P. Rate:</div>
                        <div class="row2">Php 1,600.00 / hr</div>
                    </div>
                </div>
                <div class="spacesTileBtnContainer">
                    <button type="button" class="btn btn-success btn-sm rounded-3 spacesTileBtn" data-bs-toggle="modal"
                        data-bs-target="#modalBookNow" aria-controls="modalBookNow">Book Now</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    facility: {
        type: Object,
    },
});
</script>

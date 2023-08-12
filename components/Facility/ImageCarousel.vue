<template>
    <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
            <div v-for="(image, index) in images"
                    :key="index" :class="(index == 0)?'active':''" class="carousel-item">
                <div id="spaceImgContainer">
                    <img :src="image">
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<script setup>
const facilityStore = useFacilityStore();
const images = useFetchFacilityImages(facilityStore.facility.id, facilityStore.facility.facility_type_id);
</script>
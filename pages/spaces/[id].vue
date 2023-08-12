<template>
    <div class="container-fluid px-lg-3" id="spaces">
        <div class="container-lg" id="spacesContent">
            <div class="spacesHeader">
                <div>
                    <FacilityBreadcrumbs />
                    <h3 class="spacesTitle">{{ facilityTypeStore.facility_type.name }}</h3>
                </div>
            </div>
            <div id="spacesGrid">
                <FacilityListCard v-for="(facility, index) in facilityStore.facilities"
                            :key="index" :facility="facility" />
            </div>
        </div>
    </div>
</template>

<script setup>
const route = useRoute();
const facilityStore = useFacilityStore();
const facilityTypeStore = useFacilityTypeStore();

await facilityStore.fetchFacilitiesByType(route.params.id);
await facilityTypeStore.fetchFacilityType(route.params.id);

definePageMeta({
    layout: "facility"
});


</script>
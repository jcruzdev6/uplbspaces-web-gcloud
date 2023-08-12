<template>
    <div class="container-fluid" id="home">
        <div class="container-lg" id="homeContent">
            <div id="homeGrid">
                <BookingForm />
                <FacilityType v-for="(facility_type, index) in facilityTypeStore.facility_types"
                    :key="index"
                    :facility_type="facility_type" />
            </div>
        </div>
    </div>
</template>
  
<script setup>
const facilityTypeStore = useFacilityTypeStore();

</script>
  
<style lang="scss" scoped></style>
  
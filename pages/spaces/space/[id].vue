<template>
  <div>
    <div class="container-fluid" id="spaceHeader">
      <div class="container-lg" id="spaceHeaderContent">
        <div class="row">
          <div class="col-md-7 col-lg-8 p-0" id="spaceHeaderLeftCol">
            <FacilityBreadcrumbs />
            <h3 class="spacesTitle">{{ facilityStore.facility.name }}</h3>
          </div>
          <FacilityRateAvailability />
        </div>
      </div>
    </div>
    <div class="container-fluid" id="spaceBody">
      <div class="container-lg" id="spaceBodyContent">
        <div class="row">
          <div class="col-lg-8 p-0 order-last  order-lg-first" id="spaceBodyLeftCol">
            <div id="spaceBodyLeftColContent">
              <FacilityImageCarousel />
              <FacilityDetails />
            </div>
          </div>
          <div class="col-lg-4 p-0" id="spaceBodyRightCol">
            <FacilityBookingPageBookNow />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const facilityStore = useFacilityStore();
const facilityTypeStore = useFacilityTypeStore();

await facilityStore.fetchFacility(route.params.id)
await facilityTypeStore.fetchFacilityType(facilityStore.facility.facility_type_id);


definePageMeta({
  layout: "facility",

});

useHead({
  //script: { src: "/js/calendar.js", body: true },
});
</script>
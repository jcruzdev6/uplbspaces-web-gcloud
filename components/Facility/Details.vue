<template>
    <div id="spaceDetails">
        <div class="spacesTileTable">
            <div class="row2 label">Address:</div>
            <div class="row2">{{ facility.address }}</div>
            <div class="row1 label">Capacity:</div>
            <div class="row1">{{ useFacilityCapacity(facility.min_capacity, facility.max_capacity) }}</div>
            <div class="row2 label">Availability:</div>
            <div class="row2">{{ facility.available_days_grp + ', ' + facility.available_hrs }}</div>
            <div class="row1 label">U.P. Rate:</div>
            <div class="row1">
                <span v-for="rate in rates">
                    <div>
                    ₱{{ currency.format(rate.up_rate) + ' per ' + rate.type }}<small v-show="rate.with_aircon"> (with aircon)</small><small v-show="!rate.with_aircon"> (w/o aircon)</small>
                    </div>
                </span>
            </div>
            <div class="row2 label">Non-U.P. Rate:</div>
            <div class="row2">
                <span v-for="rate in rates">
                    <div>
                    ₱{{ currency.format(rate.nonup_rate) + ' per ' + rate.type }}<small v-show="rate.with_aircon"> (with aircon)</small><small v-show="!rate.with_aircon"> (w/o aircon)</small>
                    </div>
                </span>
            </div>
        </div>
        <p>{{ facility.description }}</p>
    </div>
</template>

<script setup>
const facilityStore = useFacilityStore();
const facility = facilityStore.facility;
const currency = new Intl.NumberFormat('en-US');

const rates = facilityStore.rates;

</script>
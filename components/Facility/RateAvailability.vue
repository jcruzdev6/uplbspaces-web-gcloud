<template>
    <div class="col-md-5 col-lg-4 p-0" id="spaceHeaderRightCol">
        <div class="stripedTable">
            <div class="row1 label">U.P. Rate: </div>
            <div class="row1 value">
                <div class="spacesTitleRatesText">
                    ₱{{ currency.format(rate.up_rate) + ' per ' + rate.type }}<small v-show="rate.with_aircon"> (with
                        aircon)</small><small v-show="!rate.with_aircon"> (w/o aircon)</small>
                </div>
            </div>
            <div class="row2 label">Non-U.P. Rate: </div>
            <div class="row2 value">
                <div class="spacesTitleRatesText">
                    ₱{{ currency.format(rate.nonup_rate) + ' per ' + rate.type }}<small v-show="rate.with_aircon"> (with
                        aircon)</small><small v-show="!rate.with_aircon"> (w/o aircon)</small>
                </div>
            </div>
            <div class="row1 label">Availability:</div>
            <div class="row1 value">{{ facility.available_days_grp + ', ' + facility.available_hrs }}</div>
        </div>
    </div>
</template>

<script setup>
const facilityStore = useFacilityStore();
const currency = new Intl.NumberFormat('en-US');

const facility = facilityStore.facility;
const rate = facilityStore.rate;

</script>
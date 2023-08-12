<template>
    <div id="spaceBodyRightColContent">
        <h4 class="spaceBodyRightColTitle">
            BOOK THIS SPACE
        </h4>
        <div>
            <div id="allCalContainers">
                <!--  timeslots-->
                <FacilityBookingTimeSelector />

                <!--Booking-->
                <FacilityBookingFirstSelectedDates />

                <!-- calendar-->
                <FacilityBookingCalendar />

                <!-- bookings 2-->
                <FacilityBookingSelectedDates />
            </div>
        </div>
    </div>
</template>
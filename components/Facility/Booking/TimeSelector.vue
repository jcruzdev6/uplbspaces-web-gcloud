<template>
    <div class="calContainer" id="timeslots" data-status="hide">
      <div class="calHead" id="timeslotsHead">
        <div id="timeslotsDate">
          <div id="timeslotsMonth">mmm</div>
          <div id="timeslotsDay">dd</div>
          <div id="timeslotsYear">yyy</div>
        </div>
        <h3 class="calTitle" id="timeslotsTitle">Available Timeslots</h3>
        <button type="button" id="closeTimeslotsBtn" class="closeCalContainerBtn"><i
            class="fa-solid fa-xmark"></i></button>
      </div>
      <div class="calMsgContainer">
        <div class="calMsg" id="timeslotsMsg">Click on the time to select.</div>
      </div>
      <div class="calListClip">
        <div id="timeslotsList">
          <form id="selectTimeList">
            <div v-for="(time, index) in times" :key="index" class="selectTimeItem">
              <input type="checkbox" :id="'selectTime-time'+index" :value="time">
              <label for="selectTime-time1">
                {{ time }}
              </label>
              <span class="selectTimeItemCheck"><i class="fa-solid fa-check"></i></span>
            </div>
          </form>
        </div>
      </div>
      <div class="calFoot">
        <button type="submit" id="continueBookingBtn" class="calBtn">Continue Booking</button>
      </div>
    </div>
</template>

<script setup>
const route = useRoute();
const facilityStore = useFacilityStore();

const times = useTimeSelection(facilityStore.facility.available_hrs);
</script>
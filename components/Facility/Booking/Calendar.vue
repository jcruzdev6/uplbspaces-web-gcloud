<template>
  <div class="calContainer" id="calendar">
    <div class="calHead" id="calendarHead">
      <span class="calendarPrevNext" id="prevMonth"><i class="arrow left"></i></span>
      <h3 class="calTitle" id="calendarTitle"></h3>
      <span class="calendarPrevNext" id="nextMonth"><i class="arrow right"></i></span>
    </div>
    <div class="calMsgContainer">
      <div class="calMsg">Click on the date you want to book.</div>
    </div>
    <div class="calGrid" id="calendarWeeks"></div>
    <div class="calGrid" id="calendarDays"></div>
    <div class="calFoot">
      <!-- <div class="legendTitle">LEGEND:</div> -->
      <div id="legend">
        <div><i class="fa-regular fa-square"></i> Vacant</div>
        <div><i class="fa-solid fa-square partial"></i> Partially Booked</div>
        <div><i class="fa-solid fa-square full"></i> Fully Booked</div>
      </div>
    </div>
  </div>
</template>
<script setup>
useCalendar();
</script>

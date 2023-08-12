<template>
  <div class="calContainer" id="bookings2">
      <div class="calHead" id="bookingsHead">
        <h3 class="calTitle" id="bookingsTitle">Bookings</h3>
      </div>
      <div class="calMsgContainer">
        <div class="calMsg">You selected <span class="calBadge">4</span> dates.</div>
      </div>
      <div class="calListClip">
        <div id="bookingsList">
          <div>
            <div class="bookingsGrid">
              <div class="bookingsLabel">Place: </div>
              <div class="bookingsPlace">NCAS Auditorium</div>
              <div class="bookingsLabel">Date: </div>
              <div class="bookingsDate">Aug-7-2023 </div>
              <div class="bookingsLabel">Time: </div>
              <div class="bookingsTime">7:00AM - 12:00PM</div>
            </div>
            <div class="bookingsEditDel">
              <button type="button" class="bookingsEditDelBtn bookingsEditBtn"><i
                  class="fa-solid fa-pen-to-square"></i><span class="tooltip" id="editBookingTooltip">Edit</span></button>
              <button type="button" class="bookingsEditDelBtn bookingsDelBtn"><i
                  class="fa-solid fa-rectangle-xmark"></i><span class="tooltip"
                  id="delBookingTooltip">Delete</span></button>
            </div>
          </div>
          <div>
            <div class="bookingsGrid">
              <div class="bookingsLabel">Place: </div>
              <div class="bookingsPlace">NCAS Auditorium</div>
              <div class="bookingsLabel">Date: </div>
              <div class="bookingsDate">Aug-8-2023 </div>
              <div class="bookingsLabel">Time: </div>
              <div class="bookingsTime">7:00AM - 12:00PM</div>
            </div>
            <div class="bookingsEditDel">
              <button type="button" class="bookingsEditDelBtn bookingsEditBtn"><i
                  class="fa-solid fa-pen-to-square"></i><span class="tooltip" id="editBookingTooltip">Edit</span></button>
              <button type="button" class="bookingsEditDelBtn bookingsDelBtn"><i
                  class="fa-solid fa-rectangle-xmark"></i><span class="tooltip"
                  id="delBookingTooltip">Delete</span></button>
            </div>
          </div>
          <div>
            <div class="bookingsGrid">
              <div class="bookingsLabel">Place: </div>
              <div class="bookingsPlace">NCAS Auditorium</div>
              <div class="bookingsLabel">Date: </div>
              <div class="bookingsDate">Aug-9-2023 </div>
              <div class="bookingsLabel">Time: </div>
              <div class="bookingsTime">7:00AM - 12:00PM</div>
            </div>
            <div class="bookingsEditDel">
              <button type="button" class="bookingsEditDelBtn bookingsEditBtn"><i
                  class="fa-solid fa-pen-to-square"></i><span class="tooltip" id="editBookingTooltip">Edit</span></button>
              <button type="button" class="bookingsEditDelBtn bookingsDelBtn"><i
                  class="fa-solid fa-rectangle-xmark"></i><span class="tooltip"
                  id="delBookingTooltip">Delete</span></button>
            </div>
          </div>
          <div>
            <div class="bookingsGrid">
              <div class="bookingsLabel">Place: </div>
            <div class="bookingsPlace">NCAS Auditorium</div>
            <div class="bookingsLabel">Date: </div>
            <div class="bookingsDate">Aug-10-2023 </div>
            <div class="bookingsLabel">Time: </div>
            <div class="bookingsTime">7:00AM - 12:00PM</div>
          </div>
          <div class="bookingsEditDel">
            <button type="button" class="bookingsEditDelBtn bookingsEditBtn"><i
                class="fa-solid fa-pen-to-square"></i><span class="tooltip" id="editBookingTooltip">Edit</span></button>
            <button type="button" class="bookingsEditDelBtn bookingsDelBtn"><i
                class="fa-solid fa-rectangle-xmark"></i><span class="tooltip"
                id="delBookingTooltip">Delete</span></button>
          </div>
        </div>
      </div>
    </div>
    <div class="calFoot">
      <button type="submit" id="finishBookingBtn" class="calBtn">Finish Booking</button>
    </div>
  </div>
</template>
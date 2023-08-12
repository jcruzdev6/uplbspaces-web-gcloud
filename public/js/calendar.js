let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

const closeTimeslotsBtn = document.querySelector("#closeTimeslotsBtn");
const closeBookingsBtn = document.querySelector("#closeBookingsBtn");
const continueBookingBtn = document.querySelector("#continueBookingBtn");
const finishBookingBtn = document.querySelector("#finishBookingBtn");
const finishBookingBtn2 = document.querySelector("#finishBookingBtn2");
const addDateBtn = document.querySelector("#addDateBtn");

const timeslotsCont = document.querySelector("#timeslots");
const bookingsCont = document.querySelector("#bookings");
const bookings2Cont = document.querySelector("#bookings2");

const day = document.querySelector("#calendarDays");
const week = document.querySelector("#calendarWeeks");
const currentMonthYear = document.querySelector("#calendarTitle");
const prevNextIcons = document.querySelectorAll("#calendarHead span.calendarPrevNext");
const dayIds = new Array(); // stores active dates; clickable dates
const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
const partialDates = [
  "Aug-4-2023",
  "Aug-7-2023",
  "Aug-21-2023",
  "Aug-28-2023",
  "Aug-31-2023"
];
const fullDates = [
  "Aug-11-2023",
  "Aug-17-2023",
  "Aug-10-2023",
  "Aug-14-2023",
  "Aug-24-2023",
  "Aug-25-2023",
];

const makeCalendar = () => {
  dayIds.length = 0; // reset array
  let dayOne = new Date(year, month, 1).getDay();// Get the first day of the month
	let lastDate = new Date(year, month + 1, 0).getDate();// Get the last date of the month
	let lastDay = new Date(year, month, lastDate).getDay();// Get the day of the last date of the month
	// let lastDateLastMonth = new Date(year, month, 0).getDate();// Get the last date of the previous month
  let daysDiv = "";	// Variable to store the generated calendar HTML
  let weekDiv = "";
  // Loop to add the last dates of the previous month
	for (let i = dayOne; i > 0; i--) {
    daysDiv +=	`<div></div>`;//  removed ibecause i don't need to show it
	}
	// Loop to add the dates of the current month
  // mark dates if status is vacant, full, partial or closed
	for (let i = 1; i <= lastDate; i++) {
		// Check if the current date is today
		let isToday = i === date.getDate() && month === new Date().getMonth() && year === new Date().getFullYear() ? " active" : "";
    let dayOfWeek = new Date(year, month, i).getDay();
    let shortMonth = months[month].substring(0,3);
    let dayId = `${shortMonth}-${i}-${year}`;
    // let isOpen = "open";
    let status = "vacant";
    // add their ids to an array
    dayIds.push(`#${dayId}`);
    // check if sunday or saturday, set status, remove from daysId array
    if(daysOfWeek[dayOfWeek] == "Sunday"||daysOfWeek[dayOfWeek] == "Saturday") {
      status = "closed";
      // remove from dayIds array if weekend
      let index = dayIds.indexOf(`#${dayId}`)
      if(index > -1){
        dayIds.splice(index,1)
      }
    }
    //check if full, set status, remove from daysId array
    for (let i = 0; i< fullDates.length; i++) {
      if(fullDates[i]==dayId) {
        status= "full";
        // remove from dayIds array if weekend
        let index = dayIds.indexOf(`#${dayId}`)
        if(index > -1){
          dayIds.splice(index,1)
        }
        break;
      }
    }
    //check if partial, set status and break
    for (let i = 0; i< partialDates.length; i++) {
      if(partialDates[i]==dayId) {
        status="partial"
        break;
      }
    }
    // add classes an values to div
    daysDiv += `<div class="${status}${isToday}" id="${dayId}">${i}</div>`;
  }
	// Loop to add the first dates of the next month; removed i because i don't need it
	for (let i = lastDay; i < 6; i++) {
    daysDiv += `<div></div>`
	}

  daysOfWeek.forEach(dayOfWeek => {
    weekDiv += `<div>${dayOfWeek.substring(0,3)}</div>`;
  })

  currentMonthYear.innerText = `${months[month]} ${year}`;	// Update the text of the current date element with the formatted current month and year

  week.innerHTML = weekDiv;
  day.innerHTML = daysDiv;// update the HTML of the dates element with the generated calendar

}


const addClickEventToDayId = () =>{
  dayIds.forEach(id => 
    document.querySelector(id).addEventListener("click", function() {
      // adds container
      let tsCont = document.querySelector("#timeslots");
      // let dayPos = document.querySelector(id).getBoundingClientRect();
      // tsCont.style.transformOrigin = `${dayPos.x}px ${dayPos.y}px`;
      tsCont.dataset.status="show";

      // adds the title
      let tsMonth = document.querySelector("#timeslotsMonth");
      let tsDay = document.querySelector("#timeslotsDay");
      let tsYear = document.querySelector("#timeslotsYear");
      let arr = id.split('-');
      tsMonth.innerText=arr[0].replace("#","");
      tsDay.innerText=arr[1];
      tsYear.innerText=arr[2];
    })
  )
}




makeCalendar();
addClickEventToDayId();

// Attach a click event listener to each icon
prevNextIcons.forEach(icon => {
  icon.addEventListener("click", () => {// When an icon is clicked
    month = icon.id === "prevMonth" ? month - 1 : month + 1;//Check if the icon is "prevMonth" or "nextMonth"
    if (month < 0 || month > 11) { // iff out of range
      date = new Date(year, month, new Date().getDate());//Set the date to the first day of the month with the new year
      year = date.getFullYear();// Set the year to the new year
      month = date.getMonth();// Set the month to the new month
    }
    else {
      date = new Date();// Set the date to the current date
    }
    makeCalendar();
    addClickEventToDayId();
  });
});



closeTimeslotsBtn.addEventListener("click", () => {
  timeslotsCont.dataset.status="hide";
})
closeBookingsBtn.addEventListener("click", () => {
  bookingsCont.dataset.status="hide";
})
continueBookingBtn.addEventListener("click", () => {
  timeslotsCont.dataset.status="hide";
  //bookingsCont.dataset.status="show";
  bookings2Cont.style.display="block";
})
finishBookingBtn.addEventListener("click", () => {
  alert("confirmation");
  bookingsCont.dataset.status="hide";
})
finishBookingBtn2.addEventListener("click", () => {
  bookingsCont.dataset.status="hide";
  alert("confirmation");
})
addDateBtn.addEventListener("click", () => {
  bookingsCont.dataset.status="hide";
  bookings2Cont.style.display="block";
})

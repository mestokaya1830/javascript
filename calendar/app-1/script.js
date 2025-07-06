let nav = 0;

const calendar = document.getElementById("calendar");
let fullName = document.getElementById("full-name");
let eventModel = document.getElementById("event-model");
let bookingHour = document.getElementById("booking-hour");
let events = localStorage.getItem("events") ? JSON.parse(localStorage.getItem("events")) : [];

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const load = () => {
  const dt = new Date();
  if (nav !== 0) {
    dt.setMonth(new Date().getMonth() + nav); //get months like 1.month 2.month 3.month
  }

  const day = dt.getDate();
  const month = dt.getMonth();
  const year = dt.getFullYear();

  const firstDayOfMonth = new Date(year, month, 1); //get first day of month
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  document.getElementById("month-display").innerText = `${dt.toLocaleDateString(
    "en-EN",
    { month: "long" }
  )} ${year}`;

  const dateString = firstDayOfMonth.toLocaleDateString("en-EN", {
    //date format of first day
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  const paddingDays = weekdays.indexOf(dateString.split(", ")[0]);
  calendar.innerHTML = "";

  for (let i = 1; i <= paddingDays + daysInMonth; i++) {
    //create days of month
    const daySquare = document.createElement("div");
    daySquare.classList.add("day");
   

    if (i > paddingDays) {
      daySquare.innerText = i - paddingDays;
      const dayString = `${month + 1}/${i - paddingDays}/${year}`;
      const addEventDay = events.find((item) => item.date === dayString);
      if (i - paddingDays === day && nav === 0) {
        daySquare.id = "current-day";
      }

      if (addEventDay) {
        let count = 0
        events.forEach((item) => {
          
          if (item.date == addEventDay.date) {
            // const eventDiv = document.createElement("div");
            // const eventHour = document.createElement("span");
            // const eventCount = document.createElement("span");
            // eventHour.innerText = item.bookingHour;
            // eventDiv.classList.add("event");
            // eventHour.classList.add("hour");
            // eventDiv.innerText = item.bookingname;
            // eventDiv.innerText = count = count + 1
            // eventDiv.name = item.bookingname;
            // eventDiv.appendChild(eventHour);
            // daySquare.appendChild(eventDiv);
            // daySquare.appendChild(eventCount);
            
          }
        });
      }
      daySquare.addEventListener("click", (e) => {
        openModel(dayString)
        
      });

      //filter weekend
      const wd = new Date(dayString);
      if (wd.getDay() == 0 || wd.getDay() == 6) {
        
        daySquare.classList.add("weekend");
        daySquare.addEventListener("click", () => {
          document.getElementById("event-model").style.display = "none";
        });
        if (document.getElementById("current-day")) {
          document.getElementById("current-day").style.backgroundColor =
            "green";
        }
      }
      if(wd.getDay() > 0 && wd.getDay() < 6){
        //day state overlay
        const dayState = document.createElement("div");
        dayState.classList.add("day-state");
        daySquare.appendChild(dayState)
      }
    } else {
      daySquare.classList.add("padding");
    }

    calendar.appendChild(daySquare);
  }
 
};

const openModel = (date) => {
  const el = document.createElement("div");
  el.classList.add("eventDay");
  const hours = [
    "8:00",
    "8:30",
    "9:00",
    "9:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
  ];
  hours.forEach((item) => {
    const hoursTable = document.createElement("div");
    hoursTable.innerText = item;
    hoursTable.classList.add("hoursTable");
    el.appendChild(hoursTable);

  });
  calendar.appendChild(el);

  //close model after hour selected
  document.querySelectorAll('.hoursTable').forEach(item => {
    item.addEventListener('click', () => {
      events.push({
        date: date,
        bookingname: 'Mesto',
        bookingHour: item.innerText
      });
      localStorage.setItem("events", JSON.stringify(events));
      document.querySelectorAll('.day-state')[5].style.height +=  events.length * 10 + '%'
    alert('')
      // load();
    })
  })
};

// const deleteEvent = () => {
//   events = events.filter((item) => item.date !== clicked);
//   localStorage.setItem("events", JSON.stringify(events));
//   clicked = null;
//   document.getElementById("delete-model").style.display = "none";
//   load();
//   eventModel.style.display = "none";
// };

const initButtons = () => {
  document.getElementById("back").addEventListener("click", (e) => {
    nav--;
    load();
  });
  document.getElementById("next").addEventListener("click", (e) => {
    nav++;
    load();
  });
};

load();
initButtons();

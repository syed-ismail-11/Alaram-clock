const selectMenu = document.querySelectorAll("select"),
  setAlarmBtn = document.querySelector("button"),
  content = document.querySelector(".content"),
  myOption = document.querySelectorAll("option"),
  myPic = document.querySelector("img");

let alarmRinging,
  isAlarmSet = false;
ringtone = new Audio("./files/alarmSound.mp3.mp3");
// files\alarmSound.mp3.mp3
for (let i = 12; i > 0; i--) {
  i = i < 10 ? "0" + i : i;
  let option = `<option value="${i}">${i}</option>`;
  selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 59; i >= 0; i--) {
  i = i < 10 ? "0" + i : i;
  let option = `<option value="${i}">${i}</option>`;
  selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 2; i > 0; i--) {
  let amPm = i == 1 ? "AM" : "PM";
  let option = `<option value="${amPm}">${amPm}</option>`;
  selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const monthNames = [
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
  "December",
];

let today = new Date();

let weekday = weekdays[today.getDay()];
day.innerHTML = weekday;

let dd = String(today.getDate()).padStart(2, "0");
// var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let mm2 = monthNames[today.getMonth()];
let yyyy = today.getFullYear();
today = dd + " /" + mm2 + " /" + yyyy;
date.innerHTML = today;

setInterval(() => {
  let H = new Date().getHours();
  let M = new Date().getMinutes();
  let S = new Date().getSeconds();
  let Day = new Date().getDay();
  let ampm = "AM";
  today.innerHTML = Day;

  if (H >= 12) {
    H = H - 12;
    ampm = "PM";
  }
  H = H == 0 ? 12 : H;

  H = H < 10 ? "0" + H : H;
  M = M < 10 ? "0" + M : M;
  S = S < 10 ? "0" + S : S;
  time.innerHTML = `${H}:${M}:${S} ${ampm}`;

  if (alarmRinging == `${H}:${M} ${ampm}`) {
    ringtone.play();
    ringtone.loop = true;
    ani();
  }
}, 1000);

function ani() {
  document.getElementById("img").className = "classname";
}
function stopAnimation() {
  document.getElementById("img").className = "";
}

function setAlarm() {
  let time = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`;
  if (isAlarmSet) {
    alarmRinging = "";
    ringtone.pause();
    content.classList.remove("diabled");
    setAlarmBtn.innerText = "Set Alarm";
    time = `${(selectMenu[0].value =
      myOption[0].value)}:${(selectMenu[1].value =
      myOption[1].value)} ${(selectMenu[2].value = myOption[2].value)}`;
    myPic.innerHTML = ``;
    stopAnimation();

    return (isAlarmSet = false);
  }

  if (
    time.includes("Hour") ||
    time.includes("Minutes") ||
    time.includes("AM/PM")
  ) {
    return alert("Please, Select a time to Set Alarm ! ");
  }
  isAlarmSet = true;
  alarmRinging = time;
  content.classList.add("diabled");
  setAlarmBtn.innerText = "Clear Alarm";
  // console.log(time)
}

setAlarmBtn.addEventListener("click", setAlarm);

document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

// Disable only Inspect Shortcuts (Not Button Keys)
document.addEventListener("keydown", (e) => {
  // Block F12, Ctrl+Shift+I, Ctrl+U
  if (
    e.key === "F12" ||
    (e.ctrlKey && e.shiftKey && e.key === "I") ||
    (e.ctrlKey && e.key === "u")
  ) {
    e.preventDefault();
  }
});

// Scrolllock end
document.querySelector(".btn").addEventListener("click", () => {
  const audio = new Audio("audio/test.mp3");
  audio.volume = 1; // from 0 to 1
  audio.loop = true;
  audio.play();
});

let no = document.querySelector(".nobtn");
no.addEventListener("mouseover", () => {
  let top = Math.floor(Math.random() * (window.innerHeight - no.offsetHeight));
  let left = Math.floor(Math.random() * (window.innerWidth - no.offsetWidth));
  no.style.position = "absolute";
  no.style.top = `${top}px`;
  no.style.left = `${left}px`;
});

no.addEventListener("click", () => {
  let top = Math.floor(Math.random() * (window.innerHeight - no.offsetHeight));
  let left = Math.floor(Math.random() * (window.innerWidth - no.offsetWidth));
  no.style.position = "absolute";
  no.style.top = `${top}px`;
  no.style.left = `${left}px`;
});

let yes = document.querySelector(".bn");
yes.addEventListener("click", () => {
  let moment = document.querySelector(".moment");
  moment.style.display = "block";
});
let secno = document.querySelector(".nobtn1");
secno.addEventListener("click", () => {
  secno.style.display = "none";
});

let love = document.getElementById("love");
love.addEventListener("click", () => {
  love.style.display = "none";
});

let love2 = document.getElementById("love2");
love2.addEventListener("click", () => {
  love2.style.display = "none";
});
//
setInterval(() => {
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();
  let hour = today.getHours();
  let minute = today.getMinutes();

  let ampm = hour >= 12 ? "PM" : "AM";
  hour = hour % 12;
  hour = hour ? hour : 12;

  month = month < 10 ? "0" + month : month;
  day = day < 10 ? "0" + day : day;
  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;

  document.querySelector(".year").innerHTML = year;
  document.querySelector(".month").innerHTML = month;
  document.querySelector(".day").innerHTML = day;
  document.querySelector(".hours").innerHTML = hour;
  document.querySelector(".minutes").innerHTML = minute;
  document.querySelector(".am").innerHTML = ampm;
}, 1000);
//

// let note=document.querySelector(".bn1");

// note.addEventListener("click",()=>{
//   document.querySelector(".note").style.opacity="1";
//   document.querySelector(".note").style.transition="2s ease-in-out"
//   document.querySelector(".date").style.opacity="1";
//   document.querySelector(".date").style.transition="2s ease-in-out"
// })

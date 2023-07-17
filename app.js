// get element by id

const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

// function for clock

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }
// The following code is used to format the time values h, m, and s by adding a leading zero if they are less than 10.
// This code ensures that the time values are always displayed with two digits, which is a common format for time representation.

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  

  hourEl.innerText = h;
  minuteEl.innerHTML = m;
  secondEl.innerText = s;
  ampmEl,(innerText = ampm);
  setTimeout(() => {
    updateClock()
  },1000)
}

// call function 
updateClock()
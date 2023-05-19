// reference elements
const displayTimeElement = document.querySelector("#displayTime");
const pauseBtnElement = document.querySelector("#pause");
const startBtnElement = document.querySelector("#start");
const resetBtnElement = document.querySelector("#reset");

// declaring variables
let timer;
let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];

// functionality for display time
const displayTime = () => {
  milliseconds += 10;
  if (milliseconds === 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
    }
  }

  // ternary operator to show case how hours, minutes, seconds looks like if less than 10
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms =
    milliseconds < 10
      ? "00" + milliseconds
      : milliseconds < 100 && milliseconds >= 10
      ? "0" + milliseconds
      : milliseconds;

  displayTimeElement.textContent =
    h + "h : " + m + "m : " + s + "s : " + ms + "ms";
};

// functionality to start timer
const startTimer = () => {
  if (timer != null) {
    clearInterval(timer);
  } else {
    timer = setInterval(displayTime, 10);
  }
};

// functionality to pause timer
const pauseTimer = () => {
  clearInterval(timer);
};

// functionality to reset timer
const resetTimer = () => {
  clearInterval(timer);
  [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];

  displayTimeElement.textContent = "00h : 00m : 00s : 000ms";
};

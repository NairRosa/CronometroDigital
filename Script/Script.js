const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");
const milliSecondsEl = document.querySelector("#milliSeconds");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resumeBtn = document.querySelector("#resumeBtn");
const resetBtn = document.querySelector("#resetBtn");

let interval;
let minutes = 0;
let seconds = 0;
let milliSeconds = 0;
let isPaused = false;

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resumeBtn.addEventListener("click", resumeTimer);
resetBtn.addEventListener("click", resetarTimer);

function startTimer (){
    interval = setInterval (() => {
        if (!isPaused) {
            milliSeconds += 10

            if (milliSeconds === 1000) {
                seconds++;
                milliSeconds = 0;
            }
            if (seconds === 60) {
                minutes++;
                seconds = 0;
            }

            minutesEl.textContent = formatTime(minutes);
            secondsEl.textContent = formatTime(seconds);
            milliSecondsEl.textContent = formatMilliSeconds(milliSeconds);
        }
    }, 10)

    startBtn.style.display = "none";
    pauseBtn.style.display = "block";
}

function pauseTimer() {
    isPaused = true;
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "block";
}

function resumeTimer() {
    isPaused = false;
    pauseBtn.style.display = "block";
    resumeBtn.style.display = "none";
}

function resetarTimer() {
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    milliSeconds = 0;

    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    milliSecondsEl.textContent = "000";

    startBtn.style.display = "block";
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "none";
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function formatMilliSeconds(time) {
    return time < 100 ? `${time}`.padStart(3, "0") : time;
}
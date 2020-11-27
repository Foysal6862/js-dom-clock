const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const progress = document.getElementById('progress');

function showCurrentTime(){

    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hour.textContent = hours;
    minute.textContent = minutes;
    second.textContent = seconds;

    progress.style.width = (seconds/60) * 100 + '%';
}
setInterval(showCurrentTime, 1000);
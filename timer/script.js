const christmas = '25 Dec 2022'

const dateCounter = document.getElementById('days-c');
const hoursCounter = document.getElementById('hours-c');
const minutesCounter = document.getElementById('minutes-c');
const secondsCounter = document.getElementById('seconds-c');


function countDown(){
    const currentDate = new Date();
    const christmasDate = new Date(christmas);
    const utfSeconds = (christmasDate - currentDate) / 1000;
    const days = Math.floor((utfSeconds / 3600 / 24));
    const hours = Math.floor((utfSeconds / 3600) % 24);
    const minutes = Math.floor((utfSeconds / 3600) % 60);
    const seconds = Math.floor(utfSeconds % 60);

    dateCounter.innerHTML = days;
    hoursCounter.innerHTML = formatTime(hours);
    minutesCounter.innerHTML = formatTime(minutes);
    secondsCounter.innerHTML = formatTime(seconds);
}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}
setInterval(countDown, 1000);

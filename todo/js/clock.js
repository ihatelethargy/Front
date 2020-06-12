const clockBox = document.querySelector(".js-time__clock"),
      clock = clockBox.querySelector("h1");

const calendarBox = document.querySelector(".js-time__date"),
      calendar = calendarBox.querySelector("h1");

function getTime(){
    const time = new Date();
    const hour = time.getHours();
    const min = time.getMinutes();
    const sec = time.getSeconds();
    const year = time.getFullYear();
    const month = time.getMonth();
    const date = time.getDate();
    
    clock.innerText = `${hour < 10 ? `0${hour}` : hour}:${min < 10 ? `0${min}`: min}:${sec < 10 ? `0${sec}`: sec}`;
    calendar.innerText = `${year}-${month}-${date}`;
}


function init(){
    getTime();
    setInterval(getTime,1000);
}

init();
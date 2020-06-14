const timeBox = document.querySelector(".js-calendar__time"),
      time = timeBox.querySelector("span");

const calendarBox = document.querySelector(".js-calendar__date"),
      calendar = calendarBox.querySelector("span");

function getTime(){
    const now = new Date();
    const hour = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds()
    const year = now.getFullYear();
    const month = now.getMonth();
    const date = now.getDate();
    
    time.innerText = `${hour < 10 ? `0${hour}` : `${hour}`}:${min < 10 ? `0${min}` : `${min}`}:${sec < 10 ? `0${sec}` : `${sec}`}`;
    calendar.innerText = `${year}-${month}-${date}`;
}

function init(){
    getTime();
    setInterval(getTime,1000);
}

init();
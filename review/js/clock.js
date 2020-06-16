const time__box = document.querySelector(".js-calendar__time"),
      time = time__box.querySelector("span"),
      calendar__box = document.querySelector(".js-calendar__date"),
      calendar = calendar__box.querySelector("span");

function loadTime(){
    const NOW = new Date();
    const hour = NOW.getHours();
    const min = NOW.getMinutes();
    const sec = NOW.getSeconds();
    const year = NOW.getFullYear();
    const month = NOW.getMonth();
    const day = NOW.getDate();
    
    time.innerText = `${hour < 10 ? `0${hour}` : `${hour}`}:${min < 10 ? `0${min}` : `${min}`}:${sec < 10 ? `0${sec}` : `${sec}`}`;
    calendar.innerText = `${year} - ${month} - ${day}`;
}

function init(){
    loadTime();
    setInterval(loadTime,1000);
}

init();
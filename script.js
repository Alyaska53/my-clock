const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const digitalClock = document.getElementById('digital-clock');
const fullTime = document.getElementById('full-date');
const dayOfWeek = document.getElementById('day-of-week');

const toggle = document.querySelector('.toggle');
const html = document.querySelector('html');
const DARK_CLASS_NAME = 'dark';
const DARK_MODE_TITLE = 'Dark mode';
const LIGHT_MODE_TITLE = 'Light mode';

const MONTHS = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
const DAYS = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

toggle.addEventListener('click', function(e) {
    const isPreviousModeDark = html.classList.contains(DARK_CLASS_NAME); 
    
    e.target.innerHTML = isPreviousModeDark ? DARK_MODE_TITLE : LIGHT_MODE_TITLE;

    html.classList.toggle(DARK_CLASS_NAME);
});

function updateTime(time) {
    return (time < 10) ? '0' + time : time;
}

function setClockDegrees(ms, mins, hours) {
    const secondsDegrees = ((ms / 60) * 360) + 90;
    const minsDegrees = ((mins / 60) * 360) + ((ms / 60) * 6) + 90;
    const hoursDegrees = ((hours / 12) * 360) + ((mins / 60) * 30) + 90;

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

function setClockTime(presentTime, seconds, mins, hours) {
    const digitalSeconds = updateTime(seconds);
    const digitalMins = updateTime(mins);
    const digitalHours = updateTime(hours);

    const dayOfMonth = presentTime.getDate();
    const month = presentTime.getMonth();
    const year = presentTime.getFullYear();
    const day = presentTime.getDay();
    
    digitalClock.innerText = digitalHours + ' : ' + digitalMins + ' : ' + digitalSeconds;
    fullTime.innerText = dayOfMonth + ' ' + MONTHS[month] + ' ' + year;
    dayOfWeek.innerText = DAYS[day];
}

function setDate() {
    const presentTime = new Date();
                
    const seconds = presentTime.getSeconds();
    const ms = seconds + presentTime.getMilliseconds() / 1000;
    const mins = presentTime.getMinutes();
    const hours = presentTime.getHours();
    
    setClockDegrees(ms, mins, hours);
    setClockTime(presentTime, seconds, mins, hours);
}

setInterval(setDate, 25);
setDate();

const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const toggle = document.querySelector('.toggle');
const digitalClock = document.getElementById('digital-clock');
const fullTime = document.getElementById('full-date');
const dayOfWeek = document.getElementById('day-of-week');

toggle.addEventListener('click', function(e) {
    const html = document.querySelector('html')
    
    if ( html.classList.contains('dark') ) {
        html.classList.remove('dark');
        e.target.innerHTML = 'Dark mode';
    } else {
        html.classList.add('dark');
        e.target.innerHTML = 'Light mode';
    }
});

function updateTime(time) {
    return (time < 10) ? '0' + time : time;
}

function setDate() {
    const now = new Date();
                
    const seconds = now.getSeconds();
    const mins = now.getMinutes();
    const hours = now.getHours();

    const secondsDegrees = ((seconds / 60) * 360) + 90;
    const minsDegrees = ((mins / 60) * 360) + 90;
    const hoursDegrees = ((hours / 12) * 360) + ((mins / 60) * 30) + 90;

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

    const digitalSeconds = updateTime(seconds);
    const digitalMins = updateTime(mins);
    const digitalHours = updateTime(hours);

    const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const day = now.getDate();

    digitalClock.innerText = digitalHours + ' : ' + digitalMins + ' : ' + digitalSeconds;
    fullTime.innerText = day + ' ' + months[now.getMonth()] +' ' + now.getFullYear();
    dayOfWeek.innerText = days[now.getDay()];
}

setInterval(setDate, 1000);
setDate();

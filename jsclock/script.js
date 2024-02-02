const secondHand = document.querySelector(`.second-hand`);
const minuteHand = document.querySelector(`.minute-hand`);
const hourHand = document.querySelector(`.hour-hand`);

function setTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    secondHand.style.transform = `rotate(${90 + seconds*6}deg)`;
    minuteHand.style.transform = `rotate(${90 + (minutes * 6) + (seconds / 10)}deg)`;
    hourHand.style.transform = `rotate(${90 + (hours * 30) + (minutes / 2)}deg)`;
}

setInterval(setTime, 1000);
setTime();

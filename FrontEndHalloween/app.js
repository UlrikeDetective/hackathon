const countdownElement = document.getElementById('countdown');

function calculateTimeLeft() {
    const now = new Date();
    let year = now.getFullYear();
    let halloween = new Date(year, 9, 31); // Month is 0-indexed, so 9 is October

    if (now > halloween) {
        halloween.setFullYear(year + 1);
    }

    const difference = halloween - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return {
        days,
        hours,
        minutes,
        seconds
    };
}

function updateCountdown() {
    const timeLeft = calculateTimeLeft();

    countdownElement.innerHTML = `
        <h2>Countdown to Halloween</h2>
        <span>${timeLeft.days} days </span>
        <span>${timeLeft.hours} hours </span>
        <span>${timeLeft.minutes} minutes </span>
        <span>${timeLeft.seconds} seconds </span>
    `;
}

setInterval(updateCountdown, 1000);
updateCountdown();

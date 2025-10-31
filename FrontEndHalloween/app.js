const countdownElement = document.getElementById('countdown');
const ghost = document.querySelector('.ghost');
const pumpkinEyes = document.querySelectorAll('.pumpkin-eye');
const ambientSound = document.getElementById('ambient-sound');
const soundToggleButton = document.getElementById('sound-toggle');
const easterEggElement = document.createElement('div');
easterEggElement.className = 'easter-egg';
easterEggElement.innerHTML = '<h1>BOO!</h1>';
document.body.appendChild(easterEggElement);

// Countdown
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
    const countdownText = `
        <span>${timeLeft.days} days </span>
        <span>${timeLeft.hours} hours </span>
        <span>${timeLeft.minutes} minutes </span>
        <span>${timeLeft.seconds} seconds </span>
    `;
    countdownElement.innerHTML = countdownText;
    countdownElement.setAttribute('data-text', countdownElement.innerText);
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Ghost interaction
ghost.addEventListener('click', () => {
    pumpkinEyes.forEach(eye => {
        eye.style.borderBottomColor = 'var(--accent-color)';
        setTimeout(() => {
            eye.style.borderBottomColor = '#000';
        }, 2000);
    });
});

// Sound
soundToggleButton.addEventListener('click', () => {
    if (ambientSound.paused) {
        ambientSound.play();
        soundToggleButton.textContent = 'Pause Sound';
    } else {
        ambientSound.pause();
        soundToggleButton.textContent = 'Play Sound';
    }
});

// Parallax
window.addEventListener('scroll', () => {
    const parallaxLayers = document.querySelectorAll('.parallax-layer');
    const top = window.pageYOffset;
    parallaxLayers.forEach(layer => {
        const speed = layer.getAttribute('data-speed');
        layer.style.transform = `translateY(${top * speed}px)`;
    });
});

// Easter Egg
const konamiCode = [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'b',
    'a',
];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            easterEggElement.style.display = 'block';
            setTimeout(() => {
                easterEggElement.style.display = 'none';
            }, 3000);
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

// Create parallax layers
const parallaxContainer = document.createElement('div');
parallaxContainer.className = 'parallax';
for (let i = 1; i <= 3; i++) {
    const layer = document.createElement('div');
    layer.className = 'parallax-layer';
    layer.style.backgroundImage = `url('public/images/parallax${i}.png')`;
    layer.setAttribute('data-speed', i * 0.1);
    parallaxContainer.appendChild(layer);
}
document.body.insertBefore(parallaxContainer, document.querySelector('.container'));
const flirtingLines = [
    "Are you a tulip? Because you brighten up even the cloudiest days. 🌷",
    "They say tulips symbolize perfect love, but they clearly haven't met you yet! ✨",
    "If looks could kill, you'd be a weapon of mass destruction. Good thing you're just cute! 🌷",
    "Even a garden full of the finest tulips couldn't outshine your smile. 😊",
    "Are you made of copper and tellurium? Because you're Cu-Te! 😉",
    "Just a daily reminder that you're an absolute catch. Don't let anyone tell you otherwise! 🌸"
];

const openMailBtn = document.getElementById('openMailBtn');
const questionModal = document.getElementById('questionModal');
const resultModal = document.getElementById('resultModal');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const closeBtn = document.getElementById('closeBtn');
const quoteText = document.getElementById('quoteText');
const anotherBtn = document.getElementById('anotherBtn');
const flowerShower = document.getElementById('flowerShower');
const kittens = document.querySelectorAll('.kitten');
const yayTitle = document.getElementById('yayTitle');

// Open initial mail prompt
openMailBtn.addEventListener('click', () => {
    questionModal.style.display = 'flex';
});

// Playful "No" button movement
noBtn.addEventListener('mouseover', moveNoButton);
noBtn.addEventListener('click', moveNoButton);

function moveNoButton() {
    const x = Math.random() * 140 - 70;
    const y = Math.random() * 60 - 30;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

// When clicking "Yes"
yesBtn.addEventListener('click', () => {
    questionModal.style.display = 'none';
    quoteText.textContent = getRandomLine();
    yayTitle.textContent = "Yayy! 🎉🐱";
    resultModal.style.display = 'flex';
    
    // Make corner kittens shout "Yayy!" by adding animation & changing to happy emojis
    kittens.forEach(kitten => {
        kitten.textContent = '😸';
        kitten.classList.add('yay');
    });

    startTulipShower();
});

// Another Line Button
anotherBtn.addEventListener('click', () => {
    quoteText.textContent = getRandomLine();
});

// Close modal
closeBtn.addEventListener('click', () => {
    resultModal.style.display = 'none';
});

function getRandomLine() {
    const randomIndex = Math.floor(Math.random() * flirtingLines.length);
    return flirtingLines[randomIndex];
}

// Tulip Flower Shower Effect
function startTulipShower() {
    flowerShower.innerHTML = ''; 
    for (let i = 0; i < 25; i++) {
        const tulip = document.createElement('div');
        tulip.classList.add('falling-tulip');
        tulip.textContent = '🌷';
        
        tulip.style.left = Math.random() * 100 + 'vw';
        tulip.style.fontSize = (Math.random() * 20 + 16) + 'px';
        tulip.style.animationDuration = (Math.random() * 2 + 2) + 's';
        tulip.style.animationDelay = Math.random() * 1.5 + 's';
        
        flowerShower.appendChild(tulip);
    }
}
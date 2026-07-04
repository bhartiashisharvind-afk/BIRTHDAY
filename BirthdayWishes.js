// Ask for the birthday person's name
let username = prompt("🎂 Enter the Birthday Person's Name:");

if (!username || username.trim() === "") {
    username = "Friend";
}

const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");

const question = document.getElementById("question");
const celebration = document.getElementById("celebration");
const nameText = document.getElementById("name");

// Move the "No" button
let moved = false;

function moveButton() {

    // First move: preserve current position
    if (!moved) {
        const rect = noBtn.getBoundingClientRect();

        noBtn.style.position = "fixed";
        noBtn.style.left = rect.left + "px";
        noBtn.style.top = rect.top + "px";
        noBtn.style.right = "auto";

        moved = true;
    }

    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.transition = "none"; // Instant move
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

// Desktop
noBtn.addEventListener("mouseenter", moveButton);

// Mobile
noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault();
    moveButton();
});

// If somehow clicked
noBtn.addEventListener("click", (e) => {
    e.preventDefault();
    moveButton();
});

// Yes button
yesBtn.addEventListener("click", () => {
const container = document.querySelector(".container");

yesBtn.addEventListener("click", () => {

    container.classList.add("expand");

    question.style.display = "none";
    celebration.style.display = "flex";

    nameText.innerHTML = `🎉 ${username} 🎉`;

    createHearts();
    createConfetti();
});

});

// Floating Hearts
function createHearts() {

    setInterval(() => {

        const heart = document.createElement("div");

        heart.className = "heart";
        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.animationDuration = (3 + Math.random() * 3) + "s";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 6000);

    }, 300);
}

// Falling Confetti
function createConfetti() {

    const colors = [
        "#ff4d4d",
        "#ffeb3b",
        "#4caf50",
        "#2196f3",
        "#ff9800",
        "#9c27b0",
        "#e91e63"
    ];

    setInterval(() => {

        const confetti = document.createElement("div");

        confetti.className = "confetti";

        confetti.style.left = Math.random() * window.innerWidth + "px";
        confetti.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        confetti.style.animationDuration =
            (2 + Math.random() * 2) + "s";

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 5000);

    }, 80);
}
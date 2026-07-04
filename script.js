const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const poemBox = document.getElementById("poem");

// NO button escape
function moveNo() {
    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 60);
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

noBtn.addEventListener("mouseover", moveNo);
noBtn.addEventListener("click", moveNo);

// poem
const poem = [
    "For you, Ifla 🌸",
    "I never planned to feel this way...",
    "But you became my favorite thought every day.",
    "Your smile feels like home to me.",
    "If love is real, then you are my destiny 💛"
];

function showPoem() {
    poemBox.style.opacity = "1";
    poemBox.innerHTML = "";

    let i = 0;

    function type() {
        if (i < poem.length) {
            poemBox.innerHTML += poem[i] + "<br>";
            i++;
            setTimeout(type, 900);
        }
    }

    type();
}

// YES click
yesBtn.onclick = () => {
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
    showPoem();
};

// flowers
function flowerRain() {
    const flower = document.createElement("div");
    flower.classList.add("flower");
    flower.innerHTML = "🌸";
    flower.style.left = Math.random() * window.innerWidth + "px";
    flower.style.animationDuration = (Math.random() * 3 + 2) + "s";
    document.body.appendChild(flower);

    setTimeout(() => flower.remove(), 5000);
}

setInterval(flowerRain, 250);

// music unlock (mobile fix)
document.body.addEventListener("click", () => {
    document.getElementById("music").play();
}, { once: true });

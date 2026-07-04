const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const poemBox = document.getElementById("poem");

let speed = 1;

// ❌ NO button escape (2x faster each time)
function runAway() {
    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 80);

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

    speed *= 1.2; // increases difficulty
    noBtn.style.transition = `0.1s`;
}

noBtn.addEventListener("mouseover", runAway);
noBtn.addEventListener("click", runAway);

// after few tries → disappear
setInterval(() => {
    if (speed > 4) {
        noBtn.style.display = "none";
    }
}, 2000);

// 💖 YES action
yesBtn.onclick = () => {
    poemBox.innerHTML = `
        <h3>For You Ifla 💖</h3>
        <p>
        You are my favorite thought,<br>
        my calm in every storm,<br><br>

        I don’t need perfection,<br>
        I just need you.<br><br>

        If love is real,<br>
        then it’s you for me 💍
        </p>
    `;

    yesBtn.style.display = "none";
    noBtn.style.display = "none";
};

// music unlock
document.body.addEventListener("click", () => {
    document.getElementById("music").play();
}, { once: true });

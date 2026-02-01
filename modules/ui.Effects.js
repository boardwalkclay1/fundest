const canvas = document.getElementById("money-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let bills = [];

for (let i = 0; i < 40; i++) {
  bills.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    speed: 1 + Math.random() * 2,
    size: 20 + Math.random() * 20
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  bills.forEach(b => {
    ctx.fillStyle = "rgba(0,150,0,0.4)";
    ctx.fillRect(b.x, b.y, b.size, b.size / 2);

    b.y += b.speed;
    if (b.y > canvas.height) b.y = -50;
  });

  requestAnimationFrame(draw);
}

draw();

export function moneySplash(x, y) {
  for (let i = 0; i < 12; i++) {
    const splash = document.createElement("div");
    splash.className = "money-splash";
    splash.style.left = x + "px";
    splash.style.top = y + "px";
    document.body.appendChild(splash);

    setTimeout(() => splash.remove(), 600);
  }
}

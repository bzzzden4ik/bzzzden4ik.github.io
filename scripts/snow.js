const canvas = document.querySelector('.welcome__snow');
const ctx = canvas.getContext('2d');
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

const flakes = Array.from({length: 100}, () => ({
  x: Math.random() * width,
  y: Math.random() * height,
  r: Math.random() * 3 + 1,
  d: Math.random() * 1
}));

function drawSnow() {
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
  ctx.beginPath();
  for (let f of flakes)
    ctx.moveTo(f.x, f.y),
    ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
  ctx.fill();
  moveSnow();
  requestAnimationFrame(drawSnow);
}

let angle = 0;
function moveSnow() {
  angle += 0.001;
  for (let f of flakes) {
    f.y += Math.cos(angle + f.d) + 1 + f.r / 2;
    f.x += Math.sin(angle) * 0.5;
    if (f.y > height) {
      f.y = -10;
      f.x = Math.random() * width;
    }
  }
}
drawSnow();
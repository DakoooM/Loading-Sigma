let coord = {x: 0 , y: 0};
let paint = false;

window.addEventListener('load', () => {
  resize(); // Resizes the canvas once the window loads
  document.addEventListener('mousedown', startPainting);
  document.addEventListener('mouseup', stopPainting);
  document.addEventListener('mousemove', sketch);
  window.addEventListener('resize', resize);
})

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function resize() {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}
    
function getPosition(event) {
  coord.x = event.clientX - canvas.offsetLeft;
  coord.y = event.clientY - canvas.offsetTop;
}
  
function startPainting(event) {
  paint = true;
  getPosition(event);
}

function stopPainting() {
  paint = false;
}
    
function sketch(event) {
  if (!paint) return;
  ctx.beginPath();
    
  ctx.lineWidth = 5;
  ctx.lineCap = "round";
  ctx.strokeStyle = "white";
      
  ctx.moveTo(coord.x, coord.y);
  getPosition(event);
  ctx.lineTo(coord.x , coord.y);
  ctx.stroke();
}

const restorePaint = document.getElementById("restorePaint");
restorePaint.addEventListener("click", (event) => {
  event.preventDefault();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
})
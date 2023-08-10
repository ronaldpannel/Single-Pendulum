/**@type{HTMLCanvasElement} */

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 600;

let origin = new Vector(300, 0);
let angle = Math.PI / 4;
let angleV = 0;
let angleA = 0.001;
let bob = new Vector(0, 0);
let len = 300;
let gravity = 1
let force 

function drawPendulum() {

  force = gravity * Math.sin(angle)
  angleA = (-1 * force) / len
  angleV += angleA;
  angle += angleV;

  angleV *= 0.99
  

  bob.x = len * Math.sin(angle) + origin.x;
  bob.y = len * Math.cos(angle) + origin.y;
  ctx.beginPath();
  ctx.lineWidth = 3;
  ctx.strokeStyle = "white";
  ctx.moveTo(origin.x, origin.y);
  ctx.lineTo(bob.x, bob.y);
  ctx.stroke();

  ctx.beginPath();
  ctx.fillStyle = "red";
  ctx.arc(bob.x, bob.y, 32, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawPendulum();

  requestAnimationFrame(animate);
}
animate();

window.addEventListener("resize", () => {
  canvas.width = canvas.width;
  canvas.height = canvas.height;
});

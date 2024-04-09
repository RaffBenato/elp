const btnStartEl = document.getElementById("btn-start");
const btnEnterBlockEl = document.getElementById("btn-enter-block");
const btnEnterPossessionEl = document.getElementById("btn-enter-possession");

const trainEl = document.getElementById("train");
const lampEl = document.getElementById("lamp");
const detsEl = document.getElementById("dets");
const markerPossessionEl = document.getElementById("marker-possession");

btnStartEl.addEventListener("click", (e) => {
  e.preventDefault();

  trainEl.style.left = "30px";

  btnStartEl.classList.add("hidden");
  btnEnterBlockEl.classList.remove("hidden");
});

btnEnterBlockEl.addEventListener("click", (e) => {
  e.preventDefault();

  lampEl.classList.add("hidden");
  detsEl.classList.add("hidden");
  trainEl.style.left = "230px";

  btnEnterBlockEl.classList.add("hidden");
  btnEnterPossessionEl.classList.remove("hidden");
});

btnEnterPossessionEl.addEventListener("click", (e) => {
  e.preventDefault();

  markerPossessionEl.classList.add("hidden");
  trainEl.style.left = "330px";

  btnEnterPossessionEl.classList.add("hidden");
});

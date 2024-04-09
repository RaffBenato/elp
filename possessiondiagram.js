const btnStartEl = document.getElementById("btn-start");
const trainEl = document.getElementById("train");

btnStartEl.addEventListener("click", (e) => {
  e.preventDefault();
  trainEl.style.left = "30px";
  btnStartEl.classList.add("hidden");
});

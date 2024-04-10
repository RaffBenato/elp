const btnStartEl = document.getElementById("btn-start");
const btnEnterBlockEl = document.getElementById("btn-enter-block");
const btnEnterPossessionEl = document.getElementById("btn-enter-possession");
const btnCloseClickedSignalEl = document.getElementById(
  "btn-close-clicked-signal"
);
const btnCloseClickedPossessionMarkerEl = document.getElementById(
  "btn-close-clicked-possession-marker"
);

const panelStartEl = document.getElementById("panel-start");
const panelProtectionBlockEl = document.getElementById(
  "panel-protection-block"
);
const panelPossessionMarkerEl = document.getElementById(
  "panel-possession-marker"
);
const panelClickedSignalEl = document.getElementById("panel-clicked-signal");
const panelClickedPossessionMarkerEl = document.getElementById(
  "panel-clicked-possession-marker"
);

const trainEl = document.getElementById("train");
const lampEl = document.getElementById("lamp");
const signalEl = document.getElementById("signal");
const detsEl = document.getElementById("dets");
const markerPossessionEl = document.getElementById("marker-possession");

let currentPanel = panelStartEl;

btnStartEl.addEventListener("click", (e) => {
  e.preventDefault();

  trainEl.style.left = "30px";

  btnStartEl.classList.add("hidden");
  btnEnterBlockEl.classList.remove("hidden");

  panelStartEl.classList.add("hidden");
  panelProtectionBlockEl.classList.remove("hidden");
  currentPanel = panelProtectionBlockEl;
});

btnEnterBlockEl.addEventListener("click", (e) => {
  e.preventDefault();

  lampEl.classList.add("hidden");
  detsEl.classList.add("hidden");
  trainEl.style.left = "230px";

  btnEnterBlockEl.classList.add("hidden");
  btnEnterPossessionEl.classList.remove("hidden");

  panelProtectionBlockEl.classList.add("hidden");
  panelPossessionMarkerEl.classList.remove("hidden");

  currentPanel = panelPossessionMarkerEl;
});

btnEnterPossessionEl.addEventListener("click", (e) => {
  e.preventDefault();

  markerPossessionEl.classList.add("hidden");
  trainEl.style.left = "330px";

  btnEnterPossessionEl.classList.add("hidden");

  panelPossessionMarkerEl.classList.add("hidden");
});

signalEl.addEventListener("click", (e) => {
  e.preventDefault();

  currentPanel.classList.add("hidden");
  panelClickedSignalEl.classList.remove("hidden");
});

markerPossessionEl.addEventListener("click", (e) => {
  e.preventDefault();

  currentPanel.classList.add("hidden");
  panelClickedPossessionMarkerEl.classList.remove("hidden");
});

btnCloseClickedSignalEl.addEventListener("click", (e) => {
  e.preventDefault();

  panelClickedSignalEl.classList.add("hidden");
  currentPanel.classList.remove("hidden");
});

btnCloseClickedPossessionMarkerEl.addEventListener("click", (e) => {
  e.preventDefault();

  panelClickedPossessionMarkerEl.classList.add("hidden");
  currentPanel.classList.remove("hidden");
});

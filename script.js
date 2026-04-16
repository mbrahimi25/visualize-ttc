import { stationData } from "./stationData.js"; // import station data from stationData.js

fetch("map.svg")
  .then(res => res.text())
  .then(svg => {
    document.getElementById("map-container").innerHTML = svg;
    initStations();
  });
// Fetches the map.svg file and places it within the map-container div

function initStations(){
  document.querySelectorAll('g[id$="_Station"]').forEach(station => {
    station.addEventListener("click", ()=>showStationInfo(station.id));
  });

  document.querySelectorAll('g[id$="_Station"]').forEach(station => {
  station.addEventListener("click", () => {
    document.querySelectorAll('g[id$="_Station"]').forEach(s=>s.classList.remove("selected"));
    station.classList.add("selected");
    showStationInfo(station.id);
  });
});
}
// Adds click listeners to the stations

function showStationInfo(id) {
  const data = stationData.id;
  //if (!data) return;

  document.getElementById("Title").textContent = id.replace(/_/g, " ");
  document.getElementById("Opening_Date").textContent = "Opening date: " + stationData[id].openingDate;
  document.getElementById("Lines_Served").textContent = "Lines Served: " + stationData[id].linesServed;
  document.getElementById("Address").textContent = "Address: " + stationData[id].address;
}
// Updates the interactive side using data from stationData
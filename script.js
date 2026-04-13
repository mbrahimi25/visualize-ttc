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

function hideLineSymbols(){
  //document.querySelectorAll('g[id^="Right_Line_"]').forEach(symbol => symbol.style.setProperty("opacity", "0", "important"));
  //document.querySelectorAll('g[id^="Left_Line_"]').forEach(symbol => symbol.style.setProperty("opacity", "0", "important"));
  document.querySelectorAll('g[id^="Right_Line_"]').forEach(symbol => symbol.style.display = "none");
  document.querySelectorAll('g[id^="Left_Line_"]').forEach(symbol => symbol.style.display = "none");
  
}

const stationData = {
  "Union_Station": {
    openingDate: "August 6th, 1927",
    rightLineSymbol: null,
    leftLineSymbol: 1,
  },

  "Don_Mills_Station": {
    openingDate: "November 24th, 2002",
    rightLineSymbol: null,
    leftLineSymbol: 4
  },
  
}

function showStationInfo(id) {
  const data = stationData[id];
  //if (!data) return;

  hideLineSymbols();

  document.getElementById("Title").textContent = id.replace(/_/g, " ");
  document.getElementById("Opening_Date").textContent = "Opening date: " + data.openingDate;
}
// Updates the interactive side using data from stationData
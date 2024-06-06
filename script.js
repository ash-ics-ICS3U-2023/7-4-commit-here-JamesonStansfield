/**
 * This file will get loaded by index.html
 */
'use strict';

//Global Click Counter
let clicks = 0;

//Adding Clicks
document.getElementById("clickButton").addEventListener("click", updateClicks)

function updateClicks() {
  clicks++;
  document.getElementById("clickButton").textContent = `Clicks: ${clicks}`;
}

//Subtracting Clicks
document.getElementById("clickReduce").addEventListener("click", reduceClicks)

function reduceClicks() {
  clicks--;
  document.getElementById("clickButton").textContent = `Clicks: ${clicks}`;
}

//Reseting Clicks
document.getElementById("clickReset").addEventListener("click", resetClicks)

function resetClicks() {
  clicks = 0;
  document.getElementById("clickButton").textContent = `Clicks: ${clicks}`;
}

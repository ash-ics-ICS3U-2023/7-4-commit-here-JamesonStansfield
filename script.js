/**
 * This file will get loaded by index.html
 */
'use strict';

//Global Click Counter
let clicks = 0;
let clickRate = 1;
let x2 = false;

//Adding Clicks
document.getElementById("clickButton").addEventListener("click", updateClicks)

function updateClicks() {
  clicks += clickRate;
  document.getElementById("clickButton").textContent = `Clicks: ${clicks}`;
}

//Subtracting Clicks
document.getElementById("clickReduce").addEventListener("click", reduceClicks)

function reduceClicks() {
  clicks--;
  document.getElementById("clickButton").textContent = `Clicks: ${clicks}`;
}

//Reseting Clicks
document.getElementById("clickReset").style.backgroundColor = "#f5a4a4";

document.getElementById("clickReset").addEventListener("click", resetClicks)

function resetClicks() {
  clicks = 0;
  document.getElementById("clickButton").textContent = `Clicks: ${clicks}`;
}

//First Upgrade

document.getElementById("upgrade1").addEventListener("click", checkx2);

function checkx2() {
  if (clicks >= 50) {
    if (x2 == false) {
      clicks -= 50;
      document.getElementById("upgrade1").textContent = "Upgraded";
      document.getElementById("upgrade1").style.backgroundColor = "#8fe87c";
      document.getElementById("clickButton").textContent = `Clicks: ${clicks}`;
      x2 = true;
      clickRate = 2;
    }
  }
}


//Idea notes for author:
//display a new click rate increase button after the second
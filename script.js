"use strict";

// HOME TEAM SCORE COUNTER

let homeCount = 0;
let scoreEl = document.getElementById("home-score");

function add1() {
  // console.log('button pressed')
  homeCount += 1;
  scoreEl.textContent = homeCount;
}
function add2() {
  homeCount += 2;
  scoreEl.textContent = homeCount;
}
function add3() {
  homeCount += 3;
  scoreEl.textContent = homeCount;
}

// GUEST TEAM SCORE COUNTER

let guestCount = 0;
let scoreGuest = document.getElementById("guest-score");

function addOne() {
  guestCount += 1;
  scoreGuest.textContent = guestCount;
}
function addTwo() {
  guestCount += 2;
  scoreGuest.textContent = guestCount;
}
function addThree() {
  guestCount += 3;
  scoreGuest.textContent = guestCount;
}

// NEW GAME RESET FUNCTION

let reset = document.getElementById("new-g");

function resetZero() {
  homeCount = 0;
  scoreEl.textContent = homeCount;
  guestCount = 0;
  scoreGuest.textContent = guestCount;
}

// document.querySelector('.new-game').addEventListener('click', function() {
//     homeCount = 0
//     scoreEl.textContent = homeCount

//     guestCount = 0
//     scoreGuest.textContent = guestCount
// })

// SAVE SCORES IN SCORE BOARDS
// let saveHomeCount = homeCount
// let saveGuestCount = guestCount

let saveHome = document.getElementById("save-home-score");
let saveGuest = document.getElementById("save-guest-score");

function save() {
  let saveHomeCount = homeCount + " - ";
  saveHome.textContent += saveHomeCount;

  let saveGuestCount = guestCount + " - ";
  saveGuest.textContent += saveGuestCount;
}

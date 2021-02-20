'use strict';

//variables
const button = document.getElementById('button');
const body = document.querySelector('body');
const p = document.getElementById('mode');

//Event
button.addEventListener('click', updateButton);

//Button function

function updateButton() {
  //when the button is strictly 'night mode' (in HTML), when clicked changes to light mode and text changes to night mode activated and vise versa.
  if (button.value === 'Night Mode') {
    button.value = 'Light Mode';
    p.innerHTML = 'Night Mode Activated'
  } else {
    button.value = 'Night Mode';
    p.innerHTML = 'Light Mode Activated';
  }
}

//Background-color for party mode
function updateBackground() {
  //background colour
    body.classList.toggle('night-mode');
}
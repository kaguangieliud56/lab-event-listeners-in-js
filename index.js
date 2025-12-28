// Handle Button Clicks

// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  // Implement the function to change background color
}

// Function to reset the background color when the body is double-clicked
function resetBackgroundColor() {
  // Implement the function to reset background color
}

// Capture Keyboard Input

// Function to display the key pressed by the user
function displayKeyPress(event) {
  // Implement the function to display key pressed
}

// Process Text Input

// Function to display user input in real-time
function displayUserInput() {
  // Implement the function to display user input
}


function setupEventListeners() {

  document
    .getElementById('changeColorButton')
    .addEventListener('click', changeBackgroundColor)

 
  document
    .getElementById('resetColorButton')
    .addEventListener('dblclick', resetBackgroundColor)

  
  document.addEventListener('keydown', displayKeyPress)

 
  document.getElementById('textInput').addEventListener('input', displayUserInput)
}

d
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners)
}
function changeBackgroundColor() {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)

  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
}

function resetBackgroundColor() {
  document.body.style.backgroundColor = ''
}


function displayKeyPress(event) {
  const display = document.getElementById('keyPressDisplay')
  display.textContent = `Key pressed: ${event.key}`
}


function displayUserInput() {
  const input = document.getElementById('textInput')
  const display = document.getElementById('textInputDisplay')
  display.textContent = `You typed: ${input.value}`
}


function setupEventListeners() {
  const changeButton = document.getElementById('changeColorButton')
  const resetButton = document.getElementById('resetColorButton')
  const input = document.getElementById('textInput')

  changeButton.addEventListener('click', changeBackgroundColor)
  resetButton.addEventListener('dblclick', resetBackgroundColor)

  document.addEventListener('keydown', displayKeyPress)
  input.addEventListener('input', displayUserInput)
}



module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners
};
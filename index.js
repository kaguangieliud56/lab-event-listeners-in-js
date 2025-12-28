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
  setupEventListeners,
}

// Set initial timer values in seconds
let workTime = 25 * 60;
let breakTime = 5 * 60;
let currentTimer = workTime;
let isWorking = true;

// Select DOM elements
const timerDisplay = document.querySelector("#timer");
const startButton = document.querySelector("#start");
const resetButton = document.querySelector("#reset");

// Update timer display
function updateTimerDisplay() {
  const minutes = Math.floor(currentTimer / 60);
  const seconds = currentTimer % 60;
  timerDisplay.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

// Switch between work and break timers
function switchTimer() {
  if (isWorking) {
    currentTimer = breakTime;
    isWorking = false;
  } else {
    currentTimer = workTime;
    isWorking = true;
  }
  updateTimerDisplay();
}

// Start the timer
function startTimer() {
  timerInterval = setInterval(() => {
    currentTimer--;
    if (currentTimer <= 0) {
      clearInterval(timerInterval);
      switchTimer();
    }
    updateTimerDisplay();
  }, 1000);
}

// Reset the timer
function resetTimer() {
  clearInterval(timerInterval);
  currentTimer = workTime;
  isWorking = true;
  updateTimerDisplay();
}

// Add event listeners to buttons
startButton.addEventListener("click", startTimer);
resetButton.addEventListener("click", resetTimer);

// Initialize timer display
updateTimerDisplay();
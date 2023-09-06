document.addEventListener("DOMContentLoaded", () => {
    let currentTimer = 0;
    let timerInterval;
    let isRunning = false;
  
    const timerDisplay = document.querySelector("#timer");
    const startButton = document.querySelector("#start");
    const stopButton = document.querySelector("#stop");
    const resetButton = document.querySelector("#reset");
    const customTimeInput = document.querySelector("#custom-time");
  
    function updateTimerDisplay() {
      const minutes = Math.floor(currentTimer / 60);
      const seconds = currentTimer % 60;
      timerDisplay.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }
  
    function startTimer() {
      if (!isRunning) {
        isRunning = true;
        timerInterval = setInterval(() => {
          currentTimer--;
          updateTimerDisplay();
          if (currentTimer === 0) {
            stopTimer();
          }
        }, 1000);
      }
    }
  
    function stopTimer() {
      clearInterval(timerInterval);
      isRunning = false;
    }
  
    function resetTimer() {
      stopTimer();
      currentTimer = 0;
      updateTimerDisplay();
    }
  
    function handleStartButtonClick() {
      currentTimer = customTimeInput.value * 60 || 25 * 60;
      startTimer();
    }
  
    function handleStopButtonClick() {
      stopTimer();
    }
  
    function handleResetButtonClick() {
      resetTimer();
    }
  
    startButton.addEventListener("click", handleStartButtonClick);
    stopButton.addEventListener("click", handleStopButtonClick);
    resetButton.addEventListener("click", handleResetButtonClick);
  });
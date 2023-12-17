function simulateHacking() {
    showMessage("Initializing Hacking  ", 5, 1000);
    showMessage("Reading your Files...", 5, getRandomDelay());
    showMessage("Password fields detected...", 5, getRandomDelay());
    showMessage("Sending all passwords and personal files to server...", 5, getRandomDelay());
    showMessage("Cleaning up data ....", 5, getRandomDelay());
  }
  
  function showMessage(message, numDots, delay) {
    setTimeout(() => {
      document.getElementById('hacking-text').innerText = message;
      blink(numDots);
    }, delay);
  }
  
  function getRandomDelay() {
    return Math.floor(Math.random() * (7000 - 1000 + 1)) + 1000; // Random delay between 1 and 7 seconds
  }
  
  function blink(numDots) {
    const container = document.getElementById('hacking-dots');
    container.innerHTML = ''; // Clear previous dots
  
    for (let i = 0; i < numDots; i++) {
      const dot = document.createElement('span');
      dot.classList.add('dot'); // Assuming you have a CSS class for styling dots
      container.appendChild(dot);
    }
  }
  
  // Call simulateHacking to start the hacking simulation
  simulateHacking();
  
//your JS code here. If required.
// Function to update the clock timer
function updateClock() {
  // Get the current date and time
  var now = new Date();

  // Get the elements by their IDs
  var timerElement = document.getElementById("timer");

  // Format the date and time as a string
  var dateTimeString = now.toLocaleString();

  // Update the text content of the timer element
  timerElement.textContent = dateTimeString;
}

// Update the clock immediately and then set it to update every second
updateClock();
setInterval(updateClock, 1000); // Update every second

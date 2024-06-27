// Function to generate a random string of specified length
function generateRandomString(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

// Function to update the random string display every 2 seconds
function updateRandomStringDisplay() {
  const randomStringDisplay = document.getElementById("randomStringDisplay");
  setInterval(function () {
    randomStringDisplay.innerText = generateRandomString(10); // Change 10 to your desired string length
  }, 2000); // 2000 milliseconds = 2 seconds
}

// Call the function when the page loads
window.onload = function () {
  updateRandomStringDisplay();
};

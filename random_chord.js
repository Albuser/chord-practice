roots = [
  "A",
  "A Flat",
  "B",
  "B Flat",
  "C",
  "D",
  "D Flat",
  "E",
  "E Flat",
  "F",
  "G",
  "G Flat",
];
chords = ["min7", "maj7", "7"];
strings = ["Root 5", "Root 6"];
inversions = ["", "first inversion", "second inversion", "third inversion"];

// Function to generate a random string of specified length
function generateRandomChord() {
  root = roots[Math.floor(Math.random() * roots.length)];
  chord = chords[Math.floor(Math.random() * chords.length)];
  string = strings[Math.floor(Math.random() * strings.length)];
  inversion = inversions[Math.floor(Math.random() * inversions.length)];
  return root + " " + chord + " " + root + " " + inversion;
}

// Function to update the random string display every 2 seconds
function updateRandomChordDisplay() {
  const randomStringDisplay = document.getElementById("randomStringDisplay");
  setInterval(function () {
    randomStringDisplay.innerText = generateRandomChord(10); // Change 10 to your desired string length
  }, 2000); // 2000 milliseconds = 2 seconds
}

// Call the function when the page loads
window.onload = function () {
  updateRandomChordDisplay();
};

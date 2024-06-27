roots = ["A", "A♭", "B", "B♭", "C", "D", "D♭", "E", "E♭", "F", "G", "G♭"];
chords = ["m7", "△7", "7"];
strings = ["Root 5", "Root 6"];
inversions = ["", "I", "II", "III"];

function generateRandomChord() {
  root = roots[Math.floor(Math.random() * roots.length)];
  chord = chords[Math.floor(Math.random() * chords.length)];
  string = strings[Math.floor(Math.random() * strings.length)];
  inversion = inversions[Math.floor(Math.random() * inversions.length)];
  return root + chord + " " + inversion + " " + string;
}

function updateRandomChordDisplay() {
  const randomChordDisplay = document.getElementById("randomChordDisplay");
  const interval = document.getElementById("timer");
  const intervalInput = document.getElementById("timer");
  function update() {
    randomChordDisplay.innerText = generateRandomChord();
    randomChordDisplay.classList.add("flash");
    setTimeout(() => {
      randomChordDisplay.classList.remove("flash");
    }, 200);
    timeoutId = setTimeout(update, parseInt(interval.value) * 1000);
  }

  intervalInput.addEventListener("input", function () {
    clearTimeout(timeoutId); // Clear the current timeout
    update(); // Restart update with the new interval
  });

  update();

  const nextChordButton = document.getElementById("nextChordButton");
  nextChordButton.addEventListener("click", function () {
    clearTimeout(timeoutId); // Stop the current timeout
    update(); // Update immediately
  });
}

window.onload = function () {
  updateRandomChordDisplay();
};

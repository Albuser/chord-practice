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

function generateRandomChord() {
  root = roots[Math.floor(Math.random() * roots.length)];
  chord = chords[Math.floor(Math.random() * chords.length)];
  string = strings[Math.floor(Math.random() * strings.length)];
  inversion = inversions[Math.floor(Math.random() * inversions.length)];
  return root + " " + chord + " " + string + " " + inversion;
}

function updateRandomChordDisplay() {
  const randomChordDisplay = document.getElementById("randomChordDisplay");
  const interval = document.getElementById("timer");
  const timeBetween = Math.max(250, parseFloat(interval.value) * 1000);
  function update() {
    randomChordDisplay.innerText = generateRandomChord();
    setTimeout(update, parseInt(interval.value) * 1000); // Update every specified seconds
  }
  update();
}

window.onload = function () {
  updateRandomChordDisplay();
};

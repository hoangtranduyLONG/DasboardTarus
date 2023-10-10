const percentageInput = document.getElementById("percentage-input");
const blueLine = document.getElementById("blue-line");
const redLine = document.getElementById("red-line");

percentageInput.addEventListener("input", function() {
  const value = percentageInput.value;
  const blueLineWidth = `${80}%`;
  const redLineWidth = `${100 - 80}%`;

  blueLine.style.setProperty("--blue-line-width", blueLineWidth);
  redLine.style.setProperty("--red-line-width", redLineWidth);
});
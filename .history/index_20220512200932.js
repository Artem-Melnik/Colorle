// document.getElementById("sliderRange").innerHTML = `
// <div class="slidercontainer"></div>
// `;
// var root = document.querySelector(":root");
// var slider = document.getElementById("sliderRange");
// // Change "demo" to something else?
// var sliderRange = document.getElementById("demo");
// sliderRange.innerHTML = slider.value;
let correctRed = "141";
let correctGreen = "201";
let correctBlue = "201";

let red;
let green;
let blue;
// TODO: Split correctRGB into 3 seperate colors
let correctRgb =
  "rgb(" + correctRed + ", " + correctGreen + ", " + correctBlue + ")";

function changeColor() {
  red = document.getElementById("sliderRed").value;
  green = document.getElementById("sliderGreen").value;
  blue = document.getElementById("sliderBlue").value;

  document.getElementById("previewRed").style.backgroundColor =
    "rgb(" + red + ", 0, 0)";
  document.getElementById("previewGreen").style.backgroundColor =
    "rgb(0," + green + ", 0)";
  document.getElementById("previewBlue").style.backgroundColor =
    "rgb(0, 0," + blue + ")";

  document.getElementById("currentRed").textContent = red;
  document.getElementById("currentGreen").textContent = green;
  document.getElementById("currentBlue").textContent = blue;
}

// Shows guess color when submit button is clicked
// Also checks how close the guess is to the correct color
function onSubmit() {
  document.getElementById("previewAll").style.backgroundColor =
    "rgb(" + red + ", " + green + ", " + blue + ")";
  document.getElementById("guessColor").textContent =
    "rgb(" + red + ", " + green + ", " + blue + ")";

  // Check if guess is correct
if (red === correctRed) {
  document.getElementById('ratingRed').innerText;
} else if (red > correctRed - 6 && red < correctRed + 6) {
  alert("Red: S");
} else if (red > correctRed - 12 && red < correctRed + 12) {
  alert("Red: A");
} else if (red > correctRed - 24 && red < correctRed + 24) {
  alert("Red: B");
} else if (red > correctRed - 48 && red < correctRed + 48) {
  alert("Red: C");
} else {
  alert("Red: D");
} 
  // Does same thing as red check but for green
if (green === correctGreen) {
  alert("Green: SS");
} else if (green > correctGreen - 6 && green < correctGreen + 6) {
  alert("Green: S");
} else if (green > correctGreen - 12 && green < correctGreen + 12) {
  alert("Green: A");
} else if (green > correctGreen - 24 && green < correctGreen + 24) {
  alert("Green: B");
} else if (green > correctGreen - 48 && green < correctGreen + 48) {
  alert("Green: C");
} else {
  alert("Green: D");
} 

  // Does same thing as red check but for blue
if (blue === correctBlue) {
  alert("Blue: SS");
} else if (blue > correctBlue - 6 && blue < correctBlue + 6) {
  alert("Blue: S");
} else if (blue > correctBlue - 12 && blue < correctBlue + 12) {
  alert("Blue: A");
} else if (blue > correctBlue - 24 && blue < correctBlue + 24) {
  alert("Blue: B");
} else if (blue > correctBlue - 48 && blue < correctBlue + 48) {
  alert("Blue: C");
} else {
  alert("Blue: D");
}

  // if ("rgb(" + red + "," + green + "," + blue + ")" === "rgb(141,201,201)") {
  //   alert("Correct!");
  // }
}

$("#themeToggle").click(function () {
  $("#themeIcon").toggleClass("animate");
});

function themeSwitch() {
  document.body.classList.toggle("lightTheme");
  document.getElementById("correctColor").classList.toggle("correctColorDark");
}

document.getElementById("correctColor").style.backgroundColor = correctRgb;
document.getElementById("submitButton").style.backgroundColor = correctRgb;
document.getElementById("submitButton").style.borderColor =
  "rgb(" +
  (correctRed - 38) +
  ", " +
  (correctGreen - 38) +
  ", " +
  (correctBlue - 38) +
  ")";

document.getElementById("sliderRed").addEventListener("input", changeColor);
document.getElementById("sliderGreen").addEventListener("input", changeColor);
document.getElementById("sliderBlue").addEventListener("input", changeColor);
document.getElementById("submitButton").addEventListener("click", onSubmit);
document.getElementById("themeToggle").addEventListener("click", themeSwitch);

// Plugs in sliderRange for green in RGB
// Outputs the value of the slider
// slider.oninput = function () {
//   sliderRange.innerHTML = this.value;
//   root.style.setProperty("--green", sliderRange);
//   alert(sliderRange);
// };
// Calculator, Code By Clint Lorenzo
// Click Close to close
const Macbutton1 = document.getElementById("Macbutton1");
const Main = document.getElementById("closeMain");

Macbutton1.onclick = function () {
  Main.style.display = "none";
};

behind.onclick = function () {
  Main.style.display = "block";
};


// Minimize
const Macbutton2 = document.getElementById("Macbutton2");

Macbutton2.onclick = function () {
  document.body.classList.toggle("minimizeCalc");
};


// Maximize
const Macbutton3 = document.getElementById("Macbutton3");

Macbutton3.onclick = function () {
  document.body.classList.toggle("maximizeCalc");
};


// Calculator Code
const display = document.getElementById("display");

function DisplayKeys(input) {
  display.value += input;
};

function del() {
  display.value = display.value.slice(0, -1);
};

function Clear() {
  display.value = "";
};

function Calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = " Error";
  }
};


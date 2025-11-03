
// name changing greeting message on button click

let header = document.getElementById("greetButton");
header.addEventListener("click", function () {

const name = document.getElementById("nameInput").value.trim();
  const greeting = document.getElementById("greeting");
  if (name !== "") {
    greeting.textContent = `Hello, ${name}`;
  } else {
    greeting.textContent = "Hello";
  }
});

//  change box colors on click

let red = document.getElementById("redBox");
red.addEventListener("click", function () {
  red.style.backgroundColor = "red";
});

let blue = document.getElementById("blueBox");
blue.addEventListener("click", function () {
  blue.style.backgroundColor = "blue";
});
let green = document.getElementById("greenBox");
green.addEventListener("click", function () {
  green.style.backgroundColor = "green";
});
let yellow = document.getElementById("yellowBox");
yellow.addEventListener("click", function () {
  yellow.style.backgroundColor = "yellow";
});

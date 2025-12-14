
const greeting = document.getElementById('greeting');
const input = document.getElementById('input');
const greetButton = document.getElementById('greetButton');




// greetButton.addEventListener('click', function() {
//     const name = input.value.trim();
//     greeting.textContent = `Hello ${name}`;

// });

greetButton.addEventListener('click', function () {
    const name = input.value.trim();

    greeting.textContent = name ? `Hello, ${name}` : "Hello";
});




let redBox = document.getElementById('redBox');
redBox.addEventListener('click', function() {
    this.style.backgroundColor = 'red';
});

let blueBox = document.getElementById('blueBox');
blueBox.addEventListener('click', function() {
    this.style.backgroundColor = 'blue';
});

let greenBox = document.getElementById('greenBox');
greenBox.addEventListener('click', function() {
    this.style.backgroundColor = 'green';
});

let yellowBox = document.getElementById('yellowBox');
yellowBox.addEventListener('click', function() {
    this.style.backgroundColor = 'yellow';
});





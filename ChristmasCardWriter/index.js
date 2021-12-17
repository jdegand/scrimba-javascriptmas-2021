const greetingDisplay = document.getElementById("greeting-display")
const btn = document.getElementById("btn")
const bauble = document.getElementById("bauble")
btn.addEventListener("click", writeGreeting)

const greetings = [
    "Santa Claus is coming to town!",
    "We wish you a Merry Christmas!",
    "Happy holidays!",
    "Ho, ho, ho! Merry Christmas!",
    "Jingle all the way!",
]

// Task:
// Write a function to display a random greeting in the card.

// [Stack Overflow](https://stackoverflow.com/questions/5915096/get-a-random-item-from-a-javascript-array)

function writeGreeting(){
    const index = Math.floor(Math.random() * greetings.length)
    greetingDisplay.textContent = greetings[index];
}

// Stretch goals:
// - Allow the user to input to and from names.
// - Add an input for custom messages.
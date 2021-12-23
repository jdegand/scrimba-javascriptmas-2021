// Task:
// - Write a function to update the Santa Stop Here sign with the user's own text.
const sign = document.getElementById('sign');
const textInput = document.getElementById('text-input');

document.addEventListener('keyup', ()=> {
    sign.textContent = textInput.value;
})

// Stretch goals
// - Add a min and max length to the message.
// - Add interchangeable emojis.
// - Allow the user to customize the colors and other styling elements, too.
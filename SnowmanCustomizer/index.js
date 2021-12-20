const inputs = document.querySelectorAll(".controls input");

// Task:
// Write a function to update the snowman colors according to the colors selected from the pickers.

// Stretch goals:
// - Add other items eg scarf, arms, etc.
// - Add different options for nose shape, or hats.
// - Check for contrast between pupils and eye color.


document.getElementById("color").addEventListener('change', (e) => {
    document.querySelectorAll('.eye').forEach(eye=> eye.style.backgroundColor = e.target.value)
});

document.getElementById("color3").addEventListener('change', (e) => {
    document.querySelector('.nose').style.borderColor = `transparent transparent transparent ${e.target.value}`
});

document.getElementById("color2").addEventListener('change', (e) => {
    document.querySelectorAll('.button').forEach(button=> button.style.backgroundColor = e.target.value)
});
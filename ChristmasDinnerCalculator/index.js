const btn = document.getElementById("btn")
let food = document.getElementById("food")
const vegetarianInput = document.getElementById('vegetarian-input');
const guests = document.getElementById('num-input');

const choices = {
    'under4': 'turkey',
    'over4': 'goose',
    'vegetarian': 'nut roast'
}

// Tasks:
// - Write the JS to decide the perfect Christmas dinner and render it in the result element. Don't forget to check whether the meal should be vegetarian!


btn.addEventListener('click', ()=> {
    if(vegetarianInput.checked){
        food.textContent = choices['vegetarian'];
    } else if (guests.value <= 4) {
        food.textContent = choices['under4'];
    } else {
        food.textContent = choices['over4'];
    }
})

// Dinner suggestions (or choose your own!):
// Vegetarian: nut roast
// 4 people or less: turkey
// 5+ people: goose 

// Stretch goals:
// - Add more dietary options.
// - Show recipes when the meal has been selected.

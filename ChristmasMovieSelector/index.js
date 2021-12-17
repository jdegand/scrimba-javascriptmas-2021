const ageSelector = document.getElementById("age-selector")
const genreSelector = document.getElementById("genre-selector")

const btn = document.getElementById("btn")
const suggestedMovie = document.getElementById("suggested-movie")

const moviesArr = [
    {
        name: "Die Hard",
        age: "18+",
        genre: "Action"
    },
    {
        name: "Love Actually",
        age: "18+",
        genre: "Romance"
    },
    {
        name: "The Polar Express",
        age: "PG",
        genre: "Action"
    },
    {
        name: "Shrek",
        age: "PG",
        genre: "Romance"
    }
]

// Task: 
// - Write a function to select a suitable movie based on the age group and genre provided.
//  - Display it in the suggested-movie paragraph when the button is clicked.

function selectMovie(){
    if(ageSelector.value === '18+'){
        if(genreSelector.value === 'Action'){
            suggestedMovie.textContent = moviesArr[0]['name']
        } else {
            suggestedMovie.textContent = moviesArr[1]['name']
        }
    } else {
        if(genreSelector.value === 'Action'){
            suggestedMovie.textContent = moviesArr[2]['name']
        }else {
            suggestedMovie.textContent = moviesArr[3]['name']
        }
    }
}

btn.addEventListener('click', selectMovie)

// Stretch goals: 
// - Have the function run on each change of the <select> tags.
// - Add more movies/complexity - for example black and white vs color, preferred actors, etc. 
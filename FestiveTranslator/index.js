const languageSelector = document.getElementById("language-selector")
const greetingDisplay = document.getElementById("greeting-text")
languageSelector.addEventListener("change", translate)

const greetingsArr = [
    {
        language: "English",
        greeting: "Merry Christmas!"
    },
    {
        language: "Spanish",
        greeting: "Feliz Navidad!"
    },
    {
        language: "Ukrainian",
        greeting: "щасливого Різдва!"
    },
    {
        language: "Welsh",
        greeting: "Nadolig Llawen!"
    }
]

function translate(){
    // Task: 
    // - Write a function to display the correct greeting when a language is selected.
    if(languageSelector.value === 'English'){
        greetingDisplay.textContent = greetingsArr[0]['greeting']
    } else if(languageSelector.value === 'Spanish'){
        greetingDisplay.textContent = greetingsArr[1]['greeting']
    } else if(languageSelector.value === 'Ukrainian'){
        greetingDisplay.textContent = greetingsArr[2]['greeting']
    } else if(languageSelector.value === 'Welsh'){
        greetingDisplay.textContent = greetingsArr[3]['greeting']
    }
}

// Stretch goals:
// - Animate the message switch.
// - Add the option to switch the greeting, for example also have "And a Happy New Year!".

const greeting = document.getElementById("greeting")
const christmassifierBtn = document.getElementById("christmassifierBtn")
christmassifierBtn.addEventListener("click", christmassifyName)

function christmassifyName() {
   // Task:
  // - Add christmassify class to greeting.
  //- Check whether christmassifierBtn has christmassify on it. If so, change text to "De-christmassify", if not, change text to "Christmassify"

    greeting.classList.toggle('christmassified');

    // [Stack Overflow](https://stackoverflow.com/questions/37566597/why-doesnt-includes-work-with-classlist/37566648)

    if(greeting.classList.contains('christmassified')){
        christmassifierBtn.innerText = "De-christmassify";
    }else {
        christmassifierBtn.innerText = "Christmassify";
    }
}

// Stretch goals:
// - Play Christmas music when Christmas class is added.
// - Remove the Christmas class after a given time.


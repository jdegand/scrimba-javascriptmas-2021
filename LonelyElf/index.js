const elf = document.getElementById("elf")
const btn = document.getElementById("btn")

btn.addEventListener("click", duplicateElf)
let count = 1;

function duplicateElf(){
    // Task:
   // - Write a function to duplicate the elf when the button is clicked.
   // - See index.css for optional styling challenges.
   if(count < 100) {
    elf.textContent += '🧝';
    count++;
   } else {
       return;
   }
   console.log(count)
}

// Stretch goals:
// - Write a function to give the elves some tools, or a cup of tea!
// - Limit the total number of elves to 100.

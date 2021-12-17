const niceList = document.getElementById("nice-list")
const naughtyList = document.getElementById("naughty-list")
const btn = document.getElementById("btn")
btn.addEventListener("click", sort)

const sorteesArr = [
    {
        name: "David",
        hasBeenGood: false
    },
    {
        name: "Del",
        hasBeenGood: true
    },
    {
        name: "Valerie",
        hasBeenGood: false
    },
    {
        name: "Astrid",
        hasBeenGood: true
    }
]

// Task: 
// - Write the JavaScript to sort the people in sorteesArr into the naughty and nice lists, according to whether they have been good or not. Then display the names in the relevant place in the DOM.

/*
function sort(){
    let naughty = [];
    let nice = [];
    for(var i= 0; i < sorteesArr.length; i++){
        if(sorteesArr[i].hasBeenGood === true){
            nice.push(sorteesArr[i].name)

        } else {
            naughty.push(sorteesArr[i].name)
        }
    }
    naughtyList.innerText = JSON.stringify(naughty);
    niceList.innerText = JSON.stringify(nice);
}
*/

function sort(){
    let nice = sorteesArr.filter(x => x.hasBeenGood);
    let naughty = sorteesArr.filter(x => !x.hasBeenGood);
    
    niceList.innerText = nice.map(x => x.name).toString()
    naughtyList.innerText = naughty.map(x => x.name).toString()
}

// Stretch goals:
// - Add the option to add new names to the sorteesArr.
// - Make it possible to switch people to the other list.
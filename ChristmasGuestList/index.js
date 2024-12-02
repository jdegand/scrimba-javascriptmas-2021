const input = document.getElementById("input")
const btn = document.getElementById("btn")
let guestList = document.getElementById("guest-list")
let guests = ["Partner", "Nice Relative 1", "Nice Relative 2", "Evil Relative", "Lonely Neighbour"]

// Tasks:
// - Write the JS to render the Christmas day guest list in the guest-list element.
// - Add the functionality to add new guests.

function renderList(){
    guestList.innerText = '';
    for(let i = 0; i < guests.length; i++){
        const li = document.createElement('li');
        li.innerText = guests[i];
        guestList.append(li);
    }
}

btn.addEventListener('click', (e)=> {
    guests.push(input.value);
    renderList()
})

renderList()

// Stretch goals: 
// - Add a button to remove the most recently added guests.
// - What about if you want to remove the evil relative?

// Add another button && event listener and guests.pop()
// Filter/find for the evil relative

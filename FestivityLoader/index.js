const meter = document.getElementById("meter")

// Task:
// Write a function to wire up the festivity loader to reflect how many days are remaining until Christmas!

function updateMeter(){
    const date = new Date();

    const day = date.getDate();

    meter.setAttribute('value', day);
}

window.addEventListener('DOMContentLoaded', (event) => {
    updateMeter();
});

// Stretch goals:
// - Animate the loader.
// - Change the colors depending on the meter's value.

/*
    if(day > 10) {
        change color here by adding class to meter
    }
*/
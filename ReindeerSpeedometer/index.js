const speedometer = document.getElementById("speedometer")
const select = document.getElementById("select")
const time = document.getElementById("time")
let currentLocation = ""
let timeTaken = 0;
const result = document.getElementById("result");
const button = document.getElementById('button');

let destination = [
    {
        name: "Munich",
        distanceFromPrevDestination: 2892
    },
    {
        name: "Kiev",
        distanceFromPrevDestination: 1111
    },
    {
        name: "Ulaanbaatar",
        distanceFromPrevDestination: 5324
    },
     {
        name: "Sydney",
        distanceFromPrevDestination: 5458
    },
    {
        name: "Tijuana",
        distanceFromPrevDestination: 6531
    },
    {
        name: "Chicago",
        distanceFromPrevDestination: 1729
    }
]

function calculateSpeed() {
    let speed = 0    
    currentLocation = select.value

    let locationObj = destination.find(item => item.name === currentLocation)
    let distance = locationObj.distanceFromPrevDestination;

    timeTaken = time.value
    
    // Task:
    // - Retrieve distance from previous destination from array of objects.
    // - Calculate speed and round speed to an integer (whole number).
    // - Display speed in speedometer paragraph.
    // distance / time
    speed = distance / parseInt(timeTaken) // distance is already a number / timeTaken is a string
    result.innerText = Math.floor(speed); // floor or round?
}

button.addEventListener('click', calculateSpeed)

// Stretch goals: 
// - Calculate average overall speed.
// - Display location as North Pole on pageload.

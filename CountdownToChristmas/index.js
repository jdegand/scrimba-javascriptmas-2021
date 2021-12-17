const countdownDisplay = document.getElementById("countdown-display")

function renderCountdown(){
    const christmas = 25
    // Task:
    // - Get today's date (you only need the day).
    const date = new Date();
    const day = date.getDate()
    const remaining = christmas - day;
    countdownDisplay.innerText = remaining;
    // - Calculate remaining days.
    // - Display remaining days in countdownDisplay.
}

renderCountdown()
const btn = document.getElementById("btn")
let timer = document.getElementById("timer")
let affirmation = document.getElementById("affirmation")
let timeout;

// Task:
// - Write a function to start the countdown timer on the button click and display it in the DOM. Stop the timer when it reaches 0.
btn.addEventListener('click', countdown)

function countdown(){
    btn.setAttribute('disabled', true) // can't click it again
    let time = parseFloat(timer.innerText) * 60;

    let interval = setInterval(()=>{
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        timer.innerText = `${minutes}:${seconds}`;
        time--;

        if(time === -1){
            clearInterval(interval)
            setTimeout(()=> {
                location.reload()
            }, 5000)
        }
    }, 1000)

}

// Stretch goals:
// - Show a relaxing image in the background while the timer is running.
// - Play relaxing music.
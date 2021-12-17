const playBtn = document.getElementById("play-btn")
const pauseBtn = document.getElementById("pause-btn")
const stopBtn = document.getElementById("stop-btn")
const audio = new Audio('mixkit-sleigh-bells-584.wav');
playBtn.addEventListener("click", play)
pauseBtn.addEventListener("click", pause)
stopBtn.addEventListener("click", stop);
const bell = document.getElementById('bell');

function play() {
    audio.play()
    bell.classList.add('animate')
}
 
 function pause() {
    audio.pause()
    bell.classList.toggle('animate')
}

function stop() {
    audio.pause();
    audio.currentTime = 0;
    bell.classList.remove('animate')
}

// [CSS Tricks](https://css-tricks.com/restart-css-animation/)

// Task:
// - Animate the bell so that it looks like it is ringing when the music is playing, and stops when the music is paused or stopped. 

//NB: You'll need to make changes in the CSS too 😉

// Stretch goal:
// - Make sure the animation doesn't reset when paused.
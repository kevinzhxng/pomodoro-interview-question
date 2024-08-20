
let cancelId
let startTime
let timeLeft
const countdown = 25 * 60 * 1000

const timerMilliseconds = document.querySelector('.timer__milliseconds')
const timerSeconds = document.querySelector('.timer__seconds')
const timerMinutes = document.querySelector('.timer__minutes')

function startTimer() {
    startTime = Date.now()
    cancelId = requestAnimationFrame(updateTimer)
    
}

function stopTimer() {
    cancelAnimationFrame(cancelId)
    console.log('stopTimer')
    startTime = timeLeft;
}

function resetTimer() {
    console.log('reset')

}

function updateTimer() {
    let millisElapsed = Date.now() - startTime

    timeLeft = countdown - millisElapsed;

    timerMilliseconds.innerHTML = timeLeft % 1000
    timerSeconds.innerHTML = Math.floor(timeLeft / 1000 % 60)
    timerMinutes.innerHTML = Math.floor(timeLeft / 1000 / 60 % 60)
    cancelId = requestAnimationFrame(updateTimer)
}
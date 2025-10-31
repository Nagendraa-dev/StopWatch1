
// Dom Elementes
const display  = document.getElementById("display");
const stopBtn = document.getElementById("stopBtn");
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");


// Storpwatch variables 

let seconds =0 ;
let minutes = 0 
let hours = 0 ;
let timer = null 

function updateTime(){
    display.textContent = 
    (hours < 10 ? "0" + hours : hours)+":" +
    (minutes < 10 ? "0" + minutes : minutes) + ":" +
    (seconds  < 10 ? "0" + seconds : seconds)
}
// Function to start the stopwatch 

function startTimer(){
    if (timer === null){
        timer = setInterval(() => {
            seconds ++;
            if(seconds === 60){
                seconds =  0 
                minutes++
                if(minutes === 60){
                    minutes = 0 
                    hours++
                }
            }
            updateTime()
        }, 1000);
    }
}
function stopTimer(){
    clearInterval(timer)
    timer = null
}
function resetTimer(){
    stop()
    seconds = 0 
    minutes = 0 
    hours = 0 
    updateTime()
}

startBtn.addEventListener("click" ,startTimer)
stopBtn.addEventListener("click" , stopTimer)
resetBtn.addEventListener("click" , resetTimer)
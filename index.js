let timer = document.getElementById('timer');

let counterSecond = 0;
let counterMinute = 0;
let counterHour = 0;

let boolStart = document.getElementById('start');

let t;
let timerOn = false;

function startTimer(){
    if(timerOn === true)
    {
        return
    }
     timerOn = true;
     t = setInterval(() =>{
        counterSecond += 1
        if(counterSecond=== 60){
            counterMinute += 1;
            counterSecond = 0;
        }
        if(counterMinute === 60){
            counterHour += 1;
            counterMinute = 0;
        }

        document.getElementById('time').innerHTML = counterHour + ':' + counterMinute + ':' + counterSecond;
    },1000)
}

function pauseTimer(){
    timerOn = false;
    clearInterval(t)
}

function restartTimer(){
    counterSecond = 0;
    counterMinute = 0;
    counterHour = 0;
    document.getElementById('time').innerHTML = counterHour + ':' + counterMinute + ':' + counterSecond;
}

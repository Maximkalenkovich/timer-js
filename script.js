const tableElement = document.getElementById('table')

const startButton = document.getElementById('start')

const stopButton = document.getElementById('stop')

let timer = 0

startButton.addEventListener('click',function () {
    timer += 1
     return tableElement.textContent = timer.toString()
})
stopButton.addEventListener('click', function (){
    timer = 0
    return tableElement.textContent = timer.toString()
})




//timer

const secundaTable = document.getElementById("secunda")
const minuteTable = document.getElementById('minute');
const hoursTable = document.getElementById('hours');

const startTimerButton = document.getElementById('startTimer')
const pauseTimerButton = document.getElementById('pauseTimer')




let secunda = 0;
let start;
startTimerButton.addEventListener('click', function() {
  start = setInterval(function() {
       secunda++;
       secundaTable.textContent = secunda.toString();
        minuteHandler(secunda);
        if (secunda >= 60){
            return secunda = 0
        }

    }, 1000);
});


pauseTimerButton.addEventListener('click',function (){
    clearTimeout(start)
})

let minute = 0;
function minuteHandler(sec) {
    if (sec === 60) {
        minute++;
        minuteTable.textContent = minute.toString();
        hoursHandler(minute)
        minute >= 60 ? minute = 0: minute
    }
}

let hours = 0;
function hoursHandler(min) {
    if (min === 60){
        hours++;
        hoursTable.textContent=hours.toString()
        if (hours >= 24){
            return(hours=0)
        }
    }
}

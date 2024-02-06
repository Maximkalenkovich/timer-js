const tableElement = document.getElementById('table')

const startButton = document.getElementById('start')

const stopButton = document.getElementById('stop')

let timer = 0

debugger
startButton.addEventListener('click',function () {
    timer += 1
     return tableElement.textContent = timer.toString()
})
stopButton.addEventListener('click', function (){
    timer = 0
    return tableElement.textContent = timer.toString()
})


//timer

const timerTableElement = document.getElementById("timerTable")

const startTimerButton = document.getElementById('startTimer')

const stopTimerButton = document.getElementById('stopTimer')


let table = 0


    startTimerButton.addEventListener('click', function(){
        debugger
        setInterval(function (){
            table += 1
          return   timerTableElement.textContent = table.toString()
        },1000)
    })



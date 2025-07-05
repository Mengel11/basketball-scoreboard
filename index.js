let scoreHome = 0
let scoreGuest = 0 
let qtrNumber = 1
let scoreHomeEl = document.getElementById("score-home")
let scoreGuestEl = document.getElementById("score-guest")
let qtrNumberEl = document.getElementById("qtr-number")

function home_increas_1() {
    scoreHome += 1
    scoreHomeEl.textContent = scoreHome 
}

function home_increas_2 () {
    scoreHome += 2
    scoreHomeEl.textContent = scoreHome 
}

function home_increas_3 () {
    scoreHome += 3
    scoreHomeEl.textContent = scoreHome 
}

function guest_increas_1 () {
    scoreGuest += 1
    scoreGuestEl.textContent = scoreGuest
}

function guest_increas_2 () {
    scoreGuest += 2
    scoreGuestEl.textContent = scoreGuest
}

function guest_increas_3 () {
    scoreGuest += 3
    scoreGuestEl.textContent = scoreGuest 
}

function next_qtr() {
    qtrNumber += 1
    qtrNumberEl.textContent = qtrNumber
}


let totalSeconds = 12 * 60  // 12 minutos en segundos
let currentSeconds = totalSeconds
let timerInterval = null
let timeEl = document.querySelectorAll(".box-number")[1]  // el <p> del tiempo, el segundo .box-number

function formatTime(seconds) {
    const min = Math.floor(seconds / 60)
    const sec = seconds % 60
    return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`
}

function updateTimeDisplay() {
    timeEl.textContent = formatTime(currentSeconds)
}

function startTimer() {
    if (timerInterval === null) {
        timerInterval = setInterval(() => {
            if (currentSeconds > 0) {
                currentSeconds--
                updateTimeDisplay()
            } else {
                clearInterval(timerInterval)
                timerInterval = null
                alert("¡Fin del cuarto!")
            }
        }, 1000)
    }
}

function pauseTimer() {
    clearInterval(timerInterval)
    timerInterval = null
}

// Al cargar la página, muestra el tiempo inicial
updateTimeDisplay()



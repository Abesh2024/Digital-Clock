let minuteEl = document.getElementById("minutes");
let hourEl = document.getElementById("hour");
let secondEl = document.getElementById("seconds");
let ampmEl = document.getElementById("ampm");

function updateDom() {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM";

    if(h > 12){
        h = h - 12;
        ampm = "PM"
    }

    minuteEl.innerText = m
    hourEl.innerText = h
    secondEl.innerText = s
    ampmEl.innerText = ampm

}

function updateClock() {
    
    setInterval( () =>{
        updateDom()
    }, 1000)
}

updateClock()
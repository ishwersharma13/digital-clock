let hours = document.getElementById('hour')
let minutes = document.getElementById('minutes')
let seconds = document.getElementById('seconds')
let ampm = document.getElementById('ampm')


function updateClock() {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = 'AM'

    if (h > 12) {
        h = h - 12
        ampm = 'PM'
    }


h = h<10 ? '0' + h : h
s = s<10 ? '0' + s : s
m = m<10 ? '0' + m : m

hours.innerText = h
minutes.innerText = m
seconds.innerText = s
ampm, (innerText = ampm)
setTimeout(()=>
{
    updateClock()
},1000)
}

updateClock()
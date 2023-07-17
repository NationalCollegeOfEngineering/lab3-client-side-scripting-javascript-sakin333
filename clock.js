

const showTime = () => {
    let x = new Date()
    let time = x.toLocaleTimeString()
    let date = x.toDateString()

    let seconds = x.getSeconds()
    let minutes = x.getMinutes()
    let hours = x.getHours()

    document.querySelector('#sec').innerHTML = seconds
    document.querySelector('#min').innerHTML = minutes
    document.querySelector('#hr').innerHTML =  hours

    // document.querySelector('#timeDisplay').innerHTML = 'Time : ' + time
    document.querySelector('#dateDisplay').innerHTML = 'Date : ' + date
}

setInterval(showTime,1000);
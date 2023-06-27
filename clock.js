function updateClock() {
    const currentDate = new Date ()
    console.log(currentDate)

    const hours = currentDate.getHours()
    console.log(hours)
    const minutes = currentDate.getMinutes()
    console.log(minutes)
    const seconds = currentDate.getSeconds()
    console.log(seconds)

    let hourHand = document.querySelector(".hours")
    let minuteHand = document.querySelector(".minutes")
    let secondHand = document.querySelector(".seconds")
    let newDate = document.getElementById("new-date")

    //calculate the rotation angles
    let hourRotation = (hours / 12) * 360; // 12 for the clock and 360 because of the size of the watch//
    let minuteRotation = (minutes / 60) * 360; //60 minutes in an hour
    let secondRotation = (seconds / 60) * 360; //60 seconds in a minute
    newDate.textContent = currentDate

    // Apply the rotation to the clock hands
    hourHand.style.transform = `rotate(${hourRotation}deg)`;
    minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
    secondHand.style.transform = `rotate(${secondRotation}deg)`;
}

// Update the clock every second
setInterval(updateClock, 1000);
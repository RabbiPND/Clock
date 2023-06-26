function updateClock() {
    const now = new Date ()

    const hours = now.getHours()
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()

    let hourHand = document.querySelector(".hours")
    let minuteHand = document.querySelector(".minutes")
    let secondHand = document.querySelector(".seconds")

    //calculate the rotation angles
    let hourRotation = (hours % 12) * 30 + minutes / 2;
    let minuteRotation = minutes * 6;
    let secondRotation = seconds * 6;

    // Apply the rotation to the clock hands
    hourHand.style.transform = `rotate(${hourRotation}deg)`;
    minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
    secondHand.style.transform = `rotate(${secondRotation}deg)`;
}

// Update the clock every second
setInterval(updateClock, 1000);
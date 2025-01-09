function displayTime(cityId, offsetH, offsetM) {
    let hr = document.getElementById(`hour-${cityId}`);
    let min = document.getElementById(`min-${cityId}`);
    let sec = document.getElementById(`sec-${cityId}`);

    let date = new Date();

    let hh = (date.getHours() + offsetH + 24) % 24;
    let mm = (date.getMinutes() + offsetM + 60) % 60;
    let ss = date.getSeconds();

    let hRotation = 30 * hh + mm / 2;
    let mRotation = 6 * mm;
    let sRotation = 6 * ss;

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
}

function startClocks() {
    setInterval(() => displayTime("ny", -7, 0), 1000);
    setInterval(() => displayTime("lon", -2, 0), 1000);
    setInterval(() => displayTime("to", 7, 0), 1000);
    setInterval(() => displayTime("au", 9, 0), 1000);
    setInterval(() => displayTime("du", 2, 0), 1000);
    setInterval(() => displayTime("mu", 4, 30), 1000);
}
startClocks();
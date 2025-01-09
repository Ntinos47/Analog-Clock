//New Work
function displayTimeAmerica() {
    let hr = document.getElementById('hour-ny');
    let min = document.getElementById('min-ny');

    let date = new Date();

    let hh = (date.getHours() - 7 + 24) % 24;
    let mm = date.getMinutes();

    let hRotation = (30*hh + mm/2);
    let mRotation = 6*mm;

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
}
setInterval(displayTimeAmerica, 1000);
displayTimeAmerica();


//London
function displayTimeEngland() {
    let hr = document.getElementById('hour-lon');
    let min = document.getElementById('min-lon');

    let date = new Date();

    let hh = (date.getHours() - 2 + 24) % 24;
    let mm = date.getMinutes();

    let hRotation = (30*hh + mm/2);
    let mRotation = 6*mm;

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
}
setInterval(displayTimeEngland, 1000);
displayTimeEngland();


//Tokyo
function displayTimeTokyo() {
    let hr = document.getElementById('hour-to');
    let min = document.getElementById('min-to');

    let date = new Date();

    let hh = (date.getHours() + 7 + 24) % 24;
    let mm = date.getMinutes();

    let hRotation = (30*hh + mm/2);
    let mRotation = 6*mm;

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
}
setInterval(displayTimeTokyo, 1000);
displayTimeTokyo();


//Austrelia
function displayTimeAustelia() {
    let hr = document.getElementById('hour-au');
    let min = document.getElementById('min-au');

    let date = new Date();

    let hh = (date.getHours() + 9 + 24) % 24;
    let mm = date.getMinutes();

    let hRotation = (30*hh + mm/2);
    let mRotation = 6*mm;

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
}
setInterval(displayTimeAustelia, 1000);
displayTimeAustelia();


//Dubai
function displayTimeDubai() {
    let hr = document.getElementById('hour-du');
    let min = document.getElementById('min-du');

    let date = new Date();

    let hh = (date.getHours() + 2 + 24) % 24;
    let mm = date.getMinutes();

    let hRotation = (30*hh + mm/2);
    let mRotation = 6*mm;

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
}
setInterval(displayTimeDubai, 1000);
displayTimeDubai();


//Mumbai
function displayTimeMumbai() {
    let hr = document.getElementById('hour-mu');
    let min = document.getElementById('min-mu');

    let date = new Date();

    let hh = (date.getHours() + 3 + 24) % 24;
    let mm = (date.getMinutes() + 30 );

    let hRotation = (30*hh + mm/2);
    let mRotation = (6*mm);

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
}
setInterval(displayTimeMumbai, 1000);
displayTimeMumbai();
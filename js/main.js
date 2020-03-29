const countdown = document.querySelector('.countdown');
const title = document.querySelector('.title');
// Get end date
const endDate = new Date('May 1, 2023 00:00:00').getTime();
title.innerHTML = `Time until: ${formatDate(endDate)}`;

// Update every second 
const intvl = setInterval (()=> {
    // get todays date
    const now = new Date().getTime();
    //distance from end date to now
    const distance = endDate - now;
    // Time calculations
    const weeks = Math.floor(distance/(1000*60*60*24)/7);
    const days = Math.floor(distance/(1000*60*60*24));
    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
    const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    //Distance from now to the end date

    countdown.innerHTML = `
        <div>${weeks}<span> Weeks</span></div>
        <div>${days}<span> Days</span></div>
        <div>${hours}<span> Hours</span></div>
        <div>${mins}<span> Minutes</span></div>
        <div>${seconds}<span> Seconds</span></div>        
    `;

    if(distance < 0) {
        clearInterval(intvl);

        countdown.getElementsByClassName.color = "#17a2b8";
        countdown.innerHTML = 'Done';
    }
    
}, 1000);

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}
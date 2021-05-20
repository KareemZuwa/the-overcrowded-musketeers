const radius : number = 6;
let resetTimer : boolean = false;
let globalAnalogTimerVariable : number = 0;

var a = ['noll','en ','två ','tre ','fyra ', 'fem ','sex ','sju ','åtta ','nio ','tio ','elva ','tolv ','tretton ','fjorton ','femton ','sexton ','sjutton ','arton ','nitton '];
var b = ['tjugo','trettio','fyrtio','femtio'];

document.addEventListener("DOMContentLoaded", function(event){

    let clockMarks = document.querySelector('.clock__marks');

    for (let index : number = 0; index  < 60; index++) {
        let li = document.createElement("li");
        clockMarks.appendChild(li);
    }
})

export const analogClock = (timeInMinutes : number) => {

    let currentTime : Date = new Date();
	let second : number = currentTime.getSeconds() * radius;
	let minute : number  = currentTime.getMinutes() * radius + Math.floor(second / (radius * 10) * 10) / 10;
	let hour : number  = currentTime.getHours() * radius * 5 + Math.floor(minute / (radius * 2) * 10) / 10;


    setClockHands(second, minute, hour, timeInMinutes - 1);
}

export const toWords = (num : number) : string => {

    if (num < 20) return a[num];
    let digit : number = num % 10;

    if (num < 100) return b[~~(num / 10) - 2] + (digit ? "" + a[digit]: "");
}

const setClockHands = (second, minute, hour, minutesToCountDown) => {

    let secondElm    : HTMLDivElement = document.querySelector('.clock__hand--second');
    let minuteElm    : HTMLDivElement = document.querySelector('.clock__hand--minute');
    const talTillOrd : HTMLDivElement = document.querySelector('#ord');

    let currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    
    let futureDate : Date = new Date();
    futureDate.setMinutes(0);
    futureDate.setMinutes(minutesToCountDown);

    clearInterval(globalAnalogTimerVariable);

    globalAnalogTimerVariable = setInterval(() => {

        const minutes : number = currentDate.getMinutes();
        const seconds : number = currentDate.getSeconds();

        const secondsFraction : number = seconds / 60;
        const minutesFraction : number = (secondsFraction + minutes) / 60;

        const secondsRotate = secondsFraction * 360;
        const minutesRotate = minutesFraction * 360;

        secondElm.style.transform = `rotate(${secondsRotate}deg)`;
        minuteElm.style.transform = `rotate(${minutesRotate}deg)`;

        currentDate.setSeconds( currentDate.getSeconds() + 1);

        let difference_ms : number = futureDate.getTime() - currentDate.getTime();
        difference_ms = difference_ms / 1000;       
        
        let sekunder : number = Math.floor(difference_ms % 60);
        
        difference_ms = difference_ms/60; 
        
        let minuter : number = Math.floor(difference_ms % 60);
        
        talTillOrd.innerHTML = (`${toWords(minuter)} minuter och ${toWords(sekunder)} sekunder kvar`).toUpperCase();

    }, 1000);
}

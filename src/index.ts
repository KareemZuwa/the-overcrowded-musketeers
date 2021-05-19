import { timer, startCountdown } from './TS-module/startcountdown'

const setTimerForm: HTMLFormElement = document.querySelector('#set-timer-form');

let timeAmountText = document.getElementById('set-time-length');
let timeAmount: number = 10;
let totalTimeInSeconds: number;
let totalTime;

let increaseBtn: HTMLAnchorElement= document.querySelector('#increase');
let decreaseBtn: HTMLAnchorElement = document.querySelector('#decrease');
let intervalChecked: HTMLInputElement = document.querySelector('#intervals-check');
let breakChecked: HTMLInputElement = document.querySelector('#break-check');

interface timeInfo {
    timeInMinutes : number;
    intervalOn: boolean;
    addBreak: boolean;
    totalTimeIntervalInSeconds(intervalOn: boolean, addBreak: boolean): number;
}

const timeHeader = document.createElement('h1');
timeHeader.innerText = `${timeAmount}`;
timeAmountText.insertBefore(timeHeader, increaseBtn);

const increaseTime = () => {
    timeAmount+=1;
    timeHeader.innerText = `${timeAmount}`;
    
};
const decreaseTime = () => {
    timeAmount-=1;
    timeHeader.innerText = `${timeAmount}`;
};

increaseBtn.onclick = () => increaseTime();
decreaseBtn.onclick = () => decreaseTime();


//When submit is clicked, a new timeInfo interface is created. The total amount of seconds is calculated, including break-time
//The startCountdown-function is called with information from the interface as arguments.
setTimerForm.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    let timeObject: timeInfo = {
        timeInMinutes : timeAmount,
        intervalOn: intervalChecked.checked,
        addBreak: breakChecked.checked,
        totalTimeIntervalInSeconds(intervalOn: boolean, addBreak: boolean): number {
            if (intervalOn) {
                totalTimeInSeconds =timeAmount*60;
                return totalTimeInSeconds;
            } else if (!intervalOn && addBreak) {
                console.log("error, can't set break without intervals enabled");
                return (0);
            } else {
                console.log('total time in minutes, no intervals: ', timeAmount);
                totalTimeInSeconds =timeAmount*60;
                return totalTimeInSeconds;
            }
        }     
    }
    totalTime = timeObject.totalTimeIntervalInSeconds(timeObject.intervalOn, timeObject.addBreak)
    console.log(totalTime);
    startCountdown(totalTime, timeObject.intervalOn, timeObject.addBreak)

    let testtext = document.createElement('span')
    testtext.innerText = `${totalTime}`
    document.querySelector('form').appendChild(testtext)


})


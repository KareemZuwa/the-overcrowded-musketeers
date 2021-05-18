import { start_countdown } from './visual';
import { hda } from './TS-module/test'
console.log(start_countdown)
let hej = hda;
console.log(hej);


const setTimerForm: HTMLFormElement = document.querySelector('#set-timer-form');

let timeAmountText = document.getElementById('set-time-length');
let timeAmount: number = 10;
let totalTimeInSeconds: number;

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

setTimerForm.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    let timeObject: timeInfo = {
        timeInMinutes : timeAmount,
        intervalOn: intervalChecked.checked,
        addBreak: breakChecked.checked,
        totalTimeIntervalInSeconds(intervalOn: boolean, addBreak: boolean): number {
            if (intervalOn && addBreak) {
                timeAmount = timeAmount+5;
                console.log('total interval plus break time in minutes: ', timeAmount);
                totalTimeInSeconds =timeAmount*60;
                console.log('total interval plus break time in seconds: ', totalTimeInSeconds);
                return totalTimeInSeconds;
            } else if (intervalOn && !addBreak) {
                console.log('total interval time in minutes: ', timeAmount);
                totalTimeInSeconds =timeAmount*60;
                console.log('total interval time in seconds: ', totalTimeInSeconds);
                return totalTimeInSeconds;
            } else if (!intervalOn && addBreak) {
                console.log("error, can't set break without intervals enabled");
                return (0);
            } else {
                console.log('total time in minutes, no intervals: ', timeAmount);
                totalTimeInSeconds =timeAmount*60;
                console.log('total time in seconds, no intervals: ', totalTimeInSeconds);
                return totalTimeInSeconds;
            }
        }     
    }
    console.log(timeObject, timeObject.totalTimeIntervalInSeconds(timeObject.intervalOn, timeObject.addBreak));
    
})

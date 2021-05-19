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

let timeObject: timeInfo;


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




export { timeObject }
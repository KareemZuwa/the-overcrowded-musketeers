
const setTimerForm: HTMLFormElement = document.querySelector('#set-timer-form');

let timeAmountText = document.getElementById('set-time-length');
let timeAmount: number = 10;

let increaseBtn: HTMLAnchorElement= document.querySelector('#increase');
let decreaseBtn: HTMLAnchorElement = document.querySelector('#decrease');
let intervalChecked: HTMLInputElement = document.querySelector('#intervals-check');
let breakChecked: HTMLInputElement = document.querySelector('#break-check');

interface timeInfo {
    time : number;
    intervalOn: boolean;
    addBreak: boolean;
    totalTimeInterval(intervalOn: boolean, addBreak: boolean): number;
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
        time : timeAmount,
        intervalOn: intervalChecked.checked,
        addBreak: breakChecked.checked,
        totalTimeInterval(intervalOn: boolean, addBreak: boolean): number {
            if (intervalOn && addBreak) {
                console.log('total interval plus break time: ', timeAmount+5);
                return timeAmount + 5;
            } else if (intervalOn && !addBreak) {
                console.log('total interval time: ', timeAmount);
                return timeAmount;
            } else if (!intervalOn && addBreak) {
                console.log("error, can't set break without intervals enabled");
                return (0);
            } else {
                return 0;
            }
        }     
    }
    console.log(timeObject, timeObject.totalTimeInterval(timeObject.intervalOn, timeObject.addBreak));
    
})

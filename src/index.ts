
const setTimerForm: HTMLFormElement = document.querySelector('#set-timer-form');

let timeAmountText = document.getElementById('set-time-length');
let timeAmount: number = 10;

let increaseBtn: HTMLAnchorElement= document.querySelector('#increase');
let decreaseBtn: HTMLAnchorElement = document.querySelector('#decrease');
let intervalChecked: HTMLInputElement = document.querySelector('#intervals-check');
let breakChecked: HTMLInputElement = document.querySelector('#break-check');

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
    console.log('Intervals: ', intervalChecked.checked, '5 min break between intervals: ', breakChecked.checked, 'Chosen time amount: ', timeAmount, 'Total interval and break time: ', timeAmount + 5);
    
})

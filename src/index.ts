
const setTimerForm: HTMLFormElement = document.querySelector('#set-timer-form');

let timeAmountText = document.getElementById('time-amount').innerHTML;
let timeAmount: number = 10;

let increaseBtn: HTMLAnchorElement= document.querySelector('#increase')
let decreaseBtn: HTMLAnchorElement = document.querySelector('#decrease')
let intervalChecked: HTMLInputElement = document.querySelector('#intervals-check')
let breakChecked: HTMLInputElement = document.querySelector('#break-check')



const increaseTime = () => {
    timeAmount+=1
    timeAmountText = `${timeAmount}`
    console.log(timeAmount, timeAmountText);
    
};
const decreaseTime = () => {
    timeAmount-=1
    timeAmountText = `${timeAmount}`
    console.log(timeAmount, timeAmountText);
};

increaseBtn.onclick = () => increaseTime()
decreaseBtn.onclick = () => decreaseTime()

setTimerForm.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    console.log(intervalChecked.value, breakChecked.value, timeAmount);
    
})

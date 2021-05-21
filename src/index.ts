
//import { timer, startCountdown } from './TS-module/startcountdown'
import { test } from './visual';
import { analogClock, toWords, globalAnalogTimerVariable } from './TS-module/analogClock';
import  exportNav  from "../src/TS-module/navigation";


import { Timer } from 'easytimer.js';

let timer: Timer = new Timer();

let pauseTimer: Timer = new Timer();

let digitalTimer: HTMLHeadingElement = document.querySelector('#digitalTime')

let abortBtn : HTMLButtonElement = document.querySelector('#stop')
let formBG : HTMLFormElement = document.querySelector('form')

let circleNumber:any = 11;
let circle: any = document.querySelector(`.circle${circleNumber}`)

// Start countdown on click, with times in seconds from form as arguments
let startCountdown = (timeInSeconds: number, intervalOn: boolean, addBreak: boolean) => {
    timer.start({countdown: true, startValues: {seconds: timeInSeconds}, target: {seconds: 0}})
    pauseTimer.start({countdown: true, startValues: {seconds: 50}, target: {seconds: 0}})
    pauseTimer.pause()
    let countdownNumber:number = timeInSeconds;
   let label: HTMLDivElement  = document.querySelector('#progbar')
    timer.on('secondsUpdated', () => {
       
        let procent = (countdownNumber / timeInSeconds)*100
        //console.log('timer values: ', timer.getTimeValues().seconds, 'procent: ', procent);
        label.style.height = `${procent}vh`;
        let division:any = procent / 11
         circleNumber = parseInt( division ) +1
        //let circle = document.querySelector(`.circle${circleNumber}`)
        //console.log(’ rad 35 ’, ‘Circlenumber ‘, circleNumber, circle );
        circle.style.backgroundColor =`#999999`
        countdownNumber--;

        let seconds:number = countdownNumber % 60
        let minutesFloat: any = countdownNumber / 60
        let minutes:any = parseInt(minutesFloat)
        if ( minutes < 10 && seconds < 10 ) {
            digitalTimer.innerText = `0${minutes} : 0${seconds}`;
        } else if ( minutes < 10 && seconds > 10 ) {
            digitalTimer.innerText = `0${minutes} : ${seconds}`;
        } else if ( minutes > 10 && seconds < 10 ) {
            digitalTimer.innerText = `${minutes}: 0${seconds}`;
        } else {
            digitalTimer.innerText = `${minutes}: ${seconds}`;
        }
        
    })
    //If intervals is checked, restart timer after first interval ends, else stop timer
    timer.on('targetAchieved', () => {
       // console.log('timer1 ',"time's up!");
        countdownNumber = timeInSeconds;
        if (intervalOn && addBreak) {
            timer.pause()
            pauseTimer.reset()
        } else if (intervalOn && !addBreak) {
            timer.reset();
        } else {
            timer.stop();
            let alarmView: HTMLDivElement = document.querySelector('#alarmRinging');
            alarmView.style.display = `flex`;
        }
    })

    pauseTimer.on('secondsUpdated', () => {
        //console.log('paus');
    })
    pauseTimer.on('targetAchieved', () => {
        pauseTimer.pause()
        pauseTimer.reset()
        pauseTimer.stop()
        timer.reset();
        //console.log('pause over'); 
    })

    abortBtn.addEventListener('click', () => {
        //console.log('timer stoppad', timer.isRunning());
        timer.stop()
        //console.log('timer stoppad', timer.isRunning());
        
    })
}
//Export the entire timer object and the startcountdown function
//export { timer, startCountdown }
















let setTimerForm: HTMLFormElement = document.querySelector('#set-timer-form');

let timeAmountText = document.getElementById('set-time-length');
let timeAmount: number = 10;
let totalTimeInSeconds: number;

let increaseBtn: HTMLAnchorElement= document.querySelector('#increase');
let decreaseBtn: HTMLAnchorElement = document.querySelector('#decrease');
let intervalChecked: HTMLInputElement = document.querySelector('#intervals-check');
let breakChecked: HTMLInputElement = document.querySelector('#break-check');


let divToRenderIn : HTMLDivElement = document.querySelector('#divToRenderIn');
let setTimerFormSection : HTMLDivElement = document.querySelector('#setTimeFormSection');
let analogClockDiv : HTMLDivElement = document.querySelector('#analogClock');
let startTimerButton : HTMLDivElement = document.querySelector('#startTimerBtn');
let startDiv : HTMLDivElement = document.querySelector('#app');
let abortButton : HTMLButtonElement = document.querySelector('#stop');

divToRenderIn.appendChild(startDiv);

/* get a reference to the menu div in the html page */

// populate the above div with the ul list thats been created dynamically with exportNav

const deRenderDivToRenderIn = (htmElement : HTMLElement, setNav : boolean) => {
    
    const divToRenderInChildren = Array.from(divToRenderIn.children);
    divToRenderInChildren.forEach(child => {

        child !== document.querySelector('#menuToggle') ? divToRenderIn.removeChild(child) : null;
    });

    if(setNav) divToRenderIn.appendChild(exportNav());
    divToRenderIn.appendChild(htmElement);
}

let startImage : HTMLAnchorElement = document.querySelector('#startImage');
startImage.addEventListener('click', () => {
    deRenderDivToRenderIn(setTimerForm, false);
});

startTimerButton.addEventListener('click', () => {
    deRenderDivToRenderIn(analogClockDiv, true);
    abortButton.style.display = "flex"
});

abortButton.addEventListener('click', () => {
    deRenderDivToRenderIn(setTimerForm, false);
    analogClock(timeAmount)
    abortButton.style.display = "none"
    clearInterval(globalAnalogTimerVariable);
})

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


//When submit is clicked, a new timeInfo interface is created. The total amount of seconds is calculated, including break-time
//The startCountdown-function is called with information from the interface as arguments.

setTimerForm.addEventListener('submit', (e: Event) => {
    //e.preventDefault();
    timeObject = {
        timeInMinutes : timeAmount,
        intervalOn: intervalChecked.checked,
        addBreak: breakChecked.checked,
        totalTimeIntervalInSeconds(intervalOn: boolean, addBreak: boolean): number {
            if (intervalOn && addBreak) {
                timeAmount = timeAmount;
                console.log('total interval plus break time in minutes: ', timeAmount);
                totalTimeInSeconds =timeAmount*60;
                //console.log('total interval plus break time in seconds: ', totalTimeInSeconds);
                return totalTimeInSeconds;
            } else if (intervalOn && !addBreak) {
                //console.log('total interval time in minutes: ', timeAmount);
                totalTimeInSeconds =timeAmount*60;
                //console.log('total interval time in seconds: ', totalTimeInSeconds);
                return totalTimeInSeconds;
            } else if (!intervalOn && addBreak) {
                //console.log("error, can't set break without intervals enabled");
                return (0);
            } else {
                //console.log('total time in minutes, no intervals: ', timeAmount);
                totalTimeInSeconds =timeAmount*60;
                //console.log('total time in seconds, no intervals: ', totalTimeInSeconds);
                return totalTimeInSeconds;
            }
        }     
    }
    let totalTime = timeObject.totalTimeIntervalInSeconds(timeObject.intervalOn, timeObject.addBreak)
    //console.log(timeObject.timeInMinutes);
    //analogClock(timeObject.timeInMinutes)
    startCountdown(totalTime, timeObject.intervalOn, timeObject.addBreak)
   
}, false);


export {timeObject}




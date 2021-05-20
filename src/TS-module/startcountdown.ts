import { Timer } from 'easytimer.js';

let timer: Timer = new Timer();

let pauseTimer: Timer = new Timer();

let digitalTimer: HTMLHeadingElement = document.querySelector('#digitalTime')

let abortBtn : HTMLButtonElement = document.querySelector('#stop')

// Start countdown on click, with times in seconds from form as arguments
let startCountdown = (timeInSeconds: number, intervalOn: boolean, addBreak: boolean) => {
    timer.start({countdown: true, startValues: {seconds: timeInSeconds}, target: {seconds: 0}})
    pauseTimer.start({countdown: true, startValues: {seconds: 50}, target: {seconds: 0}})
    pauseTimer.pause()
    let countdownNumber:number = timeInSeconds;
    timer.on('secondsUpdated', () => {
       
        console.log('timer1 ', countdownNumber--);
        console.log('modulus', countdownNumber % 60);
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
        console.log('timer1 ',"time's up!");
        countdownNumber = timeInSeconds;
        if (intervalOn && addBreak) {
            timer.pause()
            pauseTimer.reset()
        } else if (intervalOn && !addBreak) {
            timer.reset();
        } else {
            timer.stop();
        }
    })

    pauseTimer.on('secondsUpdated', () => {
        console.log('paus');
    })
    pauseTimer.on('targetAchieved', () => {
        pauseTimer.pause()
        pauseTimer.reset()
        pauseTimer.stop()
        timer.reset();
        console.log('pause over'); 
    })

    abortBtn.addEventListener('click', () => {
        console.log('timer stoppad', timer.isRunning());
        timer.stop()
        console.log('timer stoppad', timer.isRunning());
        
    })
}
//Export the entire timer object and the startcountdown function
export { timer, startCountdown }


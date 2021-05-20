import { Timer } from 'easytimer.js';

let timer: Timer = new Timer();

let digitalTimer: HTMLHeadingElement = document.querySelector('#digitalTime')

let abortBtn : HTMLButtonElement = document.querySelector('#stop')

// Start countdown on click, with times in seconds from form as arguments
let startCountdown = (timeInSeconds: number, intervalOn: boolean, addBreak: boolean) => {
    timer.start({countdown: true, startValues: {seconds: timeInSeconds}, target: {seconds: 0}})
    let countdownNumber:number = timeInSeconds;
    timer.on('secondsUpdated', () => {
       
       //console.log('timer1 ', countdownNumber--);
       //console.log('modulus', countdownNumber % 60);
       //countdownNumber--
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
            let pausInterval = setInterval(() => {
                console.log('paus');
            }, 1000)
             setTimeout(() => {
                 clearInterval(pausInterval)
                timer.reset();
                console.log('pause over');            
            }, 300000);
        } else if (intervalOn && !addBreak) {
            timer.reset();
        } else {
            timer.stop();
        }
    })

    abortBtn.addEventListener('click', () => {
        console.log('timer stoppad', timer.isRunning());
        timer.stop()
        console.log('timer stoppad', timer.isRunning());
        
    })
}
//Export the entire timer object and the startcountdown function
export { timer, startCountdown }


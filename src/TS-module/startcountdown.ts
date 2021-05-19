import { Timer } from 'easytimer.js';

let timer: Timer = new Timer();/* 
let pauseTimer: Timer = new Timer();
let pauseSeconds = 60 */

/* let pauseTime = () => {
    pauseTimer.start({countdown: true, startValues: {seconds: 60}, target: {seconds: 0}})
    let numb = pauseSeconds
    pauseTimer.addEventListener('secondsUpdated', ()=> {
        console.log('pausetimer ', numb--);
    })
    pauseTimer.addEventListener('targetAchieved', () => {
        pauseTimer.stop()
        timer.reset()
        console.log(pauseTimer.isRunning(), 'pausetimer is not running, target achieved');
        
    })
} */


// Start countdown on click, with times in seconds from form as arguments
let startCountdown = (timeInSeconds: number, intervalOn: boolean, addBreak: boolean) => {
    timer.start({countdown: true, startValues: {seconds: timeInSeconds}, target: {seconds: 0}})
    let countdownNumber = timeInSeconds;
    timer.on('secondsUpdated', () => {
        console.log('timer1 ', countdownNumber--);
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
}
//Export the entire timer object and the startcountdown function
export { timer, startCountdown }


import { Timer } from 'easytimer.js';



let timer: Timer = new Timer();


// Start countdown on click, with times in seconds from form as arguments
let startCountdown = (timeInSeconds: number, intervalOn: boolean) => {
timer.start({countdown: true, startValues: {seconds: timeInSeconds}})
let countdownNumber = timeInSeconds;

timer.on('secondsUpdated', () => {
    console.log(countdownNumber--);
})
//If intervals is checked, restart timer after first interval ends, else stop timer
timer.on('targetAchieved', () => {
    console.log("time's up!");
    countdownNumber = timeInSeconds;
    if (intervalOn) {
        timer.reset();
    } else {
        timer.stop();
    }
})

}
//Export the entire timer object and the startcountdown function
export { timer, startCountdown }

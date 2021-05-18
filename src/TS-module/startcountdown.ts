import { Timer } from 'easytimer.js';



let timer: Timer = new Timer();


// On click start timer
let startCountdown = (timeInSeconds: number) => {
timer.start({countdown: true, startValues: {seconds: timeInSeconds}})


timer.on('secondsUpdated', () => {
    console.log(timeInSeconds--);
    
})

timer.on('targetAchieved', () => {
    console.log("time's up!");
    
})

}
export { timer, startCountdown }

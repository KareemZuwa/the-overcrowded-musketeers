import { Timer } from 'easytimer.js'
import { timer } from './TS-module/startcountdown'

const progress: any = document.querySelector('#pbar') //any sätts här för att få value att fungera med nummer.

timer.on('secondsUpdated', () =>{
    console.log(timer)
})

function start_countdown(){

    let reverse_counter: number = 20; //värde från settimer ist för 20
    let downloadTimer: number = setInterval(function(){
    progress.value = 20 - --reverse_counter; 
    if(reverse_counter <= 0)
    clearInterval(downloadTimer);

},1000);
}
start_countdown();

export {start_countdown}
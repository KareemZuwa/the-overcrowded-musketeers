//import { timeObject } from './index'
//import { Timer } from 'easytimer.js'
import { timer } from './TS-module/startcountdown'
import * as digitalpause from './TS-module/digitalpause'

let El: any = document.querySelector('#break-page')

let test = () =>{
    timer.on('secondsUpdated', () =>{
    let minutes = timer.getTimeValues().minutes
    let seconds = timer.getTimeValues().seconds
    let calculate: number = minutes * 60 + seconds +1
    El.innerHTML = '';
    El.insertAdjacentHTML('beforeend', digitalpause.render(timer));

const progress: HTMLProgressElement = document.querySelector('#pbar') //any sätts här för att få value att fungera med nummer.
function start_countdown(){
    
    let reverse_counter: number = calculate; //värde från settimer ist för 20
    let downloadTimer: number = setInterval(function(){
    progress.value = calculate - --reverse_counter; 
    progress.max = calculate
    if(reverse_counter <= 0)
    clearInterval(downloadTimer);
},1000);
}
start_countdown();
})
}

test()
<<<<<<< HEAD
=======

>>>>>>> ba65aa3adc002b86b65a1053c3f6b8c6b0e31da1
export {test}


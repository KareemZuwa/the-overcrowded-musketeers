import { Timer } from 'easytimer.js'
import { timer } from './TS-module/startcountdown'
import * as digitalpause from './TS-module/digitalpause'

let El: any = document.querySelector('#break-page')

let test = () =>{

    timer.on('secondsUpdated', () =>{
    let minutes = timer.getTimeValues().minutes
    let seconds = timer.getTimeValues().seconds
    let calculate: Number = minutes * 60 + seconds
    console.log(calculate)
    El.innerHTML = '';
    El.insertAdjacentHTML('beforeend', digitalpause.render(timer));

const progress: any = document.querySelector('#pbar') //any sätts här för att få value att fungera med nummer.

function start_countdown(){
    console.log(calculate)
    
    let reverse_counter: any = calculate; //värde från settimer ist för 20
    let downloadTimer: any = setInterval(function(){
    progress.value = calculate - --reverse_counter; 
    if(reverse_counter <= 0)
    clearInterval(downloadTimer);

},1000);
}
start_countdown();
})
}

test()





export {test}

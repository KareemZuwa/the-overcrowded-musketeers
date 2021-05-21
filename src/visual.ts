import { timer } from './TS-module/startcountdown'
import * as digitalpause from './TS-module/digitalpause'

let El: any = document.querySelector('#break-page')

let test = () =>{

    timer.on('secondsUpdated', () =>{
    let minutes = timer.getTimeValues().minutes
    let seconds = timer.getTimeValues().seconds
    let calculate: number = minutes * 60 + seconds +1 //räknar ut sekundrarna som valts för att sen föra in i progress bar
    El.innerHTML = '';
    El.insertAdjacentHTML('beforeend', digitalpause.render(timer));

const progress: HTMLProgressElement = document.querySelector('#pbar') 
    function start_countdown(){
        
        let reverse_counter: number = calculate; //värde från settimer
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
export {test}

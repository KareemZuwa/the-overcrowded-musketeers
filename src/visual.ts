// import { totalTimeInSeconds } from './index'
// import { Timer } from 'easytimer.js'
// import { startCountdown } from './TS-module/startcountdown'
// import * as digitalpause from './TS-module/digitalpause'

// let El: any = document.querySelector('#break-page')

// console.log(totalTimeInSeconds)
// const progress: any = document.querySelector('#pbar') //any sätts här för att få value att fungera med nummer.
// // let prog: HTMLElement = document.createElement('progress');
// //     prog.setAttribute('value', '20');
// //     prog.setAttribute('max', '20');
// //     document.getElementById('visual-page').appendChild(prog)

// function timing(){
//     console.log()
//     let reverse_counter: any = 20; //värde från settimer ist för 20
//     let downloadTimer: any = setInterval(function(){
//     progress.value = 20 - --reverse_counter; 
//     if(reverse_counter <= 0)
//     clearInterval(downloadTimer);
// },1000);
// }
// timing()
// export {timing}

 import { timeObject } from './index'
 import { Timer } from 'easytimer.js'
 import { timer } from './TS-module/startcountdown'
 import * as digitalpause from './TS-module/digitalpause'

 console.log(timeObject)
 let El: any = document.querySelector('#break-page')

 let test = () =>{

     timer.on('secondsUpdated', () =>{
     let minutes = timer.getTimeValues().minutes //får ut minuter & sekunder
     let seconds = timer.getTimeValues().seconds
     let calculate: Number = minutes * 60 + seconds + 1 //omvandlar för progress bar
     console.log(calculate)
     El.innerHTML = '';
     El.insertAdjacentHTML('beforeend', digitalpause.render(timer));

  const progress: any = document.querySelector('#pbar') //any sätts här för att få value att fungera med nummer.
 console.log(calculate)

let value: number = progress.value
 function start_countdown(calculate){
     console.log(calculate)
    
     let reverse_counter: any = calculate; //värde från settimer ist för 20
     let downloadTimer: any = setInterval(function(){
    value = calculate - --reverse_counter;
     if(reverse_counter <= 0)
     clearInterval(downloadTimer);
 console.log(timeObject)
 },1000);
 }
 start_countdown(calculate);
 })
  }

 test()
 export {test}






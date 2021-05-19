import { Timer } from 'easytimer.js'
import { timer } from './startcountdown'
import * as digitaltime from '../TS-module/digital-timer';

timer.on('secondsUpdated', () =>{
    El.innerHTML = '';
    El.insertAdjacentHTML('beforeend', digitaltime.render(timer))
})


let El: any = document.querySelector('#break-page');



export {timed}

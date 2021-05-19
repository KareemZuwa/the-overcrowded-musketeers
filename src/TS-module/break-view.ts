import { timer } from './startcountdown'
import * as digitalpause from './digitalpause'

let El: any = document.querySelector('#break-page')

timer.on('secondsUpdated', () =>{
    console.log(timer.getTimeValues().minutes)
    console.log(timer.getTimeValues().seconds)

    let minutes = timer.getTimeValues().minutes
    let seconds = timer.getTimeValues().seconds

    console.log(minutes:seconds)

        El.innerHTML = '';
        El.insertAdjacentHTML('beforeend', digitalpause.render(timer));

})

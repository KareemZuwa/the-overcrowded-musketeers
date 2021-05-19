import { timeObject } from './index'

const progress: any = document.querySelector('#pbar') //any sätts här för att få value att fungera med nummer.
console.log(timeObject)

function timeglass(){

    let reverse_counter: number = 20; //värde från settimer ist för 20
    let downloadTimer: number = setInterval(function(){
    progress.value = 20 - --reverse_counter; 
    if(reverse_counter <= 0)
    clearInterval(downloadTimer);
    console.log(timeObject)
},1000);
}
timeglass();

export {timeglass}
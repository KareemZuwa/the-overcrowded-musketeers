
const startingMinutes: number = 1;
let time: number = startingMinutes * 60;

const countDownEl: HTMLElement = document.getElementById('break-countdown');

setInterval(upDateCountDown, 1000);

function upDateCountDown() {
    const minutes:number = Math.floor(time / 60);
    let seconds:any = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;
    if (minutes === 0 && seconds === 0) {
        clearInterval()
    }

    countDownEl.innerHTML = `${minutes}:${seconds}`;
    
    
    time--;
}

export { upDateCountDown }
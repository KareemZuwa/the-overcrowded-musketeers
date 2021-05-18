var setTimerForm = document.querySelector('#set-timer-form');
var timeAmountText = document.getElementById('set-time-length');
var timeAmount = 10;
var increaseBtn = document.querySelector('#increase');
var decreaseBtn = document.querySelector('#decrease');
var intervalChecked = document.querySelector('#intervals-check');
var breakChecked = document.querySelector('#break-check');
var timeHeader = document.createElement('h1');
timeHeader.innerText = "" + timeAmount;
timeAmountText.insertBefore(timeHeader, increaseBtn);
var increaseTime = function () {
    timeAmount += 1;
    timeHeader.innerText = "" + timeAmount;
};
var decreaseTime = function () {
    timeAmount -= 1;
    timeHeader.innerText = "" + timeAmount;
};
increaseBtn.onclick = function () { return increaseTime(); };
decreaseBtn.onclick = function () { return decreaseTime(); };
setTimerForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var timeObject = {
        time: timeAmount,
        intervalOn: intervalChecked.checked,
        addBreak: breakChecked.checked,
        totalTimeInterval: function (intervalOn, addBreak) {
            if (intervalOn && addBreak) {
                console.log('total interval plus break time: ', timeAmount + 5);
                return timeAmount + 5;
            }
            else if (intervalOn && !addBreak) {
                console.log('total interval time: ', timeAmount);
                return timeAmount;
            }
            else if (!intervalOn && addBreak) {
                console.log("error, can't set break without intervals enabled");
                return (0);
            }
            else {
                return 0;
            }
        }
    };
    console.log(timeObject, timeObject.totalTimeInterval(timeObject.intervalOn, timeObject.addBreak));
});

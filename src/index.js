"use strict";
exports.__esModule = true;
exports.timeObject = void 0;
var startcountdown_1 = require("./TS-module/startcountdown");
var setTimerForm = document.querySelector('#set-timer-form');
var timeAmountText = document.getElementById('set-time-length');
var timeAmount = 10;
var totalTimeInSeconds;
var totalTime;
var increaseBtn = document.querySelector('#increase');
var decreaseBtn = document.querySelector('#decrease');
var intervalChecked = document.querySelector('#intervals-check');
var breakChecked = document.querySelector('#break-check');
var timeObject;
exports.timeObject = timeObject;
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
//When submit is clicked, a new timeInfo interface is created. The total amount of seconds is calculated, including break-time
//The startCountdown-function is called with information from the interface as arguments.
setTimerForm.addEventListener('submit', function (e) {
    e.preventDefault();
    exports.timeObject = timeObject = {
        timeInMinutes: timeAmount,
        intervalOn: intervalChecked.checked,
        addBreak: breakChecked.checked,
        totalTimeIntervalInSeconds: function (intervalOn, addBreak) {
            if (intervalOn) {
                totalTimeInSeconds = timeAmount * 60;
                return totalTimeInSeconds;
            }
            else if (!intervalOn && addBreak) {
                console.log("error, can't set break without intervals enabled");
                return (0);
            }
            else {
                console.log('total time in minutes, no intervals: ', timeAmount);
                totalTimeInSeconds = timeAmount * 60;
                return totalTimeInSeconds;
            }
        }
    };
    totalTime = timeObject.totalTimeIntervalInSeconds(timeObject.intervalOn, timeObject.addBreak);
    console.log(totalTime);
    startcountdown_1.startCountdown(totalTime, timeObject.intervalOn, timeObject.addBreak);
    var testtext = document.createElement('span');
    testtext.innerText = "" + totalTime;
    document.querySelector('form').appendChild(testtext);
});

"use strict";
exports.__esModule = true;
var test_1 = require("./TS-module/test");
var hej = test_1.hda;
console.log(hej);
var setTimerForm = document.querySelector('#set-timer-form');
var timeAmountText = document.getElementById('set-time-length');
var timeAmount = 10;
var totalTimeInSeconds;
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
        timeInMinutes: timeAmount,
        intervalOn: intervalChecked.checked,
        addBreak: breakChecked.checked,
        totalTimeIntervalInSeconds: function (intervalOn, addBreak) {
            if (intervalOn && addBreak) {
                timeAmount = timeAmount + 5;
                console.log('total interval plus break time in minutes: ', timeAmount);
                totalTimeInSeconds = timeAmount * 60;
                console.log('total interval plus break time in seconds: ', totalTimeInSeconds);
                return totalTimeInSeconds;
            }
            else if (intervalOn && !addBreak) {
                console.log('total interval time in minutes: ', timeAmount);
                totalTimeInSeconds = timeAmount * 60;
                console.log('total interval time in seconds: ', totalTimeInSeconds);
                return totalTimeInSeconds;
            }
            else if (!intervalOn && addBreak) {
                console.log("error, can't set break without intervals enabled");
                return (0);
            }
            else {
                console.log('total time in minutes, no intervals: ', timeAmount);
                totalTimeInSeconds = timeAmount * 60;
                console.log('total time in seconds, no intervals: ', totalTimeInSeconds);
                return totalTimeInSeconds;
            }
        }
    };
    console.log(timeObject, timeObject.totalTimeIntervalInSeconds(timeObject.intervalOn, timeObject.addBreak));
});

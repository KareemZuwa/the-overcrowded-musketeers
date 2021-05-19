"use strict";
exports.__esModule = true;
exports.startCountdown = exports.timer = void 0;
var easytimer_js_1 = require("easytimer.js");
var timer = new easytimer_js_1.Timer();
exports.timer = timer;
// Start countdown on click, with times in seconds from form as arguments
var startCountdown = function (timeInSeconds, intervalOn) {
    timer.start({ countdown: true, startValues: { seconds: timeInSeconds } });
    var countdownNumber = timeInSeconds;
    timer.on('secondsUpdated', function () {
        console.log(countdownNumber--);
    });
    //If intervals is checked, restart timer after first interval ends, else stop timer
    timer.on('targetAchieved', function () {
        console.log("time's up!");
        countdownNumber = timeInSeconds;
        if (intervalOn) {
            timer.reset();
        }
        else {
            timer.stop();
        }
    });
};
exports.startCountdown = startCountdown;

"use strict";
exports.__esModule = true;
exports.startCountdown = exports.timer = void 0;
var easytimer_js_1 = require("easytimer.js");
var timer = new easytimer_js_1.Timer();
exports.timer = timer;
// On click start timer
var startCountdown = function (timeInSeconds) {
    timer.start({ countdown: true, startValues: { seconds: timeInSeconds } });
    timer.on('secondsUpdated', function () {
        console.log(timeInSeconds--);
    });
    timer.on('targetAchieved', function () {
        console.log("time's up!");
    });
};
exports.startCountdown = startCountdown;

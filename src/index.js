var setTimerForm = document.querySelector('#set-timer-form');
var timeAmountText = document.getElementById('time-amount').innerHTML;
var timeAmount = 10;
var increaseBtn = document.querySelector('#increase');
var decreaseBtn = document.querySelector('#decrease');
var intervalChecked = document.querySelector('#intervals-check');
var breakChecked = document.querySelector('#break-check');
var increaseTime = function () {
    timeAmount += 1;
    timeAmountText = "" + timeAmount;
    console.log(timeAmount, timeAmountText);
};
var decreaseTime = function () {
    timeAmount -= 1;
    timeAmountText = "" + timeAmount;
    console.log(timeAmount, timeAmountText);
};
increaseBtn.onclick = function () { return increaseTime(); };
decreaseBtn.onclick = function () { return decreaseTime(); };
setTimerForm.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(intervalChecked.value, breakChecked.value, timeAmount);
});

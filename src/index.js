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
    console.log('Intervals: ', intervalChecked.checked, '5 min break between intervals: ', breakChecked.checked, 'Chosen time amount: ', timeAmount, 'Total interval and break time: ', timeAmount + 5);
});

'use strict';

console.log('timers!');

// Как задать интервал
// let counter = 0;
// function log() {
//   console.log(++counter + ' log!');
// }

// log();

// setInterval(log, 1000);


//Как остановить интервал
// let i = 0;
// let int = setInterval(countForTen, 1000);

// function countForTen() {
//   console.log(++i);
//   if (i === 10) {
//     clearInterval(int);
//   }
// }

// Счетчик

const start = document.getElementById('start');
const stop = document.getElementById('stop');
const count = document.getElementById('count');
let counter = 0
let intCount;

function plusOne() {
  ++counter;
  count.innerHTML = counter;
}

start.addEventListener('click', function () {
  if (!intCount) {
    intCount = setInterval(plusOne, 1000);
  }

});

stop.addEventListener('click', function () {
  clearInterval(intCount);
  intCount = null;
});
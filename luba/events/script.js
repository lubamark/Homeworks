'use strict';

console.log('Events!');

// Координаты события
// const evtButton = document.getElementById('evtButton');
// const body = document.querySelector('body');
// const title = document.getElementById('title');
// let isCoordsChecking = false;

// evtButton.addEventListener('click', function (evt) {
//   isCoordsChecking = !isCoordsChecking;
//   if (isCoordsChecking) {
//     title.style.display = 'block';
//     body.addEventListener('mousemove', checkCoords);
//   } else {
//     title.style.display = 'none';
//     body.removeEventListener('mousemove', checkCoords);
//   }
// });

// function checkCoords(evt) {
//   title.innerHTML = `Client =  x: ${evt.clientX}, y: ${evt.clientY} </br>
//    Page =  x: ${evt.pageX}, y: ${evt.pageY}`;
// }

// Создание события
// const createEvtB = document.getElementById('createEvtButton');

// createEvtB.addEventListener('click', function (evt) {
//   console.log(evt);
//   alert('Клик!');
// });


// createEvtB.addEventListener('mouseleave', function (evt) {
//   let newEvent = new Event('click');
//   this.dispatchEvent(newEvent);
// })


// event.target, preventDefault, stopPropagation
// const targetEl = document.getElementById('target');
// const body = document.querySelector('body');
// const link = document.getElementById('link');

// targetEl.addEventListener('click', function (evt) {
//   console.log('targetEl', evt.target);
//   evt.stopPropagation();
// });

// body.addEventListener('click', function (evt) {
//   console.log('body', evt.target);
// });

// link.addEventListener('click', function (evt) {
//   const href = evt.target.href;
//   const areYouAgreeToGo = confirm(`Вы согласны перейти по ссылке ${href}?`);
//   if (areYouAgreeToGo) {
//     window.location.href = href;
//   } else {
//     evt.preventDefault();
//     evt.stopPropagation();
//   }
// });

// Нажатые клавиши
const textInput = document.getElementById('text');

textInput.addEventListener('keypress', function (evt) {
  console.log(evt.code, evt.key);
})


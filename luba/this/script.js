'use strict';

console.log('this!');

// контекст внутри непривязанной функции
function log() {
  console.log(this); // зависит от строгого режима
}
//log();

// контекст вне функций
//console.log(this);

// контекст в работе с элементами
const el = document.getElementById('elem');
const el2 = document.getElementById('elem2');

function onBlur() {
  console.log(this.value);
}

el.addEventListener('blur', onBlur);
el2.addEventListener('blur', onBlur);

// onBlur(); без привязки зависит от строгого режима

// Потеря контекста
const el3 = document.getElementById('elem3');

// function onFocus() {
//   let newValue = 'Hello!';
//   console.log(this);
//   function onFocusChild() {
//     console.log(newValue);
//     console.log(this);
//     this.value = newValue;
//   }
//   onFocusChild();
// }

// el3.addEventListener('focus', onFocus);

// Решения при потере контекста
//1  записывание this в переменную
// function onFocus1() {
//   let newValue = 'Hello!';
//   let that = this;
//   function onFocusChild() {
//     that.value = newValue;
//   }
//   onFocusChild();
// }

// el3.addEventListener('focus', onFocus1);

// 2 передать this в параметр
// function onFocus2() {
//   let newValue = 'Hello!';
//   function onFocusChild(param) {
//     param.value = newValue;
//   }
//   onFocusChild(this);
// }
// el3.addEventListener('focus', onFocus2);

// 3 стрелочная функция
function onFocus3() {
  let newValue = 'Hello!';
  let onFocusChild = () => {
    this.value = newValue;
  }
  onFocusChild(this);
}
el3.addEventListener('focus', onFocus3);

// привязывание контекста: call
const el4 = document.getElementById('elem4');

function changeValueCall(name, surname) {
  this.value = `Привет! ${name} ${surname}`;
}

changeValueCall.call(el4, 'Jonh', 'Smitn');

// привязывание контекста: apply
const el5 = document.getElementById('elem5');

function changeValueApply(name, surname) {
  this.value = `Привет! ${name} ${surname}`;
}

changeValueApply.apply(el5, ['Ричард', 'Третий']);


// привязывание контекста: bind
const el6 = document.getElementById('elem6');

function changeValue(name, surname) {
  this.value = `Привет! ${name} ${surname}`;
}

const changeValueBind = changeValue.bind(el6);

// changeValue('1', '2'); будет ошибка

changeValueBind('незнайка', 'знайка');
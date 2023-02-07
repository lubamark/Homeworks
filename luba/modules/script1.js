'use strict';

console.log('module 1');

console.log($);

// модули и конфликты переменных
(function () {
  let elem = document.getElementById('div1');

  elem.addEventListener('click', function () {
    this.textContent = Math.pow(+this.textContent, 2);
  });

})();

(function () {
  let elem = document.getElementById('div2');

  elem.addEventListener('click', function () {
    this.textContent = Math.pow(+this.textContent, 3);
  });

})();

// Передача параметров в модули
(function (selector, exp) {
  let elem = document.querySelector(selector);

  elem.addEventListener('click', function () {
    this.textContent = Math.pow(+this.textContent, exp);
  });
})('#div3', 2);


// Передача родительского элемента
(function (selector1, selector2, selector3) {
  let elem1 = document.querySelector(selector1);
  let elem2 = document.querySelector(selector2);
  let elem3 = document.querySelector(selector3);

  elem1.addEventListener('click', function () {
    this.textContent = this.textContent + '!';
  });

  elem2.addEventListener('click', function () {
    this.textContent = this.textContent + '?';
  });

  elem3.addEventListener('click', function () {
    this.textContent = this.textContent + '&';
  });

})('#li1', '#li2', '#li3');


(function (root) {
  let parent = document.querySelector(root)
  let elem1 = parent.querySelector('#li1');
  let elem2 = parent.querySelector('#li2');
  let elem3 = parent.querySelector('#li3');

  elem1.addEventListener('click', function () {
    this.textContent = this.textContent + '!';
  });

  elem2.addEventListener('click', function () {
    this.textContent = this.textContent + '?';
  });

  elem3.addEventListener('click', function () {
    this.textContent = this.textContent + '&';
  });

})('#ul1');

(function (selector) {
  let dropdown = document.querySelector(selector);
  let header = dropdown.querySelector('.j-dropdown-header');
  let body = dropdown.querySelector('.j-dropdown-body');

  body.classList.add('none');

  header.addEventListener('click', function () {
    body.classList.toggle('none');
  })
})('.j-dropdown');

// экспорт переменных

(function () {
  let value = 'value';

  function sum(arr) {
    let sum = 0;

    arr.forEach(element => {
      sum += element;
    });

    return sum;
  }

  window.value = value;
  window.sum = sum;
})();

console.log(window.value);
console.log(window.sum([2, 3, 4, 5]));
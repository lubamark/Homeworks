'use strict';

console.log('Elements!');

//создание элементов
const parent = document.getElementById('appendChild');
const child = document.createElement('p');
child.innerText = 'Привет!'

parent.appendChild(child);
child.addEventListener('click', function () {
  alert(this.innerText);
})

//вставка элементов в цикле
let arr = ['Hello', 'Bonjour', 'Привет'];
const parent2 = document.getElementById('cycle');
for (let i = 0; i < arr.length; i++) {
  const child = document.createElement('p');
  child.textContent = arr[i];
  child.addEventListener('click', function () {
    console.log(this.innerText);
  })
  parent2.appendChild(child);
}

// удаление элементов

const create = document.getElementById('create');
const remove = document.getElementById('remove');
const ul = document.getElementById('ul');

create.addEventListener('click', function () {
  const li = document.createElement('li');
  li.textContent = 'text';
  ul.appendChild(li);
});

remove.addEventListener('click', function () {
  const list = ul.getElementsByTagName('li');
  list[list.length - 1].remove();
});

// append prepend
const list = document.getElementById('list');
const item = document.createElement('li');
const item2 = document.createElement('li');
item.textContent = 'text';
item2.textContent = 'upper';
list.append(item, 'привет');
list.prepend(item2, 'пока');

// insertBefore
const div2 = document.getElementById('div2');
const newList = document.createElement('ul');
const before = div2.querySelector('p');

div2.insertBefore(newList, before);

//insertAdjacentElement & insertAdjacentHTML
const insert = document.getElementById('insert');
const i1 = document.getElementById('i1');
const i2 = document.getElementById('i2');

const newP = document.createElement('p');
newP.textContent = 'ELEMENT';
//beforeBegin, afterEnd, afterBegin, beforeEnd
i1.insertAdjacentHTML('afterBegin', '<p>HTML</p>');
i2.insertAdjacentElement('afterBegin', newP);

//cloneNode
const clone = document.getElementById('clone');
const first = clone.querySelector('.first');
first.addEventListener('click', function () {
  console.log('click!');
})
const cloneFirst = first.cloneNode(true);
clone.append(cloneFirst);

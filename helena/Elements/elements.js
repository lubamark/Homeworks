"use strict";
//317(1)
let paragr = document.querySelector('#paragr');
window.onload = function() {
   setTimeout(function() {
		paragr.textContent = "Hello";
	}, 10000);
};
//317(2) работает
//let i = 0;
//function timer() {
//	setTimeout(function() {
//		console.log(++i);
//		timer(); // вызовем сами себя
//	}, 1000);
//}
//timer();
//318(1)
let ol = document.querySelector('#ol');
let li1 = document.createElement('li');
li1.textContent = 'item';
ol.appendChild(li1);
//318(2)
let ol1 = document.querySelector('#ol1');
let button = document.querySelector('#button');
button.addEventListener('click', addLi)
function addLi() {
	let li2 = document.createElement('li');
	li2.textContent = 'item';
	ol1.appendChild(li2);
}
//319 
let ol2 = document.querySelector('#ol2');
let button1 = document.querySelector('#button1');
button1.addEventListener('click', addLi1)
function addLi1() {
	let li3 = document.createElement('li');
	li3.textContent = 'item';
	ol2.appendChild(li3);
	li3.addEventListener('click', function () {
		li3.textContent = li3.textContent + '!';// по клику на ли добавим !
	});
}
//320
let ul = document.querySelector('#ul');	
for (let i = 1; i <= 10; i++) {
	let li4 = document.createElement('li');
	li4.textContent = i;
	
	ul.appendChild(li4);
}
//321
let div = document.querySelector('#div');
let paragr1 = document.querySelector('#paragr1');
for (let i = 1; i <= 5; i++) {
	let input = document.createElement('input');
	input.value = 'HI'+i;
	
	// Навешиваем обработчик клика:
	input.addEventListener('blur', function() {
		paragr1.textContent = this.value;
	});
	
	div.appendChild(input);
}
//322(1)
let maslli = document.querySelectorAll('.lli');
for (let lli of maslli) {
	lli.addEventListener('click', function () {
		lli.remove();
	})
}
//322(2)
let parent = document.querySelector('#parent');	
let button2 = document.querySelector('#button2');
button2.addEventListener('click', delLastLi)
function delLastLi() {
	parent.lastElementChild.remove();
}
//323 (1)
let ul1 = document.querySelector('#ul1');
let li5 = document.createElement('li');
li5.innerHTML = 'Finish';
ul1.append(li5);
let li6 = document.createElement('li');
li6.innerHTML = 'Start';
ul1.prepend(li6);
//323 (2)
let ul2 = document.querySelector('#ul2');
let libefore = document.querySelector('#libefore');
let li7 = document.createElement('li');
li7.innerHTML = 'New';
ul2.insertBefore(li7, libefore);
li7.addEventListener('click', addSymbol)
function addSymbol() {
	li7.innerHTML = li7.innerHTML + '!';
}
//324 (1)
let p1 = document.createElement('p');
p1.innerHTML = '!!!';
let div1 = document.querySelector('#div1');
div1.insertAdjacentElement('beforeBegin', p1);
//324 (2)
let p2 = document.createElement('p');
p2.innerHTML = '!!!';
let div2 = document.querySelector('#div2');
div2.insertAdjacentElement('afterEnd', p2);
//324(3)
let p3 = document.createElement('p');
p3.innerHTML = '!!!';
let div3 = document.querySelector('#div3');
div3.insertAdjacentElement('afterBegin', p3);
//324(4)
let p4 = document.createElement('p');
p4.innerHTML = '!!!';
let div4 = document.querySelector('#div4');
div4.insertAdjacentElement('beforeEnd', p4);
//324(5)
let div5 = document.querySelector('#div5');
div5.insertAdjacentHTML('beforeBegin', '<div class="www"><p>text</p><p>text</p><input></div>');
//325
let input1 =  document.querySelector('#input1');
let button3 = document.querySelector('#button3');
let div8 = document.querySelector('#div8');
button3.addEventListener('click', cloneEl);
function cloneEl() {
	let clone = input1.cloneNode(true);
	div8.appendChild(clone);
}
//326(1)
let div6 = document.querySelector('#div6');
console.log('326(1)');
console.log(div6.matches('div.www1'));
//326(2)
console.log('326(2)')
console.log(div6.matches('p'));
console.log('Элемент не является абзацем');
//326(3)
let div7 = document.querySelector('#div7');
let paragr2 = document.querySelector('#paragr2');
let contains = div7.contains(paragr2);
console.log('326(3)')
console.log(contains);
//327
let div9 = document.querySelector('#div9');
let arr = [1, 2, 3, 4, 5];
for (let elem of arr) {
	let p = document.createElement('p');
	p.textContent = elem;
	div9.appendChild(p);
	p.addEventListener('click', addOne)
	function addOne() {
		this.textContent = Number(this.textContent)+1;

	}
}


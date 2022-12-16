//262(1)
let inp1 = document.querySelector('#inp1');
let value = inp1.getAttribute('value');
console.log(value);
//262(2)
let inp2 = document.querySelector('#inp2');
let value1 = inp2.getAttribute('class');
console.log(value1);
//262(3)
let inp3 = document.querySelector('#inp3');
inp3.setAttribute('value', 'text');
console.log(value1);
//262(4)
let inp4 = document.querySelector('#inp4');
inp4.setAttribute('class', 'valid');
console.log(inp4.getAttribute('class'));
//262(5)
let inp5 = document.querySelector('#inp5');
inp5.removeAttribute('value');
console.log('Аттрибут value =' + inp5.getAttribute('value'));
//262(6)
let inp6 = document.querySelector('#inp6');
console.log(inp6.hasAttribute('value'));
//263(1)
let paragr = document.querySelector('#paragr');
let length = paragr.classList.length;
console.log('263(1)')
console.log(length + '  класса');
//263(2) 
let paragr1 = document.querySelector('#paragr1');
let classNames = paragr1.classList;
console.log('263(2)');
for (let className of classNames) {
	console.log(className);
}
//263(3)
let paragr2 = document.querySelector('#paragr2');
paragr2.classList.add('kkk');
let classNames1 = paragr2.classList;
console.log('263(3)');
for (let className of classNames1) {
	console.log( className);
}
//263(4)
let paragr3 = document.querySelector('#paragr3');
paragr3.classList.remove('www', 'zzz');
console.log('263(4)');
console.log(paragr3.classList);
//263(5)
let paragr4 = document.querySelector('#paragr4');
let contain = paragr4.classList.contains('ggg');
console.log('263(5)');
if (contain == true) console.log('Данный элемент содержит класс ggg');
else console.log('Данный элемент не содержит класс ggg');
//263(6)
let paragr5 = document.querySelector('#paragr5');
paragr5.classList.toggle('www');
console.log('263(6)');
console.log(paragr5.classList);
//264(1)
let div = document.querySelector('#div');
let button = document.querySelector('#button');
button.addEventListener('click', func);
function func() {
	div.style.width = "500px";
	div.style.height = "200px";
	div.style.color = 'red';
	div.style.border = 'solid blue';
}
//264(2)
let div1 = document.querySelector('#div1');
let button1 = document.querySelector('#button1');
button1.addEventListener('click', func1);
function func1() {
	div1.style.fontSize = "20px";
	div1.style.backgroundColor = "red";
	div1.style.borderTop = "solid blue";
}
//264(3)
let button2 = document.querySelector('#button2');
button2.addEventListener('click', func2);
let maslli = document.querySelectorAll('.lli');
function func2() {
	for (let lli of maslli) {
		console.log(lli);
		lli.style.cssFloat = 'left';		
}
}
//265(2)
let button3 = document.querySelector('#button3');
button3.addEventListener('click', func3);
let paragr6 = document.querySelector('#paragr6');
function func3() {
	paragr6.classList.add('cross');		
}
let button4 = document.querySelector('#button4');
button4.addEventListener('click', func4);
function func4() {
	paragr6.classList.add('bold');		
}
let button5 = document.querySelector('#button5');
button5.addEventListener('click', func5);
function func5() {
	paragr6.classList.add('colored');		
}
//265(3)
let button6 = document.querySelector('#button6');
button6.addEventListener('click', func6);
let paragr7 = document.querySelector('#paragr7');
function func6() {
	paragr7.classList.toggle('cross');		
}
let button7 = document.querySelector('#button7');
button7.addEventListener('click', func7);
function func7() {
	paragr7.classList.toggle('bold');		
}
let button8 = document.querySelector('#button8');
button8.addEventListener('click', func8);
function func8() {
	paragr7.classList.toggle('colored');		
}
//266(1)
let button9 = document.querySelector('#button9');
button9.addEventListener('click', func9);
function func9() {
	let list_parent = document.querySelector('#list');
	console.log(list_parent.firstElementChild.innerHTML);
	list_parent.firstElementChild.classList.add('colored');
}
//266(3)
let button10 = document.querySelector('#button10');
button10.addEventListener('click', func10);
function func10() {
	let list_parent1 = document.querySelector('#list1');
	for (let lli1 of list_parent1.children) {
		lli1.textContent =lli1.textContent + '!';		
}
}
//266(4)
let button11 = document.querySelector('#button11');
button11.addEventListener('click', func11);
function func11() {
	let elem = document.querySelector('#elem');
	elem.parentElement.style.border = 'solid red';
}
//266(5)
let button12 = document.querySelector('#button12');
button12.addEventListener('click', func12);
function func12() {
	let elem1 = document.querySelector('#elem1');
	let closestParent = elem1.closest('div');
	console.log(closestParent);
}
//266(6)
let button13 = document.querySelector('#button13');
button13.addEventListener('click', func13);
function func13() {
	let elem2 = document.querySelector('#elem2');
	let closestParent1 = elem2.closest('.www');
	console.log(closestParent1);
}
//266(7)
let button14 = document.querySelector('#button14');
button14.addEventListener('click', func14);
function func14() {
	let elem3 = document.querySelector('#elem3');
	elem3.previousElementSibling.textContent = elem3.previousElementSibling.textContent + '!';
}
//266(9)
let button15 = document.querySelector('#button15');
button15.addEventListener('click', func15);
function func15() {
	let elem4 = document.querySelector('#elem4');
	elem4.nextElementSibling.nextElementSibling.textContent = elem4.nextElementSibling.nextElementSibling.textContent + '!';
}
//266(10)
let button16 = document.querySelector('#button16');
button16.addEventListener('click', func16);
function func16() {
	let elem5 = document.querySelector('#elem5');
	let a = elem5.nextElementSibling.textContent;
	let b = elem5.previousElementSibling.textContent;
	elem5.nextElementSibling.textContent = b;
	elem5.previousElementSibling.textContent = a;
}
//267(1)
let elem6 = document.getElementById('elem6');
let button17 = document.querySelector('#button17');
button17.addEventListener('click', func17);
function func17() {
	elem6.value = '!!!';
	console.log(elem6);
}
//267(2) Невозможно решить через getElementsByTagName
let elems = document.getElementsByTagName('li');
let button18 = document.querySelector('#button18');
button18.addEventListener('click', func18);
function func18() {
	for (let elem7 of elems) {
		elem7.style.backgroundColor = "red";
	}
}
//267(3)
let elems1 = document.getElementsByClassName('www1');
let button19 = document.querySelector('#button19');
button19.addEventListener('click', func19);
function func19() {
	for (let elem8 of elems1) {
		elem8.style.backgroundColor = "red";
	}
}
//268(1)
let parent = document.querySelector('#parent');
let button20 = document.querySelector('#button20');
button20.addEventListener('click', func20);
function func20() {
	let elems2 = parent.querySelectorAll('.www');
	for (let elem9 of elems2) {
		elem9.style.backgroundColor = "red";
	}
}
let button21 = document.querySelector('#button21');
button21.addEventListener('click', func21);
function func21() {
	let elems3 = parent.querySelectorAll('.ggg');
	for (let elem10 of elems3) {
		elem10.style.backgroundColor = "blue";
	}
}
//269(1)
let div2 = document.querySelector('#div2');
div2.addEventListener('click', func22);
function func22() {
	div2.textContent = div2.textContent+ ' ' + div2.dataset.text;
}


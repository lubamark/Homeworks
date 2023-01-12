let button = document.querySelector('#button');
console.log(button);

let par1 = document.querySelector('#elem1');
console.log(elem1);
let par2 = document.querySelector('#elem2');
console.log(elem2);
let par3 = document.querySelector('#elem3');
console.log(elem3);
//241(2)
let elem = document.querySelector('#block p');
console.log(elem); 
//241(3)
let elem4 = document.querySelector('.block p');
console.log(elem4); 
//241(4)
let elem5 = document.querySelector('.www');
console.log(elem5); 

//242 (1) 
let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');
let button3 = document.querySelector('#button3'); 
button1.addEventListener('click', function() {
	console.log('1');
});
button2.addEventListener('click', function() {
	console.log('2');
});
button3.addEventListener('click', function() {
	console.log('3');
});

//243(1) Сделайте так, чтобы по клику на первую кнопку выполнилась 
 //       функция func1, а по клику на вторую - функция func2.
let button4 = document.querySelector('#button4');
button4.addEventListener('click', func1);

function func1() {
	console.log('1');
}
let button5 = document.querySelector('#button5');
button5.addEventListener('click', func2);

function func2() {
	console.log('2');
}

let elem6 = document.querySelector('#elem6');
let elem7 = document.querySelector('#elem7');
let elem8 = document.querySelector('#elem8');
let elem9 = document.querySelector('#elem9');
let elem10 = document.querySelector('#elem10');

function func() {
	console.log('message');
}
elem6.addEventListener('mouseover', func);
elem7.addEventListener('mouseout', func);
elem8.addEventListener('mouseout', func);
elem9.addEventListener('mouseover', func);

//245(1) Привязать все функции к абзацу 
let elem11 = document.querySelector('#elem11');
function message1() {
	console.log('message1');
}

function message2() {
	console.log('message2');
}
elem11.addEventListener('mouseover', message1);
elem11.addEventListener('mouseover', message2);
//247(1)
let elem12 = document.querySelector('#elem12');
let button6 = document.querySelector('#button6');
button6.addEventListener('click', func3);

function func3() {
	console.log(elem12.textContent);
}
//247(2)
let elem13 = document.querySelector('#elem13');
let button7 = document.querySelector('#button7');
button7.addEventListener('click', func4);

function func4() {
	elem13.textContent = 'Winter';
	console.log(elem13.textContent);
}
//247(3)
let elem14 = document.querySelector('#elem14');
let elem15 = document.querySelector('#elem15');
let button8 = document.querySelector('#button8');
button8.addEventListener('click', func5);

function func5() {
	let a = Number(elem14.textContent);
	let b = Number(elem15.textContent);
	console.log(a+b);
}
//247(4)
let elem16 = document.querySelector('#elem16');
let elem17 = document.querySelector('#elem17');
let elem18 = document.querySelector('#elem18');
let elem19 = document.querySelector('#elem19');
let button9 = document.querySelector('#button9');
button9.addEventListener('click', func6);

function func6() {
	let a = Number(elem16.textContent);
	let b = Number(elem17.textContent);
	let c = Number(elem18.textContent);
	let sum = a + b + c;
	elem19.textContent = sum;
}
//247(6)
let elem20 = document.querySelector('#elem20');
let button10 = document.querySelector('#button10');
button10.addEventListener('click', func7);
function func7() {
elem20.textContent = elem20.textContent+'!';
}

//248 (1)
let elem21 = document.querySelector('#elem21');
let button11 = document.querySelector('#button11');
button11.addEventListener('click', func8);
 
function func8() {
	console.log(elem21.innerHTML);
}

//248 (2) 

let elem22 = document.querySelector('#elem22');
let button12 = document.querySelector('#button12');
button12.addEventListener('click', func9);
 
function func9() {
	elem22.innerHTML = '<b>' + elem22.textContent + '</b>';
}
	
//249(1) 
let elem23 = document.querySelector('#elem23');
let button13 = document.querySelector('#button13');
button13.addEventListener('click', func10);
function func10() {
	console.log(elem23.type);
}

//249(3)
let elem24 = document.querySelector('#elem24');
let elem25 = document.querySelector('#elem25');
let button14 = document.querySelector('#button14');
button14.addEventListener('click', func11);
function func11() {
	
	elem24.textContent = elem25.href;
}
//249(4)
let elem26 = document.querySelector('#elem26');
let button15 = document.querySelector('#button15');
button15.addEventListener('click', func12);
function func12() {
	elem26.textContent= elem26.href+ '('+ elem26.href +')';
}
//249(5)
let elem27 = document.querySelector('#elem27');
let elem28 = document.querySelector('#elem28');
let button16 = document.querySelector('#button16');
button16.addEventListener('click', func13);
function func13() {
	elem28.textContent= elem27.src;
}
//249(6)
let elem29 = document.querySelector('#elem29');
let button17 = document.querySelector('#button17');
button17.addEventListener('click', func14);
function func14() {
	elem29.width= 300;
}
//249(8)
let elem30 = document.querySelector('#elem30');
let elem31 = document.querySelector('#elem31');
let button18 = document.querySelector('#button18');
let button19 = document.querySelector('#button19');
button18.addEventListener('click', func15);
function func15() {
	elem30.src= elem31.src;
}
button19.addEventListener('click', func16);
function func16() {
	elem31.src= elem30.src;
}
//250 (1)
let inp = document.querySelector('#inp');
let button20 = document.querySelector('#button20');
button20.addEventListener('click', func17);
function func17() {
	inp.value = "hello";
}
//250(2)
let inp1 = document.querySelector('#inp1');
let button21 = document.querySelector('#button21');
let paragr = document.querySelector('#paragr');
button21.addEventListener('click', func18);
function func18() {
	paragr.textContent = inp1.value;
	}
//250(3)
let inp4 = document.querySelector('#inp4');
let inp5 = document.querySelector('#inp5');
let button23 = document.querySelector('#button23');
button23.addEventListener('click', func20);
function func20() {
	let a = inp4.value;
	let b = inp5.value;
	inp5.value = a;
	inp4.value = b;
}
//251(1)
let inp6 = document.querySelector('#inp6');
inp6.addEventListener('focus', func21);
inp6.addEventListener('blur', func22);
function func21() {
	inp6.value = 1;
}
function func22() {
	inp6.value = 2;
}

//251(3)
let inp7 = document.querySelector('#inp7');
inp7.addEventListener('focus', func23);
function func23() {
	inp7.value = "";
}
//252(1)
let elem32 = document.querySelector('#elem32');
let button24 = document.querySelector('#button24');
button24.addEventListener('click', func24);
function func24() {
	console.log(elem32.className); 
}

//252(2)
let elem33 = document.querySelector('#elem33');
let button25 = document.querySelector('#button25');
button25.addEventListener('click', func25);
function func25() {
	elem33.className = "give_className"; 
	console.log(elem33.className);
}
//252(3)
let elem34 = document.querySelector('#elem34');
let button26 = document.querySelector('#button26');
button26.addEventListener('click', func26);
function func26() {
	let classNameString = elem34.className; 
	let classNameMas = classNameString.split(' ');
	console.log(classNameMas);
}
//253(1)
console.log(document.querySelector('#image').src);
//254(1)
let inp8 = document.querySelector('#inp8');
inp8.addEventListener('focus', func27);
inp8.addEventListener('blur', func28);
function func27() {
	this.value = 1;
}
function func28() {
	this.value = 2;
}
//254(2)
let button27 = document.querySelector('#button27');
button27.addEventListener('click', func29);
function func29() {
	this.value = Number(this.value) + 1;
}
//255(1) 
let paragr1 = document.querySelector('#paragr1');
let paragr2 = document.querySelector('#paragr2');
let paragr3 = document.querySelector('#paragr3');
let paragr4 = document.querySelector('#paragr4');
let paragr5 = document.querySelector('#paragr5');
paragr1.addEventListener('click', func30);
paragr2.addEventListener('click', func30);
paragr3.addEventListener('click', func30);
paragr4.addEventListener('click', func30);
paragr5.addEventListener('click', func30);
function func30() {
	this.textContent = this.textContent + '!';
}
	
let inp9 = document.querySelector('#inp9');
inp9.addEventListener('blur', func31);
let inp10 = document.querySelector('#inp10');
inp10.addEventListener('blur', func31);
let inp11 = document.querySelector('#inp11');
inp11.addEventListener('blur', func31);
function func31() {
	this.value = Math.pow(Number(this.value),2);
}
//256(1)
let button28 = document.querySelector('#button28');
button28.addEventListener('click', func32);
function func32() {
	let elems = document.querySelectorAll('.paragr');
	for (let elem of elems) {
		elem.textContent = 'text';
	}
}
//256(3) 
let button29 = document.querySelector('#button29');
let paragr6 = document.querySelector('#paragr6');

button29.addEventListener('click', func33);
function func33() {
	let elems = document.querySelectorAll('.inp');
	let sum = 0;
	for (let elem of elems) {
		sum = Number(elem.value) + sum;
	}
	paragr6.textContent = sum;
}
//257(1)
let elems = document.querySelectorAll('.inp1');
for (let elem of elems) {
	elem.addEventListener('blur', func34);
}
function func34() {
	this.value = Number(this.value) + 1;
}
//257(2) 
let elems1 = document.querySelectorAll('.paragr1');
for (let elem of elems1) {
	elem.addEventListener('click', func35);
}
function func35() {
	this.textContent = Math.pow(Number(this.textContent),2);
}

//258
let divs = document.querySelectorAll('div');

for (let div of divs) {
	div.addEventListener('click', function()
	{
		this.textContent++;
	});
}
//259(1)
let elem35 = document.querySelector('#elem35');
let button30 = document.querySelector('#button30');
button30.addEventListener('click', func36);
function func36() {
	elem35.textContent = elem35.href + '(' + elem35.href + ')';
	this.removeEventListener('click', func36);
}

//259(2) 
let button31 = document.querySelector('#button31');
button31.addEventListener('click', func37);
function func37() {
	button31.value = Number(button31.value) + 1;
	if (button31.value == '10')
	button31.removeEventListener('click', func37);
}
//260(1)
let elems2 = document.querySelectorAll('p');

for (let elem of elems2) {
	elem.addEventListener('click', func38);
}

function func38() {
	this.textContent = this.textContent + '!';
	this.removeEventListener('click', func38); // отвязываем обработчик
}
//261(1)
let elems3 = document.querySelectorAll('li');

for (let elem of elems3) {
	elem.addEventListener('click', function func39() {
		this.textContent = Number(this.textContent) + 1;
	});
}

//261(2) не получилось отвязать 
let elems4 = document.querySelectorAll('li');

for (let elem of elems4) {
	elem.addEventListener('click', function func40() {
		this.textContent = Number(this.textContent) + 1;
		this.removeEventListener('click', func40); // отвязываем обработчик
	});
}
//262(1)
let inp12 = document.querySelector('#inp12');
let value = inp12.getAttribute('value');
console.log(value);
//262(2)
let inp13 = document.querySelector('#inp13');
let value1 = inp13.getAttribute('class');
console.log(value1);
//262(3)
let inp14 = document.querySelector('#inp14');
inp14.setAttribute('value', 'text');
console.log(value1);

"use strict";
//304(1)
let inp1 = document.querySelector('#inp1');
inp1.addEventListener('blur', func);
function func() {
	let self = this;// запишем this в любую переменную, например, в self
	alert( square() );
	function square() {
		return self.value * self.value;
	}
}
//304(2)
let inp2 = document.querySelector('#inp2');
inp2.addEventListener('blur', parent);
function parent() {
	child(this); // передаем параметром this
	function child(param) {
		console.log(param.value*param.value); // выводим value инпута в квадрате
	}
}
//304(3)
let inp3 = document.querySelector('#inp3');
inp3.addEventListener('blur', arrfunc);
function arrfunc() {
	let arrchild = () => {
		console.log(this.value*this.value); // выведет 'text'
	}
	arrchild();
}
//305(1)
let inp4 = document.querySelector('#inp4');
let inp5 = document.querySelector('#inp5');
let inp6 = document.querySelector('#inp6');

function funcCall() {
	console.log('305(1)')
	console.log(this.value);
}
funcCall.call(inp4);
funcCall.call(inp5);
funcCall.call(inp6);

//305(2)
let inp7 = document.querySelector('#inp7');
function funcCallParam(surname, name) {
	console.log('305(2)')
	console.log(this.value + ', ' + name + ' ' + surname);
}
funcCallParam.call(inp7, "Smith", "John"); // тут должно вывести 'hello, John Smit'

//306(1)
let inp8 = document.querySelector('#inp8');
function funcApply(surname1, name1) {
	console.log('306(1)')
	console.log(this.value + ', ' + surname1 + ' ' + name1);
}
funcApply.apply(inp8, ['Smith', 'John']); // тут должно вывести 'hello, Smit John'
//307(1)
let inp9 = document.getElementById('inp9');

function funcBind(name, surname) {
	console.log(this.value + ', ' + name + ' ' + surname);
}
console.log('307(1)')
// тут напишите конструкцию с bind()
funcBind = funcBind.bind(inp9);
funcBind("John", "Smit"); // тут должно вывести 'hello, John Smit'
funcBind('Eric', 'Luis'); // тут должно вывести 'hello, Eric Luis'

//308 Эта задачка решена, просто я ее закомментировала, чтоб она не мешала работе всей программы
//setInterval(function() {
//	console.log('HI');
//}, 3000);

//309 Эта задачка решена, просто я ее закомментировала, чтоб она не мешала работе всей программы
//let i = 100;
//setInterval(() => console.log(--i), 1000);

//310 Эта задачка решена, просто я ее закомментировала, чтоб она не мешала работе всей программы
//let i = 10;
//let timerId = setInterval(function() {
//	console.log(--i);
//	if (i === 0) {
//		clearInterval(timerId);
//	}
//}, 1000);

//311(1)
let start = document.querySelector('#start');
start.addEventListener('click', timer);
function timer() 
{
	let i = 100;
	setInterval(function () {
	console.log(--i);
	}, 1000);
	this.removeEventListener('click', timer); // отвязываем обработчик
}
//312(1)
let startButton = document.querySelector('#startButton');
let stopButton = document.querySelector('#stopButton');
startButton.addEventListener('click', timer1);
stopButton.addEventListener('click', timer2);
let timerId; // сделаем переменную глобальной
function timer1() 
{
	let i = 100;
	timerId = setInterval(function () {
	console.log(--i);
	}, 1000);
	//this.removeEventListener('click', timer); // отвязываем обработчик	
}
function timer2() {
	// Останавливаем таймер:
	stopButton.addEventListener('click', function () {
		clearInterval(timerId);
	});
}
//312(2)
let startButton1 = document.querySelector('#startButton1');
let stopButton1  = document.querySelector('#stopButton1');
let timerId1;
startButton1.addEventListener('click', function() {
	timerId1 = setInterval(function() {
	let date = new Date;
	console.log(date.getMinutes() + ' ' + date.getSeconds());
	}, 1000);
});

stopButton1.addEventListener('click', function() {
	clearInterval(timerId1);
});
//312(6) Не знаю как привязать и что привязать по нажатию кнопки стоп
let startButton2 = document.querySelector('#startButton2');
let stopButton2 = document.querySelector('#stopButton2');
startButton2.addEventListener('click', timer3);
stopButton2.addEventListener('click', timer4);
let timerId2; // сделаем переменную глобальной
function timer3() 
{
	let i = 100;
	timerId2 = setInterval(function () {
	console.log(--i);
	}, 1000);
	this.removeEventListener('click', timer3); // отвязываем обработчик	
}
function timer4() {
	// Останавливаем таймер:
	stopButton2.addEventListener('click', function () {
		clearInterval(timerId2);
	});
}
//313 (2-3)
let inp10 = document.querySelector('#inp10');
let timerId3; // сделаем переменную глобальной
timerId3 = setInterval(function() {
	inp10.value = Number(inp10.value) - 1;
	if (Number(inp10.value) === 0) {
		clearInterval(timerId3);
	}
}, 1000);
//314(1)
let button1 = document.querySelector('#button1');
button1.addEventListener('click', function () {
	let self = this;
	setInterval(function() {
		self.value = Number(button1.value) + 1;
	}, 1000);
});
//314(2)
let button2 = document.querySelector('#button2');
button2.addEventListener('click', function () {
	setInterval(() => this.value = Number(this.value) + 1, 1000);
});
//315(1)
let button3 = document.querySelector('#button3');
button3.addEventListener('click', function() {
	setInterval(function(self) {
		self.value--;
	}, 1000, this);
});
//316(1)
let button4 = document.querySelector('#button4');
let paragr = document.querySelector('#paragr');
button4.addEventListener('click', function() {
	let i = Number(paragr.textContent);
	setInterval(() => paragr.textContent = ++i, 1000);
});
//316(3)
let inp11 = document.querySelector('#inp11');
setInterval(() => inp11.value = Number(inp11.value)*Number(inp11.value), 1000);
//316(7)
let paragr1 = document.querySelector('#paragr1');
paragr1.style.color="red";
setInterval(function(){
 if(paragr1.style.color == "red"){
    paragr1.style.color="green";
 } else {
    paragr1.style.color="red";
 }
}, 1000);
//316(8) 
let paragr2 = document.querySelector('#paragr2');
let myVar = setInterval(function() {
  myTimer();
}, 1000);
function myTimer() {
  var d = new Date();
  document.getElementById("paragr2").innerHTML = d.toLocaleTimeString();
}













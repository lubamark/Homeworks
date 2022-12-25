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
button.addEventListener('click', addWidthAndHeight);
function addWidthAndHeight() {
	div.style.width = "500px";
	div.style.height = "200px";
	div.style.color = 'red';
	div.style.border = 'solid blue';
}
//264(2)
let div1 = document.querySelector('#div1');
let button1 = document.querySelector('#button1');
button1.addEventListener('click', SetSize);
function SetSize() {
	div1.style.fontSize = "20px";
	div1.style.backgroundColor = "red";
	div1.style.borderTop = "solid blue";
}
//264(3) //не знаю как сделать, чтоб не накладывались при выводе друг на друга, кроме как через класс
let button2 = document.querySelector('#button2');
button2.addEventListener('click', addFloat);
let maslli = document.querySelectorAll('.lli');
function addFloat() {
	for (let lli of maslli) {
	console.log(lli);
	lli.style.cssFloat = 'left';	
	}
}
//265(2)
let button3 = document.querySelector('#button3');
button3.addEventListener('click', crossPar);
let paragr6 = document.querySelector('#paragr6');
function crossPar() {
	paragr6.classList.add('cross');		
}
let button4 = document.querySelector('#button4');
button4.addEventListener('click', boldPar);
function boldPar() {
	paragr6.classList.add('bold');		
}
let button5 = document.querySelector('#button5');
button5.addEventListener('click', colorPar);
function colorPar() {
	paragr6.classList.add('colored');		
}
//265(3)
let button6 = document.querySelector('#button6');
button6.addEventListener('click', denyCrossPar);
let paragr7 = document.querySelector('#paragr7');
function denyCrossPar() {
	paragr7.classList.toggle('cross');		
}
let button7 = document.querySelector('#button7');
button7.addEventListener('click', denyBold);
function denyBold() {
	paragr7.classList.toggle('bold');		
}
let button8 = document.querySelector('#button8');
button8.addEventListener('click', denyColored);
function denyColored() {
	paragr7.classList.toggle('colored');		
}
//266(1)
let button9 = document.querySelector('#button9');
button9.addEventListener('click', findFirstDescendant);
function findFirstDescendant() {
	let list_parent = document.querySelector('#list');
	console.log(list_parent.firstElementChild.innerHTML);
	list_parent.firstElementChild.classList.add('colored');
}
//266(3)
let button10 = document.querySelector('#button10');
button10.addEventListener('click', findAllDescendants);
function findAllDescendants() {
	let list_parent1 = document.querySelector('#list1');
	for (let lli1 of list_parent1.children) {
		lli1.textContent =lli1.textContent + '!';		
}
}
//266(4)
let button11 = document.querySelector('#button11');
button11.addEventListener('click', findParent);
function findParent() {
	let elem = document.querySelector('#elem');
	elem.parentElement.style.border = 'solid red';
}
//266(5)
let button12 = document.querySelector('#button12');
button12.addEventListener('click', findClosestParent);
function findClosestParent() {
	let elem1 = document.querySelector('#elem1');
	let closestParent = elem1.closest('div');
	console.log(closestParent);
}
//266(6)
let button13 = document.querySelector('#button13');
button13.addEventListener('click', findClosestParent1);
function findClosestParent1() {
	let elem2 = document.querySelector('#elem2');
	let closestParent1 = elem2.closest('.www');
	console.log('266(6) '+ closestParent1);
}
//266(7)
let button14 = document.querySelector('#button14');
button14.addEventListener('click', findTopNeighbour);
function findTopNeighbour() {
	let elem3 = document.querySelector('#elem3');
	elem3.previousElementSibling.textContent = elem3.previousElementSibling.textContent + '!';
}
//266(9)
let button15 = document.querySelector('#button15');
button15.addEventListener('click', findBottomNeighOfBottomNeigh);
function findBottomNeighOfBottomNeigh() {
	let elem4 = document.querySelector('#elem4');
	elem4.nextElementSibling.nextElementSibling.textContent = elem4.nextElementSibling.nextElementSibling.textContent + '!';
}
//266(10)
let button16 = document.querySelector('#button16');
button16.addEventListener('click', textExchange);
function textExchange() {
	let elem5 = document.querySelector('#elem5');
	let a = elem5.nextElementSibling.textContent;
	let b = elem5.previousElementSibling.textContent;
	elem5.nextElementSibling.textContent = b;
	elem5.previousElementSibling.textContent = a;
}
//267(1)
let elem6 = document.getElementById('elem6');
let button17 = document.querySelector('#button17');
button17.addEventListener('click', setText);
function setText() {
	elem6.textContent = '!!!';
	console.log('267(1) '+ elem6);
}
//267(2) Невозможно решить через getElementsByTagName
let elems = document.getElementsByTagName('li');
let button18 = document.querySelector('#button18');
button18.addEventListener('click', getAllLiTag);
function getAllLiTag() {
	for (let elem7 of elems) {
		elem7.style.color = "red";
	}
}
//267(3)
let elems1 = document.getElementsByClassName('www1');
let button19 = document.querySelector('#button19');
button19.addEventListener('click', getAllLiClass);
function getAllLiClass() {
	for (let elem8 of elems1) {
		elem8.style.color = "red";
	}
}
//268(1)
let parent = document.querySelector('#parent');
let button20 = document.querySelector('#button20');
button20.addEventListener('click', findElemInsideParent);
function findElemInsideParent() {
	let elems2 = parent.querySelectorAll('.www');
	for (let elem9 of elems2) {
		elem9.style.backgroundColor = "red";
	}
}
let button21 = document.querySelector('#button21');
button21.addEventListener('click', findElemInsideParent1);
function findElemInsideParent1() {
	let elems3 = parent.querySelectorAll('.ggg');
	for (let elem10 of elems3) {
		elem10.style.backgroundColor = "blue";
	}
}
//269(1)
let div2 = document.querySelector('#div2');
div2.addEventListener('click', addTextDiv);
function addTextDiv() {
	div2.textContent = div2.textContent+ ' ' + div2.dataset.text;
}
//269(2)
let divs = document.querySelectorAll('.w');
for (let divv of divs) {
	divv.addEventListener('click',addNumDiv)
	function addNumDiv() {
	divv.textContent = divv.textContent+ ' ' + divv.dataset.num;
}
}
//269(3)
let button22 = document.querySelector('#button22');
button22.addEventListener('click', clickCount);
let paragr8 = document.querySelector('#paragr8');
let button23 = document.querySelector('#button23');
button23.addEventListener('click', assignText);
function clickCount() {
	paragr8.dataset.counter = Number(paragr8.dataset.counter) + 1;
	console.log(paragr8.dataset.counter);
}
function assignText() {
	paragr8.textContent = Number(paragr8.dataset.counter);
}
//269(4)
let elem11 = document.querySelector('#elem11');
elem11.addEventListener('blur', checkAmount);
let paragr9 = document.getElementById("paragr9")
function checkAmount() {
	if (elem11.value.length !== Number(elem11.dataset.length)) 
		paragr9.innerHTML = 'Количество введенных символов не совпадает с заданным';
	else if (elem11.value.length === Number(elem11.dataset.length))
		paragr9.innerHTML = 'Количество введенных символов совпадает с заданным';
	}
//269(5)
let elem12 = document.querySelector('#elem12');
elem12.addEventListener('blur', checkRange);
let paragr10 = document.getElementById("paragr10")
function checkRange() {
	if (elem12.value.length < Number(elem12.dataset.min) || elem12.value.length > Number(elem12.dataset.max))
		paragr10.innerHTML = 'Количество введенных символов не попадает в заданный диапазон';
	else paragr10.innerHTML = 'Количество введенных символов попадает в заданный диапазон';
}
//269(6)
let elem13 = document.querySelector('#elem13');
elem13.addEventListener('click', addCost);
function addCost() {
	elem13.textContent = elem13.textContent + '  Цена  '+ elem13.dataset.productPrice + '   Количество   ' + elem13.dataset.productAmount +' Стоимость = ' + Number(elem13.dataset.productPrice)*Number(elem13.dataset.productAmount);
}
//269(7) 
let elems4 = document.getElementsByClassName('qqq1');
let setAtrBut = document.querySelector('#setattr');
setAtrBut.addEventListener('click', setNumberPar);
count1 = 1;
function setNumberPar() {
	for (let elem14 of elems4) {
		elem14.setAttribute("data-num", count1);
		count1 = count1 + 1;
		console.log(elem14.dataset.num);
	}
}
//270(1) 
let elem15 = document.querySelector('#elem15');
console.log(elem15.lastChild);        // комментарий
console.log(elem15.lastElementChild); // тег span

//270(2) 
let elem16 = document.querySelector('#elem16');
let button24 = document.querySelector('#button24');
button24.addEventListener('click', diffSibling);
function diffSibling() {
	console.log(elem16.nextElementSibling);        
	console.log(elem16.nextSibling); 
}
//270(4)
let elem17 = document.querySelector('#elem17');
for (let node of elem17.childNodes) {
	console.log('270(4) ' +node);
}
//270(5) 
let elem18 = document.querySelector('#elem18');
for (let node of elem18.childNodes) {
	console.log('270(5) '+ node.nodeName);
}
//270(6)
let elem19 = document.querySelector('#elem19');
for (let node of elem19.childNodes) {
	if (node.nodeType === 1||node.nodeType === 3)
	console.log('270(6) '+ node);
}
//270(7)
let elem20 = document.querySelector('#elem20');
for (let node of elem20.childNodes) {
	console.log('270(7) '+ node.textContent);
}
//270(8)
let elem21 = document.querySelector('#elem21');
for (let node of elem21.childNodes) {
	if (node.nodeType === 8||node.nodeType === 3)
	console.log('270(8) '+ node.textContent);
	}
//270(9)
let elem22 = document.querySelector('#elem22');
for (let node of elem22.childNodes) {
	if (node.nodeType === 1||node.nodeType === 3)
	console.log('270(9) '+ node.textContent);
}
//270(10)
let elem23 = document.querySelector('#elem23');
for (let node of elem23.childNodes) {
	if (node.nodeType === 1)
	console.log('270(10) '+ node.textContent + "  " + node.nodeName);
}
//271(1)
let button25 = document.querySelector('#button25');
button25.addEventListener('click', getSumOfYears);
function getSumOfYears() {
	let elems = document.querySelectorAll('.years');
	let sum = 0;
	let sumOfYears = 0;
	for (let elem of elems) {
	let text = elem.textContent;
		sum = Number(text[0]) + Number(text[1]) + Number(text[2]) + Number(text[3]);
		if (sum === 6) {
			console.log(text);
			}
	}
	console.log(sumOfYears);
}

//273(1)
let elem24 = document.querySelector('#elem24');
elem24.addEventListener('blur', setInputText);
let paragr11 = document.getElementById("paragr11");
function setInputText() {
	paragr11.textContent = paragr11.textContent + elem24.value; 
}
//273(2)
let elem25 = document.querySelector('#elem25');
let elem26 = document.querySelector('#elem26');
let elem27 = document.querySelector('#elem27');
let button26 = document.querySelector('#button26');
button26.addEventListener('click', getSum);
let paragr12 = document.getElementById("paragr12");
sum1 = 0;
function getSum() {
	sum1 = Number(elem25.value) + Number(elem26.value) + Number(elem27.value);
	paragr12.textContent = sum1; 
}
//273(3)
let elem28 = document.querySelector('#elem28');
elem28.addEventListener('blur', getSumOfNumbers);
let paragr13 = document.getElementById("paragr13");
sum2 = 0;
function getSumOfNumbers() {
	let text1 = elem28.value;
	for (let i = 0; i < text1.length; i++)
		sum2 = sum2 + Number(text1[i]);
	paragr13.textContent = sum2;
}
//273(4)
let elem29 = document.querySelector('#elem29');
elem29.addEventListener('blur', getAv);
let paragr14 = document.getElementById("paragr14");
function getAv() {
	let str = elem29.value;
	let splits = str.split(',');
	let sum3 = 0;
	for (let i = 0; i < splits.length; i++)
		sum3 = sum3 + Number(splits[i]);
	let av = sum3 / splits.length;
	console.log(av);
	//хотела в инпуте перенести , но и "/n" не работает
	paragr14.innerHTML = "Sum of elements = " + sum3  + "  Average = " + av;
}

//273(5)
let elem30 = document.querySelector('#elem30');
let elem31 = document.querySelector('#elem31');
let elem32 = document.querySelector('#elem32');
let elem33 = document.querySelector('#elem33');
elem30.addEventListener('blur', getSurname);
function getSurname() {
	let str = elem30.value;
	let splits = str.split(' ');
	elem31.value = splits[0];
	elem32.value = splits[1];
	elem33.value = splits[2];
}
//273(6)
let elem34 = document.querySelector('#elem34');
elem34.addEventListener('blur', setUpLetter);
function setUpLetter() {
	let newArr = [];
	let str = elem34.value;
	let splits = str.split(' ');
	splits.forEach((item) => {
const word = item[0].toUpperCase() + item.slice(1);
newArr.push(word);
})
let newString = newArr.join(' ');
elem34.value = newString;
}
//273(7)
let elem35 = document.querySelector('#elem35');
elem35.addEventListener('blur', getWordsNumber);
let paragr15 = document.getElementById("paragr15");
let count = 0;
function getWordsNumber() {
	let str1 = elem35.value.trim();
	if (str1 === "") {
		paragr15.textContent = "Amount of words =  0";
				}
	else {
		let splits = str1.split(' ');
		count = splits.length;
		paragr15.textContent = "Amount of words = "+ count;
	}
	
}
//273(8)
let elem36 = document.querySelector('#elem36');
let paragr16 = document.getElementById("paragr16");
elem36.addEventListener('blur', changeFormat);
	function changeFormat() {
		let str = elem36.value;
		//let arr = str.split('.');
		//let res = arr[2] + '-' + arr[1] + '-' + arr[0];
		let res = str.split('.').reverse().join('-')
		paragr16.textContent = res;
}
//273(9)
let elem37 = document.querySelector('#elem37');
let paragr17 = document.getElementById("paragr17");
let button27 = document.querySelector('#button27');
button27.addEventListener('click', readWord);
function readWord() {
	let str = elem37.value;
	let str1 = "";
	str1 = str.split("").reverse().join("");
	if (str === str1)
		paragr17.textContent = "Слово читается и с начала и с конца одинаково";
	else
		paragr17.textContent = "Слово не читается с начала и с конца одинаково";
}
//273(10)
let elem38 = document.querySelector('#elem38');
let paragr18 = document.getElementById("paragr18");
elem38.addEventListener('blur', checkNumber);
	function checkNumber() {
		let str = elem38.value;
		let a = str.includes(3);
		if (a)
			paragr18.textContent = 'This number contains 3 in it';
		else paragr18.textContent = 'This number does not contain 3 in it';
		
	}
//273(11)
let paragr19 = document.getElementById("paragr19");
let paragr20 = document.getElementById("paragr20");
let paragr21 = document.getElementById("paragr21");
let button28 = document.querySelector('#button28');
button28.addEventListener('click', addNumberToPar);
function addNumberToPar() { 
	paragr19.textContent = paragr19.textContent + '1';
	paragr20.textContent = paragr20.textContent + '2';
	paragr21.textContent = paragr21.textContent + '3';
}
//273(12) //я не нашла почему не видит elem51. Из-за этого задача поламалась
//let elem39 = document.querySelector('#elem39');
let elems5 = document.querySelectorAll(".div1");
//let elem40 = document.querySelector('#elem40');
let button29 = document.querySelector('#button29');
button29.addEventListener('click', addBrackets);
function addBrackets() {
	for (let elem51 of elems5) {
		elem51.textContent = elem51.href + '(' + elem51.href + ')';
		//elem40.textContent = elem40.href + '(' + elem40.href + ')';
	}
}
//273(13)
let elem41 = document.querySelector('#elem41');
let elem42 = document.querySelector('#elem42');
let button30 = document.querySelector('#button30');
button30.addEventListener('click', addArrow);
function addArrow() {
	let str = elem41.href;
	if (elem41.getAttribute('href').startsWith('https://')) {
  	elem41.innerHTML += ' &rarr;';
	}
	let str1 = elem42.href;
	if (elem42.getAttribute('href').startsWith('https://')) {
  	elem42.innerHTML += ' &rarr;';
	}
}

//273(14)
let paragr22 = document.getElementById("paragr22");
let paragr23 = document.getElementById("paragr23");
let paragr24 = document.getElementById("paragr24");
paragr22.addEventListener('click', getSq);
paragr23.addEventListener('click', getSq);
paragr24.addEventListener('click', getSq);
function getSq() {
	this.textContent = Math.pow(Number(this.textContent),2);
}
//273(15)
let elem43 = document.querySelector('#elem43');
let paragr25 = document.querySelector('#paragr25');
elem43.addEventListener('blur', getDayOfWeek);
	function getDayOfWeek() {
		let date1 = elem43.value;
		let date2 = new Date( Date.parse(date1) ); //распарсили строку в таймстемп и таймстемп превратили в формат даты
		console.log(date2);
		let dayOfWeek = date2.getDay(); //получили день недели в виде числа
		console.log(dayOfWeek);
		let days1 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		console.log(days1[dayOfWeek]);
		paragr25.textContent = days1[dayOfWeek];
}
//273(16)
let elem44 = document.querySelector('#elem44');
let button31 = document.querySelector('#button31');
button31.addEventListener('click', plusOne);
function plusOne() {
	elem44.value = Number(elem44.value) + 1;
	}
let button32 = document.querySelector('#button32');
button32.addEventListener('click', minusOne);
function minusOne() {
if (Number(elem44.value) > 0) {
	elem44.value = Number(elem44.value) - 1;
}
else {
	return;
}
}
//273(17)
let elem45 = document.querySelector('#elem45');
let paragr26 = document.getElementById("paragr26");
let paragr27 = document.getElementById("paragr27");
paragr26.addEventListener('click', sumClick);
paragr27.addEventListener('click', sumClick);
let counter = 0;
function sumClick() {
	counter = counter + 1;
	elem45.value = counter;
}
//273(18)
let button33 = document.querySelector('#button33');
button33.addEventListener('click', cutText);
let div3 = document.getElementById('div3');
let div4 = document.getElementById('div4');
let div5 = document.getElementById('div5');
function cutText() {
	let str2 = div3.textContent;
	if (str2.length > 10) {
		let str3 = str2.slice(0, 10);
		div3.textContent = str3;
	}
	let str4 = div4.textContent;
	if (str4.length > 10) {
		let str5 = str4.slice(0, 10);
		div4.textContent = str5;
	}
	let str6 = div5.textContent;
	if (str6.length > 10) {
		let str7 = str6.slice(0, 10);
		div5.textContent = str7;
	}
}

//273(19)
let elem46 = document.querySelector('#elem46');
elem46.addEventListener('blur', checkNumAndColor);
function checkNumAndColor() {
	if (Number(elem46.value) >= 1 && Number(elem46.value) <= 100)
		elem46.style.backgroundColor = "green";
	else elem46.style.backgroundColor = "red";
}
//273(20)
let button34 = document.querySelector('#button34');
button34.addEventListener('click', getRandomNumber);
let elem47 = document.querySelector('#elem47');
function getRandomNumber() {
	var rnd = '';
    while (rnd.length < 8) 
		rnd += Math.random().toString(36).substring(2);
	let a = rnd.substring(0, 8);
	elem47.value = a;
}
//273(21)
let button35 = document.querySelector('#button35');
button35.addEventListener('click', mix);
let elem48 = document.querySelector('#elem48');
function mix() {
	let chrs1 = elem48.value;
	let len = chrs1.length;
	let str9 = '';
	for (var i = 0; i < len; i++) {
		var pos = Math.floor(Math.random() * len);
		str9 += chrs1.substring(pos, pos + 1);
	}
	elem48.value = str9;
}
//273(22)
let button36 = document.querySelector('#button36');
button36.addEventListener('click', changeToCelsius);
let elem49 = document.querySelector('#elem49');
let paragr28 = document.getElementById("paragr28");
function changeToCelsius() {
	let far = Number(elem49.value);
	let celsius = (far - 32) * 5 / 9;
	paragr28.textContent = far + '  Fahrenheit degrees = ' + celsius.toFixed(2) +' Celsius degrees';
}
//273(23)
let button37 = document.querySelector('#button37');
button37.addEventListener('click', factor);
let elem50 = document.querySelector('#elem50');
let paragr29 = document.getElementById("paragr29");
function factor() {
	let num = Number(elem50.value);
	let fact = factorial(num);
	function factorial(n){
if (n==1) return 1;
else return n*factorial(n-1);		
}
	paragr29.textContent = "Factorial of "+ num + ' is ' +fact;
}
//273(24)
let button38 = document.querySelector('#button38');
button38.addEventListener('click', func53);
let a = document.querySelector('#elem51');
let b = document.querySelector('#elem52');
let c = document.querySelector('#elem53');
let paragr30 = document.getElementById("paragr30");
function func53() { 
	
	let Diskr = (Number(b.value) * Number(b.value)) - 4 *(Number(a.value) * Number(c.value));
	console.log(Diskr);

	let x1 = ((-Number(b.value)) + Math.sqrt(Diskr)) / (2 * Number(a.value));
	let x2 = ((-Number(b.value)) - Math.sqrt(Diskr)) / (2 * Number(a.value));
	paragr30.textContent = "Equation roots are " + x1 + ' , ' + x2;
}
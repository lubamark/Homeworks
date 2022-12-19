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
//269(2)
	for (let lli of maslli) {
		console.log(lli);
		lli.style.cssFloat = 'left';		
}
let divs = document.querySelectorAll('.w');
for (let divv of divs) {
	divv.addEventListener('click',func23)
	function func23() {
	divv.textContent = divv.textContent+ ' ' + divv.dataset.num;
}
}
//269(3)
let button22 = document.querySelector('#button22');
button22.addEventListener('click', func24);
let paragr8 = document.querySelector('#paragr8');
let button23 = document.querySelector('#button23');
button23.addEventListener('click', func25);
function func24() {
	//paragr8.textContent = Number(paragr8.textContent) + 1; 
	paragr8.dataset.counter = Number(paragr8.dataset.counter) + 1;
	console.log(paragr8.dataset.counter);
}
function func25() {
	paragr8.textContent = Number(paragr8.dataset.counter);
}
//269(4)
let elem11 = document.querySelector('#elem11');
elem11.addEventListener('blur', func26);
let paragr9 = document.getElementById("paragr9")
function func26() {
	if (elem11.value.length != elem11.dataset.length) 
		paragr9.innerHTML = 'Количество введенных символов не совпадает с заданным';
	}
//269(5)
let elem12 = document.querySelector('#elem12');
elem12.addEventListener('blur', func27);
let paragr10 = document.getElementById("paragr10")
function func27() {
	if (elem12.value.length < elem12.dataset.min || elem12.value.length > elem12.dataset.max)
		paragr10.innerHTML = 'Количество введенных символов не попадает в заданный диапазон';
}
//269(6)
let elem13 = document.querySelector('#elem13');
elem13.addEventListener('click', func28);
function func28() {
	elem13.textContent = elem13.textContent + '  Цена  '+ elem13.dataset.productPrice + '   Количество   ' + elem13.dataset.productAmount;
}
//269(7) 
let elems4 = document.getElementsByClassName('qqq');
count1 = 1;
for (let elem14 of elems4) {
	elem14.setAttribute('data-num', count1);
	count1 = count1 + 1;
	console.log(elem14.dataset.num);
}
//270(1) 
let elem15 = document.querySelector('#elem15');
console.log(elem15.lastChild);        // комментарий
console.log(elem15.lastElementChild); // тег span

//270(2) Не пойму,что выводит
let elem16 = document.querySelector('#elem16');
let button24 = document.querySelector('#button24');
button24.addEventListener('click', func29);
function func29() {
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
button25.addEventListener('click', func30);
function func30() {
	let elems = document.querySelectorAll('.years');
	let sum = 0;
	let sum1 = 0;
	for (let elem of elems) {
	let text = elem.textContent;
		sum = Number(text[0]) + Number(text[1]) + Number(text[2]) + Number(text[3]);
		if (sum === 6) {
			console.log(text);
			sum1 = sum+sum1;
		}
	}
	console.log(sum1);
}

//273(1)
let elem24 = document.querySelector('#elem24');
elem24.addEventListener('blur', func31);

let paragr11 = document.getElementById("paragr11");
function func31() {
	paragr11.textContent = elem24.value; 
}
//273(2)
let elem25 = document.querySelector('#elem25');
let elem26 = document.querySelector('#elem26');
let elem27 = document.querySelector('#elem27');
let button26 = document.querySelector('#button26');
button26.addEventListener('click', func32);
let paragr12 = document.getElementById("paragr12");
sum1 = 0;
function func32() {
	sum1 = Number(elem25.value) + Number(elem26.value) + Number(elem27.value);
	paragr12.textContent = sum1; 
}
//273(3)
let elem28 = document.querySelector('#elem28');
elem28.addEventListener('blur', func33);
let paragr13 = document.getElementById("paragr13");
sum2 = 0;
function func33() {
	let text1 = elem28.value;
	for (let i = 0; i < text1.length; i++)
		sum2 = sum2 + Number(text1[i]);
	paragr13.textContent = sum2;
}
//273(4)
let elem29 = document.querySelector('#elem29');
elem29.addEventListener('blur', func34);
let paragr14 = document.getElementById("paragr14");
function func34() {
	let str = elem29.value;
	let splits = str.split(',');
	let sum3 = 0;
	for (let i = 0; i < splits.length; i++)
		sum3 = sum3 + Number(splits[i]);
	
	let av = sum3 / splits.length;
	console.log(av);
	//хотела в инпуте перенести , но и "/n" не работает
	paragr14.textContent = "Sum of elements = " + sum3 + "/n" + "Average = " +av;
}

//273(5)
let elem30 = document.querySelector('#elem30');
let elem31 = document.querySelector('#elem31');
let elem32 = document.querySelector('#elem32');
let elem33 = document.querySelector('#elem33');
elem30.addEventListener('blur', func35);
function func35() {
	let str = elem30.value;
	let splits = str.split(' ');
	elem31.value = splits[0];
	elem32.value = splits[1];
	elem33.value = splits[2];
}
//273(6)
let elem34 = document.querySelector('#elem34');
elem34.addEventListener('blur', func36);
function func36() {
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
elem35.addEventListener('blur', func37);
let paragr15 = document.getElementById("paragr15");
function func37() {
let str = elem35.value;
let splits = str.split(' ');
	let count = splits.length;
	console.log(count);
	paragr15.textContent = "Ammount of words = "+ count;
}
//273(8)
let elem36 = document.querySelector('#elem36');
let paragr16 = document.getElementById("paragr16");
elem36.addEventListener('blur', func38);
	function func38() {
		let str = elem36.value;
		let arr = str.split('.');
		let res = arr[2] + '-' + arr[1] + '-' + arr[0];
		paragr16.textContent = res;
}
//273(9)
let elem37 = document.querySelector('#elem37');
let paragr17 = document.getElementById("paragr17");
let button27 = document.querySelector('#button27');
button27.addEventListener('click', func39);
function func39() {
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
elem38.addEventListener('blur', func40);
	function func40() {
		let str = elem38.value;
		for (let i = 0; i < str.length; i++) {
				if (Number(str[i]) === 3) {
				paragr18.textContent = 'This number contains 3 in it';
				break;
			}
			else paragr18.textContent = 'This number does not contain 3 in it';
			}
	}
//273(11)
let paragr19 = document.getElementById("paragr19");
let paragr20 = document.getElementById("paragr20");
let paragr21 = document.getElementById("paragr21");
let button28 = document.querySelector('#button28');
button28.addEventListener('click', func41);
function func41() { 
	paragr19.textContent = paragr19.textContent + '1';
	paragr20.textContent = paragr20.textContent + '2';
	paragr21.textContent = paragr21.textContent + '3';
}
//273(12) 
let elem39 = document.querySelector('#elem39');
let elem40 = document.querySelector('#elem40');
let button29 = document.querySelector('#button29');
button29.addEventListener('click', func42);
function func42() {
	elem39.textContent = elem39.href + '(' + elem39.href + ')';
	elem40.textContent= elem40.href+ '('+ elem40 .href +')';
}
//273(13)
let elem41 = document.querySelector('#elem41');
let elem42 = document.querySelector('#elem42');
let button30 = document.querySelector('#button30');
button30.addEventListener('click', func43);
function func43() {
	str = elem41.href;
	if (elem41.getAttribute('href').startsWith('https://')) {
  	elem41.innerHTML += ' &rarr;';
	}
	str1 = elem42.href;
	if (elem42.getAttribute('href').startsWith('https://')) {
  	elem42.innerHTML += ' &rarr;';
	}
}

//273(14)
let paragr22 = document.getElementById("paragr22");
let paragr23 = document.getElementById("paragr23");
let paragr24 = document.getElementById("paragr24");
paragr22.addEventListener('click', func44);
paragr23.addEventListener('click', func44);
paragr24.addEventListener('click', func44);
function func44() {
	this.textContent = Math.pow(Number(this.textContent),2);
}
//273(15)
let elem43 = document.querySelector('#elem43');
let paragr25 = document.getElementById("paragr25");
elem43.addEventListener('blur', func45);
	function func45() {
		let date1 = elem43.value;
		let date2 = new Date( Date.parse(date1) ); //распарсили строку в таймстемп и таймстемп превратили в формат даты
		console.log(date2);
		let dayOfWeek = date2.getDay(); //получили день недели в виде числа
		console.log(dayOfWeek);
		let days1 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		// вывод консоли не работает
		сonsole.log(days1[dayOfWeek]);
		
}
//273(16)
let elem44 = document.querySelector('#elem44');
let button31 = document.querySelector('#button31');
button31.addEventListener('click', func46);
function func46() {
	elem44.value = Number(elem44.value) + 1;
	}
let button32 = document.querySelector('#button32');
button32.addEventListener('click', func47);
function func47() {
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
paragr26.addEventListener('click', func48);
paragr27.addEventListener('click', func48);
let counter = 0;
function func48() {
	counter = counter + 1;
	elem45.value = counter;
}
//273(18)
let button33 = document.querySelector('#button33');
button33.addEventListener('click', func49);
let div3 = document.getElementById('div3');
let div4 = document.getElementById('div4');
let div5 = document.getElementById('div5');
function func49() {
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
//let ArrDiv = document.querySelectorAll('.div1');
//function func49() {
//	let sub = "";
//	for (let elem of ArrDiv) {
//		str2 = elem.textContent;
//		if (str2.length > 10) {
//			str3 = str2.slice(0, 10);
//			ArrDiv[0] =
//			console.log(str3);
//		}
	//	}
//}

//273(19)
let elem46 = document.querySelector('#elem46');
elem46.addEventListener('blur', func50);
function func50() {
	if (Number(elem46.value) >= 1 && Number(elem46.value) <= 100)
		//почему-то нельзя применить свойство класса
		//elem46.classList.add(colored);
		elem46.style.backgroundColor = "green";
	else elem46.style.backgroundColor = "red";
}
//273(20)
let button34 = document.querySelector('#button34');
button34.addEventListener('click', func49);
let elem47 = document.querySelector('#elem47');
function func49() {
	chrs = 'abdehkmnpswxzABDEFGHKMNPQRSTWXZ123456789';
	var str8 = '';
	for (var i = 0; i < 8; i++) {
		var pos = Math.floor(Math.random() * 8);
		str8 += chrs.substring(pos, pos + 1);
	}
	elem47.value = str8;
}
//273(21)
let button35 = document.querySelector('#button35');
button35.addEventListener('click', func50);
let elem48 = document.querySelector('#elem48');
function func50() {
	let chrs1 = elem48.value;
		//'abdehkmnpswxzABDEFGHKMNPQRSTWXZ123456789';
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
button36.addEventListener('click', func51);
let elem49 = document.querySelector('#elem49');
let paragr28 = document.getElementById("paragr28");
function func51() {
	let far = Number(elem49.value);
	let celsius = (far - 32) * 5 / 9;
	paragr28.textContent = far + '  Fahrenheit degrees = ' + celsius.toFixed(2) +' Celsius degrees';
}
//273(23)
let button37 = document.querySelector('#button37');
button37.addEventListener('click', func52);
let elem50 = document.querySelector('#elem50');
let paragr29 = document.getElementById("paragr29");
function func52() {
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
	
	let Diskr = (Number(b.value) * Number(b.value)) - (4 * Number(a.value) * Number(c.value));
	console.log(Math.sqrt(Diskr));

	let x1 = ((-Number(b.value)) + Math.sqrt(Diskr)) / (2 * Number(a.value));
	let x2 = ((-Number(b.value)) - Math.sqrt(Diskr)) / (2 * Number(a.value));
	paragr30.textContent = "Equation roots are " + x1 + ' , ' + x2;
}
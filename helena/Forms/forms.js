'use strict'
//274(1)
let elem = document.querySelector('#elem');
elem.addEventListener('blur', writeTextArea);
let paragr = document.querySelector('#paragr');
function writeTextArea() {
    paragr.textContent = elem.textContent;
}
//275(1)
let input1 = document.querySelector('#input1');
let button1 = document.querySelector('#button1');
button1.addEventListener('click', blockInput);
function blockInput() {
    input1.disabled = 'true';
    console.log(input1.disabled);
}
//275(3)
let input2 = document.querySelector('#input2');
let button2 = document.querySelector('#button2');
button2.addEventListener('click', checkIsBlocked);
let paragr1 = document.querySelector('#paragr1');
function checkIsBlocked() {
    if (input2.disabled = 'true')
        paragr1.textContent = 'Input is disabled';
    else paragr1.textContent = 'Input is not disabled';
}
//276(1)
let checkbox = document.querySelector('#input3');
let button3 = document.querySelector('#button3');
let button4 = document.querySelector('#button4');
button3.addEventListener('click', setChecked);
button4.addEventListener('click', setUnchecked);
function setChecked() {
    checkbox.checked = true;
    } 
 function setUnchecked() {
    checkbox.checked = false;
}
//276(2)
let checkbox1 = document.querySelector('#input4');
let button5 = document.querySelector('#button5');
let paragr2 = document.querySelector('#paragr2');
button5.addEventListener('click', isChecked); 
function isChecked() {
    if (checkbox1.checked == true)
        paragr2.textContent = 'HI';
    else paragr2.textContent = 'HELLO';
}
//277(2)
let checkbox2 = document.querySelector('#input5');
let button6 = document.querySelector('#button6');
button6.addEventListener('click', function() {
	checkbox2.disabled = !checkbox2.disabled;
});
//278(3)
let radios = document.querySelectorAll('input[type="radio"]');
let button7 = document.querySelector('#button7');
let paragr3 = document.querySelector('#paragr3');
button7.addEventListener('click', function() {
	for (let radio of radios) {
		if (radio.checked) {
			paragr3.textContent = 'Value of checked radiobutton is  '+ radio.value;
		}
	}
});
//279(1)
let input6 = document.querySelector('#input6');
let paragr4 = document.querySelector('#paragr4');
input6.addEventListener('change', function () {
    paragr4.textContent = input6.value;
});
//279(2)
let checkbox3 = document.querySelector('#input7');
let paragr5 = document.querySelector('#paragr5');
checkbox3.addEventListener('change', function () {
    if (checkbox3.checked) {
        paragr5.textContent = 'Checkbox is checked';
    }
        else paragr5.textContent = 'Checkbox is not checked';
});
//279(4)
let input8 = document.querySelector('#input8');
input8.addEventListener('change', function () {
    if (input8.value.length < 5)
        input8.style.borderColor = 'green';
    else
        input8.style.borderColor = 'red';
});
//280 (1)
let input9 = document.querySelector('#input9');
let paragr6 = document.querySelector('#paragr6');
input9.addEventListener('input', function () {
    if (input9.value.length === 5)
        paragr6.textContent = 'Text length is 5';
});
//280(2)
let input10 = document.querySelector('#input10');
let paragr7 = document.querySelector('#paragr7');
let coun = 0;
let coun1 = 0;
let coun2 = 0;
input10.addEventListener('input', function () {
    while (input10.value)
        if (input10.value.length <= 5) {
            coun = coun + 1;
            let amountOfLeft = 5 - coun;
            paragr7.textContent = amountOfLeft;
            break
        }
        else if (input10.value.length > 5) 
        {
            coun2 = coun2 + 1;
            paragr7.textContent = coun2;
            break
        }
    else break;
});
//281(1)
let input11 = document.querySelector('#input11');
let input12 = document.querySelector('#input12');
input11.addEventListener('input', function () {
    while (input11.value)
        if (input11.value.length === 2) {
            input12.focus();
            break
        }
    else break;
});
input12.addEventListener('input', function () {
    while (input12.value)
        if (input12.value.length === 2) {
            input12.blur();
            break
        }
    else break;
});
//282(1)
let button8 = document.querySelector('#button8');
let paragr8 = document.querySelector('#paragr8');
let select = document.querySelector('#select');
button8.addEventListener('click', function () {
        paragr8.textContent = select.value;
}
);
//282(2)
let selectYears = document.querySelector('#selectYears');
selectYears.addEventListener('change', function () {
    let date = new Date(selectYears.value, 2, 0);
    if (date.getDate() == 29) {
    console.log('високосный');
} else {
	console.log('обычный');
}
})
//282(3)
let selectDay = document.querySelector('#selectDay');
let paragr9 = document.querySelector('#paragr9');
selectDay.addEventListener('change', function () {
    let day = selectDay.value; //сменили выбор селекта и записали в переменную значение
    if (Number(day) === 6 || Number(day) === 7)
        paragr9.textContent = 'Выходной';
    else paragr9.textContent = 'Будний день';
    
})
//283(1)
let selectMonth = document.querySelector('#selectMonth');
let date1 = new Date();
let currentMonth = date1.getMonth() + 1;// получаем текущий месяц
selectMonth.value = currentMonth;
//284(1)
let select1 = document.querySelector('#select1');
let input13 = document.querySelector('#input13');
input13.addEventListener('blur', function () { 
    let num = input13.value;
    select1.selectedIndex = num;
    
})
//284(2)
let selectDay1 = document.querySelector('#selectDay1');
let date2 = new Date();
let dayOfWeek = date2.getDay();
selectDay1.selectedIndex = dayOfWeek - 1;
//285(1)
let selectDay2 = document.querySelector('#selectDay2');
for (let option of selectDay2) {
    option.textContent += option.value;
}
//286(1)
let selectDay3 = document.querySelector('#selectDay3');
let num1;
for (let option1 of selectDay3) {//перебираем пункты меню списком
	num1 = selectDay3.selectedIndex; //Определили номер выбранного пункта (нумерация с 0)
}
selectDay3[num1].textContent = selectDay3[num1].textContent + '!';
for (let i = 0; i < selectDay3.length; i++)
    if (i === num1) continue;
else selectDay3[i].textContent = selectDay3[i].textContent + '?';
//286(2)
let selectDay4 = document.querySelector('#selectDay4');
let button9 = document.querySelector('#button9');
button9.addEventListener('click', function () {
    let lastOption = selectDay4.length;
    selectDay4.selectedIndex = lastOption-1;
 });
//286(3)
let selectDay5 = document.querySelector('#selectDay5');
let button10 = document.querySelector('#button10');
let paragr10 = document.querySelector('#paragr10');
button10.addEventListener('click', function () {
    let selectedOption = selectDay5.selectedIndex;
    paragr10.textContent = selectDay5[selectedOption].textContent;
});
//286(4) 
let selectDay6 = document.querySelector('#selectDay6');
let button11 = document.querySelector('#button11');
button11.addEventListener('click', function () {
    let selectedOption1 = selectDay6.selectedIndex;
    selectDay6[selectedOption1].textContent = selectDay6[selectedOption1].textContent +"!";
});

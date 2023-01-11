"use strict";

//274.1
let paragraph = document.querySelector("#elem");
let textarea = document.querySelector("#elem1");
textarea.addEventListener("blur", function () {
  textarea.value = paragraph.textContent;
});
textarea.addEventListener("focus", getStart);

function getStart() {
  this.value = "";
}

//275.1, 275.2, 275.3
let input = document.querySelector("#elem2");
let button = document.querySelector("#elem3");
let button2 = document.querySelector("#elem4");
let button3 = document.querySelector("#elem5");
button.addEventListener("click", function () {
  input.disabled = true;
});
button2.addEventListener("click", function () {
  input.disabled = false;
});
button3.addEventListener("click", function () {
  input.value = input.disabled;
});
input.addEventListener("focus", getStart);

//276.1
let input2 = document.querySelector("#elem6");
let button4 = document.querySelector("#elem7");
let button5 = document.querySelector("#elem8");
button4.addEventListener("click", function () {
  input2.checked = true;
});
button5.addEventListener("click", function () {
  input2.checked = false;
});

//276.2
let input3 = document.querySelector("#elem9");
let button6 = document.querySelector("#elem10");
let paragraph2 = document.querySelector("#elem11");

button6.addEventListener("click", function () {
  if (input3.checked) {
    paragraph2.textContent = "Привет";
  } else {
    paragraph2.textContent = "Пока";
  }
});

//277.2
let input4 = document.querySelector("#elem12");
let button7 = document.querySelector("#elem13");
button7.addEventListener("click", function () {
  input4.checked = !input4.checked;
});

//278.1
let radiobuttons = document.querySelectorAll("input[type='radio']");
let button8 = document.querySelector("#elem15");
let paragraph3 = document.querySelector("#elem16");
button8.addEventListener("click", function () {
  for (let radio of radiobuttons) {
    if (radio.checked) {
      paragraph3.textContent = radio.value;
    }
  }
});

//279.1
let input5 = document.querySelector("#elem17");
let paragraph4 = document.querySelector("#elem18");
input5.addEventListener("change", function () {
  paragraph4.textContent = this.value;
});
input5.addEventListener("focus", getStart);

//279.2
let input6 = document.querySelector("#elem19");
let paragraph5 = document.querySelector("#elem20");
input6.addEventListener("change", function () {
  if (input6.checked) {
    paragraph5.textContent = "Отмечено";
  } else {
    paragraph5.textContent = "Не отмечено";
  }
});

//279.4
let input7 = document.querySelector("#elem21");
input7.addEventListener("change", function () {
  if (input7.value.length < 5) {
    this.style.border = "3px solid green";
  } else {
    this.style.border = "3px solid red";
  }
});

//280.1
let input8 = document.querySelector("#elem22");
let paragraph6 = document.querySelector("#elem23");
input8.addEventListener("input", function () {
  if (input8.value.length >= 5) {
    paragraph6.textContent = "Длинна достигла 5 знаков";
  } else {
    paragraph6.textContent = "";
  }
});

//280.2
let input9 = document.querySelector("#elem24");
let paragraph7 = document.querySelector("#elem25");
input9.addEventListener("input", function () {
  if (input9.value.length <= 5) {
    paragraph7.textContent =
      "Осталось " + (5 - input9.value.length) + " знаков";
  } else if (input9.value.length > 5) {
    paragraph7.textContent =
      "На " + (input9.value.length - 5) + " знаков превышен лимит";
  }
});

//281.1
let input10 = document.querySelector("#elem26");
let input11 = document.querySelector("#elem27");
input10.addEventListener("input", function () {
  if (this.value.length >= 2) {
    this.blur();
    input11.focus();
  }
});
input11.addEventListener("input", function () {
  if (this.value.length >= 2) {
    this.blur();
  }
  input10.addEventListener("focus", getStart);
  input11.addEventListener("focus", getStart);
});

//282.1
let select = document.querySelector("#elem28");
let paragraph8 = document.querySelector("#elem29");
let button9 = document.querySelector("#elem30");
button9.addEventListener("click", function () {
  paragraph8.textContent = select.value;
});

//282.2
let select2 = document.querySelector("#elem31");
let paragraph9 = document.querySelector("#elem32");
select2.addEventListener("change", function () {
  let date = new Date(select2.value, 2, 0);
  if (date.getDate() === 29) {
    paragraph9.textContent = "високосный";
  } else {
    paragraph9.textContent = "не високосный";
  }
});
//282.3
let select3 = document.querySelector("#elem33");
let paragraph10 = document.querySelector("#elem34");
select3.addEventListener("change", function () {
  if (select3.value >= 1 && select3.value <= 5) {
    paragraph10.textContent = "Рабочий день";
  } else {
    paragraph10.textContent = "Выходной день";
  }
});

//283.1
let select4 = document.querySelector("#elem35");
let date = new Date();
select4.value = date.getMonth();

//284.1
let input12 = document.querySelector("#elem36");
let select5 = document.querySelector("#elem37");
input12.addEventListener("blur", function () {
  select5.selectedIndex = input12.value - 1;
});
input12.addEventListener("focus", getStart);

//284.2
let select6 = document.querySelector("#elem38");
let date2 = new Date();
select6.selectedIndex = date2.getDay() - 1;

//285.1
let select7 = document.querySelector("#elem39");
let button10 = document.querySelector("#elem40");
button10.addEventListener("click", function () {
  for (let option of select7) {
    option.textContent = option.textContent + Number(option.value);
  }
});

//286.1
let select8 = document.querySelector("#elem41");
select8.addEventListener("change", function () {
  for (let option of select8) {
    if (option.selected) {
      option.text += "!";
    } else {
      option.text += "?";
    }
  }
});
select8.addEventListener("input", function () {
  for (let option of select8) {
    if (option.text.includes("!") || option.text.includes("?")) {
      option.text = option.text.slice(0, -1);
    } else {
    }
  }
});

//286.2
let select9 = document.querySelector("#elem42");
let button11 = document.querySelector("#elem43");
button11.addEventListener("click", function () {
  let last = select9[select9.length - 1];
  last.selected = true;
});

//286.3
let select10 = document.querySelector("#elem44");
let button12 = document.querySelector("#elem45");
let paragraph11 = document.querySelector("#elem46");
button12.addEventListener("click", function () {
  for (let option of select10) {
    if (option.selected) {
      paragraph11.textContent = option.text;
    }
  }
});

//286.4
let select11 = document.querySelector("#elem47");
let button13 = document.querySelector("#elem48");
button13.addEventListener("click", function () {
  for (let option of select11) {
    if (option.selected) {
      option.text += "!";
    }
  }
});

//287.1
let textarea2 = document.querySelector("#elem49");
let div = document.querySelector("#elem50");

textarea2.addEventListener("blur", function () {
  div.textContent = textarea2.value;
});

//287.2
let checkbox = document.querySelector("#elem51");
let button14 = document.querySelector("#elem53");
let div2 = document.querySelector("#elem52");

button14.addEventListener("click", function () {
  if (checkbox.checked) {
    div2.textContent = "111";
  } else {
    div2.textContent = "222";
  }
});

//287.3
let checkbox2 = document.querySelector("#elem54");
let button15 = document.querySelector("#elem55");

button15.addEventListener("click", function () {
  if (checkbox2.checked) {
    console.log("+++");
  } else {
    console.log("---");
  }
});

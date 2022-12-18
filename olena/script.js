//1
let input = document.querySelector("#inp1");
let paragraph = document.querySelector("#elem");
input.addEventListener("blur", function () {
  paragraph.textContent += input.value;
  input.value = "";
});

//2
let input2 = document.querySelector("#inp2");
let input3 = document.querySelector("#inp3");
let input4 = document.querySelector("#inp4");
let paragraph2 = document.querySelector("#elem2");
let button = document.querySelector("#button");
button.addEventListener("click", function () {
  paragraph2.textContent =
    Number(input2.value) + Number(input3.value) + Number(input4.value);
  input2.value = "";
  input3.value = "";
  input4.value = "";
});

//3
let sumNumber = document.querySelector("#inp5");

sumNumber.addEventListener("blur", function () {
  let sum = 0;
  for (let elem of sumNumber.value) {
    sum += Number(elem);
    sumNumber.value = sum;
  }
});
sumNumber.addEventListener("focus", function () {
  sumNumber.value = "";
});

//4
let input6 = document.querySelector("#inp6");
input6.addEventListener("blur", function () {
  let sum = 0;
  let arr = input6.value.split(",");
  for (let elem of arr) {
    sum += Number(elem) / arr.length;
    input6.value = sum;
  }
});
input6.addEventListener("focus", function () {
  input6.value = "";
});

//5
let input7 = document.querySelector("#inp7");
let input8 = document.querySelector("#inp8");
let input9 = document.querySelector("#inp9");
let input10 = document.querySelector("#inp10");

input7.addEventListener("blur", function () {
  let arr = input7.value.split(" ");
  input8.value = arr[0];
  input9.value = arr[1];
  input10.value = arr[2];
});
input7.addEventListener("focus", function () {
  input7.value = "";
  input8.value = "";
  input9.value = "";
  input10.value = "";
});

//6
let input11 = document.querySelector("#inp11");
input11.addEventListener("blur", function () {
  let arr = input11.value.split(" ");
  let arr2 = [];
  for (let elem of arr) {
    arr2.push(elem.slice(0, 1).toUpperCase() + elem.slice(1));
    input11.value = arr2.join(" ");
  }
});
input11.addEventListener("focus", function () {
  input11.value = "";
});

//7
let input12 = document.querySelector("#inp12");
input12.addEventListener("blur", function () {
  let arr = input12.value.split(" ");
  input12.value = arr.length;
});
input12.addEventListener("focus", function () {
  input12.value = "";
});

//8
let input13 = document.querySelector("#inp13");
input13.addEventListener("blur", function () {
  let d = input13.value.split(".").reverse().join("-");

  input13.value = d;
});
input13.addEventListener("focus", function () {
  input13.value = "";
});

//9
let input14 = document.querySelector("#inp14");
let button14 = document.querySelector("#button14");

button14.addEventListener("click", function () {
  let reverse = input14.value.split("").reverse().join("");
  if (input14.value === reverse) {
    input14.value = "палиндром";
  } else {
    input14.value = "не палиндром";
  }
});
input14.addEventListener("focus", function () {
  input14.value = "";
});

//10
let input15 = document.querySelector("#inp15");
input15.addEventListener("blur", function () {
  let split = input15.value.split("");
  for (let elem of split) {
    if (Number(elem) === 3) {
      input15.value = true;
    } else {
      input15.value = false;
    }
  }
});
input15.addEventListener("focus", function () {
  input15.value = "";
});

//11
let paragraph13 = document.querySelectorAll("#elem13");
let button15 = document.querySelector("#button15");
let button16 = document.querySelector("#button16");
button15.addEventListener("click", function () {
  let arr = [];
  for (let elem of paragraph13) {
    arr.push((elem.textContent += arr.length + 1));
  }
});
button16.addEventListener("click", function getClean() {
  for (let elem of paragraph13) {
    elem.textContent = "ordinal number ";
  }
});

//12
let site = document.querySelectorAll("#elem14");
let button17 = document.querySelector("#button17");
button17.addEventListener("click", addLink);
function addLink() {
  let arr = [];
  for (let elem of site) {
    arr.push((elem.textContent = elem.textContent + "(" + elem.href + ")"));
  }
  this.removeEventListener("click", addLink);
}

//13
let site2 = document.querySelectorAll("#elem15");
let button18 = document.querySelector("#button18");
button18.addEventListener("click", function addArrow() {
  for (let elem of site2) {
    if (elem.href.indexOf("http://") === 0) {
      elem.textContent = elem.textContent + "\u2192";
    }
  }
  this.removeEventListener("click", addArrow);
});

//14
let paragraph16 = document.querySelector("#elem16");
let paragraph17 = document.querySelector("#elem17");
let paragraph18 = document.querySelector("#elem18");
paragraph16.addEventListener("click", getSquareOfNumber);
paragraph17.addEventListener("click", getSquareOfNumber);
paragraph18.addEventListener("click", getSquareOfNumber);
function getSquareOfNumber() {
  this.textContent *= this.textContent;
}

//15
let input19 = document.querySelector("#elem19");
input19.addEventListener("blur", function () {
  let date = new Date(input19.value.split(".").reverse().join(","));
  let day = date.getDay();
  let days = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
  input19.value = days[day];
});
input19.addEventListener("focus", function () {
  input19.value = "";
});

//16
let input20 = document.querySelector("#elem20");
let bigger = document.querySelector("#bigger");
let smaller = document.querySelector("#smaller");
bigger.addEventListener("click", function () {
  input20.value = Number(input20.value) + 1;
});
smaller.addEventListener("click", function () {
  input20.value = Number(input20.value) - 1;
  if (Number(input20.value) === -1) {
    input20.value = 0;
  }
});

//17
let input21 = document.querySelector("#elem21");
let paragraph22 = document.querySelector("#elem22");
let paragraph23 = document.querySelector("#elem23");
let button21 = document.querySelector("#button21");
paragraph22.addEventListener("click", quantityClick);
paragraph23.addEventListener("click", quantityClick);
let sum = 0;
function quantityClick() {
  sum++;
  input21.value = sum;
}
button21.addEventListener("click", function () {
  input21.value = "";
});

//18
let elements = document.querySelector("#elem24");
let elements2 = document.querySelector("#elem25");
elements.addEventListener("mouseover", getSlice);
elements2.addEventListener("mouseover", getSlice);
function getSlice() {
  this.textContent = this.textContent.slice(0, 10) + ":";
}

//19
let input26 = document.querySelector("#elem26");
input26.addEventListener("blur", function () {
  if (Number(input26.value) >= 1 && Number(input26.value) <= 100) {
    this.style.background = "green";
  } else {
    this.style.background = "red";
  }
});
input26.addEventListener("focus", function () {
  input26.value = "";
  this.style.background = "white";
});

//20
let input27 = document.querySelector("#elem27");
let button28 = document.querySelector("#elem28");
button28.addEventListener("click", function () {
  input27.value = Math.floor(
    Math.random() * (99999999 - 10000000 + 1) + 10000000
  );
});

//21
let input29 = document.querySelector("#elem29");
let button30 = document.querySelector("#elem30");
let arr = [];
button30.addEventListener("click", function () {
  let split = input29.value.split("");
  for (let elem of split) {
    arr.push((arr[elem] = split[getRandom(0, split.length - 1)]));
    input29.value = arr.join("");
  }
});
function getRandom(min, max) {
  return Math.floor(Math.random() * max - min + 1) + min;
}

//22
let input31 = document.querySelector("#elem31");
let button32 = document.querySelector("#elem32");
let paragraph31 = document.querySelector("#paragraph31");
button32.addEventListener("click", function () {
  paragraph31.textContent = (input31.value - 32) / 1.8;
});

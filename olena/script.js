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
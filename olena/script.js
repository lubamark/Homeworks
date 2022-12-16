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

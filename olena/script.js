let input = document.querySelector("#inp1");
let paragraph = document.querySelector("#elem");
input.addEventListener("blur", function () {
  paragraph.textContent += input.value;
  input.value = "";
});

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

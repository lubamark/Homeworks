let input = document.querySelector("#inp1");
let paragraph = document.querySelector("#elem");
input.addEventListener("blur", function () {
  paragraph.textContent += input.value;
});

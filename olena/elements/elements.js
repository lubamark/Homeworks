"use strict";

//318.1
let elem = document.querySelector("#elem");
let li = document.createElement("li");
li.textContent = "item";
elem.appendChild(li);

//318.2
let elem2 = document.querySelector("#elem2");
let button = document.querySelector("#button");
button.addEventListener("click", function () {
  let li2 = document.createElement("li");
  li2.textContent = "item";
  elem2.appendChild(li2);
});

//319.1
let elem3 = document.querySelector("#elem3");
let button2 = document.querySelector("#button2");
button2.addEventListener("click", function () {
  let li3 = document.createElement("li");
  li3.textContent = "new";
  elem3.appendChild(li3);
  li3.addEventListener("click", function () {
    this.textContent += "!";
  });
});

//320.1
let elem4 = document.querySelector("#elem4");
for (let i = 1; i <= 10; i++) {
  let li4 = document.createElement("li");
  li4.textContent = i;
  elem4.appendChild(li4);
}

//321.1
let elem5 = document.querySelector("#elem5");
let elem6 = document.querySelector("#elem6");

for (let i = 1; i <= 5; i++) {
  let input = document.createElement("input");
  input.value = i;
  elem5.appendChild(input);
  input.addEventListener("blur", function () {
    elem6.textContent = input.value;
  });
}

//322.1
let elem7 = document.querySelector("#elem7");
for (let elem of elem7.children) {
  elem.addEventListener("click", function () {
    elem.remove();
  });
}

//322.2
let parent = document.querySelector("#parent");
let input = document.querySelector("#button3");
button3.addEventListener("click", function () {
  parent.lastElementChild.remove();
});

//323.1
let parent2 = document.querySelector("#parent2");
let li5 = document.createElement("li");
li5.textContent = "start";
parent2.prepend(li5);
let li6 = document.createElement("li");
li6.textContent = "finish";
parent2.appendChild(li6);

//323.2, 323.3
let parent3 = document.querySelector("#parent3");
let elem8 = document.querySelector("#elem8");
let li7 = document.createElement("li");
li7.textContent = "new";
parent3.insertBefore(li7, elem8);
li7.addEventListener("click", function () {
  this.textContent += "!";
});

//324.1
let elem19 = document.querySelector("#elem19");
let p = document.createElement("p");
p.textContent = "!!!";
elem19.insertAdjacentElement("beforeBegin", p);

//324.2
let elem20 = document.querySelector("#elem20");
let p2 = document.createElement("p");
p2.textContent = "!!!";
elem20.insertAdjacentElement("afterEnd", p2);

//324.3
let elem21 = document.querySelector("#elem21");
let p3 = document.createElement("p");
p3.textContent = "!!!";
elem21.insertAdjacentElement("afterBegin", p3);

//324.4
let elem22 = document.querySelector("#elem22");
let p4 = document.createElement("p");
p4.textContent = "!!!";
elem22.insertAdjacentElement("beforeEnd", p4);

//324.5
let elem23 = document.querySelector("#elem23");
elem23.insertAdjacentHTML(
  "beforeBegin",
  "<div class=`www`><p>text</p><p>text</p><input></div>"
);

//325.1
let elem24 = document.querySelector("#elem24");
let elem25 = document.querySelector("#elem25");
let elem26 = document.querySelector("#elem26");
elem26.addEventListener("click", function () {
  elem24.appendChild(elem25.cloneNode(true));
});

//326.1, 326.2
let elem27 = document.querySelector("#elem27");
console.log(elem27.matches("div.www"));
console.log(elem27.matches("p"));

//326.3
let elem28 = document.querySelector("#elem28");
let elem29 = document.querySelector("#elem29");
console.log(elem28.contains(elem29));

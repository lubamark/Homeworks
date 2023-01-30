"use strict";

//288.1
let button = document.querySelector("#elem");
button.addEventListener("click", function (evt) {
  console.log(evt);
});

//289.1
let paragraph = document.querySelector("#elem2");
document.addEventListener("mousemove", function (evt) {
  paragraph.textContent = evt.clientX + " : " + evt.clientY;
});

//290.1
let elem = document.querySelector("#elem3");

elem.addEventListener("click", func);
elem.addEventListener("dblclick", func);

function func(evt) {
  if (evt.type === "click") {
    elem.style.background = "green";
  } else if (evt.type === "dblclick") {
    elem.style.background = "red";
  }
}

//291.1
let elem2 = document.querySelector("#elem4");
elem2.addEventListener("click", function (evt) {
  if (evt.target.tagName.toLowerCase() === "ul") {
    let li = document.createElement("li");
    li.textContent = "text";
    elem2.appendChild(li);
  } else if (evt.target.tagName.toLowerCase() === "li") {
    evt.target.textContent += "!";
  }
});

//292.5
let input = document.querySelector("#elem5");
let paragraph2 = document.querySelector("#elem6");
input.addEventListener("keypress", function (evt) {
  if (evt.key === "Enter") {
    paragraph2.textContent = input.value;
    input.value = "";
  }
});

//293.1
let elem3 = document.querySelector("#elem7");
elem3.addEventListener("click", function (evt) {
  evt.altKey
    ? (this.style.background = "red")
    : (this.style.background = "white");
});

//293.2
let elem4 = document.querySelector("#elem8");
elem4.addEventListener("click", function (evt) {
  if (evt.target.tagName.toLowerCase() === "li") {
    if (evt.ctrlKey) {
      evt.target.textContent += 1;
    } else if (evt.shiftKey) {
      evt.target.textContent += 2;
    }
  }
});

//294.1
let link = document.querySelector("#elem9");
let link2 = document.querySelector("#elem10");
link.addEventListener("click", addLink);
link2.addEventListener("click", addLink);
function addLink(evt) {
  evt.preventDefault();
  this.textContent += " " + this.href;
}

//294.2
let input2 = document.querySelector("#elem11");
let input3 = document.querySelector("#elem12");
let paragraph3 = document.querySelector("#elem13");
let link3 = document.querySelector("#elem14");
link3.addEventListener("click", function (evt) {
  evt.preventDefault();
  paragraph3.textContent = Number(input2.value) + Number(input3.value);
});
input2.addEventListener("focus", getStart);
input3.addEventListener("focus", getStart);
function getStart() {
  this.value = "";
  paragraph3.textContent = "";
}

//296.2
let elem5 = document.querySelector("#elem15");
elem5.addEventListener("click", function (evt) {
  if (evt.target.matches("li")) {
    evt.target.textContent += "!";
  } else if (evt.target.matches("ul")) {
    let li = document.createElement("li");
    let last = elem5.lastElementChild.lastElementChild.textContent.slice(0, 1);
    li.textContent = Number(last) + 1;
    elem5.lastElementChild.appendChild(li);
  }
});

//197.1
let parent = document.querySelector("#elem16");
let button2 = document.querySelector("#elem17");
let block = document.querySelector("#elem18");
button2.addEventListener("click", function (evt) {
  block.classList.add("active");
  evt.stopPropagation();
});
parent.addEventListener("click", function () {
  block.classList.remove("active");
});

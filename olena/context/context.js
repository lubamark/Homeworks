"use strict";

//304.1
let elem = document.querySelector("#elem");
elem.addEventListener("blur", func);

function func() {
  let self = this;
  alert(square());

  function square() {
    return self.value ** 2;
  }
}
//во внетренней функции теряется контекст (this не видна)

//304.2
let elem2 = document.querySelector("#elem2");
elem2.addEventListener("blur", func);

function func2() {
  alert(square(this));

  function square(param) {
    return param.value ** 2;
  }
}

//304.3
let elem3 = document.querySelector("#elem3");
elem3.addEventListener("blur", func);

function func3() {
  alert(square);

  let square = () => {
    return this.value ** 2;
  };
}

//305.1
let elem4 = document.querySelector("#elem4");
let elem5 = document.querySelector("#elem4");
let elem6 = document.querySelector("#elem4");

function func4() {
  console.log(this.value);
}
func4.call(elem4);
func4.call(elem5);
func4.call(elem6);

//305.2
let elem7 = document.querySelector("#elem7");

function func5(surname, name) {
  console.log(this.value + ", " + name + " " + surname);
}

func5.call(elem7, "Smit", "John");

//306.1
let elem8 = document.querySelector("#elem8");

function func6(surname, name) {
  console.log(this.value + ", " + name + " " + surname);
}

func6.apply(elem8, ["Smit", "John"]);

//307.1
let elem9 = document.getElementById("elem9");

function func7(name, surname) {
  console.log(this.value + ", " + name + " " + surname);
}
// тут напишите конструкцию с bind()
func7 = func7.bind(elem9);

func7("John", "Smit"); // тут должно вывести 'hello, John Smit'
func7("Eric", "Luis"); // тут должно вывести 'hello, Eric Luis'

//308.1
let elem10 = document.querySelector("#elem10");
setInterval(function () {
  elem10.textContent += "!";
}, 3000);

//309.1
let elem11 = document.querySelector("#elem11");
let i = 100;
setInterval(() => {
  elem11.textContent = i--;
}, 1000);

//310.1
let elem12 = document.querySelector("#elem12");
let j = 10;
let timerID = setInterval(() => {
  elem12.textContent = --j;
  if (j === 1) {
    clearInterval(timerID);
  }
}, 1000);

//311.1
let elem13 = document.querySelector("#elem13");
let elem14 = document.querySelector("#elem14");

elem14.addEventListener("click", function getStartTimer() {
  let i2 = 100;
  setInterval(function () {
    elem13.textContent = i2--;
  }, 2000);
});

//311.2
let elem15 = document.querySelector("#elem15");
let elem16 = document.querySelector("#elem16");

elem16.addEventListener("click", function getStartTimer2() {
  let i3 = 100;
  setInterval(function () {
    elem15.textContent = i3--;
  }, 3000);
  this.removeEventListener("click", getStartTimer2);
});

//312.1
let elem17 = document.querySelector("#elem17");
let elem18 = document.querySelector("#elem18");
let elem19 = document.querySelector("#elem19");
let timerID2;

function getStartTimer3() {
  let i4 = 100;
  timerID2 = setInterval(function () {
    elem17.textContent = --i4;
    if (i4 === 0) {
      clearInterval(timerID2);
    }
  }, 1000);
  this.removeEventListener("click", getStartTimer3);
}

elem18.addEventListener("click", getStartTimer3);
elem19.addEventListener("click", function () {
  clearInterval(timerID2);
  elem18.addEventListener("click", getStartTimer3);
});

//312.2
let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let timerId;
start.addEventListener("click", function () {
  timerId = setInterval(function () {
    let date = new Date();
    console.log(date.getMinutes() + " " + date.getSeconds());
  }, 1000);
});

stop.addEventListener("click", function () {
  clearInterval(timerId);
});

//312.3
let start2 = document.querySelector("#start2");
let stop2 = document.querySelector("#stop2");

let timerId2;

start2.addEventListener("click", function () {
  timerId2 = setInterval(function () {
    let date = new Date();
    console.log(date.getMinutes() + " " + date.getSeconds());
  }, 1000);
});

stop2.addEventListener("click", function () {
  clearInterval(timerId2);
});

//312.4
let start3 = document.querySelector("#start3");
let stop3 = document.querySelector("#stop3");

let timerId3;

start3.addEventListener("click", function () {
  timerId3 = setInterval(function () {
    let date = new Date();
    console.log(date.getMinutes() + " " + date.getSeconds());
  }, 1000);
});

stop3.addEventListener("click", function () {
  clearInterval(timerId3);
});

//312.5
let start4 = document.querySelector("#start4");
let stop4 = document.querySelector("#stop4");

let timerId4;

start4.addEventListener("click", function () {
  timerId4 = setInterval(function () {
    let date = new Date();
    console.log(date.getMinutes() + " " + date.getSeconds());
  }, 1000);
});

stop4.addEventListener("click", function () {
  clearInterval(timerId4);
});

//312.6
let start5 = document.querySelector("#start5");
let stop5 = document.querySelector("#stop5");

let timerId5;
function getStart() {
  timerId5 = setInterval(function () {
    let date = new Date();
    console.log(date.getMinutes() + " " + date.getSeconds());
  }, 1000);

  this.removeEventListener("click", getStart);
}

start5.addEventListener("click", getStart);

stop5.addEventListener("click", function () {
  clearInterval(timerId5);
  start5.addEventListener("click", getStart);
});

//313.2, 313.3
let elem20 = document.querySelector("#elem20");

let timerId6 = setInterval(function () {
  elem20.value -= 1;
  if (Number(elem20.value) === 0) {
    clearInterval(timerId6);
  }
}, 1000);

//314.1
let elem21 = document.querySelector("#elem21");

elem21.addEventListener("click", function () {
  let self = this;
  setInterval(function () {
    self.value = Number(self.value) + 1;
  }, 1000);
});

//314.2
let elem22 = document.querySelector("#elem22");

elem22.addEventListener("click", function () {
  setInterval(() => {
    this.value = Number(this.value) + 1;
  }, 1000);
});

//315.1
let elem23 = document.querySelector("#elem23");

elem23.addEventListener("click", function () {
  setInterval(
    function (self) {
      self.value--;
    },
    1000,
    this
  );
});

//316.3
let elem24 = document.querySelector("#elem24");

setInterval(() => {
  elem24.value **= 2;
}, 1000);

//316.4
let elem25 = document.querySelector("#elem25");
let elem26 = document.querySelector("#elem26");

elem25.addEventListener("blur", function () {
  let i25 = elem25.value;
  let timerID3 = setInterval(() => {
    elem26.textContent = --i25;
    if (Number(elem26.textContent) === 0) {
      clearInterval(timerID3);
    }
  }, 1000);
});

//316.7
let elem27 = document.querySelector("#elem27");
elem27.style.color = "red";
setInterval(() => {
  if (elem27.style.color === "red") {
    elem27.style.color = "green";
  } else {
    elem27.style.color = "red";
  }
}, 1000);

//316.8
let elem28 = document.querySelector("#elem28");

setInterval(() => {
  let date = new Date();
  elem28.textContent =
    addZero(date.getHours()) +
    ":" +
    addZero(date.getMinutes()) +
    ":" +
    addZero(date.getSeconds());
}, 1000);
function addZero(num) {
  if (num <= 9) {
    return "0" + num;
  } else {
    return num;
  }
}

//317.1
let elem29 = document.querySelector("#elem29");
setTimeout(function () {
  elem29.textContent = "Прошло 10 секунд)";
}, 10000);

//317.2
let elem30 = document.querySelector("#elem30");
elem30.textContent = "0";
function getTimer() {
  setTimeout(function () {
    elem30.textContent++;
    getTimer();
  }, 1000);
}
getTimer();

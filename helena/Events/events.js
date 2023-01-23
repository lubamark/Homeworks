'use strict'

//288(1)
let button1 = document.querySelector('#button1');

button1.addEventListener('click', function() {

});
button1.addEventListener('click', function(event) {
	console.log(event); // увидим объект с событием
});

//290(1)

let button2 = document.querySelector('#button2');
button2.addEventListener('click', func)
button2.addEventListener('dblclick', func);

function func(event) {
  if (event.type == 'dblclick') {
    button2.style.backgroundColor = "red";
  }
  else if (event.type == 'click') {
    button2.style.backgroundColor = "green";
    
  }
}
//291(1) 
let ul1 = document.querySelector('#ul1');
ul1.addEventListener('click', function(event) {
var li = event.target.closest("li");
	if (li) {
		li.innerHTML +="!"; 
  }
  var ul = event.target.closest("ul");
  if (ul) {
    let liLast = document.createElement('li');
     liLast.innerHTML = 'append';
     ul1.append(liLast);
  }
});

//292(1)
let input1 = document.querySelector('#input1');
input1.addEventListener('keypress', function(event) {
    console.log(event.key);
    console.log(event.code);
});
//292(5)
let input2 = document.querySelector('#input2');
let paragr = document.querySelector('#paragr');
input2.addEventListener('keypress', function(event) {
      if (event.code == 'Enter') {
      paragr.textContent = input2.value;
      input2.value = "";
    }
});
//293(1)
let button3 = document.querySelector('#button3');
button3.addEventListener('click', function(event) {
  if (event.altKey) {
   button3.style.backgroundColor= "red";
    }
});
//293(2)
let ul2 = document.querySelector('#ul2');
ul2.addEventListener('click', function (event) {
  var li1 = event.target.closest("li");
  if (li1) {
    if (event.ctrlKey) {
      li1.innerHTML += "1";
    }
    else if (event.shiftKey) {
      li1.innerHTML += "2";
    }
  }
})
//294(1)
let link = document.querySelector('#link');
link.addEventListener('click', function(event) {
	event.preventDefault();
  link.textContent = link.textContent+" "+ link.href;
});
//294(2)
let link1 = document.querySelector('#link1');
let input3 = document.querySelector('#input3');
let input4 = document.querySelector('#input4');
let paragr1 = document.querySelector('#paragr1');

link1.addEventListener('click', function (event) {
	event.preventDefault();
  paragr1.textContent = paragr1.textContent+ (Number(input3.value)+Number(input4.value));
});

//296(1)
let div11 = document.querySelector('#div11');
div11.addEventListener('click', function(event) {
  if (event.target.tagName === 'DIV') {
		console.log('клик именно по диву');
	}
	if (event.target.tagName === 'UL') {
		console.log('клик именно по UL');
  }
  if (event.target.tagName === 'LI') {
		console.log('клик именно по LI');
  }
});
//296(2)
let div22 = document.querySelector('#div22');
div22.addEventListener('click', function(event) {
  console.log(this);
  console.log(event.target);
  if (event.target.tagName === 'UL') {
    console.log('клик именно по UL');
   var ul3 = event.target.closest("ul");
    let liLast1 = document.createElement('li');
     liLast1.innerHTML = 'append';
     ul3.append(liLast1);
  }
  if (event.target.tagName === 'LI') {
    console.log('клик именно по LI');
    var li3 = event.target.closest("li");
    li3.innerHTML +="!"; 
  }
});
//303 не работает
let input5 = document.querySelector('#input5');
input5.addEventListener('blur', parent);

function parent() {
	console.log(this.value); // что выведет?
	
	function child() {
		console.log(this.value); // что выведет?
	}
	child();
}















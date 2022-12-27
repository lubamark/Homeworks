'use strict';

console.log('forms!');

window.onload = function () {
  //текстареа
  const textarea = document.getElementById('textarea');
  const blockT = document.getElementById('blockTextarea');
  const unblockT = document.getElementById('unblockTextarea');
  const readonlyT = document.getElementById('readonlyTextarea');
  const editableT = document.getElementById('editableTextarea');
  console.log(textarea.innerHTML);
  console.log(textarea.textContent);
  console.log(textarea.value);
  textarea.value = 'Hello textarea!';
  console.log(textarea.value);

  blockT.addEventListener('click', function disableElement() {
    textarea.disabled = true;
    console.log(textarea.value);
  });

  unblockT.addEventListener('click', function enableElement() {
    textarea.disabled = false;
  });

  readonlyT.addEventListener('click', function () {
    textarea.readOnly = true;
    console.log(textarea.value);
  })

  editableT.addEventListener('click', function () {
    textarea.readOnly = false;
  })

  textarea.addEventListener('input', function () {
    console.log(this.value);
  })



  //инпут
  const inputNumber = document.getElementById('inputNumber');
  inputNumber.addEventListener('change', function () {
    if (+this.value > 10) {
      this.disabled = true;
    }
  })

  //чекбокс
  const inputCheckbox = document.getElementById('checkbox');

  inputCheckbox.addEventListener('change', function () {
    console.log(this.checked);
  })

  // переключение аттрибута

  const toggleButton = document.getElementById('toggleDisabled');

  toggleButton.addEventListener('click', function () {
    textarea.disabled = !textarea.disabled;
  })

  // radiobuttons
  const radios = document.querySelectorAll('#radioButtons input[type="radio"]');
  const showValueButton = document.getElementById('showValue');

  showValueButton.addEventListener('click', function () {
    for (let radio of radios) {
      if (radio.checked) {
        console.log(radio.value);
      }
    }
  })

  // select
  const select = document.getElementById('select1');
  const options = select.getElementsByTagName('option');
  const selectButton = document.getElementById('changeSelectValue');

  select.addEventListener('change', function () {
    for (let i = options.length - 1; i >= 0; i--) {
      options[i].disabled = !options[i].disabled;
    }
  });

  selectButton.addEventListener('click', function () {
    select.value = 'banana'; // если нет value, то пишем текст в тэгах
  })


}
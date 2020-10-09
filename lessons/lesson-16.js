// Chatty events и image lazy-loading

            //0.01 mousemove

// const coordsOutputRef = document.querySelector('.js-coords');
// let mouseMoveCbInvocationCounter = 0;

// window.addEventListener('mousemove', onMouseMove);

// function onMouseMove(event) {
//   mouseMoveCbInvocationCounter += 1;

//   coordsOutputRef.textContent = `
//     Кол-во вызовов onMouseMove: ${mouseMoveCbInvocationCounter},
//     X: ${event.clientX},
//     Y:${event.clientY}
//   `;
// }

            //0.03 Решаем проблему через throttling c Lodash

const coordsOutputRef = document.querySelector('.js-coords');
let mouseMoveCbInvocationCounter = 0;

// const throttleOnMouseMove = _.throttle(onMouseMove, 500); (пример)

// window.addEventListener('mousemove', _.throttle(onMouseMove, 500)); (решение)

function onMouseMove(event) {
  mouseMoveCbInvocationCounter += 1;

  coordsOutputRef.textContent = `
    Кол-во вызовов onMouseMove: ${mouseMoveCbInvocationCounter},
    X: ${event.clientX},
    Y:${event.clientY}
  `;
}

            //0.11 Решаем проблему через debounce c Lodash (input)

const inputRef = document.querySelector('.js-input');
const outputRef = document.querySelector('.js-output');
let inputCbInvocationCounter = 0;

inputRef.addEventListener('input', _.debounce(onInputChange, 300));

function onInputChange(event) {
  inputCbInvocationCounter += 1;

  outputRef.textContent = `
    Кол-во вызовов onInputChange: ${inputCbInvocationCounter},
    Значение: ${event.target.value}
  `;
}
'use strict';

const red = 'hit';
const green = 'friendly';
const gray = 'bomb';
const brown = 'drugs';
const yellow = 'life';
const startTime = 20;
let timeRemining = startTime;
let combo = 0;
let score = 0;
let life = 3;
let timerInterval;
let boxInterval;
let blinkBoxInterval;
const timmingBoxInterval = 900;
const timmingBlinkBoxInterval = 75;
const playBtn = document.querySelector('.play-btn');
const timerEl = document.querySelector('.time-remaining');
const boxEl = document.querySelectorAll('.box');
const scoreEl = document.querySelector('.score-total');
let prevBox = [];

/////inertext=====

const random0to15 = function () {
  return Math.floor(Math.random() * 16);
};

const randomColorBox = function () {
  const randomRCB = random0to15();
  let colorToReturn = '';
  // console.log(randomRCB);
  9 > randomRCB
    ? (colorToReturn = 'red')
    : 12 > randomRCB
    ? (colorToReturn = 'green')
    : 13 > randomRCB
    ? (colorToReturn = 'gray')
    : 14 > randomRCB
    ? (colorToReturn = 'brown')
    : (colorToReturn = 'yellow');

  return colorToReturn;
};

//console.log(randomColorBox());

playBtn.addEventListener('click', function () {
  if (timeRemining != startTime && timeRemining > 0) return;
  score = 0;
  scoreEl.innerText = score;
  playGame();
});

const blinkBox = function (box) {
  box.style.backgroundColor = 'blue';
  console.log('blink');
  clearInterval(blinkBoxInterval);
};

const shrinkBox = function (box) {
  box.style.width = '90px';
  box.style.height = '90px';
};

const randomBox = function () {
  timeRemining === 0 ? clearInterval(boxInterval) : '';
  let randomNum = random0to15();
  let box = document.querySelector('.' + boxEl[randomNum].classList[1]);
  blinkBoxInterval = setInterval(blinkBox(box), timmingBlinkBoxInterval);
  clearInterval(blinkBoxInterval);
  //blinkBox(box);
  setTimeout(function () {
    box.style.backgroundColor = randomColorBox();

    box.addEventListener('click', function () {
      if (box.style.backgroundColor == 'red') {
        //blinkBox(box);
        //shrinkBox(box);
        score++;
        console.log(score);
        scoreEl.innerText = score;
        return;
      } else if (box.style.backgroundColor == 'green') {
        score--;
        console.log(score);
        scoreEl.innerText = score;
        return;
      } else if (box.style.backgroundColor == 'gray') {
      } else if (box.style.backgroundColor == 'brown') {
      } else if (box.style.backgroundColor == 'yellow') {
      }
    });
    prevBox.push(box);
    startTime > timeRemining
      ? (prevBox.at(-2).style.backgroundColor = 'black')
      : '';
    // timeRemining === 0 ? clearInterval(boxInterval) : console.log('timesup');
  }, timmingBlinkBoxInterval);
};

const timer = function () {
  if (timeRemining >= 0) {
    timerEl.innerText = timeRemining;
    //randomBox();
    if (timeRemining === 0) {
      timerEl.innerText = timeRemining;
      playBtn.innerText = 'Play again';
      prevBox.at(-1).style.backgroundColor = 'black';
      clearInterval(timerInterval);
    }
    timeRemining--;
  }
};

// const blinkBox = box => {
//   box.style.backgroundColor = 'blue';
//   clearInterval(blinkBoxInterval);
// };

const playGame = function () {
  if (playBtn.innerText === 'Play again') {
    //boxEl.forEach(el => (el.style.backgroundColor = 'black'));
    timeRemining = startTime;
    playBtn.innerText = 'Play';
  }

  timerInterval = setInterval(timer, 1000);
  boxInterval = setInterval(randomBox, timmingBoxInterval);
  //blinkBoxInterval = setInterval(blinkBox, timmingBlinkBoxInterval);
};

// function playGame2() {
//   timerInterval = setInterval(timer, 1000);
//   //const setRandomBox = setInterval(randomBox, 1000);
//   console.log(timeRemining);
//   if (timeRemining < 1) console.log('lala');
//   timeRemining < 1 ? console.log('lala') : '';
// }

// const randomBox = function () {
//   //if (timeRemining === 0) return;
//   boxEl.forEach(el => (el.style.backgroundColor = 'black'));
//   let rendomNum = Math.floor(Math.random() * 16);
//   const box = document.querySelector('.' + boxEl[rendomNum].classList[1]);
//   lastBox = box;
//   if (rendomNum < 9) box.style.backgroundColor = 'red';
//   else if (rendomNum < 12) box.style.backgroundColor = 'green';
//   else if (rendomNum < 13) box.style.backgroundColor = 'gray';
//   else if (rendomNum < 14) box.style.backgroundColor = 'brown';
//   else if (rendomNum < 16) box.style.backgroundColor = 'yellow';
//   box.addEventListener('click', function () {
//     if (box.style.backgroundColor == 'red') {
//       score++;
//       console.log(score);
//       scoreEl.innerTex = score;
//       return;
//     }
//   });
//   if (timeRemining === 0) return;
//   setTimeout('randomBox()', 1000);
// };

// const backToBlack = function () {
//   //lastBox.style.backgroundColor = 'black';
//   //setTimeout('backToBlack()', 500);
// };

// const boxClicked = function () {
//   boxEl.forEach(el =>
//     el.addEventListener('click', function () {
//       //console.log(el.classList[1].slice(1, 3));
//       //console.log(Math.floor(Math.random() * 16));
//       //console.log(el.classList[1]);
//       const elm = el.classList[1].slice(1, 3);
//       //console.log('x' + elm);
//     })
//   );
// };

// const mix = in1 => in1 + ' mixed';
// const combine = in1 => in1 + in2;

// const layersCake = in1 => in2 => in3 =>
//   console.log(
//     `Layer one of the cake: ${in1}, layer 2: ${in2}, layer 3: ${in3}. yamy!`
//   );

// layersCake('buttom')('middle')('glazing');

// //const updateEl = selector => isClassIdData =>

// const addCustomer =
//   fn =>
//   (...args) => {
//     console.log('saving customer info...');
//     return fn(...args);
//   };

// const processOrder =
//   fn =>
//   (...args) => {
//     console.log(`processing order #${[...args]}`);
//     return fn(...args);
//   };

// let completeOrder =
//   fn =>
//   (...args) => {
//     console.log(`Order #${[...args].toString()} completed`);
//   };

// const tata = completeOrder(completeOrder);

// tata('1000', '2000');

// const sum = a => b => b ? sum(a + b) : a;
// console.log(sum(1)(2)(3)(4)(5)(10)());

// const testit = () => console.log(...args);

// testit('a', 'b');

// function testit2() {
//   console.log(arguments);
// }

// testit2('a', 'b');

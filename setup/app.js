'use strict';

const handleButtonClickHex = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = `#${randomColor}`;
  document.querySelector('#color-name').innerHTML = `#${randomColor}`;
};

const buttonEvent = () => {
  document
    .querySelector('#button')
    .addEventListener('click', handleButtonClickHex);
};

const colorArray = [
  'red',
  'blue',
  'yellow',
  'green',
  'orange',
  'purple',
  'cream',
  'wheat',
  'hotpink',
  'aquamarine',
  'brown',
  'cornflowerblue',
  'darkmagenta',
  'fuchsia',
];

const bodySelector = document.querySelector('body');

const handleButtonClickSimple = () => {
  const randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
  bodySelector.style.backgroundColor = randomColor;
  document.querySelector('#color-name').innerHTML = `#${randomColor}`;
};

const buttonEvents = () => {
  document
    .querySelector('#button')
    .addEventListener('click', handleButtonClickSimple);
};

const init = () => {
  buttonEvents();
  buttonEvent();
};

init();

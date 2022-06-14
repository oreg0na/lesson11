'use strict'

const btn = document.querySelector('#btn');
const inputRange = document.querySelector('#range');
const inputText = document.querySelector('#text');
const square = document.querySelector('#square');
const cirle = document.querySelector('#circle');
const e_btn = document.querySelector('#e_btn');
const spanRange = document.querySelector('#range-span');

const visionEBtn = function () {
    e_btn.style.display = 'none';
};

const changeValue = function () {
    spanRange.textContent = '50%';
    spanRange.textContent = `${inputRange.value}%`;

    cirle.style.height = spanRange.textContent;
    cirle.style.width = spanRange.textContent;
};

visionEBtn();
changeValue();

btn.addEventListener('click', function () {
    square.style.backgroundColor = `${inputText.value}`;
});

inputRange.addEventListener('input', changeValue);
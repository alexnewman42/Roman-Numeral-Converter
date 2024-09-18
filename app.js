const inputField = document.getElementById("#number");
const convertBtn = document.getElementById("#convert-btn");
const outputField = document.getElementById("#output");
let romanNumString = 0;

const convert = (num) => {
    if (num = 0) {
        outputField.innerText = "Please enter a valid number";
    } else if (num < 0) {
        outputField.innerText = "Please enter a number greater than or equal to 1";
    } else if (num >= 4000 ) {
        outputField.innerText = "Please enter a number less than or equal to 3999";
    }

    if (num >= 1000) {
        romanNumString += "M";
        num -= 1000;
        convert(num);
    } else if (num >= 900) {
        romanNumString += "CM";
        num -= 900;
        convert(num);
    } else if (num >= 500) {
        romanNumString += "D";
        num -= 500;
        convert(num);
    } else if (num >= 400) {
        romanNumString += "CD";
        num -= 400;
        convert(num);
    } else if (num >= 100) {
        romanNumString += "C";
        num -= 100;
        convert(num);
    } else if (num >= 90) {
        romanNumString += "XC";
        num -= 90;
        convert(num);
    } else if (num >= 50) {
        romanNumString += "L";
        num -= 50;
        convert(num);
    } else if (num >= 40) {
        romanNumString += "XL";
        num -= 40;
        convert(num);
    } else if (num >= 10) {
        romanNumString += "X";
        num -= 10;
        convert(num);
    } else if (num >= 9) {
        romanNumString += "IX";
        num -= 9;
        convert(num);
    } else if (num >= 5) {
        romanNumString += "V";
        num -= 5;
        convert(num);
    } else if (num >= 4) {
        romanNumString += "IV";
        num -= 4;
        convert(num);
    } else if (num >= 1) {
        romanNumString += "I";
        num -= 1;
        convert(num);
    } else {
        outputField.innerText = romanNumString;
    }

};


convertBtn.onclick = convert(inputField.innerText);
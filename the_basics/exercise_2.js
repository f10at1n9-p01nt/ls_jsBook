let number = 4936;

let thousands_place = Math.floor(number/1000);

let onesPlace = number % 10;
let tensPlace = (number - onesPlace) / 10 % 10;
let hundredsPlace = (number - (10 * tensPlace + onesPlace)) / 100 % 10


console.log(thousands_place, hundredsPlace, tensPlace, onesPlace);
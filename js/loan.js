const idPrice = "price";
const idMonths = "months";
const idYears = "years";
const idTae = "tae";
const idTinMonth = "tinMonth";
const idTinYear = "tinYear";
const idTiea = "tiea";
const idMonthPrice = "monthPrice";
const idTotalPrice = "totalPrice";
const inputTag = "input";

let price;
let months;
let years;
let tae;
let tinMonth;
let tinYear;
let tiea;

let monthPrice;
let totalPrice;

const loadPrice = () => {
  price = document.getElementById(idPrice).value;
};
const inputPrice = document.getElementById(idPrice);
inputPrice.addEventListener(inputTag, loadPrice);

const loadMonths = () => {
  months = document.getElementById(idMonths).value;
};
const inputMonths = document.getElementById(idMonths);
inputMonths.addEventListener(inputTag, loadMonths);

const loadYears = () => {
  years = document.getElementById(idYears).value;
  updateMonth();
};
const inputYears = document.getElementById(idYears);
inputYears.addEventListener(inputTag, loadYears);

const loadTae = () => {
  tae = document.getElementById(idTae).value;
  console.log(tae);
};
const inputTae = document.getElementById(idTae);
inputTae.addEventListener(inputTag, loadTae);

const updateMonth = () => {
  if (years) {
    months = years * 12;
    inputMonths.value = months;
  }
};

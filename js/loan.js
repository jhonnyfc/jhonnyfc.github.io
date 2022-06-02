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
  updateYears();
  updateTiea();
};
const inputMonths = document.getElementById(idMonths);
inputMonths.addEventListener(inputTag, loadMonths);

const loadYears = () => {
  years = document.getElementById(idYears).value;
  updateMonth();
  updateTiea();
};
const inputYears = document.getElementById(idYears);
inputYears.addEventListener(inputTag, loadYears);

const loadTae = () => {
  tae = document.getElementById(idTae).value;
};
const inputTae = document.getElementById(idTae);
inputTae.addEventListener(inputTag, loadTae);

const loadTinMonth = () => {
  tinMonth = document.getElementById(idTinMonth).value;
  updateTiea();
};
const inputTinMonth = document.getElementById(idTinMonth);
inputTinMonth.addEventListener(inputTag, loadTinMonth);

const loadTinYear = () => {
  tinYear = document.getElementById(idTinYear).value;
  updateTiea();
};
const inputTinYear = document.getElementById(idTinYear);
inputTinYear.addEventListener(inputTag, loadTinYear);

const inputTiea = document.getElementById(idTiea);

const updateMonth = () => {
  if (years) {
    months = years * 12;
    inputMonths.value = months;
  }
};

const updateYears = () => {
  if (months >= 12) {
    years = months / 12;
    inputYears.value = years;
  }
};

const updateTiea = () => {
  if (tinYear && years) {
    tiea = ((Math.pow(1 + tinYear / 100, years) - 1) * 100).toFixed(2);
    inputTiea.value = tiea;
    return;
  }

  if (tinMonth && months) {
    tiea = ((Math.pow(1 + tinMonth / 100, months) - 1) * 100).toFixed(2);
    inputTiea.value = tiea;
    return;
  }
};

const updatePrices = () => {};

const updatePricesMonthTin = () => {};

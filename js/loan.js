const PerdTin = {
  DAYLI: { id: "DAYLI", perd: 365 },
  MONTHLY: { id: "MONTHLY", perd: 12 },
  BIANNUAL: { id: "BIANNUAL", perd: 2 },
  YEARLY: { id: "YEARLY", perd: 1 },
};

const idPrice = "price";
const idMonths = "months";
const idYears = "years";
const idPerdTin = "perdTin";
const idTin = "tin";
const idTie = "tie";
const idTae = "tae";
const idMonthPrice = "monthPrice";
const idTotalPrice = "totalPrice";
const inputTag = "input";

let price;
let months;
let years;
let perdTin;
let tin;
let tie;
let tae;

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

const loadPerdTin = () => {
  perdTin = document.getElementById(idPerdTin).value;
  updateTiea();
};
const inputPerdTin = document.getElementById(idPerdTin);
inputPerdTin.addEventListener(inputTag, loadPerdTin);

const loadTin = () => {
  tin = document.getElementById(idTin).value;
  updateTiea();
};
const inputTin = document.getElementById(idTin);
inputTin.addEventListener(inputTag, loadTin);

const inputTie = document.getElementById(idTie);

const updateMonth = () => {
  if (years) {
    months = (years * 12).toFixed(2);
    inputMonths.value = months;
  }
};

const updateYears = () => {
  if (months >= 12) {
    years = (months / 12).toFixed(2);
    inputYears.value = years;
  }
};

const updateTiea = () => {
  tie = "";
  inputTie.value = tie;

  if (tin && perdTin === PerdTin.DAYLI.id) {
    tie = (
      (Math.pow(1 + tin / 100 / PerdTin.DAYLI.perd, PerdTin.DAYLI.perd) - 1) *
      100
    ).toFixed(2);
    inputTie.value = tie;
    return;
  }

  if (tin && perdTin === PerdTin.MONTHLY.id) {
    tie = (
      (Math.pow(1 + tin / 100 / PerdTin.MONTHLY.perd, PerdTin.MONTHLY.perd) -
        1) *
      100
    ).toFixed(2);
    inputTie.value = tie;
    return;
  }

  if (tin && perdTin === PerdTin.BIANNUAL.id) {
    tie = (
      (Math.pow(1 + tin / 100 / PerdTin.BIANNUAL.perd, PerdTin.BIANNUAL.perd) -
        1) *
      100
    ).toFixed(2);
    inputTie.value = tie;
    return;
  }

  if (tin && perdTin === PerdTin.YEARLY.id) {
    tie = (
      (Math.pow(1 + tin / 100 / PerdTin.YEARLY.perd, PerdTin.YEARLY.perd) - 1) *
      100
    ).toFixed(2);
    inputTie.value = tie;
    return;
  }
};

const updatePrices = () => {};

const updatePricesMonthTin = () => {};

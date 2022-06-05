const PerdTin = {
  DAYLI: { id: "DAYLI", perd: 365 },
  MONTHLY: { id: "MONTHLY", perd: 12 },
  BIANNUAL: { id: "BIANNUAL", perd: 2 },
  YEARLY: { id: "YEARLY", perd: 1 },
};

const idPrice = "price";
const idMonths = "months";
const idYears = "years";
const idOpenExpenses = "openExpenses";
const idMonthlyExpenses = "monthlyExpenses";
const idOtherExpenses = "otherExpenses";
const idPerdTin = "perdTin";
const idTin = "tin";
const idTie = "tie";
const idMonthlyTie = "tie";
const idTae = "tae";
const idMonthTiePrice = "monthTiePrice";
const idMonthPrice = "monthPrice";
const idTotalPrice = "totalPrice";
const inputTag = "input";

const MONTHS_IN_YEAR = 12;

let price;
let months;
let years;
let openExpenses = 0;
let monthlyExpenses = 0;
let otherExpenses = 0;
let perdTin;
let tin;
let tie;
let monthlyTie;
let tae;

let monthTiePrice;
let monthPrice;
let totalPrice;

const inputPrice = document.getElementById(idPrice);
const loadPrice = () => {
  price = inputPrice.value;
  updateMonthTiePrice();
  updateTotalPrice();
};
inputPrice.addEventListener(inputTag, loadPrice);

const inputMonths = document.getElementById(idMonths);
const loadMonths = () => {
  months = inputMonths.value;
  updateYears();
  updateTiea();
  updateMonthTiePrice();
  updateTotalPrice();
};
inputMonths.addEventListener(inputTag, loadMonths);

const inputYears = document.getElementById(idYears);
const loadYears = () => {
  years = inputYears.value;
  updateMonth();
  updateTiea();
  updateMonthTiePrice();
  updateTotalPrice();
};
inputYears.addEventListener(inputTag, loadYears);

const inputOpenExpenses = document.getElementById(idOpenExpenses);
inputOpenExpenses.value = openExpenses;
const loadOpenExpensess = () => {
  openExpenses = inputOpenExpenses.value;
  updateTotalPrice();
};
inputOpenExpenses.addEventListener(inputTag, loadOpenExpensess);

const inputMonthlyExpenses = document.getElementById(idMonthlyExpenses);
inputMonthlyExpenses.value = monthlyExpenses;
const loadMonthlyExpenses = () => {
  monthlyExpenses = inputMonthlyExpenses.value;
  updateTotalPrice();
};
inputMonthlyExpenses.addEventListener(inputTag, loadMonthlyExpenses);

const inputOtherExpenses = document.getElementById(idOtherExpenses);
const loadOtherExpenses = () => {
  otherExpenses = inputOtherExpenses.value;
  updateTotalPrice();
};
inputOtherExpenses.addEventListener(inputTag, loadOtherExpenses);

const inputPerdTin = document.getElementById(idPerdTin);
const loadPerdTin = () => {
  perdTin = inputPerdTin.value;
  updateTiea();
  calcMonthlyTie();
  updateMonthTiePrice();
  updateTotalPrice();
};
inputPerdTin.addEventListener(inputTag, loadPerdTin);

const inputTin = document.getElementById(idTin);
const loadTin = () => {
  tin = inputTin.value;
  updateTiea();
  calcMonthlyTie();
  updateMonthTiePrice();
  updateTotalPrice();
};
inputTin.addEventListener(inputTag, loadTin);

const inputTie = document.getElementById(idTie);

const inputMonthlyTie = document.getElementById(idMonthlyTie);

const inputTae = document.getElementById(idTae);

const inputMonthTiePrice = document.getElementById(idMonthTiePrice);

const inputMonthPrice = document.getElementById(idMonthPrice);

const inputTotalPrice = document.getElementById(idTotalPrice);

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

const calcMonthlyTie = () => {
  if (tie) {
    monthlyTie = (
      (Math.pow(1 + tie / 100, 1 / MONTHS_IN_YEAR) - 1) *
      100
    ).toFixed(2);
    inputMonthlyTie.value = monthlyTie;
  }
};

const updateMonthTiePrice = () => {
  if (price && monthlyTie && months) {
    monthTiePrice = (
      (price * monthlyTie) /
      100 /
      (1 - Math.pow(1 + monthlyTie / 100, -months))
    ).toFixed(2);
    inputMonthTiePrice.value = monthTiePrice;
  }
  updateTotalPrice();
};

const updateMonthlyPrice = () => {
  if (totalPrice && months) {
    monthPrice = (totalPrice / months).toFixed(2);
    inputMonthPrice.value = monthPrice;
  }
};

const updateTotalPrice = () => {
  if (
    price &&
    openExpenses >= 0 &&
    monthTiePrice &&
    months &&
    monthlyExpenses >= 0
  ) {
    totalPrice = (
      price * (openExpenses / 100) +
      monthTiePrice * months +
      monthlyExpenses * months
    ).toFixed(2);
    inputTotalPrice.value = totalPrice;
  }
  updateMonthlyPrice();
};

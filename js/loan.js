const MONTHS_IN_YEAR = 12;
const ZERO_ERUOS = 0;
const PERCENTAJE_FACTOR = 100;
const NUM_DECIMALS = 2;

const PerdTin = {
  DAYLI: { id: "DAYLI", perd: 365 },
  MONTHLY: { id: "MONTHLY", perd: MONTHS_IN_YEAR },
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

let price;
let months;
let years;
let openExpenses = ZERO_ERUOS;
let monthlyExpenses = ZERO_ERUOS;
let otherExpenses = ZERO_ERUOS;
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
const loadOpenExpenses = () => {
  openExpenses = inputOpenExpenses.value;
  updateTotalPrice();
};
inputOpenExpenses.addEventListener(inputTag, loadOpenExpenses);

const inputMonthlyExpenses = document.getElementById(idMonthlyExpenses);
inputMonthlyExpenses.value = monthlyExpenses;
const loadMonthlyExpenses = () => {
  monthlyExpenses = inputMonthlyExpenses.value;
  updateTotalPrice();
};
inputMonthlyExpenses.addEventListener(inputTag, loadMonthlyExpenses);

const inputOtherExpenses = document.getElementById(idOtherExpenses);
inputOtherExpenses.value = otherExpenses;
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
    months = (years * MONTHS_IN_YEAR).toFixed(NUM_DECIMALS);
    inputMonths.value = months;
  }
};

const updateYears = () => {
  if (months >= MONTHS_IN_YEAR) {
    years = (months / MONTHS_IN_YEAR).toFixed(NUM_DECIMALS);
    inputYears.value = years;
  }
};

const updateTiea = () => {
  tie = "";
  inputTie.value = tie;

  if (tin && perdTin === PerdTin.DAYLI.id) {
    tie = (
      (Math.pow(
        1 + tin / PERCENTAJE_FACTOR / PerdTin.DAYLI.perd,
        PerdTin.DAYLI.perd
      ) -
        1) *
      PERCENTAJE_FACTOR
    ).toFixed(NUM_DECIMALS);
    inputTie.value = tie;
    return;
  }

  if (tin && perdTin === PerdTin.MONTHLY.id) {
    tie = (
      (Math.pow(
        1 + tin / PERCENTAJE_FACTOR / PerdTin.MONTHLY.perd,
        PerdTin.MONTHLY.perd
      ) -
        1) *
      PERCENTAJE_FACTOR
    ).toFixed(NUM_DECIMALS);
    inputTie.value = tie;
    return;
  }

  if (tin && perdTin === PerdTin.BIANNUAL.id) {
    tie = (
      (Math.pow(
        1 + tin / PERCENTAJE_FACTOR / PerdTin.BIANNUAL.perd,
        PerdTin.BIANNUAL.perd
      ) -
        1) *
      PERCENTAJE_FACTOR
    ).toFixed(NUM_DECIMALS);
    inputTie.value = tie;
    return;
  }

  if (tin && perdTin === PerdTin.YEARLY.id) {
    tie = (
      (Math.pow(
        1 + tin / PERCENTAJE_FACTOR / PerdTin.YEARLY.perd,
        PerdTin.YEARLY.perd
      ) -
        1) *
      PERCENTAJE_FACTOR
    ).toFixed(NUM_DECIMALS);
    inputTie.value = tie;
    return;
  }
};

const calcMonthlyTie = () => {
  if (tie) {
    monthlyTie = (
      (Math.pow(1 + tie / PERCENTAJE_FACTOR, 1 / MONTHS_IN_YEAR) - 1) *
      PERCENTAJE_FACTOR
    ).toFixed(NUM_DECIMALS);
    inputMonthlyTie.value = monthlyTie;
  }
};

const updateMonthTiePrice = () => {
  if (price && monthlyTie && months) {
    monthTiePrice = (
      (price * monthlyTie) /
      PERCENTAJE_FACTOR /
      (1 - Math.pow(1 + monthlyTie / PERCENTAJE_FACTOR, -months))
    ).toFixed(NUM_DECIMALS);
    inputMonthTiePrice.value = monthTiePrice;
  }
  updateTotalPrice();
};

const updateMonthlyPrice = () => {
  if (totalPrice && months) {
    monthPrice = (totalPrice / months).toFixed(NUM_DECIMALS);
    inputMonthPrice.value = monthPrice;
  }
};

const updateTotalPrice = () => {
  if (
    price &&
    openExpenses >= ZERO_ERUOS &&
    monthTiePrice &&
    months &&
    monthlyExpenses >= ZERO_ERUOS &&
    otherExpenses >= ZERO_ERUOS
  ) {
    totalPrice = (
      price * (openExpenses / PERCENTAJE_FACTOR) +
      monthTiePrice * months +
      monthlyExpenses * months +
      otherExpenses
    ).toFixed(NUM_DECIMALS);
    inputTotalPrice.value = totalPrice;
  }
  updateMonthlyPrice();
};

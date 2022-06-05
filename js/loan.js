const MONTHS_IN_YEAR = 12;
const ZERO_ERUOS = 0;
const PERCENTAJE_FACTOR = 100;
const NUM_DECIMALS = 2;

const fixNum = (num) => {
  return Number(num.toFixed(NUM_DECIMALS));
};

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
const idMonthlyTie = "monthlyTie";
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
  price = Number(inputPrice.value);
  updateMonthTiePrice();
  updateTotalPrice();
};
inputPrice.addEventListener(inputTag, loadPrice);

const inputMonths = document.getElementById(idMonths);
const loadMonths = () => {
  months = Number(inputMonths.value);
  updateYears();
  updateTie();
  updateMonthTiePrice();
  updateTotalPrice();
};
inputMonths.addEventListener(inputTag, loadMonths);

const inputYears = document.getElementById(idYears);
const loadYears = () => {
  years = Number(inputYears.value);
  updateMonth();
  updateTie();
  updateMonthTiePrice();
  updateTotalPrice();
};
inputYears.addEventListener(inputTag, loadYears);

const inputOpenExpenses = document.getElementById(idOpenExpenses);
inputOpenExpenses.value = openExpenses;
const loadOpenExpenses = () => {
  openExpenses = Number(inputOpenExpenses.value);
  updateTotalPrice();
};
inputOpenExpenses.addEventListener(inputTag, loadOpenExpenses);

const inputMonthlyExpenses = document.getElementById(idMonthlyExpenses);
inputMonthlyExpenses.value = monthlyExpenses;
const loadMonthlyExpenses = () => {
  monthlyExpenses = Number(inputMonthlyExpenses.value);
  updateTotalPrice();
};
inputMonthlyExpenses.addEventListener(inputTag, loadMonthlyExpenses);

const inputOtherExpenses = document.getElementById(idOtherExpenses);
inputOtherExpenses.value = otherExpenses;
const loadOtherExpenses = () => {
  otherExpenses = Number(inputOtherExpenses.value);
  updateTotalPrice();
};
inputOtherExpenses.addEventListener(inputTag, loadOtherExpenses);

const inputPerdTin = document.getElementById(idPerdTin);
const loadPerdTin = () => {
  perdTin = inputPerdTin.value;
  updateTie();
  calcMonthlyTie();
  updateMonthTiePrice();
  updateTotalPrice();
};
inputPerdTin.addEventListener(inputTag, loadPerdTin);

const inputTin = document.getElementById(idTin);
const loadTin = () => {
  tin = Number(inputTin.value);
  updateTie();
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
    months = fixNum(years * MONTHS_IN_YEAR);
    inputMonths.value = months;
  }
};

const updateYears = () => {
  if (months >= MONTHS_IN_YEAR) {
    years = fixNum(months / MONTHS_IN_YEAR);
    inputYears.value = years;
  }
};

const updateTie = () => {
  tie = "";

  if (tin && perdTin === PerdTin.DAYLI.id) {
    tie = fixNum(
      (Math.pow(
        1 + tin / PERCENTAJE_FACTOR / PerdTin.DAYLI.perd,
        PerdTin.DAYLI.perd
      ) -
        1) *
        PERCENTAJE_FACTOR
    );
  }

  if (tin && perdTin === PerdTin.MONTHLY.id) {
    tie = fixNum(
      (Math.pow(
        1 + tin / PERCENTAJE_FACTOR / PerdTin.MONTHLY.perd,
        PerdTin.MONTHLY.perd
      ) -
        1) *
        PERCENTAJE_FACTOR
    );
  }

  if (tin && perdTin === PerdTin.BIANNUAL.id) {
    tie = fixNum(
      (Math.pow(
        1 + tin / PERCENTAJE_FACTOR / PerdTin.BIANNUAL.perd,
        PerdTin.BIANNUAL.perd
      ) -
        1) *
        PERCENTAJE_FACTOR
    );
  }

  if (tin && perdTin === PerdTin.YEARLY.id) {
    tie = fixNum(
      (Math.pow(
        1 + tin / PERCENTAJE_FACTOR / PerdTin.YEARLY.perd,
        PerdTin.YEARLY.perd
      ) -
        1) *
        PERCENTAJE_FACTORfixNum
    );
  }
  inputTie.value = tie;
};

const calcMonthlyTie = () => {
  if (tie) {
    monthlyTie = fixNum(
      (Math.pow(1 + tie / PERCENTAJE_FACTOR, 1 / MONTHS_IN_YEAR) - 1) *
        PERCENTAJE_FACTOR
    );
    console.log(monthlyTie);
    inputMonthlyTie.value = monthlyTie;
  }
};

const updateMonthTiePrice = () => {
  if (price && monthlyTie && months) {
    monthTiePrice = fixNum(
      (price * monthlyTie) /
        PERCENTAJE_FACTOR /
        (1 - Math.pow(1 + monthlyTie / PERCENTAJE_FACTOR, -months))
    );
    inputMonthTiePrice.value = monthTiePrice;
  }
  updateTotalPrice();
};

const updateMonthlyPrice = () => {
  if (totalPrice && months) {
    monthPrice = fixNum(totalPrice / months);
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
    totalPrice = fixNum(
      price * (openExpenses / PERCENTAJE_FACTOR) +
        monthTiePrice * months +
        monthlyExpenses * months +
        otherExpenses
    );
    inputTotalPrice.value = totalPrice;
  }
  updateMonthlyPrice();
};

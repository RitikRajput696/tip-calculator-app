const inputAmount = document.getElementById('input-total-amount');
const inputTotalPeople = document.getElementById('total-people');
const totalAmountPayable = document.getElementById('total-payable-amount');
const totalTip = document.getElementById('tip-amount');
const perPerson = document.getElementById('per-person');
const error = document.querySelector('.error');
const btn5 = document.querySelector('.btn-5');
const btn10 = document.querySelector('.btn-10');
const btn15 = document.querySelector('.btn-15');
const btn25 = document.querySelector('.btn-25');
const btn50 = document.querySelector('.btn-50');
const btnCustom = document.querySelector('.btn-custom');

// variable declarations
let tipBtns = [btn5, btn10, btn15, btn25, btn50, btnCustom];
let percentageValue;
let percentage;
let tip = 0;

tipBtns.forEach((btn) => {
  // add style to clicked buttons
  btn.addEventListener('pointerdown', () => {
    btn.classList.add('tip-btn-active');

    // remove style from btn that are not active
    tipBtns.forEach((tipBtn) => {
      if (tipBtn !== btn) {
        tipBtn.classList.remove('tip-btn-active');
      }
      // if button is not custom then set percentage value
      if (btn.id !== 'customPercentage') {
        percentageValue = btn.innerText;
        percentage = percentageValue.slice(0, percentageValue.length - 1);
        calculateTip();
        setValues();
      }
    });
  });
});

//
// functions

function calculateTip() {
  tip = (percentage / 100) * inputAmount.value;
  console.log(tip);
}

function setValues() {
  // show tip amount and total payable amount
  totalAmountPayable.innerText = `$` + (Number(inputAmount.value) + tip);
  // show per person amount
  perPerson.innerText =
    `$` + (Number(inputAmount.value) + tip) / inputTotalPeople.value;
  // show total tip
  totalTip.innerText = `$` + tip;
}

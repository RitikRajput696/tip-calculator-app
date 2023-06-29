// input buttons selector
const inputTotalAmount = document.getElementById("input-total-amount");
const btn5 = document.querySelector(".btn-5");
const btn10 = document.querySelector(".btn-10");
const btn15 = document.querySelector(".btn-15");
const btn25 = document.querySelector(".btn-25");
const btn50 = document.querySelector(".btn-50");
const btnCustom = document.querySelector(".btn-custom");
const tipBtns = document.querySelector(".btn-tip");
const inputTotalPeople = document.getElementById("input-total-people");

// output buttons selector 
const outputPayableAmount = document.getElementById("total-payable-amount");
const tipPerPerson = document.getElementById("tip-amount");
const totalPerPerson = document.getElementById("per-person");
const resetBtn = document.querySelector(".reset");

// error
const errorText = document.querySelector(".error");

let totalAmount;
let totalPeople;
inputTotalAmount.addEventListener("change", () => {
    let totalAmount = inputTotalAmount.value;
    console.log(totalAmount);
    if (totalAmount.value != 0) {
        calculateBill();

    }
});

inputTotalPeople.addEventListener("change", () => {
    let totalPeople = inputTotalPeople.value;
    console.log(totalPeople);
    calculateBill();
})

function calculateBill() {
    handleErrors();
    setValues();
}
function handleErrors() {
    if (totalAmount == 0 || totalAmount == "") {
        errorText.classList.add('show-error');
    } else {
        errorText.classList.remove(".show-error");
    }
    if (totalPeople == 0 || totalPeople == "") {
        errorText.classList.add('show-error');
    } else {
        errorText.classList.remove(".show-error");
    }
}

function setValues() {
    console.log(totalAmount);
    console.log(totalPeople);
    console.log(outputPayableAmount.textContent = totalAmount / totalPeople);
    outputPayableAmount.textContent = totalAmount / totalPeople;
}
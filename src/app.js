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
const errorText = document.querySelectorAll(".error");
const errorTextArr = Array.from(errorText);


inputTotalAmount.addEventListener("change", () => {
    calculateBill();
});

inputTotalPeople.addEventListener("change", () => {
    calculateBill();
})

function calculateBill() {
    handleErrors();

}
function handleErrors() {
    if (inputTotalAmount.value == 0 || inputTotalAmount.value == "") {
        errorTextArr[0].classList.add('show-error');
        outputPayableAmount.textContent = "$" + 0;
    } else {
        errorTextArr[0].classList.remove("show-error");
        setValues();
    }
    if (inputTotalPeople.value == 0 || inputTotalPeople.value == "") {
        errorTextArr[1].classList.add('show-error');
        outputPayableAmount.textContent = "$" + 0;
    } else {
        errorText[1].classList.remove("show-error");
        setValues();
    }
}

function setValues() {
    outputPayableAmount.textContent = (inputTotalAmount.value / inputTotalPeople.value).toFixed(2);
}
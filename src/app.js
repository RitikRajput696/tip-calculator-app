// input buttons selector
const inputTotalAmount = document.getElementById("input-total-amount");
const btn5 = document.querySelector(".btn-5");
const btn10 = document.querySelector(".btn-10");
const btn15 = document.querySelector(".btn-15");
const btn25 = document.querySelector(".btn-25");
const btn50 = document.querySelector(".btn-50");
const btnCustom = document.querySelector(".btn-custom");
const tipBtns = Array.from(document.querySelectorAll(".btn-tip"));
const inputTotalPeople = document.getElementById("input-total-people");

// output buttons selector 
const outputPayableAmount = document.getElementById("total-payable-amount");
const tipPerPerson = document.getElementById("tip-amount");
const totalPerPerson = document.getElementById("per-person");
const resetBtn = document.querySelector(".reset");

// error variables
const errorText = document.querySelectorAll(".error");
const errorTextArr = Array.from(errorText);

// variables
let percentage = 5; // default tip is 5 %
let percentageValue;

// main logic
tipBtns.forEach((tipBtn) => {
    tipBtn.addEventListener("pointerdown", () => {
        tipBtn.classList.add("tip-btn-active");
        tipBtns.forEach((btn) => {
            if (btn !== tipBtn) {
                btn.classList.remove("tip-btn-active");
                errorText[1].classList.remove("show-error"); // remove error from custom button if tip button percentage is used
                percentageValue = tipBtn.innerText;
                percentage = Number(percentageValue.slice(0, percentageValue.length - 1));
                calculateBill();
            }
        })
    })
})





inputTotalAmount.addEventListener("change", () => {
    // restric values to be less than 0
    if (inputTotalAmount.value < 0) {
        inputTotalAmount.value = 0;
    };
    calculateBill();
});

inputTotalPeople.addEventListener("change", () => {
    // restric values to be less than 0
    if (inputTotalPeople.value < 0) {
        inputTotalPeople.value = 0;
    };
    calculateBill();
})

// custom button logic
btnCustom.addEventListener("change", () => {

    // remove the active status from tip button when custom percentage is used
    tipBtns.forEach((tipBtn) => {
        tipBtn.classList.remove("tip-btn-active");
    })
    if (btnCustom.value == 0 || btnCustom.value == "") {
        errorText[1].classList.add("show-error");
    }
    // restric values to be less than 0
    else if (btnCustom.value < 0) {
        btnCustom.value = 0;

    } else {
        errorText[1].classList.remove("show-error");
        percentage = Number(btnCustom.value);
        calculateBill();
    }
})
resetBtn.addEventListener("click", () => {
    resetValues();
})



//functions 

function calculateBill() {
    handleErrors();

}
function handleErrors() {
    if (inputTotalAmount.value == 0 || inputTotalAmount.value == "") {
        errorTextArr[0].classList.add('show-error');
        outputPayableAmount.textContent = "$0";
        tipPerPerson.textContent = "$0";
        totalPerPerson.textContent = "$0";


    } else {
        errorTextArr[0].classList.remove("show-error");
        setValues();
    }
    if (inputTotalPeople.value == 0 || inputTotalPeople.value == "") {
        errorTextArr[2].classList.add('show-error');
        outputPayableAmount.textContent = "$0";
        tipPerPerson.textContent = "$0";
        totalPerPerson.textContent = "$0";
    } else {
        errorText[2].classList.remove("show-error");
        setValues();
    }
}

function setValues() {
    const tipAmount = Number((percentage / 100 * inputTotalAmount.value).toFixed(2));
    const totalPayableAmount = Number(tipAmount + Number(inputTotalAmount.value)).toFixed(2);
    outputPayableAmount.textContent = totalPayableAmount;
    tipPerPerson.textContent = (tipAmount / inputTotalPeople.value).toFixed(2);
    totalPerPerson.textContent = (totalPayableAmount / inputTotalPeople.value).toFixed(2);
}

//reset values 
function resetValues() {
    outputPayableAmount.textContent = "$0";
    tipPerPerson.textContent = "$0";
    totalPerPerson.textContent = "$0";
    inputTotalAmount.value = 0
    inputTotalPeople.value = 0;
    btnCustom.value = 0;
}
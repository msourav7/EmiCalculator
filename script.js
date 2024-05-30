
// document.addEventListener('DOMContentLoaded', function() {
//     const loanAmountInput = document.getElementById('loan-amount');
//     const loanAmountRange = document.getElementById('loan-amount-range');
//     const loanDurationInput = document.getElementById('loan-duration');
//     const loanDurationRange = document.getElementById('loan-duration-range');
//     const interestRateInput = document.getElementById('interest-rate');
//     const interestRateRange = document.getElementById('interest-rate-range');
//     const emiAmountDisplay = document.getElementById('emi-amount');
//     const interestPayableDisplay = document.getElementById('interest-payable');

//     function calculateEMI() {
//         const principal = parseFloat(loanAmountInput.value);
//         const annualInterestRate = parseFloat(interestRateInput.value);
//         const monthlyInterestRate = annualInterestRate / 12 / 100;
//         const numberOfMonths = parseFloat(loanDurationInput.value) * 12;

//         const emi = (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfMonths)) / (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1);
//         const totalPayable = emi * numberOfMonths;
//         const interestPayable = totalPayable - principal;

//         emiAmountDisplay.textContent = `₹ ${emi.toFixed(2)}`;
//         interestPayableDisplay.textContent = `₹ ${interestPayable.toFixed(2)}`;
//     }

//     function syncInputs(input, range) {
//         input.addEventListener('input', () => {
//             range.value = input.value;
//             calculateEMI();
//         });

//         range.addEventListener('input', () => {
//             input.value = range.value;
//             calculateEMI();
//         });
//     }

//     syncInputs(loanAmountInput, loanAmountRange);
//     syncInputs(loanDurationInput, loanDurationRange);
//     syncInputs(interestRateInput, interestRateRange);

//     calculateEMI();
// });





//color

// document.addEventListener('DOMContentLoaded', function() {
//     const loanAmountInput = document.getElementById('loan-amount');
//     const loanAmountRange = document.getElementById('loan-amount-range');
//     const loanDurationInput = document.getElementById('loan-duration');
//     const loanDurationRange = document.getElementById('loan-duration-range');
//     const interestRateInput = document.getElementById('interest-rate');
//     const interestRateRange = document.getElementById('interest-rate-range');
//     const emiAmountDisplay = document.getElementById('emi-amount');
//     const interestPayableDisplay = document.getElementById('interest-payable');

//     function calculateEMI() {
//         const principal = parseFloat(loanAmountInput.value);
//         const annualInterestRate = parseFloat(interestRateInput.value);
//         const monthlyInterestRate = annualInterestRate / 12 / 100;
//         const numberOfMonths = parseFloat(loanDurationInput.value) * 12;

//         const emi = (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfMonths)) / (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1);
//         const totalPayable = emi * numberOfMonths;
//         const interestPayable = totalPayable - principal;

//         emiAmountDisplay.textContent = `₹ ${emi.toFixed(2)}`;
//         interestPayableDisplay.textContent = `₹ ${interestPayable.toFixed(2)}`;
//     }

//     function updateRangeBackground(range) {
//         const min = parseFloat(range.min);
//         const max = parseFloat(range.max);
//         const val = parseFloat(range.value);

//         const percentage = ((val - min) / (max - min)) * 100;
//         range.style.background = `linear-gradient(to right, #ff4081 0%, #ff4081 ${percentage}%, #fff0f5 ${percentage}%, #fff0f5 100%)`;
//     }

//     function syncInputs(input, range) {
//         input.addEventListener('input', () => {
//             range.value = input.value;
//             calculateEMI();
//             updateRangeBackground(range);
//         });

//         range.addEventListener('input', () => {
//             input.value = range.value;
//             calculateEMI();
//             updateRangeBackground(range);
//         });

//         // Initial background update
//         updateRangeBackground(range);
//     }

//     syncInputs(loanAmountInput, loanAmountRange);
//     syncInputs(loanDurationInput, loanDurationRange);
//     syncInputs(interestRateInput, interestRateRange);

//     calculateEMI();
// });





//1 validation 1 not able to write more than limit

// document.addEventListener('DOMContentLoaded', function() {
//     const loanAmountInput = document.getElementById('loan-amount');
//     const loanAmountRange = document.getElementById('loan-amount-range');
//     const loanDurationInput = document.getElementById('loan-duration');
//     const loanDurationRange = document.getElementById('loan-duration-range');
//     const interestRateInput = document.getElementById('interest-rate');
//     const interestRateRange = document.getElementById('interest-rate-range');
//     const emiAmountDisplay = document.getElementById('emi-amount');
//     const interestPayableDisplay = document.getElementById('interest-payable');

//     function calculateEMI() {
//         const principal = parseFloat(loanAmountInput.value);
//         const annualInterestRate = parseFloat(interestRateInput.value);
//         const monthlyInterestRate = annualInterestRate / 12 / 100;
//         const numberOfMonths = parseFloat(loanDurationInput.value) * 12;

//         const emi = (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfMonths)) / (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1);
//         const totalPayable = emi * numberOfMonths;
//         const interestPayable = totalPayable - principal;

//         emiAmountDisplay.textContent = `₹ ${emi.toFixed(2)}`;
//         interestPayableDisplay.textContent = `₹ ${interestPayable.toFixed(2)}`;
//     }

//     function updateRangeBackground(range) {
//         const min = parseFloat(range.min);
//         const max = parseFloat(range.max);
//         const val = parseFloat(range.value);

//         const percentage = ((val - min) / (max - min)) * 100;
//         range.style.background = `linear-gradient(to right, #ff4081 0%, #ff4081 ${percentage}%, #fff0f5 ${percentage}%, #fff0f5 100%)`;
//     }

//     function validateInput(input, min, max) {
//         if (input.value === '') {
//             return;
//         }
//         let value = parseFloat(input.value);
//         if (isNaN(value) || value < min) {
//             value = min;
//         } else if (value > max) {
//             value = max;
//         }
//         input.value = value;
//     }

//     function syncInputs(input, range) {
//         input.addEventListener('input', () => {
//             validateInput(input, parseFloat(range.min), parseFloat(range.max));
//             range.value = input.value;
//             calculateEMI();
//             updateRangeBackground(range);
//         });

//         range.addEventListener('input', () => {
//             input.value = range.value;
//             calculateEMI();
//             updateRangeBackground(range);
//         });

//         // Initial background update
//         updateRangeBackground(range);
//     }

//     syncInputs(loanAmountInput, loanAmountRange);
//     syncInputs(loanDurationInput, loanDurationRange);
//     syncInputs(interestRateInput, interestRateRange);

//     calculateEMI();
// });

//1 a good currently in use
document.addEventListener('DOMContentLoaded', function() {
    const loanAmountInput = document.getElementById('loan-amount');
    const loanAmountRange = document.getElementById('loan-amount-range');
    const loanDurationInput = document.getElementById('loan-duration');
    const loanDurationRange = document.getElementById('loan-duration-range');
    const interestRateInput = document.getElementById('interest-rate');
    const interestRateRange = document.getElementById('interest-rate-range');
    const emiAmountDisplay = document.getElementById('emi-amount');
    const interestPayableDisplay = document.getElementById('interest-payable');

    function calculateEMI() {
        const principal = parseFloat(loanAmountInput.value);
        const annualInterestRate = parseFloat(interestRateInput.value);
        const monthlyInterestRate = annualInterestRate / 12 / 100;
        const numberOfMonths = parseFloat(loanDurationInput.value) * 12;

        if (isNaN(principal) || isNaN(annualInterestRate) || isNaN(numberOfMonths) || numberOfMonths <= 0 || monthlyInterestRate <= 0) {
            emiAmountDisplay.textContent = '₹ NaN';
            interestPayableDisplay.textContent = '₹ NaN';
            return;
        }

        const emi = (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfMonths)) / (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1);
        const totalPayable = emi * numberOfMonths;
        const interestPayable = totalPayable - principal;

        emiAmountDisplay.textContent = `₹ ${emi.toFixed(0)}`;
        interestPayableDisplay.textContent = `₹ ${interestPayable.toFixed(0)}`;
    }

    function updateRangeBackground(range) {
        const min = parseFloat(range.min);
        const max = parseFloat(range.max);
        const val = parseFloat(range.value);

        const percentage = ((val - min) / (max - min)) * 100;
        range.style.background = `linear-gradient(to right, #D8107C 0%, #D8107C ${percentage}%, #d1d3d4 ${percentage}%, #d1d3d4 100%)`;
    }

    function validateInput(input, range) {
        const min = parseFloat(range.min);
        const max = parseFloat(range.max);
        input.addEventListener('input', () => {
            if (input.value === '') return;
            let value = parseFloat(input.value);
            if (isNaN(value) || value < min) {
                value = min;
                // value = input.value;
            } else if (value > max) {
                value = max;
            }
            input.value = value;
            range.value = value;
            calculateEMI();
            updateRangeBackground(range);
        });

        input.addEventListener('blur', () => {
            let value = parseFloat(input.value);
            if (isNaN(value) || value < min) {
                input.value = min;
            } else if (value > max) {
                input.value = max;
            }
            range.value = input.value;
            calculateEMI();
            updateRangeBackground(range);
        });

        range.addEventListener('input', () => {
            input.value = range.value;
            calculateEMI();
            updateRangeBackground(range);
        });

        updateRangeBackground(range);
    }
//using same validation function for the trio
    validateInput(loanAmountInput, loanAmountRange);
    validateInput(loanDurationInput, loanDurationRange);
    validateInput(interestRateInput, interestRateRange);

    calculateEMI();
});

//1 b 
// document.addEventListener('DOMContentLoaded', function() {
//     const loanAmountInput = document.getElementById('loan-amount');
//     const loanAmountRange = document.getElementById('loan-amount-range');
//     const loanDurationInput = document.getElementById('loan-duration');
//     const loanDurationRange = document.getElementById('loan-duration-range');
//     const interestRateInput = document.getElementById('interest-rate');
//     const interestRateRange = document.getElementById('interest-rate-range');
//     const emiAmountDisplay = document.getElementById('emi-amount');
//     const interestPayableDisplay = document.getElementById('interest-payable');

//     function calculateEMI() {
//         const principal = parseFloat(loanAmountInput.value);
//         const annualInterestRate = parseFloat(interestRateInput.value);
//         const monthlyInterestRate = annualInterestRate / 12 / 100;
//         const numberOfMonths = parseFloat(loanDurationInput.value) * 12;

//         if (isNaN(principal) || isNaN(annualInterestRate) || isNaN(numberOfMonths) || numberOfMonths <= 0 || monthlyInterestRate <= 0) {
//             emiAmountDisplay.textContent = '₹ 0';
//             interestPayableDisplay.textContent = '₹ 0';
//             return;
//         }

//         const emi = (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfMonths)) / (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1);
//         const totalPayable = emi * numberOfMonths;
//         const interestPayable = totalPayable - principal;

//         emiAmountDisplay.textContent = `₹ ${emi.toFixed(0)}`;
//         interestPayableDisplay.textContent = `₹ ${interestPayable.toFixed(0)}`;
//     }

//     function updateRangeBackground(range) {
//         const min = parseFloat(range.min);
//         const max = parseFloat(range.max);
//         const val = parseFloat(range.value);

//         const percentage = ((val - min) / (max - min)) * 100;
//         range.style.background = `linear-gradient(to right, #ff4081 0%, #ff4081 ${percentage}%, #fff0f5 ${percentage}%, #fff0f5 100%)`;
//     }

//     function validateInput(input, range) {
//         const min = parseFloat(range.min);
//         const max = parseFloat(range.max);
//         input.addEventListener('input', () => {
//             let value = parseFloat(input.value);
//             if (isNaN(value) || value < min) {
//                 input.value = min;
//             } else if (value > max) {
//                 input.value = max;
//             }
//             range.value = input.value;
//             calculateEMI();
//             updateRangeBackground(range);
//         });

//         input.addEventListener('blur', () => {
//             let value = parseFloat(input.value);
//             if (isNaN(value) || value < min) {
//                 input.value = min;
//             } else if (value > max) {
//                 input.value = max;
//             }
//             range.value = input.value;
//             calculateEMI();
//             updateRangeBackground(range);
//         });

//         range.addEventListener('input', () => {
//             input.value = range.value;
//             calculateEMI();
//             updateRangeBackground(range);
//         });

//         updateRangeBackground(range);
//     }

//     validateInput(loanAmountInput, loanAmountRange);
//     validateInput(loanDurationInput, loanDurationRange);
//     validateInput(interestRateInput, interestRateRange);

//     calculateEMI();
// });






//validation 2 without p tag a div is created with error message
// document.addEventListener('DOMContentLoaded', function() {
//     const loanAmountInput = document.getElementById('loan-amount');
//     const loanAmountRange = document.getElementById('loan-amount-range');
//     const loanDurationInput = document.getElementById('loan-duration');
//     const loanDurationRange = document.getElementById('loan-duration-range');
//     const interestRateInput = document.getElementById('interest-rate');
//     const interestRateRange = document.getElementById('interest-rate-range');
//     const emiAmountDisplay = document.getElementById('emi-amount');
//     const interestPayableDisplay = document.getElementById('interest-payable');

//     function calculateEMI() {
//         const principal = parseFloat(loanAmountInput.value);
//         const annualInterestRate = parseFloat(interestRateInput.value);
//         const monthlyInterestRate = annualInterestRate / 12 / 100;
//         const numberOfMonths = parseFloat(loanDurationInput.value) * 12;

//         const emi = (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfMonths)) / (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1);
//         const totalPayable = emi * numberOfMonths;
//         const interestPayable = totalPayable - principal;

//         emiAmountDisplay.textContent = `₹ ${emi.toFixed(2)}`;
//         interestPayableDisplay.textContent = `₹ ${interestPayable.toFixed(2)}`;
//     }

//     function updateRangeBackground(range) {
//         const min = parseFloat(range.min);
//         const max = parseFloat(range.max);
//         const val = parseFloat(range.value);

//         const percentage = ((val - min) / (max - min)) * 100;
//         range.style.background = `linear-gradient(to right, #ff4081 0%, #ff4081 ${percentage}%, #fff0f5 ${percentage}%, #fff0f5 100%)`;
//     }

//     function validateInput(input, min, max, errorMessageElement) {
//         if (input.value === '') {
//             errorMessageElement.textContent = '';
//             return;
//         }
//         let value = parseFloat(input.value);
//         if (isNaN(value) || value < min || value > max) {
//             errorMessageElement.textContent = 'Entered value is invalid.';
//             return false;
//         } else {
//             errorMessageElement.textContent = '';
//             return true;
//         }
//     }

//     function syncInputs(input, range) {
//         const errorMessageElement = document.createElement('div');
//         errorMessageElement.classList.add('error-message');
//         input.parentNode.appendChild(errorMessageElement);

//         input.addEventListener('input', () => {
//             const isValid = validateInput(input, parseFloat(range.min), parseFloat(range.max), errorMessageElement);
//             if (isValid) {
//                 range.value = input.value;
//                 calculateEMI();
//                 updateRangeBackground(range);
//             }
//         });

//         range.addEventListener('input', () => {
//             input.value = range.value;
//             calculateEMI();
//             updateRangeBackground(range);
//         });

//         // Initial background update
//         updateRangeBackground(range);
//     }

//     syncInputs(loanAmountInput, loanAmountRange);
//     syncInputs(loanDurationInput, loanDurationRange);
//     syncInputs(interestRateInput, interestRateRange);

//     calculateEMI();
// });



//validation with p tag


// document.addEventListener('DOMContentLoaded', function() {
//     const loanAmountInput = document.getElementById('loan-amount');
//     const loanAmountRange = document.getElementById('loan-amount-range');
//     const loanDurationInput = document.getElementById('loan-duration');
//     const loanDurationRange = document.getElementById('loan-duration-range');
//     const interestRateInput = document.getElementById('interest-rate');
//     const interestRateRange = document.getElementById('interest-rate-range');
//     const emiAmountDisplay = document.getElementById('emi-amount');
//     const interestPayableDisplay = document.getElementById('interest-payable');

//     function calculateEMI() {
//         const principal = parseFloat(loanAmountInput.value);
//         const annualInterestRate = parseFloat(interestRateInput.value);
//         const monthlyInterestRate = annualInterestRate / 12 / 100;
//         const numberOfMonths = parseFloat(loanDurationInput.value) * 12;

//         const emi = (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfMonths)) / (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1);
//         const totalPayable = emi * numberOfMonths;
//         const interestPayable = totalPayable - principal;

//         emiAmountDisplay.textContent = `₹ ${emi.toFixed(2)}`;
//         interestPayableDisplay.textContent = `₹ ${interestPayable.toFixed(2)}`;
//     }

//     function updateRangeBackground(range) {
//         const min = parseFloat(range.min);
//         const max = parseFloat(range.max);
//         const val = parseFloat(range.value);

//         const percentage = ((val - min) / (max - min)) * 100;
//         range.style.background = `linear-gradient(to right, #ff4081 0%, #ff4081 ${percentage}%, #fff0f5 ${percentage}%, #fff0f5 100%)`;
//     }

//     function validateInput(input, min, max, errorMessageElement) {
//         if (input.value === '') {
//             errorMessageElement.textContent = '';
//             return true;
//         }
//         let value = parseFloat(input.value);
//         if (isNaN(value) || value < min || value > max) {
//             errorMessageElement.textContent = 'Entered value is invalid.';
//             return false;
//         } else {
//             errorMessageElement.textContent = '';
//             return true;
//         }
//     }

//     function syncInputs(input, range) {
//         const errorMessageElement = document.createElement('p');
//         errorMessageElement.classList.add('error-message');
//         input.parentNode.insertBefore(errorMessageElement, input.nextSibling);

//         input.addEventListener('input', () => {
//             const isValid = validateInput(input, parseFloat(range.min), parseFloat(range.max), errorMessageElement);
//             if (isValid) {
//                 range.value = input.value;
//                 calculateEMI();
//                 updateRangeBackground(range);
//             }
//         });

//         range.addEventListener('input', () => {
//             input.value = range.value;
//             calculateEMI();
//             updateRangeBackground(range);
//             validateInput(input, parseFloat(range.min), parseFloat(range.max), errorMessageElement); // Revalidate to clear the error message when using the range slider
//         });

//         // Initial background update
//         updateRangeBackground(range);
//     }

//     syncInputs(loanAmountInput, loanAmountRange);
//     syncInputs(loanDurationInput, loanDurationRange);
//     syncInputs(interestRateInput, interestRateRange);

//     calculateEMI();
// });

//goof layout p tag

// document.addEventListener('DOMContentLoaded', function() {
//     const loanAmountInput = document.getElementById('loan-amount');
//     const loanAmountRange = document.getElementById('loan-amount-range');
//     const loanDurationInput = document.getElementById('loan-duration');
//     const loanDurationRange = document.getElementById('loan-duration-range');
//     const interestRateInput = document.getElementById('interest-rate');
//     const interestRateRange = document.getElementById('interest-rate-range');
//     const emiAmountDisplay = document.getElementById('emi-amount');
//     const interestPayableDisplay = document.getElementById('interest-payable');

//     function calculateEMI() {
//         const principal = parseFloat(loanAmountInput.value);
//         const annualInterestRate = parseFloat(interestRateInput.value);
//         const monthlyInterestRate = annualInterestRate / 12 / 100;
//         const numberOfMonths = parseFloat(loanDurationInput.value) * 12;

//         const emi = (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfMonths)) / (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1);
//         const totalPayable = emi * numberOfMonths;
//         const interestPayable = totalPayable - principal;

//         emiAmountDisplay.textContent = `₹ ${emi.toFixed(2)}`;
//         interestPayableDisplay.textContent = `₹ ${interestPayable.toFixed(2)}`;
//     }

//     function updateRangeBackground(range) {
//         const min = parseFloat(range.min);
//         const max = parseFloat(range.max);
//         const val = parseFloat(range.value);

//         const percentage = ((val - min) / (max - min)) * 100;
//         range.style.background = `linear-gradient(to right, #ff4081 0%, #ff4081 ${percentage}%, #fff0f5 ${percentage}%, #fff0f5 100%)`;
//     }

//     function validateInput(input, min, max, errorMessageElement) {
//         if (input.value === '') {
//             errorMessageElement.textContent = '';
//             errorMessageElement.classList.remove('visible');
//             return true;
//         }
//         let value = parseFloat(input.value);
//         if (isNaN(value) || value < min || value > max) {
//             errorMessageElement.textContent = 'Entered value is invalid.';
//             errorMessageElement.classList.add('visible');
//             return false;
//         } else {
//             errorMessageElement.textContent = '';
//             errorMessageElement.classList.remove('visible');
//             return true;
//         }
//     }

//     function syncInputs(input, range) {
//         const errorMessageElement = document.createElement('p');
//         errorMessageElement.classList.add('error-message');
//         input.parentNode.appendChild(errorMessageElement);

//         input.addEventListener('input', () => {
//             const isValid = validateInput(input, parseFloat(range.min), parseFloat(range.max), errorMessageElement);
//             if (isValid) {
//                 range.value = input.value;
//                 calculateEMI();
//                 updateRangeBackground(range);
//             }
//         });

//         range.addEventListener('input', () => {
//             input.value = range.value;
//             calculateEMI();
//             updateRangeBackground(range);
//             validateInput(input, parseFloat(range.min), parseFloat(range.max), errorMessageElement); // Revalidate to clear the error message when using the range slider
//         });

//         // Initial background update
//         updateRangeBackground(range);
//     }

//     syncInputs(loanAmountInput, loanAmountRange);
//     syncInputs(loanDurationInput, loanDurationRange);
//     syncInputs(interestRateInput, interestRateRange);

//     calculateEMI();
// });


// document.addEventListener('DOMContentLoaded', function() {
//     const loanAmountInput = document.getElementById('loan-amount');
//     const loanAmountRange = document.getElementById('loan-amount-range');
//     const loanDurationInput = document.getElementById('loan-duration');
//     const loanDurationRange = document.getElementById('loan-duration-range');
//     const interestRateInput = document.getElementById('interest-rate');
//     const interestRateRange = document.getElementById('interest-rate-range');
//     const emiAmountDisplay = document.getElementById('emi-amount');
//     const interestPayableDisplay = document.getElementById('interest-payable');

//     function calculateEMI() {
//         const principal = parseFloat(loanAmountInput.value);
//         const annualInterestRate = parseFloat(interestRateInput.value);
//         const monthlyInterestRate = annualInterestRate / 12 / 100;
//         const numberOfMonths = parseFloat(loanDurationInput.value) * 12;

//         const emi = (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfMonths)) / (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1);
//         const totalPayable = emi * numberOfMonths;
//         const interestPayable = totalPayable - principal;

//         emiAmountDisplay.textContent = `₹ ${emi.toFixed(2)}`;
//         interestPayableDisplay.textContent = `₹ ${interestPayable.toFixed(2)}`;
//     }

//     function updateRangeBackground(range) {
//         const min = parseFloat(range.min);
//         const max = parseFloat(range.max);
//         const val = parseFloat(range.value);

//         const percentage = ((val - min) / (max - min)) * 100;
//         range.style.background = `linear-gradient(to right, #ff4081 0%, #ff4081 ${percentage}%, #fff0f5 ${percentage}%, #fff0f5 100%)`;
//     }

//     function validateInput(input, min, max, errorMessageElement) {
//         if (input.value === '') {
//             errorMessageElement.textContent = '';
//             errorMessageElement.classList.remove('visible');
//             return true;
//         }
//         let value = parseFloat(input.value);
//         if (isNaN(value) || value < min || value > max) {
//             errorMessageElement.textContent = 'Entered value is invalid.';
//             errorMessageElement.classList.add('visible');
//             return false;
//         } else {
//             errorMessageElement.textContent = '';
//             errorMessageElement.classList.remove('visible');
//             return true;
//         }
//     }

//     function syncInputs(input, range, errorElementId) {
//         const errorMessageElement = document.getElementById(errorElementId);

//         input.addEventListener('input', () => {
//             const isValid = validateInput(input, parseFloat(range.min), parseFloat(range.max), errorMessageElement);
//             if (isValid) {
//                 range.value = input.value;
//                 calculateEMI();
//                 updateRangeBackground(range);
//             }
//         });

//         range.addEventListener('input', () => {
//             input.value = range.value;
//             calculateEMI();
//             updateRangeBackground(range);
//             validateInput(input, parseFloat(range.min), parseFloat(range.max), errorMessageElement); // Revalidate to clear the error message when using the range slider
//         });

//         // Initial background update
//         updateRangeBackground(range);
//     }

//     syncInputs(loanAmountInput, loanAmountRange, 'loan-amount-error');
//     syncInputs(loanDurationInput, loanDurationRange, 'loan-duration-error');
//     syncInputs(interestRateInput, interestRateRange, 'interest-rate-error');

//     calculateEMI();
// });














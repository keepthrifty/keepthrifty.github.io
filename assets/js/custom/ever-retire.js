document.addEventListener('DOMContentLoaded', () => {
  function validateCurrency(id_tag, ok_label) {
    const labelElement = document.querySelector(`#${id_tag}-label`);
    const inputElement = document.querySelector(`#${id_tag}`);

    value = parseFloat(inputElement.value)

    if (value < 0 || value > 1000000000 || value === undefined) {
      labelElement.classList.add("error");
      labelElement.innerHTML = `Set ${ok_label} to a value between 0 and 1 Billion`;
      value = 0;
    } else {
      labelElement.classList.remove("error");
      labelElement.innerHTML = ok_label;
    }
    return value;
  }

  function validateAge(id_tag, ok_label) {
    const labelElement = document.querySelector(`#${id_tag}-label`);
    const inputElement = document.querySelector(`#${id_tag}`);

    value = parseFloat(inputElement.value)

    if (value < 0 || value > 100 || value === undefined) {
      labelElement.classList.add("error");
      labelElement.innerHTML = `Set ${ok_label} to a value between 0 and 100`;
    } else {
      labelElement.classList.remove("error");
      labelElement.innerHTML = ok_label;
    }
    return value;
  }

  function validatePercent(id_tag, ok_label) {
    const labelElement = document.querySelector(`#${id_tag}-label`);
    const inputElement = document.querySelector(`#${id_tag}`);

    value = parseFloat(inputElement.value) / 100;

    if (value < 0 || value > 1 || value === undefined) {
      labelElement.classList.add("error");
      labelElement.innerHTML = `Set ${ok_label} to a value between 0 and 100`;
    } else {
      labelElement.classList.remove("error");
      labelElement.innerHTML = ok_label;
    }
    return value;
  }

  function updateResult(id_tag, value, decimals = 0) {
    if (value !== NaN) {
      document.querySelector(`#${id_tag}`).value = value.toFixed(decimals);
    } else {
      document.querySelector(`#${id_tag}`).value = "Error";
    }
  }

  function updateYearResult(id_tag, value, round = "ceil") {
    if (value !== NaN) {
      if (round == "floor") {
        document.querySelector(`#${id_tag}`).value = Math.floor(value).toFixed(0);
      } else {
        document.querySelector(`#${id_tag}`).value = Math.ceil(value).toFixed(0);
      }
    } else {
      document.querySelector(`#${id_tag}`).value = "Never";
    }
  }

  function updateEverResult(id_tag, expectancy, retirementAge) {
    if (retirementAge === NaN || expectancy === NaN) {
      document.querySelector(`#${id_tag}`).value = "Error";
    } else if (retirementAge < expectancy) {
      document.querySelector(`#${id_tag}`).value = "Yes";
    } else {
      document.querySelector(`#${id_tag}`).value = "No";
    }
  }

  function logbase(val, base) {
    return Math.log(val) / Math.log(base);
  }

  function calculateRetirementYears(target, current, contribution, inflation, invRate, svgRate) {
    for (let year = 0; year < 100; year += 1) {
      if (current > target) {
        return year;
      }
      target = target * (1 + inflation);

      contribution = contribution * (1 + svgRate);
      interest = current * invRate;
      current = current + contribution + interest;
    }

    if (current > target) {
      return year;
    } else {
      return NaN;
    }
  }


  function updateResults() {
    const annualExpenses = validateCurrency("annual-expenses", "Annual Expenses");
    const currentRetirementSavings = validateCurrency("current-retirement-savings", "Current Retirement Savings");
    const currentAge = validateAge("current-age", "Current Age");
    const annualHouseholdIncome = validateCurrency("annual-household-income", "Annual Household Income");
    const savingsRate = validatePercent("savings-rate", "Savings Rate");

    const retirementTarget = annualExpenses * 25;
    const retirementTargetN1 = retirementTarget * (1.025);
    updateResult("retirement-target", retirementTarget);
    updateResult("retirement-target-n1", retirementTargetN1);

    const growthFactor = 1.025 / 1.08

    const yearsToRetirement = logbase(currentRetirementSavings / retirementTarget, growthFactor);
    updateYearResult("years-to-retirement", yearsToRetirement);

    const coastRetirementAge = currentAge + yearsToRetirement;
    updateYearResult("coast-retirement-age", coastRetirementAge);

    const lifeExpectanciesMale = [76.15, 76.63, 76.67, 76.69, 76.71, 76.72, 76.73, 76.74, 76.75, 76.76,
                                  76.76, 76.77, 76.78, 76.79, 76.8, 76.82, 76.84, 76.88, 76.91, 76.96,
                                  77.01, 77.08, 77.14, 77.22, 77.29, 77.37, 77.44, 77.52, 77.59, 77.67,
                                  77.75, 77.82, 77.9, 77.98, 78.06, 78.14, 78.22, 78.3, 78.38, 78.46,
                                  78.54, 78.63, 78.72, 78.81, 78.9, 79, 79.11, 79.22, 79.34, 79.46,
                                  79.6, 79.75, 79.9, 80.07, 80.25, 80.43, 80.63, 80.83, 81.05, 81.27,
                                  81.51, 81.75, 82, 82.27, 82.53, 82.81, 83.09, 83.38, 83.68, 83.98,
                                  84.3, 84.63, 84.97, 85.33, 85.7, 86.08, 86.48, 86.89, 87.33, 87.77,
                                  88.24, 88.72, 89.23, 89.75, 90.3, 90.87, 91.45, 92.06, 92.69, 93.35,
                                  94.03, 94.73, 95.46, 96.21, 96.99, 97.8, 98.63, 99.48, 100.34, 101.22, 102.11]

    const lifeExpectanciesFemale = [80.97, 81.41, 81.44, 81.45, 81.47, 81.48, 81.48, 81.49, 81.5, 81.51,
                                    81.51, 81.52, 81.53, 81.53, 81.54, 81.56, 81.57, 81.59, 81.61, 81.63,
                                    81.65, 81.67, 81.7, 81.73, 81.76, 81.79, 81.82, 81.85, 81.88, 81.92,
                                    81.95, 81.99, 82.03, 82.07, 82.11, 82.16, 82.2, 82.25, 82.3, 82.35,
                                    82.41, 82.46, 82.52, 82.59, 82.65, 82.72, 82.8, 82.88, 82.96, 83.06,
                                    83.15, 83.26, 83.37, 83.49, 83.61, 83.74, 83.88, 84.02, 84.17, 84.32,
                                    84.48, 84.64, 84.81, 84.99, 85.17, 85.36, 85.55, 85.76, 85.98, 86.2,
                                    86.44, 86.69, 86.96, 87.24, 87.54, 87.85, 88.17, 88.51, 88.86, 89.24,
                                    89.63, 90.04, 90.48, 90.93, 91.41, 91.91, 92.43, 92.98, 93.54, 94.14,
                                    94.76, 95.41, 96.09, 96.8, 97.54, 98.3, 99.09, 99.9, 100.73, 101.57, 102.42]

    const lifeExpectancyMale = lifeExpectanciesMale[currentAge];
    const lifeExpectancyFemale = lifeExpectanciesFemale[currentAge];

    updateYearResult("life-expectancy-m", lifeExpectancyMale, "floor");
    updateYearResult("life-expectancy-f", lifeExpectancyFemale, "floor");

    const expectedRetirementAge = currentAge +
                                    calculateRetirementYears(retirementTarget,
                                                             currentRetirementSavings,
                                                             annualHouseholdIncome * savingsRate,
                                                             0.025,
                                                             0.08,
                                                             0.025);

    updateYearResult("expected-retirement-age", expectedRetirementAge);

    updateEverResult("ever-retire-f", lifeExpectancyFemale, expectedRetirementAge);
    updateEverResult("ever-retire-m", lifeExpectancyMale, expectedRetirementAge);
  }

  updateResults();

  inputs = document.querySelectorAll('article.post .page__body input');
  for (const input of inputs) {
    input.addEventListener('input', () => {
      updateResults();
    })
  }
});

//
// <div class="inline-calculator-item">
//   <label class="inline-calculator-item__label" id="expected-retirement-age-label">Expected Retirement Age</label>
//   <div class="inline-calculator-item__input">
//     <input type="number" id="expected-retirement-age" disabled value="76" />
//   </div>
// </div>
//
// <div class="inline-calculator-item">
//   <label class="inline-calculator-item__label" id="ever-retire-label">Will I Ever Be Able To Retire?</label>
//   <div class="inline-calculator-item__input">
//     <input type="text" id="ever-retire" disabled value="Yes" />
//   </div>
// </div>

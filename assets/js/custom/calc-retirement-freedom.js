document.addEventListener('DOMContentLoaded', () => {
  function toCurrency(value) {
    if (value == 0) {
      return '-';
    } else {
      return '$' + value.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }

  const calculator = document.querySelector('.calculator#retirement-freedom-calculator');
  if (calculator) {
    const inputs = calculator.querySelectorAll('input');

    const fundsTodayInput = calculator.querySelector('input#funds-today');
    const retirementExpensesInput = calculator.querySelector('input#retirement-expenses');

    const ageInput = calculator.querySelector('input#age');
    const ageLabel = calculator.querySelector('#age-label');
    const retirementAgeInput = calculator.querySelector('input#retirement-age');
    const retirementAgeLabel = calculator.querySelector('#retirement-age-label');
    const investmentGainRateInput = calculator.querySelector('input#growth');
    const investmentGainRateLabel = calculator.querySelector('#growth-label');
    const inflationRateInput = calculator.querySelector('input#inflation');
    const inflationRateLabel = calculator.querySelector('#inflation-label');
    const safeWithdrawalRateInput = calculator.querySelector('input#safe-withdrawal');
    const safeWithdrawalRateLabel = calculator.querySelector('#safe-withdrawal-label');
    const taxRateInput = calculator.querySelector('input#tax');
    const taxRateLabel = calculator.querySelector('#tax-label');

    /* Output */
    const outputDiv = calculator.querySelector('#retirement-freedom-result');

    /* Calculate and update labels and results, flag errors */
    function updateResults() {
      const fundsToday = parseFloat(fundsTodayInput.value) || 0;
      const retirementExpenses = parseFloat(retirementExpensesInput.value) || 0;
      const age = parseFloat(ageInput.value) || 0;
      const retirementAge = parseFloat(retirementAgeInput.value) || 0;
      const inflationRate = parseFloat(inflationRateInput.value) / 100.0 || 0;
      const safeWithdrawalRate = parseFloat(safeWithdrawalRateInput.value) / 100.0 || 1;
      const investmentGainRate = parseFloat(investmentGainRateInput.value) / 100.0 || 0;
      const taxRate = parseFloat(taxRateInput.value) / 100.0 || 0;

      /* Update slider labels */
      ageLabel.innerHTML = 'Current age: ' + age.toFixed(0);
      retirementAgeLabel.innerHTML = 'Target retirement age: ' + retirementAge.toFixed(0);

      let safeWithdrawalRateText = (safeWithdrawalRate * 100).toFixed(2);
      safeWithdrawalRateText +=  '% safe withdrawal rate';
      safeWithdrawalRateLabel.innerHTML = safeWithdrawalRateText;

      let investmentGainRateText = (investmentGainRate * 100).toFixed(2);
      investmentGainRateText +=  '% annual investment growth rate';
      investmentGainRateLabel.innerHTML = investmentGainRateText;

      let taxRateText = (taxRate * 100).toFixed(0);
      taxRateText +=  '% tax rate on retirement withdrawals';
      taxRateLabel.innerHTML = taxRateText;

      let inflationRateText = (inflationRate * 100).toFixed(2);
      inflationRateText +=  '% annual expense inflation rate';
      inflationRateLabel.innerHTML = inflationRateText;

      if (outputDiv) {
        /* Validate Inputs */
        if (fundsToday <= 0.0) {
          outputDiv.innerHTML = '<span class="result-error">To calculate retirement freedom, enter a current retirement account balance greater than zero</span>';
          return;
        }
        if (retirementExpenses <= 0.0) {
          outputDiv.innerHTML = '<span class="result-error">Set retirement annual expenses to a value greater than zero</span>';
          return;
        }
        if (age >= retirementAge) {
          outputDiv.innerHTML = '<span class="result-error">Set a target retirement age greater than your current age</span>';
          return;
        }

        /* Update output */

        const fundsAtRetirement = fundsToday * Math.pow(1 + investmentGainRate, retirementAge - age);
        const targetFunds = retirementExpenses * Math.pow(1 + inflationRate, retirementAge - age) / (1 - taxRate) / safeWithdrawalRate;


        let out = '<h5>';

        if (fundsAtRetirement >= targetFunds) {
          out += "Congrats, you've reached Retirement Freedom!";
        } else {
          out += "You're not to Retirement Freedom yet. Keep saving!";
        }
        out += "</h5>"
        out += "<ul>"
        out += "<li>To retire at " + retirementAge + ", you'll need " + toCurrency(targetFunds) + " when you retire</li>";
        out += "<li>Based on what you entered, you would have " + toCurrency(fundsAtRetirement) + "</li>";
        out += "</ul>"

        outputDiv.innerHTML = out;
      }
    }

    /* Set calculator to auto-update on input changes */
    for (let i = 0; i < inputs.length; i += 1) {
      inputs[i].addEventListener('input', () => {
        updateResults();
      });
    }

    /* Update on load */
    updateResults();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  function toCurrency(value) {
    if (value == 0) {
      return '-';
    } else {
      return '$' + value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }

  function logbase(val, base) {
    return Math.log(val) / Math.log(base);
  }

  const daysCalculator = document.querySelector('.calculator#days-calculator');
  if (daysCalculator) {
    const daysInputs = daysCalculator.querySelectorAll('input');

    const balanceInput = daysCalculator.querySelector('input#balance');
    const extraInput = daysCalculator.querySelector('input#extra');
    const investmentGainRateInput = daysCalculator.querySelector('input#invrate');
    const investmentGainRateLabel = daysCalculator.querySelector('#invrate-label');
    const inflationRateInput = daysCalculator.querySelector('input#exprate');
    const inflationRateLabel = daysCalculator.querySelector('#exprate-label');

    /* Output */
    const daysOutputDiv = daysCalculator.querySelector('#calcdays-result');

    /* Calculate and update labels and results, flag errors */
    function updateDaysResults() {
      const balance = parseFloat(balanceInput.value) || 0;
      const extra = parseFloat(extraInput.value) || 0;
      const inflation = parseFloat(inflationRateInput.value) / 100.0 || 0;
      const growth = parseFloat(investmentGainRateInput.value) / 100.0 || 0;

      let investmentGainRateText = (growth * 100).toFixed(2);
      investmentGainRateText +=  '% annual investment growth rate';
      investmentGainRateLabel.innerHTML = investmentGainRateText;

      let inflationRateText = (inflation * 100).toFixed(2);
      inflationRateText +=  '% annual expense inflation rate';
      inflationRateLabel.innerHTML = inflationRateText;

      if (daysOutputDiv) {
        /* Validate Inputs */
        if (balance <= 0.0) {
          daysOutputDiv.innerHTML = '<span class="result-error">Please enter an investment balance greater than zero</span>';
          return;
        }
        if (extra <= 0.0) {
          daysOutputDiv.innerHTML = '<span class="result-error">Please enter a proposed contribution greater than zero</span>';
          return;
        }
        if (inflation >= growth) {
          daysOutputDiv.innerHTML = '<span class="result-error">Please set the inflation rate to a value less than the investment growth rate</span>';
          return;
        }

        /* Update output */
        const result = logbase(1 + extra / balance, (1 + growth) / (1 + inflation))*365.2425;
        let out = '<h5>' + toCurrency(extra) + ' can buy you ' + result.toFixed(1) + ' days of freedom';
        daysOutputDiv.innerHTML = out;
      }
    }

    /* Set calculator to auto-update on input changes */
    for (let i = 0; i < daysInputs.length; i += 1) {
      daysInputs[i].addEventListener('input', () => {
        updateDaysResults();
      });
    }

    /* Update on load */
    updateDaysResults();
  }

  const dollarsCalculator = document.querySelector('.calculator#dollars-calculator');
  if (dollarsCalculator) {
    const dollarsInputs = dollarsCalculator.querySelectorAll('input');

    const balanceInput = dollarsCalculator.querySelector('input#dollars-balance');
    const investmentGainRateInput = dollarsCalculator.querySelector('input#dollars-invrate');
    const investmentGainRateLabel = dollarsCalculator.querySelector('#dollars-invrate-label');
    const inflationRateInput = dollarsCalculator.querySelector('input#dollars-exprate');
    const inflationRateLabel = dollarsCalculator.querySelector('#dollars-exprate-label');

    /* Output */
    const dollarsOutputDiv = dollarsCalculator.querySelector('#calcdollars-result');

    /* Calculate and update labels and results, flag errors */
    function updateDollarsResults() {
      const balance = parseFloat(balanceInput.value) || 0;
      const inflation = parseFloat(inflationRateInput.value) / 100.0 || 0;
      const growth = parseFloat(investmentGainRateInput.value) / 100.0 || 0;

      let investmentGainRateText = (growth * 100).toFixed(2);
      investmentGainRateText +=  '% annual investment growth rate';
      investmentGainRateLabel.innerHTML = investmentGainRateText;

      let inflationRateText = (inflation * 100).toFixed(2);
      inflationRateText +=  '% annual expense inflation rate';
      inflationRateLabel.innerHTML = inflationRateText;

      if (dollarsOutputDiv) {
        /* Validate Inputs */
        if (balance <= 0.0) {
          dollarsOutputDiv.innerHTML = '<span class="result-error">Please enter an investment balance greater than zero</span>';
          return;
        }
        if (inflation >= growth) {
          dollarsOutputDiv.innerHTML = '<span class="result-error">Please set the inflation rate to a value less than the investment growth rate</span>';
          return;
        }

        /* Update output */
        const dayPrice = (Math.pow( (1 + growth) / (1 + inflation) , (1 / 365.2425 )) - 1) * balance;
        const yearPrice = (((1 + growth) / (1 + inflation)) - 1) * balance;

        const dayOut = '<h5>Price for an extra day: ' + toCurrency(dayPrice) + '</h5>';
        const yearOut = '<h5>Price for an extra year: ' + toCurrency(yearPrice) + '</h5>';
        dollarsOutputDiv.innerHTML = dayOut + yearOut;
      }
    }

    /* Set calculator to auto-update on input changes */
    for (let i = 0; i < dollarsInputs.length; i += 1) {
      dollarsInputs[i].addEventListener('input', () => {
        updateDollarsResults();
      });
    }

    /* Update on load */
    updateDollarsResults();
  }

});

const form = document.querySelector('form#retirement-freedom');

form.addEventListener('submit', (e) => {
  function parseInputToInt(inputName) {
    return parseInt(form.querySelector('input[name=' + inputName + ']').value);
  }
  function parseInputToFloat(inputName) {
    return parseFloat(form.querySelector('input[name=' + inputName + ']').value);
  }
  function formatAsCurrency(value) {
    return value.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
  }

  e.preventDefault();
  const age = parseInputToInt('age');
  const retirementAge = parseInputToInt('retirement-age');
  const fundsToday = parseInputToFloat('funds-today');
  const retirementExpenses = parseInputToFloat('retirement-expenses');
  const growth = parseInputToFloat('growth') / 100.0;
  const inflation = parseInputToFloat('inflation') / 100.0;
  const taxRate = parseInputToFloat('tax-rate') / 100.0;
  const safeWithdrawalRate = parseInputToFloat('safe-withdrawal-rate') / 100.0;

  const fundsAtRetirement = fundsToday * Math.pow(1 + growth, retirementAge - age);
  const targetFunds = retirementExpenses * Math.pow(1 + inflation, retirementAge - age) / (1 - taxRate) / safeWithdrawalRate;

  let resultText = ""
  if (age <= retirementAge) {
    if (fundsAtRetirement >= targetFunds) {
      resultText += "<p><strong>Congrats, you've reached Retirement Freedom!</strong></p>";
    } else {
      resultText += "<p><strong>You're not to Retirement Freedom yet. Keep saving!</strong></p>";
    }
    resultText += "<ul>"
    resultText += "<li>To retire at " + retirementAge + ", you'll need $" + formatAsCurrency(targetFunds) + " when you retire</li>";
    resultText += "<li>Based on what you entered, you would have $" + formatAsCurrency(fundsAtRetirement) + "</li>";
    resultText += "</ul>"
  } else {
    resultText += "<p><strong>Whoops! You entered your current age as <em>higher</em> than your target retirement age. Please fix that and try again</strong></p>"
  }

  // TODO:
  // - Add calculation of when you *could* retire with current funds
  // - Add calculation of how much you'd need now to retire at target

  const result = form.querySelector('.calculator-result');

  result.innerHTML = resultText;
  result.scrollIntoView({behavior: "smooth", block: "nearest", inline: "nearest"});
});

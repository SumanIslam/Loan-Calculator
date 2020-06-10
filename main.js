document.querySelector('#loan-form').addEventListener('submit', (e) => {
  // UI variables
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = Document.getElementById('total-payment');
  const totalInterest = Document.getElementById('total-interest');

  const principle = parseFloat(document.getElementById('amount').value);
  const calculatedInterest = parseFloat(document.getElementById('interest').value) / 100 / 12;
  const calculatedPayments = parseFloat(document.getElementById(years).value) * 12;

  // calculate monthly payment
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principle * x * calculatedInterest) / (x - 1);
  
  if(isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments) - principle).toFixed(2);
  } else {

  }

  e.preventDefault();
})
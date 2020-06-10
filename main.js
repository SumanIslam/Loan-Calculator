document.querySelector('#loan-form').addEventListener('submit', (e) => {
    document.querySelector('#loading').style.display = 'block';
    
  // UI variables
  const monthlyPayment = document.querySelector('#monthly-payment');
  const totalPayment = document.querySelector('#total-payment');
  const totalInterest = document.querySelector('#total-interest');

  const principle = parseFloat(document.querySelector('#amount').value);
  const calculatedInterest = parseFloat(document.querySelector('#interest').value) / 100 / 12;
  const calculatedPayments = parseFloat(document.querySelector('#years').value) * 12;

  // calculate monthly payment
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principle * x * calculatedInterest) / (x - 1);
  
  if(isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments) - principle).toFixed(2);

    setTimeout(() => {
      document.querySelector('#loading').style.display = 'none';
      document.querySelector('#result').style.display = 'block';
    }, 2000);

  } else {
    showError('Please check your numbers!');
  }

  e.preventDefault();
})

// show error
function showError(error) {
  setTimeout(() => {
    document.querySelector('#loading').style.display = 'none';
  }, 2000);
  const errDiv = document.createElement('div');
  errDiv.className = 'alert alert-danger';
  errDiv.appendChild(document.createTextNode(error));

  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading')

  setTimeout(() => {
    card.insertBefore(errDiv, heading);
  },2100)

  setTimeout(() => {
    document.querySelector('.alert').remove();
  }, 5000);
}
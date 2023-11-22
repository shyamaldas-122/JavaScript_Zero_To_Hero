const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  // extracting values when submitting
  let height = Number(document.querySelector('#height').value);
  let weight = Number(document.querySelector('#weight').value);
  let bmi = (weight / ((height * height) / 10000)).toFixed(2);
  let result = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = 'Please give a valid height';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = 'Please give a valid weight';
  } else {
    result.innerHTML = bmi;
    if (bmi < 18.6) {
      document.querySelectorAll('.test')[0].style.color = 'green';
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      document.querySelectorAll('.test')[1].style.color = 'yellow';
    } else {
      document.querySelectorAll('.test')[2].style.color = 'red';
    }
  }
});

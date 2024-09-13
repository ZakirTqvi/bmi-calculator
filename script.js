const form = document.querySelector("form");


form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector(".result");
  const status = document.querySelector('#status')
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);

  if (height === "" || height <= 0 || isNaN(height)) {
    result.innerHTML = `please enter a valid height`;
  } else if (weight === "" || weight <= 0 || isNaN(weight)) {
    result.innerHTML = `please enter a valid weight`;
  } else {
    // const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`;
  }
  
  if(bmi >= 10.0 && bmi < 18.5) {
     status.innerHTML = "Underweight"
      status.style.color = "orange"
  } else if(bmi >= 18.5 && bmi < 25.0) {
     status.innerHTML = "Normal"
     status.style.color = "green"
  }else if(bmi >= 25.0 && bmi < 30.0) {
    status.innerHTML = "Overweight"
    status.style.color = "orange"
  } else if(bmi >= 30.0) {
    status.innerHTML = "Obesity"
    status.style.color = "red"
  }

 
});

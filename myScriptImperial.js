"use strict";

// Using https://en.wikipedia.org/wiki/Harris%E2%80%93Benedict_equation
// Also using https://www.bmi-calculator.net/bmr-calculator/harris-benedict-equation/

let ageInput = document.getElementById("ageImp");
let centimeterInput = document.getElementById("centimeter");
let milimeterInput = document.getElementById("milimeter");
let kilogramInput = document.getElementById("kilogram");
let gramInput = document.getElementById("gram");

window.addEventListener("load", function () {
  // Metric form
  let imperialForm = this.document.forms.imperialForm;
  let gender = metricForm.elements.gender;

  // Select the model list when the form opens
  gender.focus();

  // Validate user inputs

  function validityFn() {
    if (ageInput.validity.valueMissing) {
      ageInput.setCustomValidity("Enter age");
    } else if (!/^\d+$/.test(parseFloat(ageInput.value))) {
      ageInput.setCustomValidity("Enter only digits");
    } else {
      ageInput.setCustomValidity("");
    }

    if (centimeterInput.validity.valueMissing) {
      centimeterInput.setAttribute("Enter centimeter value");
    } else if (!/^\d+$/.test(parseFloat(feetInput.value))) {
      centimeterInput.setCustomValidity("Enter only digits");
    } else {
      centimeterInput.setCustomValidity("");
    }

    if (milimeterInput.validity.valueMissing) {
      milimeterInput.setAttribute("Enter milimeter value");
    } else if (!/^\d+$/.test(parseFloat(milimeterInput.value))) {
      milimeterInput.setCustomValidity("Enter only digits");
    } else {
      milimeterInput.setCustomValidity("");
    }

    if (kilogramInput.validity.valueMissing) {
      kilogramInput.setCustomValidity("Enter kilogram value");
    } else if (!/^\d+$/.test(parseFloat(kilogramInput.value))) {
      kilogramInput.setCustomValidity("Enter only digits");
    } else {
      kilogramInput.setCustomValidity("");
    }

    if (gramInput.validity.valueMissing) {
      gramInput.setCustomValidity("Enter gram value");
    } else if (!/^\d+$/.test(parseFloat(gramInput.value))) {
      gramInput.setCustomValidity("Enter only digits");
    } else {
      gramInput.setCustomValidity("");
    }
  }

  // Add an event listener for every form element
  for (let i = 0; i < metricForm.elements.length; i++) {
    metricForm.elements[i].addEventListener("change", validityFn);
  }

  // Calculator

  document
    .getElementById("submitMetric")
    .addEventListener("click", function (event) {
      event.preventDefault();

      // Determine the selected gender
      let gIndex = gender.selectedIndex;
      let gValue = gender.options[gIndex].value;

      // Collecting data from the inputs

      let BMR_result = 0.0;

      if (gValue == "male") {
        let one = 6.23762 * parseFloat(poundsInput.value);
        let two = 12.7084 * parseFloat(inchesInput.value);
        let three = 6.755 * parseFloat(ageInput.value);
        let four = 66.473;

        BMR_result = one + two + three + four;
      } else if (gValue == "female") {
        let one = 4.33789 * parseFloat(poundsInput.value);
        let two = 4.69798 * parseFloat(inchesInput.value);
        let three = 4.6756 * parseFloat(ageInput.value);
        let four = 655.0955;

        BMR_result = one + two + three + four;
      }

      // Retrieve the activity selected
      let actValue = document.querySelector(
        'input[name="activity_level"]:checked'
      ).value;

      alert("Your BMR value is " + BMR_result * actValue);
    });

  /*********************************************** */

  // Imperial form
  let imperialForm = document.forms.imperialForm;
});

function openPage(pageName, elmnt, color) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}

document.getElementById("defaultOpen").click();

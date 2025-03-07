"use strict";

let ageInput = document.getElementById("age");
let feetInput = document.getElementById("feet");
let inchesInput = document.getElementById("inches");
let stonesInput = document.getElementById("stones");
let poundsInput = document.getElementById("pounds");

window.addEventListener("load", function () {
  // Metric form
  let metricForm = this.document.forms.metricForm;
  let gender = metricForm.elements.gender;

  // Select the model list when the form opens
  gender.focus();

  // Validate user inputs

  /***Gender validation is ignored for now****/

  function validityFn() {
    if (ageInput.validity.valueMissing) {
      ageInput.setCustomValidity("Enter age");
    } else if (!/^\d+$/.test(parseFloat(ageInput.value))) {
      ageInput.setCustomValidity("Enter only digits");
    } else {
      ageInput.setCustomValidity("");
    }

    if (feetInput.validity.valueMissing) {
      feetInput.setAttribute("Enter feet value");
    } else if (!/^\d+$/.test(parseFloat(feetInput.value))) {
      feetInput.setCustomValidity("Enter only digits");
    } else {
      feetInput.setCustomValidity("");
    }

    if (inchesInput.validity.valueMissing) {
      inchesInput.setAttribute("Enter inches value");
    } else if (!/^\d+$/.test(parseFloat(inchesInput.value))) {
      inchesInput.setCustomValidity("Enter only digits");
    } else {
      inchesInput.setCustomValidity("");
    }

    if (stonesInput.validity.valueMissing) {
      stonesInput.setCustomValidity("Enter stones value");
    } else if (!/^\d+$/.test(parseFloat(stonesInput.value))) {
      stonesInput.setCustomValidity("Enter only digits");
    } else {
      stonesInput.setCustomValidity("");
    }

    if (poundsInput.validity.valueMissing) {
      poundsInput.setCustomValidity("Enter pounds value");
    } else if (!/^\d+$/.test(parseFloat(poundsInput.value))) {
      poundsInput.setCustomValidity("Enter only digits");
    } else {
      poundsInput.setCustomValidity("");
    }
  }

  // Add an event listener for every form element
  for (let i = 0; i < metricForm.elements.length; i++) {
    metricForm.elements[i].addEventListener("change", validityFn);
  }

  // Calculator

  function CalBMR() {
    // Determine the selected gender
    let gIndex = gender.selectedIndex;
    let gValue = gender.options[gIndex].value;

    // Collecting data from the inputs

    let BMR_result;

    if (gValue == "male"){
      BMR_result = (6.23762 * parseFloat(poundsInput)) 
        + (12.7084 * parseFloat(inchesInput))
        - (6.755 * parseFloat(ageInput) + 66.473)
    } else if (gValue == "female"){
      BMR_result = (4.33789 * parseFloat(poundsInput)) 
        + (4.69798 * parseFloat(inchesInput))
        - (4.6756 * parseFloat(ageInput) + 655.0955)
    }

    alert("Result: " + BMR);
  }

  /*********************************************** */

  // Imperial form
  let imperialForm = document.forms.imperialForm;
});

function metricFunction() {
  alert("this works");
}

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

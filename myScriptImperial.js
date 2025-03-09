"use strict";

// Using https://en.wikipedia.org/wiki/Harris%E2%80%93Benedict_equation
// Also using https://www.bmi-calculator.net/bmr-calculator/harris-benedict-equation/

let ageImp = document.getElementById("ageImperial");
let feetInput = document.getElementById("feet");
let inchesInput = document.getElementById("inches");
let stonesInput = document.getElementById("stones");
let poundsInput = document.getElementById("pounds");

window.addEventListener("load", function () {
  // Imperial form
  let imperialForm = document.forms.imperialForm;
  let gender = metricForm.elements.gender;

  // Select the model list when the form opens
  gender.focus();

  // Validate user inputs

  function validityFn() {
    if (ageImp.validity.valueMissing) {
      ageImp.setCustomValidity("Enter age");
    } else if (!/^\d+$/.test(parseFloat(ageImp.value))) {
      ageImp.setCustomValidity("Enter only digits");
    } else {
      ageImp.setCustomValidity("");
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

  // Calculator

  document.getElementById("submitImperial").addEventListener("click", function(event){
    event.preventDefault();

    // Determine the selected gender
    let gIndex = gender.selectedIndex;
    let gValue = gender.options[gIndex].value;
    
    // Add an event listener for every form element
    for (let i = 0; i < imperialForm.elements.length; i++) {
      imperialForm.elements[i].addEventListener("change", validityFn());
    }

    // Collecting data from the inputs

    let BMR_result = 0.0;

    let weightValue = (parseFloat(poundsInput.value) + (0.0714286*parseFloat(stonesInput.value)));
    let heightValue = (parseFloat(inchesInput.value) + (0.0833333*parseFloat(feetInput.value)));


    if (gValue == "male"){
      let one = 6.23762*weightValue;
      let two = 12.7084*heightValue;
      let three = 6.755*parseFloat(ageImp.value);
      let four = 66.473;
      
      BMR_result = one+two+three+four;
    } else if (gValue == "female"){
      let one = 4.33789*weightValue;
      let two = 4.69798*heightValue;
      let three = 4.6756*parseFloat(ageImp.value);
      let four = 655.0955;
      
      BMR_result = one+two-three+four;
    }

    // Retrieve the activity selected
    let actValue = document.querySelector('input[name="activity_level"]:checked').value;

    alert("Your BMR value is " + (BMR_result*actValue).toFixed(3));
    
  })
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

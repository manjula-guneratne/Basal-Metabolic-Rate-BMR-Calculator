"use strict"

window.addEventListener("load",function(){
    // Metric form
    let metricForm = this.document.forms.metricForm;
    let gender = metricForm.elements.gender;

    // Select the model list when the form opens
    gender.focus();

    // Validate user inputs
    
    /***Gender validation is ignored for now****/
    let age = document.getElementById("age").value;
    let feet = document.getElementById("feet").value;
    let inches = document.getElementById("inches").value;
    let stones = document.getElementById("stones").value;
    let pounds = document.getElementById("pounds").value;

    function validateNumericalInput(){
        let age = document.getElementById("age").value;
    }

    validateNumericalInput;  // function called... here?

    // Add an event listener for every form element
    for (let i=0; i<metricForm.elements.length; i++){
        metricForm.elements[i].addEventListener("change", CalBMR)
    }

    // Calculator

    function CalBMR(){
        // Determine the selected gender
        let gIndex = gender.selectedIndex;
        let gValue = gender.options[gIndex].value;        

        // Validation called
        validateNumericalInput;  // function called... here?

        // Collecting data from the inputs

    }

    /*********************************************** */

    // Imperial form
    let imperialForm = this.document.forms.imperialForm;

})

function openPage(pageName, elmnt, color){
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i=0; i<tabcontent.length; i++){
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablink");
    for (i=0; i<tablinks.length; i++){
        tablinks[i].style.backgroundColor = "";
    }

    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
}

console.log("here is ..." + document.getElementById("defaultOpen"));
document.getElementById("defaultOpen").click();
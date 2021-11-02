
/*
// Get the input fields
var password = document.querySelector(".password");
var phone = document.querySelector('.phone');
var nom = document.querySelector('.name');

// Get the error elements
var errorPassword = document.getElementById("errorPassword");
var errorName = document.getElementById('errorName');  
var errorPhone = document.getElementById('errorPhone');*/



var form = document.getElementById("form");

var nom = document.getElementById("nom");





form.addEventListener("submit", (e) =>  {
        e.preventDefault();
        validate();
})



function validate() {

    // get the values from the inputs
    var nomValue = nom.value;

    if (nomValue === '' || nomValue === null) {
        //show error
        //add error class
        setErrorFor(nom, "Cal escriure un nom");

    } else {
        //add success class
        setSuccessFor(nom);
    }

    

}


function setErrorFor(input, message) {
    var formControl = input.parentElement; //form-control
    var small = formControl.querySelector("small");

    //add error message inside small
    small.innerText = message;

    //add error class
    formControl.className = "form-control error";

}

function setSuccessFor(input) {
    var formControl = input.parentElement; //form-control
    formControl.className = "form-control success";

}


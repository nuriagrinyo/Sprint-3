
/*
// Get the input fields
var password = document.querySelector(".password");
var phone = document.querySelector('.phone');
var nom = document.querySelector('.name');

// Get the error elements
var errorPassword = document.getElementById("errorPassword");
var errorName = document.getElementById('errorName');  
var errorPhone = document.getElementById('errorPhone');
*/


const form = document.getElementById("form");
const firstName = document.getElementById("firstNname");
const email = document.getElementById("email");
const adress = document.getElementById("adress");
const lastName = document.getElementById("lastName");
const password = document.getElementById("password");
const phone = document.getElementById("phone");






function validate() {

    const firstNameValue = firstName.value.trim();
    const emailValue = email.value.trim();
    const adressValue = adress.value.trim();
    const lastNameValue = lastName.value.trim();
    const passwordValue = password.value.trim();
    const phoneValue = phone.value.trim();

   
    if (firstName === " ") {
        // show error
        //add error class
        console.log("error");
        //setErrorFor(firstName, "El nom no pot estar buit");

    } else {
        // success class
        setSuccessFor(firstName);

    }


    return false;


}

function setErrorFor(input, message) {
    const formControl = input.parentElement;


}


/* 


- La contrasenya ha d'incloure números i lletres.




*/
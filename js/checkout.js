
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
var email = document.getElementById("email");
var adress = document.getElementById("adress");
var cognom = document.getElementById("cognom");
var password = document.getElementById("password");
var phone = document.getElementById("phone");

var input = document.getElementsByTagName("input");




form.addEventListener("submit", (e) =>  {
        e.preventDefault();
        validate();
})




function validate() {

    // get the values from the inputs
    var nomValue = nom.value;
    var emailValue = email.value;
    var adressValue = adress.value;
    var cognomValue = cognom.value;
    var passwordValue = password.value;
    var phoneValue = phone.value;

    console.log(nomValue);

   




    //TOTS ELS CAMPS SON OBLIGATORIS
    // NOM
    if (nomValue === '' || nomValue === null) {
        setErrorFor(nom, "Cal escriure un nom");
    } else if (!comprovarLletres(nomValue)) {
        setErrorFor(nom, "Només lletres al nom");
    }
    else {
        setSuccessFor(nom);
    }

    // EMAIL
    if (emailValue === '' || emailValue === null) {
        setErrorFor(email, "Cal escriure un email");
    } else if (!comprovarEmail(emailValue)) {
        setErrorFor(email, "S'ha d'introduir un email vàlid");
    } else {
        setSuccessFor(email);
    }

    // ADRESS
    if (adressValue === '' || adressValue === null) {
        setErrorFor(adress, "Cal escriure una adreça");
    } else {
        setSuccessFor(adress);
    }

    // COGNOM
    if (cognomValue === '' || cognomValue === null) {
        setErrorFor(cognom, "Cal escriure un cognom");
    } else if (!comprovarLletres(cognomValue)) {
        setErrorFor(cognom, "Només lletres al cognom");
    } else {
        setSuccessFor(cognom);
    }

    // PASSWORD
    if (passwordValue === '' || passwordValue === null) {
        setErrorFor(password, "Cal escriure una contrassenya");
    } else if (!comprovarLletres(passwordValue)) {
        setErrorFor(password, "La contrasenya ha de tenir números i lletres");
    } else if (!comprovarNumeros(passwordValue)) {
        setErrorFor(password, "La contrasenya ha de tenir números i lletres");
    } else {
        setSuccessFor(password);
    }

    // PHONE
    if (phoneValue === '' || phoneValue === null) {
        setErrorFor(phone, "Cal escriure una contrassenya");
    } else if (!comprovarNumeros(phoneValue)) {
        setErrorFor(phone, "Només números al telèfon");

    } else {
        setSuccessFor(phone);
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

function comprovarEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

}

function comprovarLletres(nom, cognom) {
    return /^[A-Za-z]+$/.test(nom, cognom);
}

function comprovarNumeros(phone) {
    return /^[0-9]+$/.test(phone);
}

function comprovarLletresNumeros (password) {
    return /^[0-9a-zA-Z]+$/.test(password);
}
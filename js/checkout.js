
//Declaració variables
var form = document.getElementById("form");
var nom = document.getElementById("nom");
var email = document.getElementById("email");
var adress = document.getElementById("adress");
var cognom = document.getElementById("cognom");
var password = document.getElementById("password");
var phone = document.getElementById("phone");

form.addEventListener("submit", (e) =>  {
        e.preventDefault();
        validate();
})

function validate() {

    //get the values from the inputs
    var nomValue = nom.value;
    var emailValue = email.value;
    var adressValue = adress.value;
    var cognomValue = cognom.value;
    var passwordValue = password.value;
    var phoneValue = phone.value;

    // NOM
    if (nomValue === '' || nomValue === null) {
        setErrorFor(nom, "Name cannot be blank");
    } else if (!comprovarLletres(nomValue)) {
        setErrorFor(nom, "Only letters are accepted");
    } else if (!comprovarCaracters(nomValue)) {
        setErrorFor(nom, "Minimum of 3 characters");
    } else {
        setSuccessFor(nom);
    }

    // EMAIL
    if (emailValue === '' || emailValue === null) {
        setErrorFor(email, "Email cannot be blank");
    } else if (!comprovarEmail(emailValue)) {
        setErrorFor(email, "Please, enter a valid email");
    } else {
        setSuccessFor(email);
    }

    // ADRESS
    if (adressValue === '' || adressValue === null) {
        setErrorFor(adress, "Adress cannot be blank");
    } else if (!comprovarCaracters(adressValue)) {
        setErrorFor(adress, "Minimum of 3 characters");
    } else {
        setSuccessFor(adress);
    }

    // COGNOM
    if (cognomValue === '' || cognomValue === null) {
        setErrorFor(cognom, "Last name cannot be blank");
    } else if (!comprovarLletres(cognomValue)) {
        setErrorFor(cognom, "Only letters are accepted");
    } else if (!comprovarCaracters(cognomValue)) {
        setErrorFor(cognom, "Minimum of 3 characters");
    } else {
        setSuccessFor(cognom);
    }

    // PASSWORD
    if (passwordValue === '' || passwordValue === null) {
        setErrorFor(password, "Password cannot be blank");
    } else if (!comprovarPassword(passwordValue)) {
        setErrorFor(password, "Letters and numbers are required, and 4-8 characters");

    } else {
        setSuccessFor(password);
    }

    // PHONE
    if (phoneValue === '' || phoneValue === null) {
        setErrorFor(phone, "Phone cannot be blank");
    } else if (!comprovarNumeros(phoneValue)) {
        setErrorFor(phone, "Only numbers are accepted");
    }  else if (!comprovarCaracters(phoneValue)) {
    setErrorFor(phone, "Minimum of 3 characters");
    } else {
        setSuccessFor(phone);
    }
} // final funció validate



//Missatge d'error
function setErrorFor(input, message) {
    var formControl = input.parentElement; //form-control
    var small = formControl.querySelector("small");

    small.innerText = message;
    formControl.className = "form-control error";
}

//Missatge de validació
function setSuccessFor(input) {
    var formControl = input.parentElement; //form-control
    formControl.className = "form-control success";
}

//Comprovar que l'input té un mínim de 3 caràcter (siguin lletres o números)
function comprovarCaracters(nom, email, adress, cognom, phone) {
    return /^[a-zA-Z0-9]{3,}$/.test(nom, email, adress, cognom, phone);
}

//Comprovar si l'email és vàlid
function comprovarEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

//Comprovar que l'input només conté lletres
function comprovarLletres(nom, cognom) {
    return /^[A-Za-z]+$/.test(nom, cognom);
}

//Comprovar que l'input només conté números
function comprovarNumeros(phone) {
    return /^[0-9]+$/.test(phone);
}

//Comprovar que la contrasenya conté números i lletres i entre 4 i 8 caràcters
function comprovarPassword(password) {
    return /^(?=.*\d)(?=.*[a-zA-Z]).{4,8}$/.test(password);
}
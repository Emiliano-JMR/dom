//console.log(document) -->imprime el html en la consola 
const mainTitle = document.getElementById("mainTitle");
const nameIpt = document.getElementById("nameIpt");
const greeting = document.getElementById("greeting");
const feedbackAlert = document.getElementById("feedbackAlert");
const mailIpt = document.getElementById("mailIpt");
const greetingMail = document.getElementById("greetingMail");
const feedbackAlertMail = document.getElementById("feedbackAlertMail");
const ageIpt = document.getElementById("ageIpt");
const greetingAge = document.getElementById("greetingAge");
const feedbackAlertAge = document.getElementById("feedbackAlertAge");

const regex = /^[A-Za-zÁéíóúÁÉÍÓÚñÑ ]+$/ ;

formBtn.addEventListener("click", ( evento ) => {
    evento.preventDefault();
    if( nameIpt.value.length < 3 && regex.test(nameIpt.value) ){
        feedbackAlert.style.display = "block";
        greeting.innerText = "";
    } else {
        greeting.innerText = `¡Hola, ${nameIpt.value}!`;
        feedbackAlert.style.display = "none";
    }
});

//segundo formulario
mailBtn.addEventListener("click", ( evento ) => {
    evento.preventDefault();
    if( mailIpt.value.length === 0 ){
        feedbackAlertMail.style.display = "block";
        greetingMail.innerText = "";
    } else {
        greetingMail.innerText = `¡Hola, ${nameIpt.value}!`;
        feedbackAlertMail.style.display = "none";
    }
});

//Tercer formulario
ageBtn.addEventListener("click", ( evento ) => {
    evento.preventDefault();
    if( ageIpt.value.length === 0 ){
        feedbackAlertAge.style.display = "block";
        greetingAge.innerText = "";
    } else {
        greetingAge.innerText = `¡Hola, ${nameIpt.value}!`;
        feedbackAlertAge.style.display = "none";
    }
});

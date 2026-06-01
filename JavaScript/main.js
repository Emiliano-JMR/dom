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
const mailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ ;
const ageRegex = /^[1-9]+$/;

sendBtn.addEventListener("click", ( evento ) => {
    evento.preventDefault();
    if( nameIpt.value.length < 3 || !regex.test(nameIpt.value) ){
        feedbackAlert.style.display = "block";
        greeting.innerText = "";
    } else {
        greeting.innerText = `¡Hola, ${nameIpt.value}!`;
        feedbackAlert.style.display = "none";
    }
});

//segundo formulario
sendBtn.addEventListener("click", ( evento ) => {
    evento.preventDefault();
    if( !mailRegex.test(mailIpt.value) ){
        feedbackAlertMail.style.display = "block";
        greetingMail.innerText = "";
    } else {
        greetingMail.innerText = `¡Correo Valido!`;
        feedbackAlertMail.style.display = "none";
    }
});

//Tercer formulario
sendBtn.addEventListener("click", ( evento ) => {
    evento.preventDefault();
    if( ageIpt.value.length < 1 || !ageRegex.test(ageIpt.value)){
        feedbackAlertAge.style.display = "block";
        greetingAge.innerText = "";
    } else {
        greetingAge.innerText = `¡Edad valida!`;
        feedbackAlertAge.style.display = "none";
    }
});

clearBtn.addEventListener("click", ( evento ) => {
    evento.preventDefault();
        //oculta todas las alertas
    feedbackAlertMail.style.display = "none";
    feedbackAlertAge.style.display = "none";
    feedbackAlert.style.display = "none";
    
    //borra todos los saludos
    greetingAge.innerText = "";
    greetingMail.innerText = "";
    greeting.innerText = "";

    //borra las entradas
    nameIpt.value = "";
    mailIpt.value = "";
    ageIpt.value = "";
});


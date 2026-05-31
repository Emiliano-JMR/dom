//console.log(document) -->imprime el html en la consola 
const mainTitle = document.getElementById("mainTitle");
const nameIpt = document.getElementById("nameIpt");
const greeting = document.getElementById("greeting");
const feedbackAlert = document.getElementById("feedbackAlert");

formBtn.addEventListener("click", ( evento ) => {
    evento.preventDefault();
    if( nameIpt.value.length === 0 ){
        feedbackAlert.style.display = "block";
        greeting.innerText = "";
    } else {
        greeting.innerText = `¡Hola, ${nameIpt.value}!`;
        feedbackAlert.style.display = "none";
    }
});

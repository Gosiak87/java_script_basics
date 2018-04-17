
document.addEventListener("DOMContentLoaded", function (){
     var buttons = document.getElementsByTagName("button"); // dla wszystkich guzików, który spowoduje, że po
     var counter = document.querySelector("span.counter");


     function incrementCounter() {
         counter.innerText = parseInt(counter.innerText) + 1; // kliknięciu w guzik licznik zwiększy wartość o jeden

     }
     for( var i = 0; i < buttons.length; i++){
         buttons[i].addEventListener("click", incrementCounter);
     }

});
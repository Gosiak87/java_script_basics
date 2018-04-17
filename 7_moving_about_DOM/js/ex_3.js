

document.addEventListener("DOMContentLoaded", function (){
    var buttons = document.getElementsByClassName("button");
     for (var i = 0; i < buttons.length; i++) {
         buttons[i].addEventListener("click", function () { //Na wszystkie przyciski musi być założony ten sam event.
             var parent = this.parentElement ; // jego rodzic zmienia kolor tła
             var randomColor = "#" + Math.floor(Math.random()*16777215); // losowy kolor tła
            parent.style.backgroundColor = randomColor
         });

     }

});
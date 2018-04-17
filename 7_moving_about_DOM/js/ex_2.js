

document.addEventListener("DOMContentLoaded", function (){
    var buttons = document.getElementsByClassName("button");
     for (var i = 0; i < buttons.length; i++) {
         buttons[i].addEventListener("click", function () { //Na wszystkie przyciski musi być założony ten sam event.
             var nextEl = this.nextElementSibling;
             if(nextEl.style.display === ""){  // czy element jest widoczny
                 nextEl.style.display = "none";
             } else{

                 nextEl.style.display = ""; // ustawiamy puste, wraca wartosc z css
             }
             // nextEl.style.visibility = "hidden" // element znika ale zostaje miejsce ktore zajmowal
            // nextEl.style.display = "none" // elemnt znika razem z miejscem
         });

     }

});
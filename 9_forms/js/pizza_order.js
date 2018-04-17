// W formularzu znajduje się pole z checkboksami, w którym użytkownik może wybrać sobie dodatki.
// Cena każdego z dodatków jest trzymana w atrybucie data-price.
// po zaznaczeniu checkoxa wyświetla się
// poprawna kwota zamówienia oraz po wysłaniu formularza wyświetla się alert z wyliczoną kwotą.
// Zwróć uwagę na dwa specjalne checkboksy:

//none – odznacza wszystkie inne opcje,
//all – zaznacza wszystkie inne opcje (poza none).


document.addEventListener("DOMContentLoaded", function() {

    var totalPrice = 0;

    var price = document.querySelector("#price");
    var form = document.querySelector("form");
    var chk = form.querySelectorAll(".checkbox input");

    for(var i=1; i<chk.length - 1; i++) {
        chk[i].addEventListener("click", function() {

            if (this.checked) {
                totalPrice += parseFloat(this.dataset["price"]);
            } else {
                totalPrice -= parseFloat(this.dataset["price"]);
            }

            price.innerText = totalPrice;

        });
    }

    chk[0].addEventListener("click", function() {
        totalPrice = 0;
        for(var i=1; i<chk.length-1; i++) {
            chk[i].checked = true;
            totalPrice += parseFloat(chk[i].dataset["price"]);
        }
        price.innerText = totalPrice;
    });

    chk[chk.length-1].addEventListener("click", function() {
        totalPrice = 0;
        for(var i=0; i<chk.length; i++) {
            chk[i].checked = false;
        }
        price.innerText = totalPrice;
    });

    form.addEventListener("submit", function(event){
        event.preventDefault();
        alert(totalPrice);
    });

});
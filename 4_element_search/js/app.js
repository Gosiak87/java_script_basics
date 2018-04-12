
//ex_1

document.addEventListener("DOMContentLoaded", function() {
    var firstArticle = document.querySelector("article.first"); // Wyszukaj na stronie i zapisz do odpowiednio nazwanej zmiennej tag article o klasie first.
    console.log(firstArticle.getElementsByTagName("h1").length); //wypisz w konsoli, ile elementów h1 znajduje się w tym tagu.
    var oferts = firstArticle.getElementsByClassName("oferts"); //wyszukaj w nim wszystkie elementy o klasie oferts,
    for (var i = 0; i < oferts.length; i++) {   //przeiteruj je
        console.log(oferts[i]);   // je i wypisz je w konsoli
    }


    var divs = firstArticle.getElementsByTagName("div");
    for (var i = 0; i < divs.length; i++) { //przeiteruj je
        console.log(divs[i])
    }
// ex_2


//Element o id home (na dwa sposoby).

    var home1 = document.querySelector("#home");
    var home2 = document.getElementsByName("home");
    var li = document.querySelector("li:not([data-direction]");//Pierwszy element li nieposiadający atrybutu data-direction.
    var firstBlock = document.querySelector("block"); //Pierwszy element o klasie block.

//ex_3

    var navLi1 = document.querySelector("nav").querySelectorAll("li");//Wszystkie elementy li znajdujące się w tagu nav.
    var navLi2 = document.querySelectorAll("nav li");
    var allPinDivs = document.querySelectorAll("div p"); // wszystkie paragrafy nalezace d div
    var allArticle = document.querySelector("article ").getElementsByTagName("div"); //Wszystkie divy znajdujące się w tagu article.

    var navLi3 = document.querySelector("nav").querySelectorAll("li");  //Znajdź wszystkie elementy li, które są w tagu nav.
    for (var i = 0; i < navLi3.length; i++) {

//ex_4

//nadaj każdemu elementowi li atrybut data-direction = "top", ale
// tylko dla tych elementów, które nie mają ustawionego tego atrybutu.
        if (!navLi3[i].hasAttribute("data.direction")) { // jesli nie ma atrybutu data direction
            navLi3[i].setAttribute("data.direction", "top");  //ustaw atrybut data direction o wartosci top
        }
    }
});



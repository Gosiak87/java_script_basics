
document.addEventListener("DOMContentLoaded", function(){
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children; // dostalismy HTMLCollection
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

// ex_1
// kod, który zamieni miejscami klasę i id dla elementu znajdującego się w
// zmiennej homeElement


    var tmp = homeElement.id;
    homeElement.id = homeElement.className;
    homeElement.className = tmp;

// ex_2
    var elements = [ homeElement, childElements, banner, blocks, links];
    for  (var i = 0; i < elements.length; i++){
        console.log(elements[i], typeof elements[i]);
        if (elements[i].length !== undefined){ // element jest tablicą
            for (var j = 0; j < elements[i]; j++) {
                console.log(elements[i][j]);
            }
        }
// ex_3
//Wypisz w konsoli wartości innerHTML i outerHTML dla elementów zmiennej blocks.
// Napisz w komentarzu, czym się od siebie różnią. Nastaw wartość innerHTML na "Nowa wartość
// diva o klasie blocks".

    }
    for (var i = 0; i< blocks.length; i++){
        console.log(blocks[i].innerHTML);// tylko wnętrze tagu blocks[i]
        console.log(blocks[i].outerHTML); // zawiera tez tag blocks[i]
        blocks[i].innerHTML = "Nowa wartosc diva";
    }

//Wypisz w konsoli id elementu kryjącego się w zmiennej homeElement.

        console.log(homeElement.id);
//ex_4
// Wypisz w konsoli tagi wszystkich elementów,
// które znajdują się w zmiennej childElements (to tablica).
    for (var i = 0; i < childElements.length; i++){
        console.log(childElements[i].tagName);
// ex_5
//Wypisz w konsoli wartość atrybutu dataset dla każdego elementu znajdującego się w
// zmiennej links (to tablica).
    for (var i = 0; i < links.length; i++){
        console.log(links[i].dataset);
    }
//ex_6
// Wypisz w konsoli wartość atrybutów classList i className dla
// zmiennej banner. Wypisz w konsoli, jakiego typu (i ewentualnie jakiej klasy) są te wartości.
    console.log(banner.className, typeof banner.className ); // typ string
    console.log(banner.classList, typeof banner.classList ); // typ object
    }
});




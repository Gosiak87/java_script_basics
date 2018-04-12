
// ex_1
document.addEventListener("DOMContentLoaded", function() {

    var li = document.querySelectorAll(" .exercise.ex1 li"); // wyszukane elemnty li
    for (var i = 0; i < li.length; i++) {
        if (!li[i].hasAttribute("data-direction")) { //Dodaj atrybut data-direction
            // nastawiony na wartość up każdemu elementowi li,
// który nie ma tego atrybutu.
            li[i].hasAttribute("data-direction", "up");
        }
        if (i % 2 === 1) {            //Nastaw kolor tła co drugiego elementu listy na zielony.
            li[i].style.backgroundColor = "green";
        }
        if (i % 3 === 1) {          //Nastaw co trzeciemu elementowi podkreśleni
            li[i].style.textDecoration = "underline";
        }
    }
    li[4].classList.add("big");  //Nastaw piątemu elementowi listy klasę big.
    console.log(li);

// ex_2
.
// Ustaw każdemu elementowi option wartość opisu z atrybutu value.
// Dodaj każdemu elementowi atrybut data-year, użyj dataset, ale wynikowa wartość ma być o
// 20 większa niż w atrybucie value, czyli np. 2020 -> 2040.
    var options = document.querySelectorAll(" .exercise.ex2 option");
    for (var i = 0; i < options.length; i++) {
        options[i].innerText = options[i].getAttribute("value");
        options[i].dataset.year = parseInt(options[i].getAttribute("value")) + 20;

    }
// ex_3
//Na stronie są trzy obrazki z ikonami najpopularniejszych przeglądarek internetowych.
// Niestety zarówno obrazki, jak i linki prowadzące do ich stron zawierają błędy.
// Napisz kod JavaScript, który wprowadzi następujące zmiany:

//Popraw elementy tak, żeby do każdej przeglądarki było podpięte odpowiednie logo
// (obrazek jest nastawiany za pomocą background-image).
//Popraw linki tak, żeby każdy miał poprawny opis i atrybut href.
//Popraw szerokość elementu o klasie chrome (powinno być 100px).
    var browserDivs = document.querySelectorAll(" .exercise.ex3 div:not([class])");
    var chrommeDiv = browserDivs[0];
    chrommeDiv.querySelector(".chrome").style.width = "100px";
    chrommeDiv.querySelector("a").innerText ="Chrome";
    var firefoxDiv = browserDivs[1];
    firefoxDiv.querySelector("h3").innerText = "Firefox";
    firefoxDiv.querySelector("a").setAttribute("href", "https://www.mozilla.org/pl/firefox/" );
    firefoxDiv.querySelector("a").innerText = "Firefox";

    var edgeDiv = browserDivs[2];
    edgeDiv.querySelector("h3").innerText = "Edge";
    edgeDiv.querySelector("a").setAttribute("href", "https://www.microsoft.com/pl-pl/windows/microsoft-edge" );
    edgeDiv.querySelector("a").innerText = "Edge";

//ex_4

//Wyszukaj wszystkie spany i zapisz je do odpowiednich zmiennych.
//Za pomocą innerHTML wypełnij w nich odpowiednie informacje.
    var spans = document.querySelectorAll(" .exercise.ex4 span");
    var name = spans[0];
    var fav_color = spans[1];
    var fav_meal = spans[2];
    name.innerText = "Gosia Miziołek";
    fav_color.innerText = "indygo";
    fav_meal.innerText = " chillisincarne"


});




//Element o klasie first -> jego pierwsze dziecko -> jego trzecie dziecko.
//Element o id second -> jego rodzic -> jego czwarte dziecko.
//Element o atrybucie data-ex nastawionym na wartość third -> jego dziadek
// -> jego ostatnie dziecko -> jego pierwsze dziecko -> jego środkowe dziecko (żeby otrzymać
// środkowy element, podziel liczbę dzieci przez dwa i zaokrąglij w górę).
//Div o klasie forth -> jego rodzic -> jego pierwsze dziecko o tagu article ->
// jego drugie dziecko o tagu <p>.
//Wszystkie te elementy mają atrybut data-answer nastawiony na numer zadania,
// dla którego są odpowiedzią.


document.addEventListener("DOMContentLoaded", function (){
    var first = document.querySelector(" .first").firstElementChild.children[2];
    var second = document.querySelector(" #second").parentElement.children[2];
    var thirdSibling = document.querySelector("[data-ex=third]").parentElement.parentElement.lastElementChild.firstElementChild.children;
    var third = thirdSibling[Math.floor(thirdSibling.length/2)];
    var forthDiv = document.querySelector(" .forth").parentElement;


    for (var i = 0; i < forthDiv.children.length; i++){
        if (forthDiv.children[i].tagName === "ARTICLE"){
            var forthArticle = forthDiv.children[i];
        }
    }
    var pCounter = 0;
    for (var i = 0; i < forthArticle.children.length; i++){
        if (forthArticle.children[i].tagName === "P"){
            if (pCounter > 0) {
                var forth = forthArticle.children[i];
                break;
            } else {
                pCounter += 1;
            }
        }
    }
});
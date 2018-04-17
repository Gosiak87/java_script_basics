
// event dla div
// który będzie wypisywał położenie kursora myszy w chwili, gdy znajduje się nad tym elementem.


document.addEventListener("DOMContentLoaded", function () {
    var div = document.getElementById("box");
    div.addEventListener("mousemove", function (event) {
        console.log(event.screenX, event.clientX, event.screenY, event.clientY);
        document.querySelector("span#globalX").innerText = event.screenX; // położenie kursora globalne (czyli odległość od górnego lewego rogu okna),
        document.querySelector("span#globalY").innerText = event.screenY;
        document.querySelector("span#localX").innerText = event.clientX; // i lokalne (czyli odległość od lewego górnego rogu elementu).
        document.querySelector("span#localY").innerText = event.clientY;
    });
    //po wyjechaniu z diva czyscze wspolrzedne
    div.addEventListener("mouseout", function (event) {
        console.log(event.screenX, event.clientX, event.screenY, event.clientY);
        document.querySelector("span#globalX").innerText = "X";
        document.querySelector("span#globalY").innerText = "Y";
        document.querySelector("span#localX").innerText = "X";
        document.querySelector("span#localY").innerText = "Y";


    });
});



// Dopisz event do okna (element window),
// który spowoduje, że elementy te będą pokazywały poprawne wartości nawet po przeskalowaniu okna.


document.addEventListener("DOMContentLoaded", function () {
        function setWindowsSize() {
            document.getElementById("windowHeight").innerText = window.innerHeight;
            document.getElementById("windowWidth").innerText = window.innerWidth;
        }
        setWindowsSize();
        window.addEventListener("resize", setWindowsSize);

    });

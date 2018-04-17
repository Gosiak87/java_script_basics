

document.addEventListener("DOMContentLoaded", function () {
    var divs = document.getElementsByClassName("box"); // znajdujemy divy

    for (var i = 0; i < divs.length; i++){
        divs[i].addEventListener("click", function () { // podpinam event do kazdego diva
            var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16); // Żeby uzyskać losowy kolor
            this.style.backgroundColor = randomColor  // kolor tła siedzi w style.background, zeby zmienial sie dla kazdego to uzywam this

        })
    }


    });

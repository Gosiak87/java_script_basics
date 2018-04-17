
document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.getElementsByTagName("button");
    var counters = document.querySelectorAll("span.counter");

    for (var i = 0; i < counters.length; i++){
        counters[i].id = "button" + (i +1); // ustawiam licznikowi id takie jak guzik, któremu odpowiada
    }

    for(var i = 0; i < buttons.length; i++){               // iterowanie po guzikach
        buttons[i].addEventListener("click", function () {
            var counter = document.querySelector("span.counter#" + this.id); // szukam licznika z konkretnym id
           counter.innerText = parseInt(counter.innerText) + 1;
           console.log(counter);

        })
    }



    });




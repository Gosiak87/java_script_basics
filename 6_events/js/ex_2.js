

document.addEventListener("DOMContentLoaded", function () {
    var div = document.getElementById("bubblingButtons");
    console.log(div);
    div.addEventListener("click", function (event) {
         event.target.dataset.counter = parseInt(event.target.dataset.counter )+ 1 ; // date-counter ma atrybut dataset
    })

});




document.addEventListener("DOMContentLoaded", function() {
    var element1 = document.getElementById("element1");
    var element2 = document.getElementById("element2");
    var element3 = document.getElementById("element3");
    var element4 = document.getElementById("element4");
    var element5 = document.getElementById("element5");

    element1.addEventListener("click", function(event) {
        console.log("Click in element 1");
    });

    element2.addEventListener("click", function(event) { // //Wywoływały się eventy dla elementu pierwszego i drugiego,
        // a nie wywoływał się event dla elementu trzeciego.
        console.log("Click in element 2");
        event.stopPropagation()
    });

    element3.addEventListener("click", function(event) {
        console.log("Click in element 3");
    });

    element4.addEventListener("click", function(event) {
        console.log("Click in element 4");
        event.stopImmediatePropagation()
    });

    element5.addEventListener("click", function(event) {
        console.log("Click in element 5");
    });

});

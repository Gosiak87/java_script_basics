
document.addEventListener("DOMContentLoaded", function() {
    var invoice = document.getElementById("invoiceData");
    var checkbox = document.getElementById("invoice");

    invoice.classList.add("hidden");  //dodanie klasy
    checkbox.addEventListener("click", function () { // widoczne gdy zaznaczony jest checkbox
        invoice.classList.toggle("hidden")

    });

});



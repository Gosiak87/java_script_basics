
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#addBtn").addEventListener("click", function(){
        var inputs = document.getElementsByTagName("input");
        var tr = document.createElement("tr");

        // Pobieramy wartość ze wszystkich pól w formularzu:
        var inputFields = ["orderId", "itemName", "quantity"];
        for (var i = 0; i < inputFields.length; i++) {
            var td = document.createElement("td");
            td.innerText = inputs[inputFields[i]].value;
            inputs[inputFields[i]].value = "";
            tr.appendChild(td);
        }
        // dodajemy nowy
        var tbody = document.querySelector("table#orders tbody");
        tbody.appendChild(tr);
    });
});
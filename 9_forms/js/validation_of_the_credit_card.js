
//Walidacja karty kredytowej.

//Zasady rozpoznawania kart:
//Karty Visa zaczynają się od cyfry 4.
//Karty Mastercard zaczynają się od cyfry 5.
//Karty American Express zaczynają się od cyfry 3. Następną cyfrą musi być 4 lub 7.
//Zasady walidacji kart:
//Karty Visa mają od 13 do 16 cyfr.
//Karty Mastercard mają równo 16 cyfr.
//Karty American Express mają równo 15 cyfr.

document.addEventListener("DOMContentLoaded", function() {

    var card = document.querySelector("#card");
    var type = document.querySelector("#type");

    card.addEventListener("input", function() {
        var val = this.value;

        if (val.charAt(0) == "4") {
            type.innerText = "VISA";

            if (val.length > 12 && val.length < 17) {
                type.style.color = "#008000";
            } else {
                type.style.color = "#ff0000";
            }

        } else if (val.charAt(0) == "5") {
            type.innerText = "MC";

            if (val.length == 16) {
                type.style.color = "#008000";
            } else {
                type.style.color = "#ff0000";
            }

        } else if (val.charAt(0) == "3") {

            if (val.charAt(1) == "4" || val.charAt(1) == "7") {
                type.innerText = "AE";

                if (val.length == 15) {
                    type.style.color = "#008000";
                } else {
                    type.style.color = "#ff0000";
                }

            } else {
                type.innerText = "";
            }

        } else {
            type.innerText = "ERROR";
        }

    });

});


document.addEventListener("DOMContentLoaded", function (){
        var divs = document.getElementsByClassName("listContainer");
        for (var i = 0; i < divs.length; i++){
            divs[i].addEventListener("mouseover", function () { //Na wszystkie divy musi być założony ten sam event.
                var list = this.querySelector("ul");
                list.firstElementChild.style.backgroundColor = "red"; //Pierwszy element w liście ma mieć kolor czerwony.
                list.lastElementChild.style.backgroundColor = "blue"; //Ostatni element w liście ma mieć kolor niebieski.
                for (var j = 1; j < list.children.length -1; j++){ // //Wszystkie inne elementy mają mieć kolor zielon
                    list.children[j].style.backgroundColor = "green"
                }
                this.classList.add("hovered"); //Po najechaniu myszką na element div dodaj mu klasę hovered, ale tylko jemu.

            });
        }



} );



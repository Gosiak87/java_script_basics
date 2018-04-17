
document.addEventListener("DOMContentLoaded", function (){


   document.querySelector("a.button").addEventListener("click", function (){ // po kliknieciu w guzik dodał sie nowy elemnt
       var ul = document.querySelector("ul.menu");
       var li = document.createElement("li");
       var content = "Element " + (ul.children.length + 1) +" - w chwili dodania było "+ ul.children.length + " elementów."

       li.innerText = content; //Element powinien mieć w sobie informacje na temat tego, ile elementów jest w liście w chwili jego dodania

       ul.appendChild(li);
   });
});
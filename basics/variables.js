var number = 20;
var number2 = 2.2;
var real = true;
var faked = false;
var text = "Ola nie ma kota ";
var dog = {
    name: "Pysiak",
    age:  3,
    hair:  "krótkowłosa"
}
var array =[1, 2, 3 ,4 ];

var fruits = [ "jablko", "gruszka", "mango", "brzoskwinia", "banan"];
console.log(fruits[0]); //Wypisz pierwszy owoc w konsoli.
//Wypisz ostatni owoc w konsoli (skorzystaj z atrybutu length).
console.log(fruits[fruits.length-1]); // od ilosci elementow w owoce - jeden to wtedy bedzie ostatni indeks

//W pętli wypisz wszystkie owoce (skorzystaj z atrybutu length).
var fruits2 = [];
for(var i = 0; i < fruits.length; i++) {
    fruits2 +=  fruits[i] + ", "
}
console.log(fruits2);

var Car = function(carType, carColor) {
    this.type = carType;
    this.color = carColor;
    this.km = 0;
    };


Car.prototype.printCarinfo = function(){  // printCarinfo() – metoda powinna wypisywać informacje o
                                                        // samochodzie (kolor, markę i liczbę przejechanych kilometrów).
    console.log(this.color + " " + this.type + " przebieg :" +this.km)
};
Car.prototype.drive = function (km) { // drive(km) – która dodaje do przejechanych kilometrów podaną wartość.
    this.km += km;

};


Car.prototype.inspections = [];
Car.prototype.newInspection = function (date) {
    this.inspections.push(date);
};
Car.prototype.printInspections = function () {
    for ( var i = 0; i< this.inspections.length; i++){ //metodę dodającą wpis do tej tablicy
        console.log(this.inspections[i]) // /metodę wyświetlającą wszystkie przeglądy samochodu.
    }

};


var Rectangle = function (recHeight, recWidth) {
    this.height = recHeight;
    this.width = recWidth;
};

Rectangle.prototype.getArea = function () {
    var result = this.height * this.width;
    console.log("Pole powierzchni równa się " + result)
};

//getPerimiter() – metoda ma zwracać obwód.
Rectangle.prototype.getPermiter = function () {
    var result = this.height + this.width;
    console.log("Obwód równa się " + result)
};

var rec = new Rectangle (3, 4);
console.log(rec.getArea());

console.log(rec.getPermiter());

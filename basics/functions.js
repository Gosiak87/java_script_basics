// function_1

function canCreateTriagle(a, b, c) {
    if (!(a < b + c)){
        return false;
    }
    if (!(b < a + c)){
        return false;

    }
    if (!(c<b+a)){
        return false
    }
    return true;

// return (a < b + c && b < a + c && (c < b + c));

}

console.log("z liczb 5, 6, 4 można stworzyć trójkąt (powinno zwrócić true) " + canCreateTriagle(5, 6, 4));
console.log("z liczb 100, 3, 6 nie można stworzyć trójkąta (powinno zwrócić false) " + canCreateTriagle(100, 3, 6));
console.log("z liczb 12, 14, 9 można stworzyć trójkąt (powinno zwrócić true) " + canCreateTriagle(12, 14, 9));
console.log("z liczb 3, 6, 200 nie można stworzyć trójkąta (powinno zwrócić false) " + canCreateTriagle(3, 6, 200));
console.log("z liczb 65, 53, 74 można stworzyć trójkąt (powinno zwrócić true) " + canCreateTriagle(65, 53, 74));
console.log("z liczb 600, 800, 1 nie można stworzyć trójkąta (powinno zwrócić false) " + canCreateTriagle(600, 800, 1));

// function_2

function mathInfo() {
    var randomNumber = Math.floor(Math.random() * 100);
    // 1
    console.log("Wylosowana liczba: ", randomNumber);
    if (randomNumber % 2 === 0) {  // jesli jest parzysta
        console.log("liczba parzysta")
    } else {   // a jesli nie jest
        console.log("liczba nieparzysta")
    }

    // 2
    var divisors= []; // pusta tablica
    for (var i = 0; i <= randomNumber; i++){   // nasze kazde i jest potencjalnym dzielnikiem liczby
        if (randomNumber % i === 0){
            divisors.push(i)  // metoda push dodaje do tablicy

        }

    }
    console.log("Dzielniki: ", divisors.join(",")); // join do wypisania tablicy bez [], z przecinkami miedzy soba
// join to = łacze elementy z tabeli i rozdzielam przecinkiem
    //3
    var power = Math.pow(randomNumber, randomNumber % 5 );
    console.log(randomNumber + " % 5 = " + randomNumber % 5 ) //20 % 5 = 0
    console.log(randomNumber +" ^ " + randomNumber % 5 + " = " + power);



}

//to wywołanie ma spowodować wyświetlenie w konsoli informacji z zadania
mathInfo();


// function_3

function myEval(a, b, operation) {
    var result = 0;
    switch(operation) {
        case'+': result = a + b;
        break;
        case'-': result = a - b;
        break;
        case'/': result = a / b;
        break;
        case'*': result = a * b;
        break;
        case'%': result = a % b;
        break;
        case'^': result = Math.pow(a, b);
    }
    return result;
}

console.log(" 2 + 4 = " + myEval(2, 4, "+"));
console.log(" 5 - 2 = " + myEval(5, 2, "-"));
console.log(" 4 ^ 8 = " + myEval(4, 8, "^"));
console.log(" 3 * 8 = " + myEval(3, 8, "*"));
console.log(" 10 / 5 = " + myEval(10, 5, "/"));
console.log(" 20 / 2 = " + myEval(20, 2, "%"));


//function_4


function sum(a, b, c) {
    return a + b + c ;

}
console.log(sum(2, 2, 3));

//function_5


function surfaceCircuit(r) {
    if (typeof r !== "number"){   // Jeśli przekazany argument jest nieodpowiedniego typu, to funkcja ma zwrócić false
        return false
    }
    var circuit = 2 * Math.PI * r; //pole
    var surface = Math.PI * Math.pow(r, 2); //obwod

    return [surface, circuit];
}

console.log(surfaceCircuit(1));
console.log(surfaceCircuit(2));
console.log(surfaceCircuit("lala"));


//function_6

var foo = function text() {
    for (var i = 0; i < 10; i++)
    {

        console.log("Gdy piszę kod zawszę i wszędzie używam funkcji oraz nie tworzę zmiennych globalnych");
    }
};
foo();


//function_7


function calculateTip(amount, rating) {
    switch (rating ) {
        case "Bardzo dobra obsluga" :
            var percent = 0.25;
            break;
        case "Srednia obsluga" :
            var percent = 0.15;
            break;
        case "Zla obsluga" :
            var percent = 0;
            break;
        default:
            "Opis nieczytelny";
    }
    return percent * amount;
}
console.log(calculateTip(200, "Bardzo dobra obsługa"));

//function_8

function add(array) {
    var result = 0;
    for (var i = 0 ; i < array.length; i++){
        result +=array[i];
    }
    return result;
}

//function_9

function multiplay(array) {
    var result = 0;
    for (var i = 0 ; i < array.length; i++){
        result *=array[i];
    }
    return result;
}

console.log(add([2, 3, 4, 5]));
console.log(multiplay([3, 7, 8, 9]));


//function_10

function distFromAvarage(array) {
    var result1 = 0;
    for (var i = 0 ; i < array.length; i++){
        result1 +=array[i];
    }
    var result2 = result1 / array.length;
    return result2
}

console.log(distFromAvarage([1,2,3,4,5,6,7])); //=> [3,2,1,0,1,2,3] (średnia z tablicy wejściowej to 4)
console.log(distFromAvarage([1,1,1,1])); //=> [0,0,0,0] (średnia z tablicy wejściowej to 1)
console.log(distFromAvarage([2,8,3,7])); //=> [3,3,2,2] (średnia z tablicy wejściowej to 5)

// function_10

function printTable(array) {

    for (var i = 0; i < array.length; i++) {
       // zacznij od 0 i dodawaj jeden dopoki nie skonczy sie dlugosc tablicy
        console.log(array[i])
    }

}

var array = [1, 3, 6, 8, 10];
printTable(array);


// function_11

function factors(number) {
    tabResult = [];
    if (number<=0){
        return tabResult
    } else {
        for (var i = number ; i <=number && i > 0 ; i--) { //ta tablica ma miec wszystkie liczby od 1 do number, iteracja sprawdza czy to dzielnik number
       // for (var i = 1; i<=number; i++) wynik jest wtedy od najmniejszej do najwekszej
            if (number % i === 0) {
                tabResult.push(i)
            }
        }

        return tabResult
    }

}

console.log(factors(2));
console.log(factors(54));
console.log(factors(-4));


//function_12

function getMissingElement(array) {
    //array= [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] === array[i + 1] - 1) {
            return null
        }
        else{
            misingElement = [];
            misingElement.push(array[i]+1);
        }
     return misingElement
    }

 }

console.log(getMissingElement([1,2,3,4,5,6,7])); //=> null
console.log(getMissingElement([6,7,8,10,11,12,13,14,15]));


//function_13


function isNumbersGrowing(array) {
    for (var i = 1; i < array.length; i ++) {
        // pomijamy poczatkowy elemenet bo nie da sie go porownac z poprzednim
        if (array[i] <= array[i-1]) {
            return false;

        }
    }
    return true;
    // Do tablicy możesz się odnieść przez zmienną array
}

console.log("tablica [1,2,3,4,5,6,7]  jest rosnąca (powinno zwrócić true) " + isNumbersGrowing([1,2,3,4,5,6,7]));
console.log("tablica [1,2,10,4,5,6,7] nie jest rosnąca (powinno zwrócić false) " + isNumbersGrowing([1,2,10,4,5,6,7]));
console.log("tablica [-5,-4,0,4,6,21]  jest rosnąca (powinno zwrócić true) " + isNumbersGrowing([-5,-4,0,4,6,21]));
console.log("tablica [-1,2,-1,4,5,6,7] nie jest rosnąca (powinno zwrócić false) " + isNumbersGrowing([-1,2,-1,4,5,6,7]));
console.log("tablica [8]  jest rosnąca (powinno zwrócić true) " + isNumbersGrowing([8]));


// functions 2DArray

// FUnkcja checkArray przyjmuje ako argument
// tablicę dwuwymiarową z liczbami całkowitymi. Funkcja zwraca nową tablicę,
// w której kolejnymi elementami są wartości boolean true lub false,
// zależne od tego, czy każdy element tablicy drugiego wymiaru jest parzysty.


// pierwsza iteracja
function checkEven(array) {
    for ( var i = 0; i < array.length; i++){
        if (array[i] % 2 !== 0) {
            return false;
        }
    }
 return true;
}



function checkArray(array) {
    var newArr = [];
    for(var i = 0; i < array.length; i++){
       newArr[i] = checkEven(array[i]);
    }
    return newArr;

}



function print2DArray(array2D) {
    for (var i = 0; i < array2D.length; i++) {
        //     for( var j = 0; i < array2D.length; j++){
        //         console.log(array2D[i][j])
        //     }
        //
        // } Tak mozna sie odwolac do wszystkich elementów, pojedynczych
        console.log(array2D[i].join(" "));
    }
}


function create2DArray(rows, columns) {
    var externalArray = [];
    for (var i = 0; i < rows; i++) {
        externalArray.push([]);
        for (var j = 0; j < columns; j++) {
            externalArray[i][j] = j + i * columns + 1;
        }
    }
    return externalArray;
}





var arr = [
[11, 12],
[42, 2],
[-4, -120],
[0, 0],
[1, 34],
];




console.log(checkArray(arr));
console.log(print2DArray(arr));
console.log(create2DArray(4,5));
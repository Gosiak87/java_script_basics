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

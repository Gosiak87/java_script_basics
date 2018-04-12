// loop_1

var i = 1;
// mnozenie przez 0 nas nie zaprowadzi daleko
while (i < 100) {
// porownujemy i nie true
    console.log('Aktualna wartość zmiennej i to: ' + i);
    i = i * 2;
}

//loop_2

var year = 2016;
if(year % 4 === 0) {
    //  nie chcemy year = year % 4;
    console.log('Rok przestępny');
}
else {
    console.log('Rok nieprzestępny');
}


console.log('Błędy poprawione, więc ten tekst będę widzieć w konsoli po uruchomieniu skryptu HURRRA!!!');

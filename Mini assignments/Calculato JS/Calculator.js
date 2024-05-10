// zamisao, zelim da napravim da u polje prikaz ide rezultat posto se klinke na =, a da u polju 
var lastResult = document.getElementById('result');; // izbacuje rezultat
var valueToCalculate = document.getElementById('mainPrikaz'); // unosimo novi element izraza
var operationDisply = document.getElementById('operDisplay'); // polje koje definise operaciju

var prikaz

// unis vrednosti
    function addValue(broj){
        if(valueToCalculate.innerText === '0'){
            valueToCalculate.innerText = '';
            valueToCalculate.innerText += broj;
        } else {
            valueToCalculate.innerText += broj;
    };
    }

    function addValuePoint(broj){
        if(valueToCalculate.innerText.includes('.')){ // da onemogucimo unos 2x tacke kod jednog broja

        } else {
        if(valueToCalculate.innerText === '0'){
            valueToCalculate.innerText = 0; // posto kada krece sa 0, zelimo da ostane 0 i da se doda zarez posle
            valueToCalculate.innerText += broj;
        } else {
            valueToCalculate.innerText += broj;
    }
}
    }

    function Operations(operacija){ // prilikom unosa prvog broja i operacije da prebaci prvi broj kao rezultat
        var broj = valueToCalculate.innerText;
        if(lastResult.innerHTML.length == '0'){
            console.log(lastResult.innerHTML.length); // prepoznaje koliko ima polja u 
            lastResult.innerHTML = broj;
            operationDisply.innerText = operacija;
            valueToCalculate.innerText = '';
        } else {
            operationDisply.innerHTML = operacija;
        };
    }

    function addResult() {
        var rez = lastResult.innerText;
        var ope = operationDisply.innerText;
        var num = valueToCalculate.innerText;
        if(ope.length == '0'){ // ako nema operacija jednako nece raditi

        } else{
        if(lastResult.innerText.length != 0){
            //treba da se skloni opcija ako nema selektovanog operatora da ne dodaje broj na kraju niza
        // lastResult.innerText = (Number(rez), ope, Number(num)); // kako da vrsi sabiranje, a da ne koristim eval?!?! ovo gleda kao string
             lastResult.innerText = eval(rez + ope + num);
        valueToCalculate.innerText = "0";
        operationDisply.innerText = "";
    } else {
        lastResult.innerText = (num); // nema unete vrednosti u polju za rezultat, prenosi samo broj
        valueToCalculate.innerText = "0";
    }
}
    }

    function clearLast() {//iskoristio sam opciju rest forme
        // brise zadnje uneseni karakter, mana brise sva polja dok ne ostane prazno
       valueToCalculate.innerText = valueToCalculate.innerText.substring(0, valueToCalculate.innerText.length - 1);
        // zelimo da drzimo 0 ako se obrisu svi brojevi
       if (valueToCalculate.innerText.length == 0) {
           valueToCalculate.innerText += "0";
        }
    }
    

    function clearAll() {
        // reset();
        var clearAll = 0;
        valueToCalculate.innerHTML = clearAll;
        lastResult.innerText = "";
        operationDisply.innerHTML = "";
    }

    function plusMinus() {
        var plusMinus = valueToCalculate.innerHTML * -1;
        valueToCalculate.innerHTML = plusMinus;
    }
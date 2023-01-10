

/*Scope - hatókőr a javascript-ben és általánosságban a programozási nyelben scopnak másnéven haókörnek 
nevezzük a program végrehajtásának az aktuálsi kontextusát tehát azt a környezetet ahol az adaott változó látható
elérhető lessz
*/

/*function exampleFunction () {
    var count = 0;
    count += 5;
}

console.log(count); // hibaüzenet mert minden változó csak a saját ahtókörén belül lessz elérhető, azon kívül nem */

count = 0; // külső hatókörben definiálom

function  exampleFunction () {
    count + 5; // a belső gyermek függvények hozzáférnek a külső szülő hatókörök változóihoz (kifelé látunk csak befelé nem)
}

console.log(count);


/*Javascriptben a függvények a hatókörök alapjai minden új függvényel egy új hatókör jön létre
pakolhatunk függvényeket függvényekbe*/

function outer () {
    var outerNum = 1;

    function inner () {
        var innerNum = 2;
        console.log(outerNum); // Müködik
    }

    inner();
 console.log(innerNum) // Nem Müködik
}



// Milyen változókat tudunk elérni ey függvény belsejéből ???

// 2015 Blokk hatókörű változók

/*for(var i = 0; i <= 4; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000 * i);
}

// Mi történt?? Magyarázat! Megoldás

for(let i = 0; i <= 4; i++) {
    setTimeout(function(){
        console.log(i);
    }, 100 * i);
}
 */
function logUntilSmall(array) {
    for(var i = 0; i < array.length && array[i] > 0; i++) {
        console.log(array[i] + " pozitiv");
    }

    if(i === array.length) {
        var message = "minden elem pozitiv";
    } else {
        var message = array[i] + "megállította s számolást";
    }

    console.log(message);
}

logUntilSmall([1,3,4,7,-10,-1,2]);
logUntilSmall([1,3,4,7,10,11,2]);

// old meg lettel

/*
function logUntilSmall(array) {

    let message, i;

    for( i = 0; i < array.length && array[i] > 0; i++) {
        console.log(array[i] + " pozitiv");
    }

    if(i === array.length) {
        message = "minden elem pozitiv";
    } else {
        message = array[i] + "megálltotta a számolást";
    }

    console.log(message);
}

logUntilSmall([1,3,4,7,-10,-1,2]);
logUntilSmall([1,3,4,7,10,11,2]);

*/





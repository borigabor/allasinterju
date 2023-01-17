

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
/*function logUntilSmall(array) {
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
*/

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

// logUntilSmall feladat használjunk mindenhol const-ot ahol kell let peddig ahol muszály

/*function logUntilSmall(array) {
    const condition = "pozitív";
    const error = "megálítottad a logolásat";
    let message, i;

    for(i = 0; i < array.length && array[i] > 0; i++) {
        console.log(`${array[i]} ${condition}`);
    }

    if(i === array.length) {
        message = `minden elem ${condition}`;
    } else {
        message = `${array[i]} ${error}`;
    }

    console.log(message);
}

const testArray = [1, 3, 4, 7, 10, 11, 2];
testArray.push(-1);
logUntilSmall(testArray);

// Objektumok és Tömbök consttal

const Fran = {
    name: "Frances E. Allen",
    field: ["forditók", "program-optimalizáció", "párhuzamosítás"]
};

Fran = {
    name: "Frances E. Allen",
    awards: ["ACM A.M. Turning-díj"]
};

*/

/*console.log("Hello a nevem ", myName);

var myName = "Berry";

console.log(`kétszer kettő az ${two * two}`);

var two = 2;*/


//hositing

// greeting változó a külső hatókörben definiálva

/*var greeting = "Hello";

function greetWithExcitement(name) {
    // excitement lokális változó a hatókör elején definiálva
    var excitement = "!!!";

    if(name === 'CodeBerry') {
        // excitementet oké módosítnai mert látjuk a függvény elejéna listában
        excitement = "!!!!!!";
    }

    console.log(greeting + name + excitement);
}

function greetWithASmile(name) {
    var smile = " :)";
    // Ez a függvény is használja a greeting változót még jó hogy nem változtattuk meg!

    console.log(greeting + name + smile);
}

greetWithExcitement("CodeBerry");
greetWithASmile("Stuard"); */

/*const condition = "positive";
let test;

function isPositive(number) {
    let message;
    const fail = "No!";
    const zero = "No, it's 0";

    if(number > 0) {
        message = "Yes, it is " + condition;
    }

    if(number < 0) {
        message = fail;
    }

    if(number === 0) {
        message = zero;
    }

    console.log(message);
}

test = 10;
isPositive(test);
test =- 10;
isPositive(test);
*/

/*const condition = "positive";
let test;

function isPositive(number) {
    let message;
    const fail = "No!";
    if(number > 0) {
        message = "Yes it's " +condition;
    }

    if(number < 0) {
        message = fail;
    }

    console.log(message);
}

test = 10;
isPositive(test);
test = -10;
isPositive(test);

*/

//////////////////////////////////////////
//IIFE

/*var greeting = "Hello";

function greetWithExcitement(name) {
    var excitement = "!!!";
    console.log(`${greeting} ${name} ${excitement}`);
}

greetWithExcitement("Ödön");

*/

/*(function () {
     
    var greeting = "Hello";

    function greetWithExcitement(name) {
        var excitement = "!!!";

        console.log(`${greeting} ${name} ${excitement}`);
    }

    greetWithExcitement("Péter");

})();

*/


/*(function() {

    var condition = "positive";
    var test;

    function isPositive(number) {
        let message;
        let fail = "No!";

        if(number > 0) {
            message = "Yes, it's " + condition;
        }

        if(number < 0) {
            message = fail;
        }

        console.log(message);
    }

    test = 10;
    isPositive(test);
    test = -10;
    isPositive(test);

})(); */

///////////////////////////////////////////////////////////////
// closure

/*var greet = ( function() {
    var greeting = "Hello";
    function greetWithExcitement(name) {
        var excitement = "!!!";
        console.log(`${greeting} ${name} ${excitement}`);
    }

    return greetWithExcitement;

})();

greet("Berry");*/

/*var log = (function() {
    var a;
    function logAbsoluteUrl(url) {
        if(!a) {
            a = document.createElement('a');
        }
        a.href = url;
        console.log(a.href);
    }

    return logAbsoluteUrl;

})();

log('valami');
log('Semmi');
*/




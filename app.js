

/*Scope - hatókőr a javascript-ben és általánosságban a programozási nyelben scopnak másnéven haókörnek 
nevezzük a program végrehajtásának az aktuálsi kontextusát tehát azt a környezetet ahol az adaott változó látható
elérhető lessz
*/

/*function exampleFunction () {
    var count = 0;
    count += 5;
}

console.log(count); // hibaüzenet mert minden változó csak a saját ahtókörén belül lessz elérhető, azon kívül nem */
/*
count = 0; // külső hatókörben definiálom

function  exampleFunction () {
    count + 5; // a belső gyermek függvények hozzáférnek a külső szülő hatókörök változóihoz (kifelé látunk csak befelé nem)
}

console.log(count);*/


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


////////////////////////////////////////////////////////////////
// A this rugalmassága

/*const person = {
    name: 'Berry',
    introduce: function() {
        console.log("Hello a nevem " + person.name);
    }
}

person.introduce(); */

/*const personFactory = function(name) {
    return {
        name: name,
        introduce: function() {
            console.log("Hello a nevem " + this.name);
        },
    };
};

personFactory("Berry").introduce();
personFactory("Henry").introduce();
personFactory("Lenina").introduce();

*/

/*const person = {
    name: "Berry",
    hobbies: ["Discgolf", "Mantrailing"],
    introduce: function() {
        console.log("Hello a nevem " + this.name);
    },
    isInterestedIn: function(hobby) {
        if(this.hobbies.includes(hobby)) {
            console.log("Why yes, i love " + hobby)
        } else {
            console.log("Well, I have " + this.hobbies.length + " hobbies, but " + hobby + " is not one of them");
        }
    }
}

person.isInterestedIn("Longform Improve");
person.isInterestedIn("Discgolf");

*/
/*var name = "Berry";

function introduce() {
    console.log("Hello a nevem " + this.name);
}

introduce();

*/

/*function introFunction() {
    console.log("Hello a nevem " + this.name);
}

const person = {
    name: "Berry",
    introduce: introFunction,
}

person.introduce();

*/

/*function introFunction() {
    console.log("Hello a nevem " + this.nev);
}

const person = {
    nev: "Berry",
    introduce: introFunction
}

introFunction();
person.introduce(); */

/*var hero = {
    _name: 'John Deo',
    getSecretIdentity: function() {
        return this._name;
    }
}

var stoleSecretIdentity = hero.getSecretIdentity;

console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity()); */

/*

function introFunction() {
    console.log("Hello a nevem " + this.name);
}

const person = {
    name: "Pali",
    introduce: introFunction
}

person.introduce();
introFunction(); */

/*const button = document.querySelector(".js-button");

button.addEventListener('click', function() {
    this.classList.toggle("is-info");
})*/
/*
const buttons = document.querySelectorAll(".js-button");

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        alert(this.dataset.info);
    })
}) */

/*
const UI = {
    
    colorButton: document.querySelector(".is-primary"),
    alertButtons: document.querySelectorAll(".js-button"),

    handleColorClick: function() {
        this.classList.toggle("is-info");
    },

    handleAlertClick: function() {
        alert(this.dataset.info);
    },

    init: function() {
        this.colorButton.addEventListener('click', this.handleColorClick);

        this.alertButtons.forEach(function(button) {
            button.addEventListener('click', this.handleAlertClick);
        });

    }


}

UI.init();*/



/*const UI = {
    colorButton: document.querySelector(".is-primary"),
    alertButtons: document.querySelectorAll(".js-button"),

    colorClick: function() {
        this.classList.toggle(".is-info");
    },

    alertClick: function() {
        alert(this.dataset.info);
    },

    init: function() {
        this.colorButton.addEventListener('click', this.colorClick);
        this.alertButtons.forEach( button => {
            button.addEventListener('click', this.alertClick);
        })
    }
}

UI.init(); */

/////////////////////////////////////////////////////////
// apply, bind, call

/*var odon = {
    nev: 'Ödön',
    kor: 45,
    foglalkozas: 'csillagász',
    udvozles: function(stilus, napszak) {
        if(stilus === 'hivatalos') {
            console.log('Üdvözlöm, jó ' + napszak + ' kívánok ' + this.nev + ' vagyok.');
        } else if(stilus === 'baráti') {
            console.log('Szia, jó ' + napszak + '!');
        }
    }
}

odon.udvozles('hivatalos', 'hajnalt');
odon.udvozles('baráti', 'estét');

var bela = {
    nev: 'Béla',
    kor: 62,
    foglalkozas: 'portás'
}

//call
odon.udvozles.call(bela, 'baráti', 'estét');


// apply
odon.udvozles.apply(bela, ['baráti', 'regelt']);

// bind
var odonBarati = odon.udvozles.bind(odon, 'baráti');

odonBarati('napot');
odonBarati('estét');

var belaHivatalos = odon.udvozles.bind(bela, 'hivatalos');
var belaHivatalosReggeli = odon.udvozles.bind(bela, 'hivatalos', 'reggelt');

belaHivatalos('estét');
belaHivatalosReggeli();*/
/*
const UI = {
    colorButton: document.querySelector(".js-color"),
    alertButtons: document.querySelectorAll(".js-alert"),
    messageBox: document.querySelector(".js-message"),

    handleColor: function() {
        this.classList.toggle("is-danger");
    },

    handleAlert: function(alertButton) {
        this.messageBox.textContent = alertButton.dataset.info;
    },

    init: function() {

        this.colorButton.addEventListener("click", this.handleColor);

        this.alertButtons.forEach(alertButton => {
            alertButton.addEventListener("click", () => this.handleAlert(alertButton));
        })

    }

}

UI.init();*/

// call
/*
const person = {
    name: "Berry",
    hobby: "topiary"
}

function introduce() {
    console.log("Hi, I'm " + this.name + ", and i spend my free times practicing " + this.hobby);
}

introduce.call(person);

introduce.apply(person);
*/
/*
const person = {
    name: "Gábor",
    hobby: "kosárlabda"
}

function introduce() {
    console.log(`Helló az én nevem ${this.name} és a szabadidőmben gyakorlom a ${this.hobby}`);
}

introduce.call(person);
introduce.apply(person);

*/

//bind
/*
const person = {
    name: "Berry",
    hobby: "topiary"
}

function introduce() {
    console.log("Hi, I'm " + this.name + ", and I span my free times practicing " + this.hobby);
}

const introducePerson = introduce.bind(person);
introducePerson();

*/
/*
const UI = {
    colorButton: document.querySelector(".js-color"),
    alertButtons: document.querySelectorAll(".js-alert"),
    messageBox: document.querySelector(".js-message"),

    handleColorClick: function() {
        this.classList.toggle("is-danger");
    },

    handleHideClick: function() {
        this.messageBox.classList.toggle("is-hidden");
    },

    init: function() {

        this.colorButton.addEventListener("click", this.handleColorClick);
        this.alertButtons.forEach(alertButton => {
            alertButton.addEventListener("click", this.handleHideClick.bind(this));
        })
    }
}

UI.init();

*/
/*
const topiarist = {
    hobby: "topiary"
}

function introduce(name) {
    console.log("Hi, I'm " + name + ", and i spend my free time practicing " + this.hobby);
}

const topiaryClub = ["Berry", "Hazel", "Olive", "Lavender"];

topiaryClub.forEach(introduce, topiarist);
*/

const UI = {
    // properties to store DOM elements in
    colorButton: document.querySelector(".js-color"),
    alertButtons: document.querySelectorAll(".js-alert"),
    
    // event handlers
    handleColorClick: function () {
      this.classList.toggle("is-danger");
    },
    handleAlertClick: function () {
      alert(this.dataset.info);
    },
    
    // initializer function to attach event handlers
    init: function () {
      // attaching the color event handler to a single button element
      this.colorButton.addEventListener("click", this.handleColorClick);
      // and attaching the alert to a list of elements
      this.alertButtons.forEach(function(alertButton) {
        alertButton.addEventListener("click", this.handleAlertClick);

      }, this);
    }
  }
  
  // call the UI object's initializer method to set up everything
  UI.init();
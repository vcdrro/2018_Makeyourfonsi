/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

// variabelen pijlen rechts en links voor de kleding
var hatRechtsPijl   = document.getElementById("hatright");
var hatLinksPijl    = document.getElementById("hatleft");
var shirtRechtsPijl = document.getElementById("shirtright");
var shirtLinksPijl  = document.getElementById("shirtleft");
var pantsRechtsPijl = document.getElementById("pantsright");
var pantsLinksPijl  = document.getElementById("pantsleft");
var shoesRechtsPijl = document.getElementById("shoesright");
var shoesLinksPijl  = document.getElementById("shoesleft");
var randomKnop      = document.getElementById("random");

// arrays voor kleding, elke array wordt aangestuurd door 2 pijlene3wq  q
var hats    = ["hat", "cap", "hair", "makeup"];
var shirts  = ["blouse", "tee", "clownshirt"];
var pants   = ["pantsbrown", "shorts", "pantalons"];
var shoes   = ["boots", "shoesreebok", "redbottoms"];

// Zo wordt er aangegeven welke afbeelding er momenteel getoond wordt en welke stap de computer dan neemt vanaf 0
var hatsindex   = 0;
var shirtsindex = 0;
var pantsindex  = 0;
var shoesindex  = 0;
var source      = 0;

//hier wordt de source elke keer veranderd, doordat ik hier al heb aangegeven waar de image vandaan komt, hoefde ik ze niet in mijn html te zetten en wordt er meteen een afbeelding uit de array geplukt.
function changeImage(element, array, index) {
    source = document.querySelector(element);
    source = document.querySelector(element);
    source.src = 'images/' + array[index] + '.svg';
    console.log(source);
    console.log(array[index]);

    // deze methode gebruikte ik eerst, maar met de property i kon ik niet meerdere malen dezelfde function gebruiken
    //   i = i + getal;
    //  if (i > (array.length - 1)) {
    //      i = 0
    // } else if (i < 0) {
    //     i = array.length - 1
    // }
}


//deze functie zorgt ervoor dat je van image kan veranderen doordat de currentIndex een stapje omhoog of omlaag moet gaan in de array
function getIndex(currentIndex, array, step) {
    currentIndex = currentIndex + step;
    if (currentIndex > (array.length - 1)) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = array.length - 1;
    }
    return currentIndex;
}

//deze functie is bedoeld om een randomiser te maken en tussen willekeurige kledingstukken te cyclen het zort ervoor dat ipv de array gevolgt wordt een random volgorde aangehoudt wordt.
function randomImg() {
    var randomHat = Math.floor(Math.random() * hats.length);
    var randomShirt = Math.floor(Math.random() * shirts.length);
    var randomPants = Math.floor(Math.random() * pants.length);
    var randomShoes = Math.floor(Math.random() * shoes.length);
    changeImage(".hats", hats, randomHat);
    changeImage(".shirts", shirts, randomShirt);
    changeImage(".pants", pants, randomPants);
    changeImage(".shoes", shoes, randomShoes);
}

randomKnop.addEventListener('click', randomImg);



//hier worden de pijlen gekoppeld aan de functie door dat als de gebruiker op de pijl klikt, de computer dit als een call to action ziet voor de functie.
hatRechtsPijl.addEventListener('click', function () {
    hatsindex = getIndex(hatsindex, hats, 1);
    changeImage('.hats', hats, hatsindex);
});
hatLinksPijl.addEventListener('click', function () {
    hatsindex = getIndex(hatsindex, hats, -1);
    changeImage('.hats', hats, hatsindex);
});
shirtRechtsPijl.addEventListener('click', function () {
    shirtsindex = getIndex(shirtsindex, shirts, 1);
    changeImage('.shirts', shirts, shirtsindex);
});
shirtLinksPijl.addEventListener('click', function () {
    shirtsindex = getIndex(shirtsindex, shirts, -1);
    changeImage('.shirts', shirts, shirtsindex);
});
pantsRechtsPijl.addEventListener('click', function () {
    pantsindex = getIndex(pantsindex, pants, 1);
    changeImage('.pants', pants, pantsindex);
});
pantsLinksPijl.addEventListener('click', function () {
    pantsindex = getIndex(pantsindex, pants, -1);
    changeImage('.pants', pants, pantsindex);
});
shoesRechtsPijl.addEventListener('click', function () {
    shoesindex = getIndex(shoesindex, shoes, 1);
    changeImage('.shoes', shoes, shoesindex);
});
shoesLinksPijl.addEventListener('click', function () {
    shoesindex = getIndex(shoesindex, shoes, -1);
    changeImage('.shoes', shoes, shoesindex);
});

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

let allSneakers = document.getElementsByClassName("sneaker");
let filters = document.getElementsByClassName("filter");

for(let i = 0; i < filters.length; i++){
    filters[i].checked = true;
}

//jordan filter
let jordanFilter = document.getElementById("jordan")
jordanFilter.onchange = function(){
    if(jordanFilter.checked === true){
        for(let i = 0; i < allSneakers.length; i++){
            if(allSneakers[i].dataset.category === "jordan"){
                allSneakers[i].style.display = "block";
            }
        }
    }
    else{
        for(let i = 0; i < allSneakers.length; i++){
            if(allSneakers[i].dataset.category === "jordan"){
                allSneakers[i].style.display = "none";
            }
        }
    }
}

//yeezy filter
let yeezyFilter = document.getElementById("yeezy")
yeezyFilter.onchange = function(){
    if(yeezyFilter.checked === true){
        for(let i = 0; i < allSneakers.length; i++){
            if(allSneakers[i].dataset.category === "yeezy"){
                allSneakers[i].style.display = "block";
            }
        }
    }
    else{
        for(let i = 0; i < allSneakers.length; i++){
            if(allSneakers[i].dataset.category === "yeezy"){
                allSneakers[i].style.display = "none";
            }
        }
    }
}

//dunk filter
let dunkFilter = document.getElementById("dunk")
dunkFilter.onchange = function(){
    if(dunkFilter.checked === true){
        for(let i = 0; i < allSneakers.length; i++){
            if(allSneakers[i].dataset.category === "dunk"){
                allSneakers[i].style.display = "block";
            }
        }
    }
    else{
        for(let i = 0; i < allSneakers.length; i++){
            if(allSneakers[i].dataset.category === "dunk"){
                allSneakers[i].style.display = "none";
            }
        }
    }
}

//hover yeezy

//ash pearl

function hoverashpearl(ashpearlhover){
    ashpearlhover.setAttribute('src', "yeezyimg/ashpearlvoor.webp")
}
function unhoverashpearl(ashpearlunhover){
    ashpearlunhover.setAttribute('src', "yeezyimg/ashpearlzij.webp")
}

//beluga

function hoverbeluga(belugahover){
    belugahover.setAttribute('src', "yeezyimg/belugavoor.webp")
}
function unhoverbeluga(belugaunhover){
    belugaunhover.setAttribute('src', "yeezyimg/belugazij.webp")
}

//blue tint

function hoverbluetint(hoverbluetint){
    hoverbluetint.setAttribute('src', "yeezyimg/bluetintvoor.webp")
}
function unhoverbluetint(unhoverbluetint){
    unhoverbluetint.setAttribute('src', "yeezyimg/bluetintzij.webp")
}

//cinder

function hovercinder(cinderhover){
    cinderhover.setAttribute('src', "yeezyimg/cindervoor.webp")
}
function unhovercinder(cinderunhover){
    cinderunhover.setAttribute('src', "yeezyimg/cinderzij.webp")
}

//core red

function hovercorered(hovercorered){
    hovercorered.setAttribute('src', "yeezyimg/coreredvoor.webp")
}
function unhovercorered(unhovercorered){
    unhovercorered.setAttribute('src', "yeezyimg/coreredzij.webp")
}

//dazzling blue

function hoverdazzlingblue(hoverdazzlingblue){
    hoverdazzlingblue.setAttribute('src', "yeezyimg/dazzlingvoor.webp")
}
function unhoverdazzlingblue(unhoverdazzlingblue){
    unhoverdazzlingblue.setAttribute('src', "yeezyimg/dazzlingzij.webp")
}

//slide desert

function hoverdesertslide(desertslidehover){
    desertslidehover.setAttribute('src', "yeezyimg/desertslidevoor.webp")
}
function unhoverdesertslide(desertslideunhover){
    desertslideunhover.setAttribute('src', "yeezyimg/desertslidezij.webp")
}

//earth

function hoverearth(earthhover){
    earthhover.setAttribute('src', "yeezyimg/earthvoor.webp")
}
function unhoverearth(earthunhover){
    earthunhover.setAttribute('src', "yeezyimg/earthzij.webp")
}

//light

function hoverlight(hoverlight){
    hoverlight.setAttribute('src', "yeezyimg/lightvoor.webp")
}
function unhoverlight(unhoverlight){
    unhoverlight.setAttribute('src', "yeezyimg/lightzij.webp")
}

//ochre

function hoverochre(ochrehover){
    ochrehover.setAttribute('src', "yeezyimg/ochrevoor.webp")
}
function unhoverochre(ochreunhover){
    ochreunhover.setAttribute('src', "yeezyimg/ochrezij.webp")
}

//onyx slides

function hoveronyxslide(onyxslidehover){
    onyxslidehover.setAttribute('src', "yeezyimg/onyxslidevoor.webp")
}
function unhoveronyxslide(onyxslideunhover){
    onyxslideunhover.setAttribute('src', "yeezyimg/onyxslidezij.webp")
}

//oreo

function hoveroreo(oreohover){
    oreohover.setAttribute('src', "yeezyimg/oreovoor.webp")
}
function unhoveroreo(oreounhover){
    oreounhover.setAttribute('src', "yeezyimg/oreozij.webp")
}

// sand taupe

function hoversand(hoversand){
    hoversand.setAttribute('src', "yeezyimg/sandvoor.webp")
}
function unhoversand(unhoversand){
    unhoversand.setAttribute('src', "yeezyimg/sandzij.webp")
}

//slate

function hoverslate(slatehover){
    slatehover.setAttribute('src', "yeezyimg/slatevoor.webp")
}
function unhoverslate(slateunhover){
    slateunhover.setAttribute('src', "yeezyimg/slatezij.webp")
}

//sulfer

function hoversulfer(sulferhover){
    sulferhover.setAttribute('src', "yeezyimg/sulfervoor.webp")
}
function unhoversulfer(sulferunhover){
   sulferunhover.setAttribute('src', "yeezyimg/sulferzij.webp")
}

//wave runners

function hoverwave(hoverwave){
    hoverwave.setAttribute('src', "yeezyimg/wavevoor.webp")
}
function unhoverwave(unhoverwave){
    unhoverwave.setAttribute('src', "yeezyimg/wavezij.webp")
}


//hover dunk

//grey fog

function hovergreyfog(greyfoghover){
    greyfoghover.setAttribute('src', "collectionsimg/greyfogvoor.webp")
}
function unhovergreyfog(greyfogunhover){
    greyfogunhover.setAttribute('src', "collectionsimg/greyfogzij.webp")
}

//harvest moon

function hovermoon(hovermoon){
    hovermoon.setAttribute('src', "collectionsimg/moonvoor.webp")
}
function unhovermoon(unhovermoon){
    unhovermoon.setAttribute('src', "collectionsimg/moonzij.webp")
}

//panda

function hoverpanda(hoverpanda){
    hoverpanda.setAttribute('src', "collectionsimg/pandavoor.webp")
}
function unhoverpanda(unhoverpanda){
    unhoverpanda.setAttribute('src', "collectionsimg/pandazij.webp")
}

//ben en jerry

function hoverben(benhover){
    benhover.setAttribute('src', "collectionsimg/benvoor.webp")
}
function unhoverben(benunhover){
    benunhover.setAttribute('src', "collectionsimg/benzij.webp")
}

//hover jordan 1

// lost en found

function hoverlost(losthover){
    losthover.setAttribute('src', "collectionsimg/lostvoor.webp")
}
function unhoverlost(lostunhover){
    lostunhover.setAttribute('src', "collectionsimg/lostzij.webp")
}

// dior

function hoverdior(diorhover){
    diorhover.setAttribute('src', "collectionsimg/diorvoor.webp")
}
function unhoverdior(diorunhover){
    diorunhover.setAttribute('src', "collectionsimg/diorzij.webp")
}

//denim

function hoverdenim(denimhover){
    denimhover.setAttribute('src', "collectionsimg/denimvoor.webp")
}
function unhoverdenim(denimunhover){
    denimunhover.setAttribute('src', "collectionsimg/denimzij.webp")
}

//fearless

function hoverfearless(fearlesshover){
    fearlesshover.setAttribute('src', "collectionsimg/fearlessvoor.webp")
}
function unhoverfearless(fearlessunhover){
    fearlessunhover.setAttribute('src', "collectionsimg/fearlesszij.webp")
}


//mocha

function hovermocha(mochahover){
    mochahover.setAttribute('src', "collectionsimg/mochavoor.webp")
}
function unhovermocha(mochaunhover){
    mochaunhover.setAttribute('src', "collectionsimg/mochazij.webp")
}

//university blue

function hoveruniversityblue(hoveruniversityblue){
    hoveruniversityblue.setAttribute('src', "collectionsimg/universityvoor.webp")
}
function unhoveruniversityblue(unhoveruniversityblue){
    unhoveruniversityblue.setAttribute('src', "collectionsimg/universityzij.webp")
}

//lucky green

function hovergreen(hovergreen){
    hovergreen.setAttribute('src', "collectionsimg/greenvoor.webp")
}
function unhovergreen(unhovergreen){
    unhovergreen.setAttribute('src', "collectionsimg/greenzij.webp")
}

//obsidian

function hoverobsidian(hoverobsidian){
    hoverobsidian.setAttribute('src', "collectionsimg/obsidianvoor.webp")
}
function unhoverobsidian(unhoverobsidian){
    unhoverobsidian.setAttribute('src', "collectionsimg/obsidianzij.webp")
}
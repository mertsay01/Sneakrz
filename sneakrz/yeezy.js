window.onbeforeunload = function () {
    window.scrollTo(0, 0);
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

function filterSneakers(priceRange) {
    const sneakers = document.querySelectorAll('.sneaker');
    sneakers.forEach((sneaker) => {
        const sneakerPrice = parseFloat(sneaker.getAttribute('data-price'));
        if (priceRange === "") {
            sneaker.style.display = "block";
        } else if (priceRange === "1000") {
            if (sneakerPrice >= 1000) {
                sneaker.style.display = "block";
            } else {
                sneaker.style.display = "none";
            }
        } else {
            const [minPrice, maxPrice] = priceRange.split("-");
            if (sneakerPrice >= parseFloat(minPrice) && sneakerPrice <= parseFloat(maxPrice)) {
                sneaker.style.display = "block"; 
            } else {
                sneaker.style.display = "none";
            }
        }
    });
}
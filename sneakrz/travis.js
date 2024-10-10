window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

const image = document.getElementById('image');
const h1 = document.getElementById('h1');
const h2 = document.getElementById('h2');
const tekstp = document.getElementById('tekstp');

document.getElementById('button1').addEventListener('click', () => {
    image.src = "img/TravisScott/bfZijkant.webp";
    h1.textContent = "Travis Scott Black Phantom";
    h2.textContent = "€619,99";
    tekstp.textContent = "De Jordan 1 Retro Low OG SP Black Phantom. Deze Jordan 1 Low is de vierde Jordan 1 Low Travis Scott die is gereleased. Een hele mooie zwarte sneaker. De Travis Scott x Air Jordan 1 Low OG SP “Black Phantom” wijkt af van de gebruikelijke aardse focus met ditmaal een gestroomlijnd bovenwerk van zwart suède. De laag uitgesneden look wordt geaccentueerd door witte stiksels, omgekeerde swooshes, conventionele swooshes aan de mediale zijkanten, ‘NIKE AIR’-tonglabel en Wings-motieven aan de achterkant. De schoen introduceert ook een nieuw bijenmotief en is gemarkeerd met Cactus Jack-logo’s op de tong, middenzijde en inlegzolen. De schoen wordt verhoogd door zwarte zooleenheden en witte stiksels zetten het contrastontwerp van het bovenwerk voort. De release prijs van deze sneaker was €150 maar vlak na de release schoot de prijs omhoog naar €1100. Nu is de prijs gedaald tussen de €550 - €750 maar dat varieert per maat.";
});

document.getElementById('button2').addEventListener('click', () => {
    image.src = "img/TravisScott/fragmentZijkant.webp";
    h1.textContent = "Travis Scott Fragment";
    h2.textContent = "€1749,99";
    tekstp.textContent = "De Jordan 1 Retro Low OG SP Travis Scott X fragment. Deze Jordan 1 Low is de tweede Jordan 1 Low Travis scott die is gereleased. Een hele mooie sneaker met veel kleuren. De samenwerking tussen Travis Scott en Fragment Design heeft geleid tot deze opvallende schoenrelease. De schoen die voortkwam uit deze samenwerking staat bekend als de De Jordan 1 Retro Low OG SP Travis Scott X fragment sneaker maar er kwam ook een De Jordan 1 Retro High OG SP Travis Scott X fragment. Het prijs verschil tussen de 2 is enorm groot. Zo gaat de Low voor rond de €1500 - €2000 en de High voor €2500 - €3000. De Travis Scott x Fragment-sneaker combineert de kenmerkende stijl van Travis Scott met het minimalistische design van Fragment Design. Het bovenwerk van de schoen is gemaakt van hoogwaardig leer en heeft een opvallende kleurencombinatie die bestaat uit neutrale tinten zoals zwart, wit en blauw. Het ontwerp is subtiel en strak, met enkele opvallende accenten. Een van de opvallende kenmerken van de schoen is het gebruik van co-branded details, zoals het gecombineerde logo van Travis Scott en Fragment Design op de hiel of de tong van de schoen. Deze details benadrukken de samenwerking tussen de twee merken en voegen een exclusief tintje toe aan de sneaker.";
});

document.getElementById('button3').addEventListener('click', () => {
    image.src = "img/TravisScott/OGSpZijkant.webp";
    h1.textContent = "Travis Scott OG SP";
    h2.textContent = "€1889,99";
    tekstp.textContent = "De Jordan 1 Retro Low OG SP. Deze Jordan 1 Low is de eerste Jordan 1 Low Travis scott die is gereleased. Een hele mooie donker bruine sneaker. Deze sneaker heeft een mooie suede. De laag uitgesneden look wordt geaccentueerd door witte stiksels, omgekeerde swooshes,conventionele swooshes aan de mediale zijkanten, ‘NIKE AIR’-tonglabel en Wings-motieven aan de achterkant.De release prijs van deze sneaker was €150 maar vlak na de release schoot de prijs omhoog naar €1000. Nu is de prijs nog meer gestegen en zit tussen de €1500 - €2500 maar dat varieert per maat.";
});

document.getElementById('button4').addEventListener('click', () => {
    image.src = "img/TravisScott/oliveZijkant.webp";
    h1.textContent = "Travis Scott Olive";
    h2.textContent = "€449,99";
    tekstp.textContent = "De Jordan 1 Retro Low OG SP Olive. Deze Jordan 1 Low is de laatste Jordan 1 Low Travis scott die is gereleased. Een hele mooie mix tussen zwart, wit en bruin. Deze sneaker heeft een mooie suede. De laag uitgesneden look wordt geaccentueerd door witte stiksels, omgekeerde swooshes,conventionele swooshes aan de mediale zijkanten, ‘NIKE AIR’-tonglabel en Wings-motieven aan de achterkant. De release prijs van deze sneaker was €150 maar vlak na de release schoot de prijs omhoog naar €1000. Nu is de prijs enorm gedaald en zit tussen de €300 - €500 maar dat varieert per maat.";
});

const addtocardbutton = document.getElementsByClassName("addtocart");
let cardmessege = 0;
const messege = document.getElementsByClassName("messege")[0];

for(let i = 0; i < addtocardbutton.length; i++){
    addtocardbutton[i].onclick = function(){
        cardmessege += 1;
        messege.innerHTML = cardmessege;
    }
}



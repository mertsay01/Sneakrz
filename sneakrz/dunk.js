window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

const image = document.getElementById('image');
const h1 = document.getElementById('h1');
const h2 = document.getElementById('h2');
const tekstp = document.getElementById('tekstp');

document.getElementById('button1').addEventListener('click', () => {
    image.src = "collectionsimg/greyfogzij.webp";
    h1.textContent = "Nike Dunk Low Grey Fog";
    h2.textContent = "€209,99";
    tekstp.textContent = "De Nike Dunk Low Grey Fog. Deze Nike Dunk Low Grey Fog is een mooi grijs witte sneaker. De Nike Dunk Low Grey Fog is een stijlvolle sneaker met een grijze mistkleurige bovenkant van suède en leer. Het heeft een laag silhouet, Nike Air-demping en biedt een comfortabele pasvorm. Deze veelzijdige schoen voegt een modieuze uitstraling toe aan elke outfit. Deze sneaker is gereleased in begin 2022 maar is vaak gerestocked zoals in eind 2022 en begin 2023.";
});

document.getElementById('button2').addEventListener('click', () => {
    image.src = "collectionsimg/pandazij.webp";
    h1.textContent = "Nike Dunk Low Black/White";
    h2.textContent = "€159,99";
    tekstp.textContent = "De Nike Dunk Black and White ook wel de 'Panda' genoemd is een tijdloze sneaker die bekend staat om zijn eenvoudige en toch opvallende design. Met een bovenwerk dat bestaat uit een combinatie van zwart en wit leer, biedt deze Dunk-versie een klassieke esthetiek die nooit uit de mode raakt. De sneaker heeft een laag silhouet en een traditioneel vetersysteem, waardoor je de pasvorm kunt aanpassen aan je voorkeur. De gevoerde kraag en tong zorgen voor comfort tijdens het dragen, terwijl de Nike Air-demping in de zool zorgt voor responsieve demping en ondersteuning bij elke stap. Deze sneaker is de meeste gerestockde sneaker allertijden. Deze dunk wordt om de 3 maanden wel gerestocked.";
});

document.getElementById('button3').addEventListener('click', () => {
    image.src = "collectionsimg/benzij.webp";
    h1.textContent = "Nike SB Dunk Low Ben & Jerry's";
    h2.textContent = "€1499,99";
    tekstp.textContent = "De Nike SB Dunk Low Ben & Jerry's een opvallende sneaker. De Nike Dunk Ben & Jerrys is een unieke en opvallende sneaker die is geïnspireerd op het iconische ijsmerk. Deze samenwerking tussen Nike en Ben & Jerrys resulteerde in een sneaker met een kleurrijk en speels ontwerp dat doet denken aan een smakelijk ijsje. De Dunk Ben & Jerrys heeft een bovenwerk van verschillende materialen, waaronder suede en textiel, in levendige kleuren zoals groen, geel en blauw. Het ontwerp is geïnspireerd op de populaire smaak Chunky Monkey van Ben & Jerry's, compleet met speciale details zoals de Swoosh die lijkt op een bananenschil.";
});

document.getElementById('button4').addEventListener('click', () => {
    image.src = "collectionsimg/moonzij.webp";
    h1.textContent = "Nike Dunk Low Harvest Moon";
    h2.textContent = "€209,99";
    tekstp.textContent = "De Nike Dunk Harvest Moon is een speciale editie sneaker die is geïnspireerd op de betoverende schoonheid van de herfstoogst. Met zijn rijke kleurenpalet en verfijnde details brengt deze Dunk-versie een eerbetoon aan de warme en levendige kleuren die kenmerkend zijn voor het seizoen. De Dunk Harvest Moon heeft een bovenwerk van suède en glad leer in verschillende tinten bruin, oranje en geel, waardoor het lijkt alsof je door een kleurrijk herfstlandschap loopt. Het ontwerp is verfijnd en subtiel, met een mix van texturen en een gedetailleerd stiksel dat vakmanschap benadrukt.";
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
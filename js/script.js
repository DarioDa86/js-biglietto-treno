//1- richiedere numero di km da percorrere
var distanzaKm = parseInt(prompt("Inserisci i Km che devi percorrere"));
//2- richiedere età passeggero
var etaPasseggero = parseInt(prompt("Inserisci la tua età"));
//3- determinare quanto costa il biglietto, seguendo queste regole:
//0,21 cent per 1km
var costoKm = 0.21;
console.log(costoKm);

totaleParziale = distanzaKm * costoKm;

// sconto 20% per minorenni
sconto20 = ((totaleParziale / 100) * 20);
console.log(sconto20);

// sconto 40% over 65
sconto40 = ((totaleParziale / 100) * 40);
console.log(sconto40);

//4- stampare il prezzo finale (con max, due decimali)

if (etaPasseggero <= 17) {
    var totale =  totaleParziale - sconto20;
    alert(totale + " €");

}

else if (etaPasseggero >= 65) {
    var totale =  totaleParziale - sconto40 ;
    alert(totale + " €");

}

else {
    alert(totaleParziale + " €");
}





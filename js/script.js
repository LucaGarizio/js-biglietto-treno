
// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

// il prezzo del biglietto è definito in base ai km (0.21 € al km)

// va applicato uno sconto del 20% per i minorenni

// va applicato uno sconto del 40% per gli over 65.

// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).questo richiederà un minimo di ricerca.


let risultato ="";

// NOME UTENTE
// const userName = (prompt("Inserisci il tuo nome"))
// console.log(userName);

// ETÀ UTENTE
const userEta = parseInt(prompt ("Inserisci la tua eta"))
console.log(userEta);

// KM CHE DEVE PERCORRERE
const userDistance = parseInt(prompt("Inserisci distanza in km"))
console.log(userDistance);

// PREZZO  BIGLIETTO  PER KM
const prezzoKm = 0.21;
console.log("prezzo per km", prezzoKm);

// PREZZO BIGLIETTO IN BASE AI KM PERCORSI
const price = userDistance * prezzoKm; 
console.log("prezzo totale km", price);

// PREZZO BIGLIETTO SCONTATO 20%
if (userEta < 18) {
    let minorenne = ((price * 20) /100);
    console.log(minorenne);
    risultato = price - minorenne;
    console.log("sconto minorenne", parseFloat(risultato).toFixed(2));
} else if (userEta >= 65) {
    let maggiorenne = ((price * 40) /100);
    risultato = price - maggiorenne;
    console.log("sconto maggiorenne", parseFloat(risultato).toFixed(2));
} else {
    risultato = price;
}

// RISULTATO PREZZO BIGLIETTO IN NUMERI DECIMALI
document.getElementById("mioBiglietto").innerHTML = `ciao il tuo biglietto costa ${parseFloat(risultato).toFixed(2)}`
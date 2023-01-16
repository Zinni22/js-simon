/*
1. Far comparire in pagina 5 numeri casuali:
    - i numeri saranno inseriti in dei div all'interno del container
2. Far partire immediatamente un timer di 30 secondi:
    - finito il tempo i numeri scompaiono
    - compare un prompt dove l'utente deve inserire i numeri
3. il computer dice quali e quanti numeri sono giusti
*/

// seleziono il container
const numberContainer = document.getElementById('number-container');
console.log(numberContainer);

const numeri=[];

//faccio comparire 5 numeri random
for (let i=0; i<5; i++){

   const numeriRandom = getRandomNumber(1,99);
   console.log('Numero random:', numeriRandom);

   numeri.push(numeriRandom);

   // creo i div e li do una classe
   const newDiv = document.createElement('div');
    numberContainer.append(newDiv);
    newDiv.innerHTML = numeriRandom;
    newDiv.classList.add('box');
};


// Faccio scomparire i numeri
setTimeout(function() {
    numberContainer.classList.add('none');
}, 5000);

// Imposto il timer di 30 secondi
let timer = 2;
const countdown = setInterval(function () {

    if (timer == 0) {
        clearInterval(countdown);
        console.log('é finito il tempo');

        const guessedNumbers = [];

        for (let i=0; i<5; i++){
            const userInput = prompt('Inserisci un numero');
            console.log('il numero inserito è', userInput);

            if(userInput == numeri[i]){
                console.log('è uguale');
                guessedNumbers.push(numeri[i]);
            }
        };

        const results = document.getElementById('risposta');
        results.innerHTML = 'Hai indovinato: ' + guessedNumbers.length + ' numeri!!<br>';
        results.innerHTML += guessedNumbers;
        console.log(guessedNumbers);

    }
    else {
        console.log(timer);
        timer--;
    }
    
}, 1000);


// funzione numeri generali
function getRandomNumber(min, max){
    return Math.floor(Math.random()* (max - min + 1) + min);
}
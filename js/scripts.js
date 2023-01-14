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

const newDiv = document.createElement('div');

//faccio comparire 5 numeri random
for (let i=0; i <5; i++){

   let numeri = (Math.random(5)*100).toFixed(0);
   console.log('Numero random:', numeri);

   // creo i div e li do una classe
    const newDiv = document.createElement('div');
    console.log(newDiv);
    numberContainer.append(newDiv);
    newDiv.innerHTML = numeri;
    newDiv.classList.add('box');
}


// Imposto il timer di 30 secondi
let timer = 5;

const countdown = setInterval(function () {

    if (timer == 0) {
        clearInterval(countdown);
        console.log('é finito il tempo');

        prompt('Inserisci i numeri visualizzati prima in pagina');

        newDiv.classList.add('none');

    }
    else {
        console.log(timer);
        timer--;
    }
    
}, 1000);

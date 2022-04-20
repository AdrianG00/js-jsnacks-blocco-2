// jsnack1


let somma = 0 

//// versione FOR 
// for (let i = 0; i < 5 ; i++) {
//     let userNumber = parseInt(prompt("inserisci un numero"));
//     somma += userNumber;
// }

let userNumber;
let i = 0;
while (i < 5) {
    do {
        userNumber = parseInt(prompt("inserisci un numero"));
    } while (isNaN(parseInt(userNumber)));

    somma += userNumber;
    i++;
}

console.log(`la somma dei numeri che hai inserito è ${somma}`);

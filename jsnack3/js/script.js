// jsnack3.

let upperBound = parseInt(prompt('Inserisci il numero più alto che vuoi elevare al cubo'));

while (isNaN(upperBound) || upperBound % 1 !== 0) {
    upperBound = prompt('Inserisci il numero più alto che vuoi elevare al cubo. Deve essere un numero intero');
}

for (let i = 1; i <= upperBound; i++) {
     console.log(`Il cubo di ${i} è ${i**3}`)
}





// Iteramos sobre un array con un ciclo while

let frutas = ['manzana', 'banana', 'frutilla']
let i = 0
console.log('--While')
while (i < frutas.length) {
    console.log(frutas[i])
    i++
};


// Iteramos sobre un array con un ciclo for

console.log('--For')
for ( let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
};

console.log('--For inverso')
for ( let i = frutas.length -1; i >= 0; i--) {
    console.log(frutas[i])
};


// Iteramos sobre un array con un ciclo for .. of

console.log('--For of')
for (const fruta of frutas) {
    console.log(fruta)
};


// Iteramos sobre un array con un ciclo forEach

console.log('--ForEach')
frutas.forEach(function (el, index) {
    console.log('index: ' + index)
    console.log(el)});

    console.log('--ForEach + Arrow Function')
    frutas.forEach(el => console.log(el));


// Ejercicio final de la unidad
// Dada una lista de números, escribe una función en JavaScript que devuelva la suma de todos 
// los números pares en la lista. La función deberá iterar sobre cada número en la lista, 
// comprobar si el número es par y, si es así, añadirlo a la suma total. Usa el bucle que 
// quieras para solucionarlo.

function sumarPares(numeros) {
    let suma = 0;
    let i = 0;
    
    while (i < numeros.length) {
        if (numeros[i] % 2 === 0) {
            suma += numeros[i];
        }
        i++;
    }

    return suma;
}
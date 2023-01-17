/* Deberás crear una función llamada loopDePares que reciba como parámetro un número y haga un loop de 0 a 100 mostrando en la consola cada número del loop.En caso de que el número de la iteración sumado con el número pasado por parámetro sea par, mostrará en la consola: “El número X es par”. */

function loopDePares (num){
    for (let i = 0; i <= 100; i++){
        if ((i+num) % 2 === 0 ){
            console.log('el numero ' + (i+num) + ' es par');
        }
    }
}
loopDePares(13); 

/* Deberás crear una función llamada loopDeImpares que reciba como parámetros un número y una palabra, y haga un loop de 0 a 100 mostrando en la consola cada número del loop. Luego, modificar el código para que, en caso de que ese número sumado con el número pasado por parámetro sea impar, muestre en la consola la palabra pasada por parámetro. */

function loopDeImpares(num, palabra){
    for (let i = 0; i <= 100; i++){
        if((num+i)%2 !== 0){
            console.log(palabra);
        }
        else {
            console.log(i+num);
        }
    }
}
loopDeImpares(2,'perro');

/* Deberás crear una función llamada sumatoria que reciba un número como parámetro y que devuelva la sumatoria de todos sus números anteriores, incluso ese mismo. Ejemplo:
- sumatoria(3) debe retornar 6 porque hace (1+2+3)
- sumatoria(8) debe retornar 36 */

function sumatoria (numero){
    let suma = 0;
    for (let i = 0; i <= numero; i++){
       suma = suma + i;
    }
    return suma;
}
console.log(sumatoria(3)); 

/* Deberás crear una función llamada nuevoArreglo que reciba un número como parámetro y que devuelva un nuevo arreglo con tantos elementos como el número que le hayas pasado. Ejemplo:
nuevoArreglo(5) debe retornar [1,2,3,4,5]
nuevoArreglo(10) debe retornar [1,2,3,4,5,6,7,8,9,10] */

function nuevoArreglo(num){
    let arrayNumero = [];
    for (let i = 0; i <= num; i++){
        arrayNumero.push(i);
    }
return arrayNumero;
}
console.log(nuevoArreglo(5));

/* 
Deberás crear una función llamada split que reciba un string y simule el comportamiento de la función original. Si no estás seguro de cómo funciona, Google puede ayudarte. Importante: no podés usar el String.split(). Ejemplo:
split(“hola”) debe retornar [“h”,”o”,”l”,”a”]
split(“chau”) debe retornar [“c”,”h”,”a”,”u”] */

function split (palabra){
    let arrayPalabra = [];
    for(let i = 0; i < palabra.length; i++){
        arrayPalabra.push(palabra[i]);
    }
    return arrayPalabra
}
console.log(split('hola'));

/* Deberás crear una función llamada arrayHandler que reciba dos arreglos de igual largo como parámetros y muestre en la consola “Soy {elemento de array 1} y yo soy {elemento de array 2}”. Ejemplo:
arrayHandler([1,2,3,4], [“h”,”o”,”l”,”a”]) debe mostrar: 
Soy 1 y yo soy h
Soy 2 y yo soy o
Soy 3 y yo soy l
Soy 4 y yo soy a */

let  numeros = [1,2,3,4];
let saludo = ['h','o','l','a'];
function arrayHandler(array1, array2){
    for (let i = 0; i < array1.length; i++){
        console.log(`soy ${array1[i]} y yo soy ${array2[i]}`);
    }
}
arrayHandler(numeros, saludo);
/* Deberás crear una función llamada palindromo que indique si una palabra es palíndroma o no. Debe retornar “true” en caso de que lo sea, y “false” en caso de que no. Ejemplo:
palindromo(“anilina”) debe retornar true
palindromo(“Ana”) debe retornar true
palindromo(“Enrique”) debe retornar false */

function palidromo (palabra){
    for (let i = 0; i < (palabra.length/2); i++){
        if(palabra[i]!==palabra[(palabra.length-1)-i]){
            return false;
        }
    }
    return true;
}
console.log(palidromo('anilina'));
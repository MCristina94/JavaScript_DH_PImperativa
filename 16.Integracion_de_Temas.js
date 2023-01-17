/*Desarrollar una función que reciba un array e indique si se encuentran 
ordenados de
menor a mayor o no.
a. si están ordenados retornar true
b. caso contrario retorna false
ejemplos de arrays
[4,9,2,5,6,7,1,2] // false
[1,2,3,4,5,6,7,8] // true
*/

let numeros = [4,9,2,5,6,7,1,2];
let numeros2 = [1,2,3,4,5,6,7,8];

function arrayOrdenados (array){
    for (let i = 0; i < array.length - 1; i++){
        if (array[i] > array[i + 1]){
            return false;
        }
      
    }
    return true;

}
//console.log(arrayOrdenados(numeros2));

/*Desarrollar una función que genere una matriz, deberá recibir por parámetros la
cantidad de filas y columnas y retornar con valores secuenciales numéricos.
 */

const personas =
[
{
nombre: "Arlene Barr",
legajo: 3955,
edad: 33,
},
{
nombre: "Roslyn Torres",
legajo: 3925,
edad: 27,
},
{
nombre: "Cleo Lopez",
legajo: 1965,
edad: 34,
},
{
nombre: "Daniel Malone",
legajo: 3925,
edad: 30,
},
{
nombre: "Ethel Leon",
legajo: 1915,
edad: 34,
},
{
nombre: "Harding Mitchell",
legajo: 1905,
edad: 25,
}
];

/*
- Desarrollar una función llamada orderAscLegajo que reciba por parámetro él
array de personas y realice un ordenamiento de forma ascendente
- Desarrollar una función llamada orderDescLegajo que reciba por parámetro
él array de personas y realice un ordenamiento de forma descendente
- Pensar de qué forma se puede realizar los dos ítems anteriores en una sola
función 
*/

function orderAscLegajo(arrayObj){
    
    for (let j = 0; j < arrayObj.length; j++){
        for (let i = 0; i < arrayObj.length - 1; i++){    
        let temporal = 0;
            if(arrayObj[i].edad > arrayObj[i + 1].edad){
            temporal = arrayObj[i];
            arrayObj[i] = arrayObj[i + 1];
            arrayObj[i + 1] = temporal;
            }
        }
    }
}
orderAscLegajo(personas);
//console.log(personas);

function orderDescLegajo(arrayObj){
    for (let i = 0; i < arrayObj.length; i++){
        for(let j = 0; j < arrayObj.length - 1; j++){
            let temporal = 0;
            if(arrayObj[j].legajo < arrayObj[j + 1].legajo){
                temporal = arrayObj[j];
                arrayObj[j] = arrayObj [j + 1];
                arrayObj[j + 1] = temporal;
            }
        }
    }
}
orderDescLegajo(personas);
//console.log(personas);

let fila1 = [4,9,2];
let fila2 = [3,5,7];
let fila3 = [8,1,6];

let matriz = [];
matriz.push(fila1, fila2, fila3);

console.table(matriz);

/**
- Función que reciba por parámetro la fila y retornar la suma de la misma.
- Función que retorne en un array la suma de las diagonales [15 , 15], sumando él
centro las dos veces
- Función que retorne en un array los elementos pares ejemplo [4, 2, 8, 6]
- Función que retorne en un array los elementos mayores a 5
- Función que retorne un objeto literal con dos propiedades
pares : [4, 2, 8, 6], // array de pares
impares : [9, 3, 5, 7, 1], // array de impares */

function sumaFila(arrayMatriz, fila){
    let suma = 0;
    for(let i = 0; i < arrayMatriz[fila].length; i++){
        suma = suma + arrayMatriz[fila][i];
    }
    return suma;
}
console.log(sumaFila(matriz, 1));

 
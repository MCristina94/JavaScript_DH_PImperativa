/**
 * Declara una variable que contenga una matriz
 * de 5x5 llena de puros numeros enteros y positivos
 */
let matriz1 = [
    [1, 2, 5, 7, 6],
    [2, 4, 8, 9, 1],
    [5, 6, 2, 4, 7],
    [5, 2, 8, 3, 3],
    [9, 5, 4, 6, 8]
    
]

/**
 * Luego, escribe un algoritmo para sumar todos
 * los numeros en la matriz.
 */
 function sumarNum (matriz){
    let suma = 0;
    for (let i = 0; i < matriz.length; i++){
        for (let j = 0; j < matriz[i].length; j++){
            suma = suma + matriz[i][j];
        }
    }
    return suma;
 }
 console.log(sumarNum(matriz1));

 //Crear una función que genere una matriz de 10x10. Cada fila debe tener solo 10
//números. La matriz debe verse así:

function matriz10x10 (){
    let matriz2 = [];
    let array;
    let num = 1;
    for (let i = 0; i < 10; i++){
        array = [];
        for (let j = 0; j < 10; j++){
            array.push(num);
            num++;
        }
        matriz2.push(array);
    }       
    return matriz2;
}
console.table(matriz10x10());
 // Completa la función para que retorne una matriz
// de 10x10



function generarMatriz10por10() {
	return "esto debe ser la matriz";
}

let matriz10por10 = generarMatriz10por10();
console.log(matriz10por10);

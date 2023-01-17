/* Arrays y colecciones
Vamos a afianzar nuestro conocimiento de arrays explorando distintas acciones sobre
ellos. Veremos si se comportan como esperamos u ocurren resultados inesperados.
En primer lugar, practiquemos las acciones más comunes y necesarias: */

let arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8];
let arrayPalabras = [ 'hola', 'hambre', 'conejo', 'papá', 'fresa'];
let saludo = 'hola, soy tu asistente personal';

// A. Acceder a elementos específicos de un array.

console.log(arrayPalabras.indexOf('conejo'));
console.log(arrayPalabras.includes('hambre'));

// B. Modificar cada uno de sus elementos e imprimirlos.

arrayPalabras.pop();
arrayPalabras.push('como estas');
arrayPalabras.shift();
arrayPalabras.unshift('perrito');
console.log(arrayPalabras);

// C. Agregar elementos a un array.

arrayNumeros.push('fin');
arrayNumeros.unshift('hola');
console.log(arrayNumeros);

// D. Extraer elementos de un array.

arrayNumeros.pop();
arrayNumeros.shift();
console.log(arrayNumeros); 

// E. Comparar elementos de un array con los elementos de otro. 

let saludos1 = ['hola', 'buenos dias', 'hi', 'hello', 'aloha'];
let encontrar1 = 'hi';

function comparar (array, palabra){
    for(let i = 0; i < array.length; i++){
     
        if (array[i]===palabra){
            return 'si existe la palabra';
        }
     
    } 
    return 'no existe la palabra'
}
    console.log(comparar(saludos1, encontrar1)); 
    

    let saludos2 = ['hola', 'buenos dias', 'hi', 'hello', 'aloha'];
    let encontrar2 = 'hi';
    
    function comparar (array, palabra){
        for(let i = 0; i < array.length; i++){
            if (array[i].includes(palabra)){
                return 'si existe esa palabra';
            }
            
        }
        return 'no existe esa palabra';
    }
        console.log(comparar(saludos2, encontrar2)); 

    let saludos3 = ['hola', 'buenos dias', 'hi', 'hello', 'aloha', 'hello moto'];
    let despedidas1 = ['chao', 'adios', 'hasta luego', 'bye', 'aloha'];

    function compararArrays (array1, array2){
        if (array1.length === array2.length){
            return 'si tiene la misma cantidad de elementos';
        }
        else{
            return 'no tiene la misma cantidad de elementos';
        }
    }
    console.log(compararArrays(saludos3, despedidas1));
     

    let saludos4 = ['hola', 'buenos dias', 'hi', 'hello', 'aloha', 'hello moto'];
    let despedidas2 = ['chao', 'adios', 'hasta luego', 'hola', 'aloha'];

    function compararArrays (array1, array2){
        let elementosComunes = 0;

        for (let i = 0; i < array1.length; i++){

            for (let j = 0; j < array2.length; j++){
                
                if (array1[i] === array2[j]){
                    elementosComunes = elementosComunes + 1;
                }
                
            }
        }
        return elementosComunes;
    }
        console.log(compararArrays(saludos4,despedidas2)); 
    


        let numbers = [22, 33, 54, 66, 72];
        console.log(numbers.length);

        let amigos = ['harry', 'ron', 'hermione', 'spiderman', 'hulk', 'ironman', 'penelope', 'pierre', 'patán'];
        console.log(amigos[5]); 

            let str = 'un string cualquiera';
            let arrayAleatorio= ["Digital", "House", 'true', "string", "123","false", '54' ];
            console.log(arrayAleatorio.length);
            console.log(arrayAleatorio[arrayAleatorio.length - 1]);  

        
let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];
        
for (let i = 0; i < peliculas.length; i++){
    console.log(peliculas[i]);
} 

function mayusculas (array){
    for ( let i = 0; i < array.length; i++){
       array[i] = array[i].toUpperCase();
    }
    
}
mayusculas(peliculas);
console.log(peliculas);

let otrasPeliculas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];

function agregarPeliculas (array1, array2){

    for ( let i = 0; i < array2.length; i++){

        array1.push(array2[i]);

    } 
    
}
agregarPeliculas(peliculas,otrasPeliculas);
mayusculas(peliculas);
console.log(peliculas);

let elementoEliminado = peliculas.pop();
console.log(peliculas);
console.log(elementoEliminado); 

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function CompararScores(array1, array2){

    for (let i = 0; i < array1.length; i++){
       
       if (array1[i] === array2[i]){
        console.log('la calificación es igual');
       }  
       else{
        console.log('la calificación no es igual');
       }
    }
}

CompararScores(asiaScores,euroScores);
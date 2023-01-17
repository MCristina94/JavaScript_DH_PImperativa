/* A partir de el siguiente array de edades nos solicitan realizar lo siguiente:
 
1. Obtener en un nuevo array las edades menores a 18.
 */

const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

function edadMenores (array){
    let edadesMenores = [];
    for ( let i = 0; i < array.length; i++){
        if (array[i] < 18){
            edadesMenores.push(array[i]);
        }
    }
    return edadesMenores;
}
console.log('-------array edades menores -------');
console.log(edadMenores(edades));

//2. Obtener en un nuevo array las edades mayor o igual a 18.
function edadMayores (array){
    let edadesMayores = [];
    for ( let i = 0; i < array.length; i++){
        if (array[i] > 18){
            edadesMayores.push(array[i]);
        }
    }
    return edadesMayores;
}
console.log('-------array edades mayores -------');
console.log(edadMayores(edades));

//3. Obtener en un nuevo array las edades igual a 18.
function edadIgual (array){
    let edadesIgual = [];
    for ( let i = 0; i < array.length; i++){
        if (array[i] === 18){
            edadesIgual.push(array[i]);
        }
    }
    return edadesIgual;
}
console.log('-------array edades igual a 18 -------');
console.log(edadIgual(edades));

//4. Obtener el menor.

function numMenor (array){
    let menor = array[0];
    for(let i = 1; i < array.length; i++){
        if(array[i]<menor){
            menor = array[i];
        }
    }
    return menor;
}
console.log('-------Numero menor del array -------');
console.log(numMenor(edades));

//5. Obtener el mayor. 
function numMayor (array){
    let mayor = array[0];
    for(let i = 1; i < array.length; i++){
        if(array[i]>mayor){
            mayor = array[i];
        }
    }
    return mayor;
}
console.log('-------Numero mayor del array -------');
console.log(numMayor(edades));

//6. Obtener el promedio de edades.
function promedioEdades(array){
    let suma = 0;
    for (let i = 0; i < array.length; i++){
        suma = suma + array[i];
    }
    return suma/array.length;
}
console.log('-----------promedio edades----------');
console.log(promedioEdades(edades));
//7. Incrementar en 1 todas las edades.
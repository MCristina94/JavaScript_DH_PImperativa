//EJERCICIO 1

//Realizar una función que reciba 
//por parámetro el array de objetos y retorne un nuevo array con los objetos cuya cantidad de 
//horas diarias sea mayor o igual a 6

let trabajadores = [
    {
    nombre : 'pedro',
    horas_trabajadas: 2,
},

{
    nombre : 'pablo',
    horas_trabajadas: 8,
},

{
    nombre : 'juan',
    horas_trabajadas: 10,
},

{
    nombre : 'ricardo',
    horas_trabajadas: 3,
},

{
    nombre : 'hugo',
    horas_trabajadas: 13,
},

]


function nuevoArrayHoras (array){
    let array_6_Horas = [];
    for (let i = 0; i < array.length; i++){
        if (array[i].horas_trabajadas >= 6){
            array_6_Horas.push(array[i]); 
        }
    }
    return array_6_Horas;

}

//console.log(nuevoArrayHoras(trabajadores));

//EJERCICIO 2

//Realizar una función que reciba por parámetro el arreglo de objetos
 //del ejercicio 1 y lo ordene de menor a mayor según la cantHorasDiarias 
 //utilizando el algoritmo de ordenamiento Bubble Sort.

 function ordenarMenorMayor(array){
    for(let i = 0; i < array.length; i++){
        for(let j= 0; j < array.length - 1; j++){
            let temporal = 0;
            if(array[j].horas_trabajadas > array[j + 1].horas_trabajadas){
                temporal = array[j];
                array[j] =  array[j + 1];
                array[j + 1] = temporal;
            }
        }
    }
 }
 ordenarMenorMayor(trabajadores);
// console.log(trabajadores);

 //EJERCICIO 3
//Dada la siguiente matriz:

let matriz = [
    [1,2,3,4],
    [2,3,4,1],
    [3,4,1,2],
    [4,3,2,1]
]; 

//Realizar una función que reciba por parámetro la matriz y retorne la multiplicación entre todos los elementos de la fila 1.

function multiplicacionMatriz(arrayMatriz){
    let resultado = 1;
        for(let j = 0; j < arrayMatriz[0].length; j++){
        resultado = resultado * arrayMatriz[0][j];
        }
    return resultado;
    
}

console.log(multiplicacionMatriz(matriz));

//Crear una función que reciba por parámetro la matriz y retorne la suma de todos los elementos que sean pares.
function sumaPares(arrayMatriz){
    let resultadoSuma = 0;
    for (let i = 0; i < arrayMatriz.length; i++){
        for (let  j = 0; j < arrayMatriz[i].length; j++){
            if(arrayMatriz[i][j] % 2 === 0){
                resultadoSuma = resultadoSuma + arrayMatriz[i][j];
            }

        }
    }
    return resultadoSuma;
}
//console.log(sumaPares(matriz));

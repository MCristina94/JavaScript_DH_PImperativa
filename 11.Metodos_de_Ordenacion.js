/*Ejercicio 1
En un concurso de fotografía, donde los usuarios publican una fotografía y obtienen
likes, se registra la cantidad de likes obtenidos por cada usuario en un array. Ordenar
los valores para poder indicar cuál fue la mayor cantidad de likes obtenidos, cuánto
obtuvo el segundo, cuánto el tercero y cuánto el que menos likes obtuvo —suponer
que participaron 15 usuarios y suponer para cada uno, una cantidad de likes—.*/ 

let arrayLikes = [
    {   nombre: 'juan',
        cantLikes: 52, 
    },
    {   nombre: 'pedro',
    cantLikes: 58, 
    },
    {   nombre: 'lucas',
    cantLikes: 57, 
    },
    {   nombre: 'luis',
    cantLikes: 25, 
    },
    {   nombre: 'ana',
    cantLikes: 1012, 
    },
    {   nombre: 'sandra',
    cantLikes: 32, 
    },
    {   nombre: 'veronica',
    cantLikes: 78, 
    },
    {   nombre: 'roberta',
    cantLikes: 41, 
    },
    {   nombre: 'lulu',
    cantLikes: 105, 
    },
    {   nombre: 'hugo',
    cantLikes: 65, 
    },
    {   nombre: 'andres',
    cantLikes: 14, 
    },
    {   nombre: 'jorge',
    cantLikes: 33, 
    },
    {   nombre: 'carlos',
    cantLikes: 11, 
    },
    {   nombre: 'lolo',
    cantLikes: 111,     
    },
    {   nombre: 'pepe',
    cantLikes: 55, 
    },
];

function ordernarLikes (array){
    for (let i = 0; i < array.length; i++){
        for ( let j = 0; j < array.length - 1; j++){
            let temp = 0;
            if (array[j].cantLikes < array[j+1].cantLikes){
                temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
}
ordernarLikes(arrayLikes);
//console.log(arrayLikes);

/*Ejercicio 2
El servicio meteorológico, para llevar el control diario de temperatura, utiliza un
objeto temperatura donde registra día —valor numérico del día—, mes —valor
numérico—, temperatura máxima y temperatura mínima, correspondiente a dicho
día. Las temperaturas —objeto temperatura— están cargados en un array.
a) Ordenar por temperatura mínima de menor a mayor.
b) Ordenar por temperatura máxima de mayor a menor.*/

let temperatura = [
    {
        dia: 1,
        mes: 2,
        tempMax: 78,
        temMin: 58,
    },
    {
        dia: 16,
        mes: 3,
        tempMax: 75,
        temMin: 35,
    },
    {
        dia: 7,
        mes: 8,
        tempMax: 55,
        temMin: 21,
    },
    {
        dia: 5,
        mes: 11,
        tempMax: 63,
        temMin: 45,
    },
    {
        dia: 12,
        mes: 12,
        tempMax: 57,
        temMin: 11,
    },
];

function ordernarTempMin (array){
    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < array.length - 1; j++){
            let temporal = 0;
            if (array[j].temMin > array[j + 1].temMin){
                temporal = array[j];
                array[j] = array [j + 1];
                array [ j + 1] = temporal;
            }
        }
    }
}

ordernarTempMin(temperatura);
console.log(temperatura);

function ordernarTempMax (array){
    for (let i = 0; i < array.length; i ++){
        for (let j = 0; j < array.length - 1; j++){
            let temporal = 0;
            if(array[j].tempMax < array[j + 1].tempMax){
                 temporal = array [j];
                 array [j] = array [j + 1];
                 array[j + 1] = temporal;
            }
           
        }
    }
}
ordernarTempMax(temperatura);
console.log(temperatura);
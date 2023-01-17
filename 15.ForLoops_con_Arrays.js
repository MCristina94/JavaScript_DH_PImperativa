
//extensión quokka

//1. desarrollar una funcion que reciba dos numeros y retorne la suma de ambos

function suma (numero1, numero2){
    let resultado = 0;
    return resultado = numero1 + numero2;
}
console.log(suma(3,5));

// desarrollar una funcion que reciba 4 numeros y calcular la suma de total, si el resultado es par, retornar la mitad del total, caso contrario retornar el doble del total.

function calculo (n1, n2, n3, n4){
    let rest = n1 + n2 + n3 + n4;
    if (rest % 2 === 0){
        return rest / 2;
    }
    else{
        return rest * 2;
    }
}
console.log(calculo(2,3,4,5));

//deckarar 3 arrays de edades.
let arrayEdad1 = [12,14,15,17,23,45,56];
let arrayEdad2 = [54,87,96,25,12,45,65];
let arrayEdad3 = [54,78,96,32,52,63,45]

//1. funcion que reciba un array de edades y retorne el promedio.

function promedioEdad(array){
    let suma = 0;
    for ( let i = 0; i < array.length; i++){
        suma = suma + array[i];
        
    }
    return suma / array.length;
    
}
console.log(promedioEdad(arrayEdad3));

// funcion que reciba un array de edades y retorne el mayhor elemento (pendiente)
//funcion que reciba un array de edades y retorne el menor elemento (pendiente)
// funcion que reciba un array de edades y una edad buscar, retorne el primer indice si encuentra coincidencia o null caso contrario

function buscarEdad(array, edad){
    for (let i = 0; i < array.length; i++){
        if (array[i] === edad){
            return array.indexOf(edad);
        }
        
    }
    return 'no existe en la lista'
}
console.log(buscarEdad(arrayEdad1, 23));




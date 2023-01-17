/* Ejercicio 1:
1. Declarar tres variables y asignarles un número entero a las tres.
2. Crear una función que reciba tres parámetros, que pregunte:
A. Si el primero es mayor que el segundo, debe devolver la multiplicación del
segundo por el tercero.
B. Si el segundo es par, que devuelva un texto que concatene al segundo número
con un texto que diga ‘es par’.
C. Si la suma de los tres es múltiplo de 3, debe devolver un texto que diga: la suma
de estos tres números es múltiplo de 3.
3. Invocar a la función pasándole por parámetros las tres variables declaradas en el punto
 */

let num1 = 4;
let num2 = 12;
let num3 = 58;

function operacionesMat(num1, num2, num3){
    if(num1 > num2){
        return num2 * num3;
    }
    else if(num2 % 2 === 0){
        return `El numero ${num2} es par`;
    }
    else if((num1+num2+num3) % 3 === 0){
        return 'la suma de estos tres numeros es multiplo de 3';
    }
}
//console.log(operacionesMat(5,2,4));

/* Ejercicio 2:
1) Crear un objeto literal que contenga las siguientes propiedades y asignarles un valor:
a) nombre
b) apellido
c) edad
d) estaEmpleado (bool)
2) Declarar un función que:
a) Si la edad es mayor a 18 años y está empleado, devolverá una frase que diga:
[nombre] [apellido] está empleado y es mayor de edad.
b) Si es mayor de edad pero no está empleado, devolverá una frase que diga:
[nombre] [apellido] NO está empleado y es mayor de edad.
c) Si no es mayor ni está empleado, devolverá una frase que diga: [nombre] [apellido]
NO está empleado y NO es mayor de edad. */

let persona = {
    nombre: 'Sandra',
    apellido: 'Gonzalez',
    edad: 17,
    estaEmpleado: true
}

function estadoLaboral (objPersona){
    if(persona.edad >= 18 && persona.estaEmpleado === true){
        return `${persona.nombre} ${persona.apellido} está empleado y es mayor de edad`;
    }
    else if(persona.edad >= 18 && persona.estaEmpleado === false){
        return `${persona.nombre} ${persona.apellido} NO está empleado y es mayor de edad`;
    }
    else {
        return `${persona.nombre} ${persona.apellido} NO está empleado y NO es mayor de edad`;
    }
}
//console.log(estadoLaboral(persona));

let autos = [{
    marca: 'Toyota',
    anio: 2022,
    color: 'rojo'
    },
    {
    marca: 'Renault',
    anio: 2020,
    color: 'gris'
    },
    {
    marca: 'Peugeot',
    anio: 2021,
    color: 'rojo'
    },
    {
    marca: 'Fiat',
    anio: 2019,
    color: 'negro'
    }]

    /* 1. Eliminar el último elemento del arreglo usando un método de arrays.
    2. Recorrer el array y si el año del auto es mayor a 2019, agregar cada objeto a un nuevo
    arreglo llamado autosNuevos. */

console.log(autos);
console.log('-------------Despues del pop----------------');
/*autos.pop();
console.log(autos); */


let autosNuevos = [];
function autosModelo (arrayAutos){
    autosNuevos = [];
    for(let i = 0; i < arrayAutos.length; i++){
        if(autos[i].anio > 2019){
            autosNuevos.push(autos[i]);
        }
    }
    return autosNuevos;
}
console.log(autosModelo(autos));
console.log('-----variable autos nuevos --------------');
console.log(autosNuevos);
autosModelo(autos);
console.log('-----variable autos nuevos --------------');
console.log(autosNuevos);
autosModelo(autos);
console.log('-----variable autos nuevos --------------');
console.log(autosNuevos);
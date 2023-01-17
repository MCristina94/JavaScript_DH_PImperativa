/* 1. Deberás escribir un objeto literal llamado estudiante que contenga las siguientes
propiedades que deberás completar con tus datos:
a. nombre
b. apellido
c. camada
d. esParcial (VERDADERO) */
let estudiante = {
    nombre: 'Maurin',
    apellido: 'Arturo',
    camada: 1,
    esParcial: true
}
/* Crear una función que, pasado un número entero (la futura nota), nos devuelva la
situación del alumno:
NOTA < 4 : desaprobado
4 <= NOTA < 7 : debe rendir examen final
NOTA >= 7 : promocionado.
La función deberá retornar la condición final del alumno (solo retorna la palabra).
Al momento de llamar a la función, deberás mostrar la siguiente frase:
“El alumno obtuvo una nota igual a [NOTA] por lo tanto su condición es [CONDICIÓN]” */

function situacionAlum (nota){
    let condicionNota = '';
    if(nota<4){
        condicionNota ='desaprobado';
    }
    else if(nota >=4 && nota <7){
        condicionNota = 'debe rendir examen final';
    }
    else{
        condicionNota = 'promocionado';
    }
    return `El alumno obtuvo una nota igual a: ${nota} por lo tanto su condición es: ${condicionNota}`;
}
//console.log(situacionAlum(5));


/* 
1. Crea 1 array llamado clase.
2. Crea 3 objetos literales con las propiedades nombres, apellidos y bimestre de 3
compañeros.
Ej: Esteban Piazza 1 - Leandro Borrelli 1 - Martín Cejas 1
a. Agrega estos 3 objetos al array llamado clase.
b. Imprimir el array para ver que contenga esos objetos.
3. Crea una función que reciba el array clase como parámetro e incremente en 1 el número
de bimestre de cada uno de los alumnos, llámala siguienteCursada. Debes utilizar una
estructura de repetición.
4. Deberás hacer el correcto llamado de la función mostrando el array clase antes y
después de llamar a siguienteCursada. */
let clase = [];
let alumno1 =
    {
        nombre:'pedro',
        apellido:'gutierrez',
        bimestre:4
    }
let almuno2 =
    {
        nombre:'maria',
        apellido:'villegas',
        bimestre:6
    }
let alumno3 =
    {
        nombre:'juan',
        apellido:'silva',
        bimestre:1
    }

clase.push(alumno1,almuno2,alumno3);
//console.log(clase);
/* 3. Crea una función que reciba el array clase como parámetro e incremente en 1 el número
de bimestre de cada uno de los alumnos, llámala siguienteCursada. Debes utilizar una
estructura de repetición. */
function siguienteCursada (array){
    for(let i = 0; i < array.length; i++){
        array[i].bimestre += 1;
    }
    return array.bimestre
}
//console.log(clase);
//console.log('----------siguiente bimestre---------');
siguienteCursada(clase);
//console.log(clase);

/* 1. Crear una función que apruebe o desapruebe alumnos en base a su asistencia y a su
progreso completo en PlayGround (true, false). Para ello deberán:
- Crear una constante asistenciaMinima que almacene el número mínimo de
asistencias permitidas para la aprobación de la materia, en este caso serán
23 asistencias mínimas.
- La función deberá recibir como parámetros la cantidad de asistencias y la
condición final ante PlayGround del alumno.
- Un alumno, será aprobado si tiene la cantidad de asistencias mínima y su
progreso final está completo. Si alguna de estas opciones no se cumple, el
alumno será automáticamente desaprobado.
- Deberá retornar un string aprobado o desaprobado según corresponda */

const asistenciaMinima = 23;

function aprobarAlum (asistencias,playGProgreso){

    if(asistencias >= asistenciaMinima && playGProgreso === true){
        return 'Aprobado';
    }
    return 'Desaprobado';
}
console.log(aprobarAlum(21,true));
/* A - Nivel 1*/

//1 - Desarrollar una función que reciba 2 numeros y retorne la suma de ambos
function suma (a, b){
    return a + b;
}
suma(2,3);

/* 2 - Desarrollar una función que reciba 2 numeros y 
     retorne la suma de ambos, si el primer parametro es mayor, 
     caso contrario retornar la resta. */
     function sumaResta (a, b){
        if (a > b){
            return a + b;
        }
        else {
            return a - b;
        }
     }
sumaResta(3,2);

/* 3 - Desarrollar una función que reciba 4 numeros y calcular la suma de total
     si el el resultado es mayor o igual a 7, retornar 'Aprobado', 
     caso contrario retornar 'otra chance '. */
     function sumaTotal(a, b, c, d){
        let resultado = a + b + c + d;
        if (resultado >= 7){
            return 'aprovado'
        }
        else {
            return 'otra chance'
        }
     }
     sumaTotal(2,4,5,6);

/* 4 - Desarrollar una función que reciba 4 numeros y calcular la suma de total
     si el el resultado es par, retornar la mitad del total,  
     caso contrario retornar el doble del total. */ 
     function sumaParImpar(a, b, c, d){
        let resultado = a + b + c + d;
        if (resultado % 2 === 0){
            return resultado /2;
        }
        else {
            return resultado *2;
        }
     }
     sumaParImpar(2,5,6,70);

    /*  Nivel 2
     - Declarar 3 arrays de edades por ejemplo -> [10, 9, 8, 22, 55, 80, 5, 63, 29, 9] , luego desarrollar las siguientes funciones: */
     
     let edades1 = [12,85,56,78,97,23,28];
     let edades2 = [56,58,69,32,12,23,52];
     let edades3 = [15,14,12,78,63,54,25];


    /*  1 - Funcion que reciba un array de edades y retorne el promedio  */
    
    function promedio(array){
        let suma = 0;
        for (let i = 0; i < array.length; i++){
            suma = suma + array[i]
        }
        return suma / array.length
    }
    //console.log(promedio(edades1));

     /* 2 - Funcion que reciba un array de edades y retorne el mayor elemento // 80 */

     function mayorElemento(array){
        let mayor = -1;
        for (let i = 0; i < array.length; i++){
            if (mayor < array[i]){
                mayor = array[i];
            }
        }
        return mayor;
     }
     //console.log(mayorElemento(edades1));


     /* 3 - Funcion que reciba un array de edades y retorne el menor elemento // 5 */
     function menorElemento (array){
        let menor = Number.POSITIVE_INFINITY;
        for ( let i = 0; i < array.length; i++){
            if(menor > array[i]){
                menor = array[i];
            }
        }
        return menor;
     }
     //console.log(menorElemento(edades1));

    /*  4 - Funcion que reciba un array de edades y retorne true si encuentra algun elemento repetido o false caso contrario */
    //FALTA REVISAR   
    function elementoRepetido(array){
            
        for (let i = 0; i < array.length; i++){
            for(let j = i+1; j < array.length; j++){
                if(array[i]===array[j]){
                    return true;
                }
            }                
        }
        return false;
    }
    //console.log(elementoRepetido(edades1));
        //console.log(elementoRepetido(edades1));
     /* 5 - Funcion que reciba un array de edades y una edada buscar, retorne el primer índice si encuentra coincidencia o null caso contrario */
     function edadBuscar (array, edad){
        for (let i = 0; i < array.length; i++){
            if(edad === array[i]){
                return array.indexOf(edad);
            }
        }
        return null;
     }
     //console.log(edadBuscar(edades1, 25));
    /*  6 - Funcion que reciba un array de edades y retorne un objeto literal con dos propiedades que contengan un array
        {
           edadesMenor : "// edades menor a 18",  
           edadesMayor : "// edades menor a 18"
        } */
       function objliteral(array){
        let objEdades = {
            edadesMayor : [],
            edadesMenor : []
        };
        for (let i = 0; i < array.length; i++){
            if(array[i] < 18){
                objEdades.edadesMenor.push(array[i]);
            }
            else {
                objEdades.edadesMayor.push(array[i]);
            }
        }
        return objEdades;
       }
    // console.log(objliteral(edades1));
        
        //C  Nivel 3

/* 1 - Desarrollar un objeto literal que contenga 5 propiedades que sean del siguiente tipo:
   - 2 String   
   - 1 Boolean
   - 1 Number
   - 1 Array
   - 1 Metodo que retorne un saludito
    * por ejemplo:
    
     let canHijo = {
       nombre : 'Negrito',
       color  : 'Negrito',
       estaVacunado : true,
       edad : 10,
       vacunas : ['Leptospirosis', 'Hepatitis', 'Parvovirus'],
       saludo: function(){
           return 'wouf wouf wouf..'
       } 
     }*/

let alumno = {
    nombre: 'Pedro',
    apellido: 'Perea',
    repitente: false,
    edad: 16,
    materias: ['matematicas', 'fisica', 'economia', 'ecologia', 'biologia'],
    saludo: function (){
        return `hola soy ${nombre}`;
    }
}
      

  //- Luego desarrollar una funcion que liste individualmente los elementos de la propiedad del tipo Array  */
function listarMaterias(objAlumno){
    for(let i = 0; i < objAlumno.materias.length; i++){
        console.log(objAlumno.materias[i]);
    }
}
//listarMaterias(alumno);

/* 2 - Dado el Siguiente array de personas, desarrollar funciones:
  - Funcion que reciba el array de personas y liste el nombre de cada una. 
  - Funcion que reciba el array de personas y retorne en un array los que son programadores.
  - Funcion que reciba el array de personas y un id a buscar, 
       retorne la persona en caso de encontrar, 
       caso contrario retorne null
  - Funcion que reciba el array de personas y un id a buscar, 
       retorne la persona en caso de encontrar, 
       caso contrario retorne null */

let personas =
[
    {
      "id": 0,
      "isProgrammer": true,
      "age": 28,
      "name": "Harrington Curry",
      "company": "TRANSLINK",
      "favoriteFruit": "strawberry"
    },
    {
      "id": 1,
      "isProgrammer": false,
      "age": 38,
      "name": "Greta Morton",
      "company": "PYRAMI",
      "favoriteFruit": "apple"
    },
    {
      "id": 2,
      "isProgrammer": false,
      "age": 32,
      "name": "Hester Bowen",
      "company": "TURNABOUT",
      "favoriteFruit": "apple"
    },
    {
      "id": 3,
      "isProgrammer": false,
      "age": 25,
      "name": "Melendez Mcfarland",
      "company": "XSPORTS",
      "favoriteFruit": "strawberry"
    },
    {
      "id": 4,
      "isProgrammer": false,
      "age": 31,
      "name": "Kimberly Matthews",
      "company": "KNOWLYSIS",
      "favoriteFruit": "banana"
    },
    {
      "id": 5,
      "isProgrammer": false,
      "age": 36,
      "name": "Hardin Sims",
      "company": "SEALOUD",
      "favoriteFruit": "banana"
    },
    {
      "id": 6,
      "isProgrammer": true,
      "age": 29,
      "name": "Natalia Huff",
      "company": "ENERSOL",
      "favoriteFruit": "apple"
    }
  ]
  //- Funcion que reciba el array de personas y liste el nombre de cada una. 
  function listarNombres (arrayPersonas){
    for(let i = 0; i < arrayPersonas.length; i++){
        console.log(arrayPersonas[i].name);
    }
  }
  //listarNombres(personas);

 // - Funcion que reciba el array de personas y retorne en un array los que son programadores.
 function sonProgramadores(arrayPersonas){
    let programadores = [];
    for (let i = 0; i < arrayPersonas.length; i++){
        if(arrayPersonas[i].isProgrammer === true){
            programadores.push(arrayPersonas[i]);
        }
    }
    return programadores;
 }
 //console.log(sonProgramadores(personas));

 /* Funcion que reciba el array de personas y un id a buscar, 
       retorne la persona en caso de encontrar, 
       caso contrario retorne null */
function personaEncontrada (arrayPersona, id){
    for(let i = 0; i < arrayPersona.length; i++){
        if(arrayPersona[i].id === id){
            return arrayPersona[i];
        }
    }
    return null;
}
//console.log(personaEncontrada(personas,25));



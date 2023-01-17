/*Crear una función que imprima todos los dígitos decimales, del 0 al 9,
usando un ciclo For.*/ 

/*Crear una función que imprima los números entre el 5 y el 20, saltando de
tres en tres.*/ 

function tresEnTres(){
    for (let i = 5; i <= 20; i = i + 3){
        console.log(i);
    }
}
//tresEnTres();

/*Crear una función que imprima la sumatoria de todos los números entre el
0 y el 100. */

function ceroACien (){
    let contador = 0;
    for (let i = 0; i <= 100; i++){
    contador = contador + i;
    }   
    return contador;
}


//console.log(ceroACien());

/*4. Crear una función que reciba un string y luego imprimir la cantidad de
vocales que se encuentran en dicha frase. */

function encuentraVocales(string){
    let contador = 0;
    for ( let i = 0; i < string.length; i++){ 
        
        if (string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u' ){
            contador = contador + 1;
        }
    }
    return contador;
}
console.log(encuentraVocales('otorrinolaringologo'));

/*Realizar una función que, dada una lista, devuelva una nueva lista cuyo
contenido sea igual a la original pero invertida.*/


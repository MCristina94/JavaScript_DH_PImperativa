//Bucles y repeticiones

// 1) Crear una función que pida un valor por parámetro y muestre los 10 números siguientes.
function numeroSiguientes(numero){
     

    for (let n = 0; n <= 10; n++){
        console.log(numero++);
    }
    
} 
numeroSiguientes(20); 

//2) Imprimir los números entre el 5 y el 20, saltando de tres en tres.

function tres_tres(){
    for (let n = 5; n <= 20; n = n + 3){
        console.log(n);
    }
    
}
tres_tres(); 

//3) Escribir un programa que muestre la sumatoria de todos los números
//entre el 0 y el 100

function sumatoria (){

    let suma = 0;
    for (let i = 0; i <= 100; i++ ){
        suma = suma + i;
    }
    return suma;
}
console.log(sumatoria()); 

// 4) Dado un número entero positivo, mostrar su factorial. El factorial de
//un número se obtiene multiplicando todos los números enteros
//positivos que hay entre el 1 y ese número.

function factorial(numero){

    let resultado = 1;
    for(let i = 1; i <= numero; i++) {
        resultado = resultado * i;
    }
    return resultado;
}
console.log(factorial(-4));
const prompt = require("prompt-sync")({sigint: true});



function sumar (){
    let num1 = prompt ('para sumar ingrese el primer numero: ');
    let num2 = prompt ('para sumar ingrese el segundo numero: '); 
    return parseInt(num1) + parseInt(num2);
}

 function restar (){
    let num1 = prompt ('para restar ingrese el primer numero: ');
    let num2 = prompt ('para restar ingrese el segundo numero: '); 
    return num1 - num2;
} 

function multiplicar (){
    let num1 = prompt ('para multiplicar ingrese el primer numero: ');
    let num2 = prompt ('para multiplicar ingrese el segundo numero: '); 
    return num1 * num2;
}

function dividir (){
    let num1 = prompt ('para dividir ingrese el primer numero: ');
    let num2 = prompt ('para dividir ingrese el segundo numero: '); 
    return num1 / num2;
}

function cuadradoDeUnNumero (){
    let numero = 5;
    return numero*numero;
}

function promedioDeTresNumeros (){
    let numero1 = 6;
    let numero2 = 4;
    let numero3 = 8;
    return (numero1 * numero2 * numero3) / 3;
}

function calcularPorcentaje (){
    let numero1=100;
    let numero2=10;
    return (numero1*numero2)/100;
}

console.log('-------------testeo de calculadora------------------');

console.log('Resultado suma: ' + sumar());
console.log('Resultado resta: '+ restar());
console.log('Resultado multiplicación: ' + multiplicar());
console.log('Resultado del cuadrado de un numero: ' + cuadradoDeUnNumero()); 
console.log('Resultado promedio: ' + promedioDeTresNumeros()); 
console.log('Resultado porcentaje: ' + calcularPorcentaje()); 

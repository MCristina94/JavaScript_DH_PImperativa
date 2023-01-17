 const prompt = require("prompt-sync")({sigint: true});

//Desafio 1
function test1(x,y){
    return y - x
}

test1(10 , 40)

// retorna 30.

console.log(test1(10,40));

//Desafio 2

function test2 (x, y){
    return x * 2

    console.log(x);

    return x / 2
}
//retorna 20

console.log(test2(10));


//pulgadas a centrimetros

let valorPulgada = prompt("Ingrese valor en pulgadas: ");

function convertirPulgadas(valorPulgada) {
    
    return valorPulgada * 2.54;
     
}

//console.log(convertirPulgadas(valorPulgada));
 
// string a URL

let dominioActual = prompt('ingrese su dominio actual: ');

function convertirA_URL(nombrededominio){
        return 'http://www.'+nombrededominio+'.com';
}


console.log(convertirA_URL(dominioActual)); 

//string con admiración

let palabraAdmiracion = function (palabra){
    return '¡' +palabra + '!';
}

let palabra = 'Pelota';
console.log(palabraAdmiracion(palabra)) 

//Edad Perros

let edadPerro = prompt ('Ingrese la edad de su perro: ');

function convertirEdad(edadPerro){
    return  'la edad real de su perro es: ' + edadPerro * 7;
}

console.log(convertirEdad(edadPerro)); 

// Valor hora de trabajo

let salarioMensual = prompt ('¿Cual es su salario mensual? :');

function salarioHora (salarioMensual){
    return salarioMensual / 40;
}

console.log(salarioHora(salarioMensual));

// calculadorIMC()

let peso = prompt('Digite su peso en kilogramos (kg): ');
let altura =prompt('Digite su altura en metros (m): ');

function calculoIMC (peso, altura){
    return peso / altura;
}

console.log(calculoIMC(peso,altura));

let calculo_IMC = (peso, altura) => peso / altura;

console.log(calculo_IMC(55 , 1.55)); 

//toUpperCase

let frase_min = prompt ('Introduzca una frase en minuscula: ');

function frase_mayus (frase_min){
    return frase_min.toUpperCase();
}

console.log(frase_mayus(frase_min)); 

//Typeof

let valor = 5;

function clase_valor(valor){
    return 'el tipo de variables es: ' + typeof valor;

}

console.log(clase_valor(valor)); 

// circunferencia

let radio = prompt ('Ingrese el valor del radio: ');

function calculaCircunferencia(radio){
    return radio * Math.PI * 2;
}

console.log(calculaCircunferencia(radio));
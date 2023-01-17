const PromptSync = require("prompt-sync");

const prompt = require("prompt-sync")({sigint: true});

//ejercicio 1
let frase = prompt ('ingrese una frase: ')

function eje1(frase){
    console.log(frase);
}

eje1(frase);
 
//ejercicio 2
 let nombre = prompt ('ingrese su nombre: ')
function eje2(nombre){
    console.log( 'hola'+ ' ' + nombre);
}

eje2(nombre); 

//ejercicio 3
function eje3 (num1, num2){

    return num1 + num2;
    
}
     console.log(eje3(2,5));

//ejercicio 4

     let nacimiento = parseInt(prompt( ' escribe tu año de nacimiento: '));
     let actual = parseInt(prompt('ingrese el año actual: '));
     function calculandoNac(nacimiento, actual){
        let edad = actual - nacimiento;
        return 'tu edad es: ' + edad;
     }
     console.log(calculandoNac(nacimiento, actual)); 

     //ejercicio 5
        let aleatorio= Math.round(Math.random()*10);
        let numero = parseInt(prompt('Adivina el numero aleatorio: '));
        
        function num_aleatorio (aleatorio, numero){
        
            if (numero === aleatorio){
                return 'adivinaste'
            }

            else {
                return ' no adivinaste'
            }
            
     }console.log(num_aleatorio(aleatorio, numero)); 

     //ejercicio 6
     function numeroPar(){
        for (i = 0; i <= 100; i++)
        {
            if (i % 2 ===0){
                console.log(i);
            }
        }
     }
     numeroPar(); 

     //ejercicio 7
     function calculando (numero){
        if(numero > 500){
            console.log(numero*0.18);
        }
     
     }
   calculando(1); 

   //ejercicio 8
    function eje8(numero){
    if (numero < 10){
        let resta = 10 - numero;
        console.log('le falta: ' + resta + ' para ser de dos cifras');
    }
    else {
        resta = 100 - numero;
        console.log('le falta: ' + resta + ' para ser de tres cifras');

    }
   }

   eje8(20); 

   //ejercicio 9
   let cantidadNotas= parseInt(prompt('ingrese cantidad de notas: '));
   let suma;
   function promedio(cantidadNotas){
    for (i = 1; i <= cantidadNotas; i++){
        let nota = parseInt(prompt('ingrese la nota: '));
        suma = suma + nota;
    }
        let promedioFinal = suma/cantidadNotas;
        console.log(promedioFinal);
   }
 promedio(cantidadNotas);



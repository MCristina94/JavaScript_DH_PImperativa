//EJERCICIO DE LA CLASE EN VIVO

const prompt = require("prompt-sync")({sigint: true});

//simulacion gym

let temperatura = 24; //numerico
let llueve = false; //booleano
let ropaDeportiva = true; //booleano
const horaApertura = 8; // constante numerico
const horaCierre = 20; //horario designado en 24 horas.
let horaActual = prompt("Ingrese la hora actual: ");
let reservaTurno = true;
let cuota = 'Cuota al día';
let mensaje = 'Usted puede entrenar hoy!';

console.log('La temperatura es: ' + ' ' + temperatura + '' + '°C');
console.log('¿llueve? :' + ' ' + llueve);
console.log('¿tienes ropa deportiva? :' + ' ' + ropaDeportiva);
console.log('hora de apertura del gym es:' + ' ' + horaApertura);
console.log('hora de cierre del gym es:' + ' ' + horaCierre);
console.log(`La hora actual es: ${horaActual}`);
console.log('¿tiene reservado el turno? :' + ' ' + reservaTurno);
console.log('estado de cuenta:' + ' ' + cuota);
console.log(mensaje);
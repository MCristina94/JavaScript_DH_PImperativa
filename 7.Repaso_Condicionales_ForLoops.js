/* Descripción del problema
Te contactan desde un teatro donde hace falta determinar el ganador de un concurso de
stand up que consta de tres presentaciones por participante. Te piden que armes el
programa que determine al ganador y, a continuación, te explican el funcionamiento del
concurso para que lo tengas en cuenta a la hora de realizar el programa.
El público, máximo 100 personas, votó quién considera que estuvo mejor al terminar
cada etapa. Por ejemplo, sube Alicia, se presenta y baja; sube Bob, se presenta y baja.
Terminadas ambas presentaciones, el público vota indicando quién cree que ganó esa
tanda. Luego, continúa la siguiente tanda, igual que la primera. Y finalmente, una tercera. */


let alicia = [10,80,75];
let bob = [90,20,25];

function CompararPuntos(array1, array2){
    let puntosAlicia = 0;
    let puntosBob = 0;
    for (let i = 0; i < array1.length; i++){
        if (array1[i] > array2[i]){
            puntosAlicia = puntosAlicia + 1;
            
        }
        else if (array1[i] < array2[i]){
            puntosBob = puntosBob + 1;
            
        }
        
    }
    console.log('puntos totales de alicia: '+ puntosAlicia);
    console.log('puntos totales de bob: ' + puntosBob);
}
CompararPuntos(alicia,bob);
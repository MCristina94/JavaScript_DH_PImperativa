let peliculas = ['alien','star wars', 'kill bill', 'alien'];

peliculas.length; //devuelve 3, el numero de elementos del array
peliculas.push('harry potter'); //agrega uno o varios elementos al final del array
peliculas.pop(); //elimina el ultimo elemento del array, se puede guardar en una variable const ultimaPeli = peliculas.pop() retorna "harry potter"
peliculas.shift(); //elimina el primer elemento del array, tambien se puede guardar en una variable
peliculas.unshift('Mandalirano'); // agrega uno o varios elementos al principio de un array
const unidosPorComa =peliculas.join(); //une los elementos de un array utilizando el separador que le especifiquemos, si no se especifica utiliza comas
const unidosPorGuion = peliculas.join(' - '); //une los elementos de un array utilizando el separador que le especifiquemos, si no se especifica utiliza comas
peliculas.indexOf('alien'); //busca en el array el elemento que recibe como parametro, en este caso retorna 0.
peliculas.lastIndexOf('alien'); //igual que el indexOf pero empieza buscando el elemento de atras para adelante, en este caso devuelve 3
peliculas.includes('sta wars');  //similar al indexOf, busca en el array el elemento del parametro y devuelve un booleano

const saludo = 'Muy buenos días a todos'
saludo.slice(0,5); //corta el string y devuelve una parte del string donde se aplica "muy b"
saludo.trim();//elimina los espacios del principio y del final del string
saludo.replace('todos', 'sandra'); //reemplaza una parte del string por otra "muy buenos dias a sandra"
saludo.split(' '); //divide un string en partes
/* Descripción del problema
Desde un banco nos contactan para crear una aplicación que pueda facilitar el manejo
de información y las acciones que el mismo necesita. Nuestro tech leader nos facilita la
forma de representar a los usuarios (cuentas bancarias). Cada una de estas cuentas
tiene la siguiente información:

● N.o de cuenta (solo números).
● Tipo de cuenta (cuenta corriente en pesos o caja de ahorro en
pesos).
● Saldo en pesos (solo la cantidad).
● Titular de la cuenta (nombre completo).

Teniendo en cuenta esta información, se nos pide que hagamos lo siguiente:
1. Descargar y analizar el siguiente archivo, el cual contiene la lista de clientes
(cuentas bancarias).
2. Nos solicitan también crear un objeto literal llamado “banco”, el cual tendrá una
propiedad llamada “clientes” que estará compuesta de la lista de objetos
obtenidos en el punto anterior.
3. Al objeto “banco”, crearle un método llamado consultarCliente, el cual recibirá un
nombre (titular) por parámetro, deberá buscarlo en la lista de cuentas y retornar el
objeto cliente que corresponda con ese nombre ingresado.
Ayuda: let clienteEncontrado = banco.consultarCliente(“Ramon Connell”);
4. Crear otro método llamado depósito que recibirá dos parámetros: el titular de
cuenta y una cantidad de dinero a depositar. El método debe obtener la cuenta
correspondiente y luego sumar la cantidad de dinero a depositar a saldo en pesos.
Luego, deberá dar un aviso por la consola con el mensaje “Depósito realizado, su
nuevo saldo es: XXXX”.
5. Crear un último método llamado extracción que recibirá también dos parámetros:
el titular de cuenta y el monto a extraer. El método debe obtener la cuenta
correspondiente y restar el monto al saldo actual. En caso de que el resultado sea
menor a 0, deberá imprimir un mensaje por la consola de “Fondos insuficientes”.
De lo contrario, deberá imprimir “Extracción realizada correctamente, su nuevo
saldo es: XXXX”.
 */

//la lista de clientes.
let arrayCuentas = [
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 27771,
      titularCuenta: "Abigael Natte",
    },
    {
      nroCuenta: 1183971869,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 8675,
      titularCuenta: "Ramon Connell",
    },
    {
      nroCuenta: 9582019689,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 27363,
      titularCuenta: "Jarret Lafuente",
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 32415,
      titularCuenta: "Ansel Ardley",
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: "Cuenta Unica",
      saldoEnPesos: 18789,
      titularCuenta: "Jacki Shurmer",
    },
  ];

let banco = {
    clientes: arrayCuentas,
    //metodo que devuelve información del cliente mencionado.
    consultarCliente: function (titular){
        for (let i = 0; i < this.clientes.length; i++){
            if (this.clientes[i].titularCuenta === titular){
                return this.clientes[i];
            }
           
        }
        return 'no se encontro el cliente';
    },
    // metodo que recibe nombre de titular y dinero a depositar, e imprime por consola el saldo final.
    deposito: function (titular, dineroDeposito){
      //  this.consultarCliente(titular);
      for (let i = 0; i < this.clientes.length; i++){
        if (this.clientes[i].titularCuenta === titular){
            //this.clientes[i].saldoEnPesos = this.clientes[i].saldoEnPesos + dineroDeposito;
            this.clientes[i].saldoEnPesos += dineroDeposito; // funciona igual que el anterior, pero mas resumido
            console.log('Desposito realizado, su nuevo saldo es: ' + this.clientes[i].saldoEnPesos);
        }
       
    }
    return 'No se encontro cliente'
    
    },

    extraccion: function (titular, montoExtraer){
      
        for (let i = 0; i < this.clientes.length; i++){
          if (this.clientes[i].titularCuenta === titular){
              //this.clientes[i].saldoEnPesos = this.clientes[i].saldoEnPesos + dineroDeposito;
              if (this.clientes[i].saldoEnPesos >= montoExtraer){

              this.clientes[i].saldoEnPesos -= montoExtraer; // funciona igual que el anterior, pero mas resumido
              console.log('Extracción realizada, su nuevo saldo es: ' + this.clientes[i].saldoEnPesos);
            }
            else {
                console.log('Fondos insuficientes');
            }
             
          }
         
      }
      return 'No se encontro cliente'
      
      }

}


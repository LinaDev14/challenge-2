const chalk = require('chalk');

/** EJERCICIO 1**/


function cualEsMayor(num1, num2) {
    if (num1 > num2) {
        console.log(chalk.cyan(`El número ${num1} es mayor que el numero ${num2}`));
    } else {
        console.log(chalk.cyan(`El número ${num2} es mayor que el numero ${num1}`));
    }
}

cualEsMayor(8, 20);

console.log(chalk.blue("********************************"));


/** EJERCICIO 2**/

let temporizador;

function cualEsMenor(val1, val2, val3) {
    console.log(chalk.magenta('Analizando los valores... el menor es el: '));
    temporizador = setTimeout(function() {
        //La función Math.min() devuelve el menor de cero o más números.
        console.log(chalk.magenta(Math.min(val1, val2, val3)));
    }, 2000);

}

let menor = cualEsMenor(5, 7, 2);
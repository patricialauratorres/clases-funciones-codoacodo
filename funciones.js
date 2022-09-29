function saludar(parametro) {
    //console.log("Hola mundo " + parametro);

    let cadena = "Hola mundo ";

    function mostrar() {
        console.log(cadena + parametro);
    }

    return mostrar();
}
//saludar("Juan");

function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    return a / b;
}

function calculadora(a, b, operacion) {
    return operacion(a, b);
}

function holaMundo(){
 console.log("Hola mundo");
}

//sdfdsfds

// holaMundo();

// console.log(calculadora(5, 5, sumar));
// console.log(calculadora(15, 5, restar));
// console.log(calculadora(5, 5, multiplicar));
// console.log(calculadora(5, 5, dividir));


// manera clasica de escribir una funcion
function devolverDominio(texto){

    return texto = `https://www.${texto}.com.ar`;

}

console.log(devolverDominio("infobae"));

// es otra manera de escribir funciones

let arrowDominio = (texto) => `https://www.${texto}.com.ar`;

console.log(arrowDominio("infobae"));



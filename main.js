// objetivo: retornar uma mensagem personalizado para o usuario
// dentro dos () vai os parametros da função

function fnMensagem(nome) {
    console.log("Seja bem vindo " + nome + ", ao sistema sandbox!")

}

///////////////////////////////////
// objetivo: receber 2 numeros e somar os valores

function fnSoma(n1, n2, operador = "") {
    let resultado;

    if (operador == 'somar') {
        resultado = n1 + n2;
    } else if (operador == 'subtrair') {
        resultado = n1 - n2;
    } else if (operador == 'multiplicar') {
        resultado = n1 * n2;
    } else if (operador == 'dividir') {
        resultado = n1 / n2;
    } else {
        console.log("Valor do operador invalido, caculo zerada!")
    }

    console.log("Ao " + operador + ": " + resultado)
}
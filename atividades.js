// 1.

function fnmediaAluno(nome, n1, n2, n3) {
    let media = (n1 + n2 + n3) / 3
 
    if (media >= 7) {
        return nome + " foi aprovado! Média: " + media
    } else {
        return nome + " foi reprovado! Média: " + media
    }
}
 
let resultado = fnmediaAluno("Isabella", 8, 7, 9)
console.log(resultado)

/////////////////////////////
// 2.

function fnDiferenca(n1, n2) {
 
    let resultado = n1 - n2
    return resultado
}
 
let resposta = fnDiferenca(10, 5)
console.log(resposta)

/////////////////////////////
// 3.

function fnTabuada(numero) {
    for (let contador = 1; contador <= 10; contador++) {
        console.log(numero + " x " + contador + " = " + (numero * contador))
 
    }
}
 
fnTabuada(5)

/////////////////////////////
// 4. 

function fnIdade(idade) {
    if (idade < 12) {
        return "Você é criança!"
    } else if (idade <= 17) {
        return "Você é adolescente!"
    } else if (idade <= 59) {
        return "Você é adulto!"
    } else {
        return "Você é idoso!"
    }
} 

console.log(fnIdade(12))

/////////////////////////////
//5.

function calcularArea(largura, altura) {
    let area = largura * altura
    return area
}  

/////////////////////////////
//6.

function contagem(numero) {
    while (numero >= 0) {
        console.log(numero)
        numero--
    }}

////////////////////////////
//7.

function salario(valor) {
    let aumento

    if (valor <= 1000) {
        aumento = valor * 0.2
    } else if (valor <= 2000) {
        aumento = valor * 0.15
    } else if (valor <= 3000) {
        aumento = valor * 0.1
    }
    return aumento
}

////////////////////////////
//8.

function fnParImpar(numero) {
    if (numero % 2 === 0) {
        return "O número " + numero + " é par!"
    } else {
        return "O número " + numero + " é ímpar!"
    } 

    let resultado = fnParImpar(8) 
    console.log(resultado)
    }

////////////////////////////
//9.

function fnTemperatura(valor, inversa = false) {
    if (inversa == true) {
        let celsius = (valor - 32) / 1.8
        return celsius
    } else {
        let fahrenheit = (valor * 1.8) + 32
        return fahrenheit
    }
    let resultado = fnTemperatura(30, true)
    console.log(resultado)
}

////////////////////////////
//10.

function fnTriangulo(a, b, c) {
    if (a ==b) {
        if (b == c) {
            return "O triângulo é equilátero!"
        } else {
            return "O triângulo é isósceles!"
        }
    } else {
        return "O triângulo é escaleno!"    
    }

    let resultado = fnTriangulo(3, 3, 3)
    console.log(resultado)
}

////////////////////////////
//11.

function fnSoma(numero) {
    let soma = 0
    for (let contador = 1; contador <= numero; contador++) {
        soma += contador
    }
    return soma

let resultado = fnSoma(5)
console.log(resultado)
}

////////////////////////////
//12.

function fnDesconto(valor, porcentagem = 10) {
    let desconto = valor * (porcentagem / 100)
    let valorFinal = valor - desconto
    return valorFinal

    let resultado = fnDesconto(100, 20)
    console.log(resultado)
}

////////////////////////////
//13.

function fnBrinquedo(altura, idade, cardiaco) {
    if (altura >= 1.40 && idade >= 12 && !cardiaco) {
        return "Você pode brincar!"
    } else {
        return "Você não pode brincar!"
    }
}

////////////////////////////
//14.

function fnConsumo(distancia, litros) {
    let consumo = distancia / litros
    return consumo

    let resultado = fnConsumo(500, 25)
    console.log(resultado)

}

////////////////////////////
//15.

function fnNumero(numero) {
    for (let contador = 1; contador <= numero; contador++) {
        console.log(contador)
    }

    fnNumero(10)
}

////////////////////////////
//16.

function fnDividir(valor, pessoas) {
    let resultado = valor / pessoas
    return resultado

    let resposta = fnDividir(100)
    console.log(resposta)
}

////////////////////////////
//17.

function fnNota(nota) {
    if (nota >= 9) {
        return "Excelente!"
    } else if (nota >= 7) {
        return "Bom"
    } else if (nota >= 5) {
        return "Regular"
    } else {
        return "Insuficiente!"
    }

    let resultado = fnNota(8)
    console.log(resposta)
}

////////////////////////////
//18.

function fnQuadrado(numero) {
    let resultado = numero * numero
    return resultado

    let resposta = fnQuadrado(5)
    console.log(resposta)
    
}
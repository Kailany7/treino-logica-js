/*
            *****Exercício 3 : Dado um array de números, retorne quantos
             deles são pares. Exemplo: entrada [1, 2, 3, 4, 5,6]  saída 3
*/

/*
lógica : "par" sempre se verifica com o operador % (resto da divisão).
Todo problema de "contar quantos" segue o mesmo padrão da 
questão anterior (variável acumuladora), só que agora a cada volta do loop, 
você vai verificar se o número é par, e se for, vai incrementar a
variável acumuladora. 
*/

function contarPares(numeros) {
    let contador = 0; // variável que vai guardar a quantidade de números pares

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) { // verifica se o número é par
            contador++; // incrementa o contador se for par
        }
    }

    return contador; // retorna a quantidade de números pares
}

console.log(contarPares([1, 2, 3, 4, 5, 6])); // deve exibir 3


//  *** versão 3.1 : filter 


function contarParesFilter(numeros) {
    return numeros.filter(num => num % 2 === 0).length; // filtra os números pares e retorna a quantidade
}

console.log(contarParesFilter([1, 2, 3, 4, 5, 6])); // deve exibir 3

/*
logica (versão 3.1) : o método filter cria um novo array 
com todos os elementos que passam no teste implementado
pela função fornecida.
Como só queremos a QUANTIDADE (não os numeros em si), 
pegamos .length desse array filtrado.
*/
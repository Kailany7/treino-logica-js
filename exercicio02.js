/*
            *****Exercício 2 :  Dado um array de números, retorne a soma de 
            todos os elementos. Exemplo: entrada [2, 4, 6,8] saída 20

*/

/*
logica (versão 1 - for ): Todo problema de "somar" ou "contar" segue o mesmo padrão: 
crie uma variável fora do loop pra guardar o resultado (geralmente começando em 0), 
percorra o array, e vá atualizando essa variável a cada volta. 
*/

function somarArray(numeros) {
    let soma = 0; // variável que vai guardar o resultado da soma
    
    for (let i = 0; i < numeros.length; i++) { 
        soma += numeros[i]; // atualiza a variável soma com o valor do elemento atual
    }

    return soma; 
}

console.log(somarArray([2, 4, 6, 8])); // deve exibir 20


// extra: .length é uma propriedade do array que retorna 
// o tamanho do array (quantos elementos ele tem).
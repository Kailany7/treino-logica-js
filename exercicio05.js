/*
                ***** Exercicio 5 : Dado um array de números, retorne 
                o menor valor encontrado. Exemplo: entrada [4, 9, 2, 7] saída 2
*/

/*
Lógica : guardar o primeiro item com menor valor provisório e comparar com os próximos,
se o próximo for menor, atualiza a variável.
*/


function encontrarMenor(numeros) {
    let menor = numeros[0]; 
    
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] < menor) {  // a diferença aqui é o sinal de < (menor que) ao invés de > (maior que) da questão anterior
            menor = numeros[i]; 
        }
    }
    return menor; 
}
console.log(encontrarMenor([4, 9, 2, 7])); // deve exibir 2
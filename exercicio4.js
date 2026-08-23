/*
                ***** Exercício 4 :  Dado um array de números, retorne 
                o maior valor encontrado. Exemplo: entrada [4, 9, 2, 7]  saída 9

*/

/*
lógica : guardar o primeiro item com maior valor provisório e comparar com os próximos,
se o próximo for maior, atualiza a variável.
*/

function encontrarMaior(numeros) {
    let maior = numeros[0]; // começa com a primeira posição do array como maior valor. toda array começa na posição 0, então numeros[0] é o primeiro elemento do array.

    for (let i = 1; i < numeros.length; i++) { // começa do 1, pois o 0 já foi usado
        if (numeros[i] > maior) { // compara o elemento atual com o maior valor encontrado até agora
            maior = numeros[i]; // atualiza o maior valor se o elemento atual for maior
        }
    }
    return maior; // retorna o maior valor encontrado
}

console.log(encontrarMaior([4, 9, 2, 7])); // deve exibir 9


/*
                ***** execício 6 : Dado um array de números e um número alvo, 
                retorne true se o número existir no array e
                false caso contrário. Exemplo: array [3, 6, 9], alvo 6  true
*/

/*
Lógica : percorrer o array comparando cada item com o número alvo. 
Se encontrar, retorna true. Se percorrer todo o array e 
não encontrar, retorna false.
*/

function existeNoArray(numeros, alvo) {
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] === alvo) { // compara o elemento atual com o número alvo
            return true; // retorna true se encontrar o número alvo no array (return dentro do if)
        }
    }
    return false; // retorna false se não encontrar o número alvo no array (return fora do for)
}
console.log(existeNoArray([3, 6, 9], 6)); // deve exibir true
console.log(existeNoArray([3, 6, 9], 5)); // deve exibir false


/* extra: Repare que o return true está DENTRO do if, dentro do loop: 
assim que encontra o valor, a função já para e devolve true, 
sem precisar terminar de percorrer o array. Se o for terminar inteiro sem nunca ter encontrado, o
código chega no return false de fora do loop
*/
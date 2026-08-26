/*
                ***** Exercício 8 : Dada uma palavra e uma letra, 
                retorne quantas vezes essa letra aparece na palavra.
                Exemplo: palavra "programacao", letra "a"  = 3
*/

// extra : Strign em Js pode ser tratada como um array de caracteres, 
// da para pegar cade letra pela posição, e também da para usar o length para saber o tamanho da string

/*
Logica: Percorrer a palavra caractere por caractere, comparar com a letra buscada, soma 1
no contador quando bater, e no final retorna o contador.
*/

function contarLetra(palavra, letra) {
    let contador = 0;

    for (let i = 0; i < palavra.length; i++) {
        if (palavra[i] === letra) { // compara cada letra da palavra com a letra buscada
            contador++; // se bater, soma 1 no contador
        }
    }
    return contador; // retorna o total de vezes que a letra aparece na palavra
}
console.log(contarLetra("programacao", "a")); // Saída: 3
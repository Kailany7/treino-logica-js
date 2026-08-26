/*
                ***** Exercício 10 : Dado um array de números e um valor limite, 
                retorne o primeiro número do array que seja maior que esse limite. 
                Se nenhum for encontrado, retorne null. Exemplo: array [2, 5, 9, 3, 12], limite 7 = 9
*/

/*
Logica: Percorrer o array, testar cada item com if, se for maior que o limite, retorna o item.
Se chegar no final do loop e não encontrar nenhum item maior que o limite, retorna null.
*/

function primeiroMaiorQue(numeros, limite) {
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > limite) { // se o número for maior que o limite, retorna ele
            return numeros[i];
        }
    } return null; // se não encontrar nenhum número maior que o limite, retorna null
}
console.log(primeiroMaiorQue([2, 5, 9, 3, 12], 7)); // Saída: 9


//Extra : Sempre que o problema pedir "retorne o primeiro item que atende tal condição"
// não precisa guardar um valor em uma variável,
//  pode retornar direto dentro do loop, 
// e se não encontrar nenhum item que atenda a condição, retorna null no final do loop.
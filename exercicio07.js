/*
                ***** Exercicio 7 : Dado um array de números, 
                retorne um novo array contendo apenas os números maiores que
                10. Exemplo: entrada [5, 12, 8, 20, 3] saída [12, 20]
*/

/*
Logica: criar um array novo vazio, percorrer o array original 
testando casda item com if, dar um PUSH nos números aprovados
*/

function maioresQueDez(array) {
    const resultado = []; // const, pois não vamos mudar o array, apenas adicionar elementos a ele
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 10) { // se o número for maior que 10, adiciona no array resultado
            resultado.push(array[i]); 
        }
    }
    return resultado;
}
console.log(maioresQueDez([5, 12, 8, 20, 3])); // Saída: [12, 20]


// Extra : Sempre que o problema pedir "retone os que atende tal condição"
// pensar num array vazio criado antes do loop, que vai receber (com push)
//só itens que atendem a condição.



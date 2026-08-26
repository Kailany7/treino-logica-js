/*
                ***** Exercício 9 : Dada uma string, retorne ela invertida. Exemplo: "claude" -- "edualc"
*/


// Extra: Invertida = for andando ao contrário, ou seja, pecorrer a string 
// de trás para frente, e ir adicionando cada letra em uma nova string.

/*
Logica: Criar uma string nova vazia, percorrer a string original 
do último caractere até o primeiro, adicionando cada caractere(letra) na string nova,
 e no final retorna a string nova.
*/

function inverterString(texto) {
    let invertido = ""; // string nova vazia para receber os caracteres invertidos
    
    for (let i = texto.length - 1; i >= 0; i--) { // quando i for maior ou igual a 0, decrementa i, quando chega -1, para o loop
        invertido += texto[i]; // adiciona cada caractere na string invertida
    }
    return invertido; // retorna a string invertida
}
console.log(inverterString("claude")); // Saída: "edualc"

//Extra:  for invertido : 
/* 
i = 5 → 5 >= 0 → verdadeiro -- continua
i = 4 → 4 >= 0 → verdadeiro -- continua
i = 3 → 3 >= 0 → verdadeiro -- continua
i = 2 → 2 >= 0 → verdadeiro -- continua
i = 1 → 1 >= 0 → verdadeiro -- continua
i = 0 → 0 >= 0 → verdadeiro -- continua
i = -1 → -1 >= 0 → falso    -- PARA
*/
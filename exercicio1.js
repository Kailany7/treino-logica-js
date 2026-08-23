/* 
                ***** Exercício 1 : Escreva um codigo que exiba no console
                todos os números de 1 até 10, um por vez.
*/

/*Lógica : preciso repetir uma ação (mostrar o número) 10 vezes,
mudando o valor a cada repetição. =  Usa um for com um contador (i)
que começa em 1, vai até 10, e aumenta 1 a cada volta. */


for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// ** para testar, digite no terminal: node exercicio1.js **

// EXTRA:
// COMO MONTAR UM FOR :
/* 
1. Escolher uma variável de controle -> geralmente i
2. Definir o valor inicial da variável de controle -> geralmente 0 ou 1 (aonde a repetição começa)
3. Definir a condição de parada -> até onde a repetição vai (ex: i <= 10)
4. Definir o incremento -> como a variável de controle vai mudar a cada repetição (ex: i++ = i + 1)
5. o que vai acontecer a cada repetição -> o que vai ser executado dentro do bloco do for (ex: console.log(i)) 
*/

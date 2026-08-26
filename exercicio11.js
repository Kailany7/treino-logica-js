/*
                    ***** Exercício 11 :  Dado um array de objetos representando 
                    alunos (com nome e nota), retorne apenas os alunos aprovados 
                    (nota maior ou igual a 7). 
                    Exemplo: [{nome: "Ana", nota: 8}, {nome: "João", nota: 5}]  --> [{nome: "Ana", nota: 8}]

*/

//Extra: Array de objetos é um array normal, mas cada elemento/item é um objeto. 
// objetos são representados por chaves {} e possuem propriedades (ex: nome, nota) e valores (ex: "Ana", 8).
// para acessar o valor que você quer testar, use item.propriedade (ex: item.nota ou item.nome)

/*
Lógica : Criar um array vazio, percorrer o array original, testar alunos.nota com if, 
da PUSH no objeto inteiro quando aprovado
*/

function alunosAprovados(alunos) {
    let aprovados = []; // array vazio para armazenar os alunos aprovados  

    for (let i = 0; i < alunos.length; i++) { // percorrer o array original
        if (alunos[i].nota >= 7) { // testar se a nota do aluno é maior ou igual a 7
            aprovados.push(alunos[i]); // se sim, adicionar o objeto inteiro ao array de aprovados
        }
    }

    return aprovados; // retornar o array de aprovados
}

const alunos = [
    { nome: "Ana", nota: 8 },
    { nome: "João", nota: 5 },
    { nome: "Maria", nota: 9 },
];

console.log(alunosAprovados(alunos)); 

//Extra: A logica do filtrar continua a mesma (push no array vazio), só que 
// agora comparando a propriedade nota do objeto, e guardando o objeto inteiro no array de aprovados.
# Treino de Lógica em JavaScript

Repositório de exercícios de lógica em JavaScript, usado para treinar
para provas e testes técnicos (ex: Xobin).

## Objetivo

Praticar resolução de problemas de lógica — arrays, loops, condicionais,
funções, strings — explicando o raciocínio por trás de cada solução, não só o código.

## Como rodar os exercícios

Cada exercício está em um arquivo `.js` separado. Para rodar:

```bash
node exercicio1.js
```

## Estrutura

Cada arquivo segue o padrão:

- Comentário com o enunciado do exercício
- Comentário explicando a lógica usada
- Código da solução
- Um `console.log` testando com o exemplo do enunciado

## Padrão de commits

```
exercicio-01: descricao curta (conceito usado)
```

Exemplo: `exercicio-02: somar array (for)`

## Lista de exercícios

### Guia principal (Xobin)
- [x] 1 — Mostrar números de 1 a 10 (for)
- [x] 2 — Somar todos os números de um array (for)
- [x] 3 — Contar quantos números pares existem (for)
- [x] 4 — Encontrar o maior número de um array
- [x] 5 — Encontrar o menor número de um array
- [x] 6 — Verificar se um número existe em um array
- [x] 7 — Retornar apenas números maiores que 10
- [x] 8 — Contar quantas vezes uma letra aparece em uma palavra
- [x] 9 — Inverter uma string
- [x] 10 — Encontrar o primeiro número maior que um valor determinado
- [x] 11 — Filtrar array de objetos por uma propriedade

### Questões complementares (lacunas)
- [ ] 12 — Dois radares: par de números que somam um valor alvo
- [ ] 13 — Espelho: verificar se é palíndromo
- [ ] 14 — Caixinhas com etiqueta: letra mais frequente
- [ ] 15 — Visita e pergunta: números em comum entre dois arrays
- [ ] 16 — Segurança em camadas: aprovação com regra composta (&& e ||)

## Conceitos praticados

### Já domino (versão com for)
- [x] Loops (`for`)
- [ ] Loop dentro de loop (percorrer com dois índices)
- [x] Condicionais (`if / else`)
- [ ] Condições compostas (`&&`, `||`)
- [x] Variável acumuladora (soma, contador)
- [x] Variável provisória (maior/menor)
- [x] Retorno antecipado (`return` dentro do loop)
- [x] Arrays (percorrer, comparar posições)
- [ ] Strings (percorrer caractere por caractere)
- [ ] Objeto como contador (`for...in`)
- [ ] Array de objetos (acessar propriedade com `.`)

### Ainda não estudei (métodos de array/string)
- [ ] `reduce`
- [ ] `filter`
- [ ] `map`
- [ ] `find`
- [ ] `some`
- [ ] `every`
- [ ] `includes`
- [ ] `forEach`
- [ ] `split` / `join` / `reverse`
- [ ] `Math.max` / `Math.min` com spread (`...`)

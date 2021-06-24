# learning-rxjs
- Busca pelo aprendizado e domínio da lib RxJS para Programação Reativa(Reactive Programming) 


> Após aprender bastante com o framework Angular, desta vez busco aprendizado de uma lib muito utilizada - RxJS.<br>
Neste repo, se encontra minhas divagações e argumentos sobre meu caminho rumo ao domínio e entendimento desta fabulosa lib.
<br>#functions #asynchronous #promises

## Programação Assíncrona
### Vantagens
- Tarefas como esperar uma resposta de algum servidor ou o retorno de operações no Banco de dados não devem travar a aplicação.
- o Poder da inversão de controle onde ao invés de ter unicamente a aplicação chamando funções, uma função callback pode chamar a aplicação de volta

### Desvantagens
- Dificuldade em determinar o estado (state) da aplicação
- É dificil determinar quais tarefas (tasks) terminam primeiro e em que ordem
- 
## O que é RxJS
1. Segundo a definição oficial [RxJS.dev](https://rxjs.dev/guide/overview): É uma biblioteca para compor aplicações asíncronas e baseada em eventos.

### RxJS Types
- Main Type
  - Obsevable > Representa um evento ou colecão futura
- Sattelites Types:
  - Observer > Uma coleção de callbacks que ficam de olho nos eventos disparados pelo Observable
  - Subscriptions > Representam a execução  de um Observable - muito bom para cancelar a execução
  - Schedulers > Despachantes centrais utilizados no controle de concurrência
  - Subjects
- Operators > funções para lidar com coleções e operadores
  - map
  - filter
  - reduce
  - every
  - ...

## Let`s Code
### Exemplos iniciais
[Exemplo 1 - log no console ao clicar](example1/index.html)
[Exemplo 2 - Calculadora](example2/index.html)

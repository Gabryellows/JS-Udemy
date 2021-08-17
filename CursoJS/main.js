// console.log é a função "PRINT" do javascript
console.log('Meu nome é "GABRIEL". Estou aprendendo javascript as 18:30 da noite.');
// Digitar "//" para fazer comentarios.
//================================================//
// Para fazer comentarios em bloco usa-se "/* */"
/**
 * Comentario em bloco
 * bem loco
 * e doido
 * irrraaa
 */
console.log('Não executar a linha de baixo.')
// console.log('Fui ignorado.')
console.log('Não executar as proxima linhas.')
/*
console.log('Nãoooo')
console.log('fui')
console.log('Bloqueado.')
*/
//=======================================================================//
console.log('Olá mundo.');
console.log('Este trecho será exibido no console do navegador.');
// Mensagem de blocking, no caso até o usúario apertar em ok.
// Função "alert". Funciona somente em NAVEGADOR.
/*
*alert('Olá mundo.');
*alert('Te amo morzinho! <3 <3 <3');
*/
//======================================================================//
// ***********************VARIAVEIS COM LET**************************** //
//======================================================================//
let nome = 'Gabriel';
let ola = 'Olá mundo.';
let nome_1 = 'Larissa';
//----------------------------------------------------------------------//
let qualquer; // Declara a variável.
qualquer = 'Qualquer valor' // Atribui um valor a variavel.
console.log(qualquer); // Print da variavel.
//----------------------------------------------------------------------//
console.log(nome, 'Nasceu em 1998.');
console.log(nome_1, 'Nasceu em 1999.');
console.log('Em 2021', nome, 'conheceu', nome_1)
// Não podemos criar uma variavel com palavras reservadas "let let" // 
// Variaveis precisam ter nome significativo!!!!! IMPORTANTE !!!!! //
// Não se começa variaveis com número ou letra maiscula //
// Variaveis não podem conter espaço ou traços " " "-" //
// Utilizamos camelCase e as variaveis são Case-sensitive //
// Não podemos redeclarar variáveis com let. //
// Let server para armazenar a variavel na memória. //
// Sempre é o ultimo valor que permanece. //
// NÃO UTILIZAR VAR SOMENTE LET. //
/* Constante não alteram seu valor, elas precisam ser criadas e utilizadas.
 *diferente de LET que pode armazenar na memoria e depois ser usada.*/
// Utilizar CONST //

const primeiroNum = 5;
const segundoNum = 10;
const resultado = primeiroNum * segundoNum;
const resultadoTriplicado = resultado * 3;
let resultadoDuplicado = resultado * 2;
resultadoDuplicado = resultadoDuplicado + 5;
console.log(resultado)
console.log(resultadoDuplicado)
console.log(resultadoTriplicado)
// Para saber o tipo de dado armazenado na variavel utiliza-se "console.log(typeof 'NOME DA VARIAVEL');"
console.log(typeof primeiroNum);
// String e Numbers se concatenam. // EX.:
const abc = 'ABC';
const num = 510;
resultados = abc + num;
console.log(resultados);
// exercicio const e let //
const nomeCliente = 'Gabriel';
const sobrenomeCliente = 'da Silva Leal';
const idadeCliente = 23;
const pesoCliente = 97;
const alturaCliente = 1.8 + '0';
/**
 * Constantes foram usadas já que não havera alteração dos valores
 * sendo um valor fixo.
 */
let anoNascimento;
anoNascimento = 2021 - idadeCliente;
let indiceMassaCorporal;
indiceMassaCorporal = pesoCliente / (alturaCliente * alturaCliente);
// Já aqui, utilizamos let, por que podera haver alteração dos valores; //
console.log('Nome:', nomeCliente, sobrenomeCliente);
console.log('Nascido em:', anoNascimento);
console.log('Idade:', idadeCliente, 'anos');
console.log('Peso:', pesoCliente, 'kg');
console.log('Tem altura de:', alturaCliente, 'M');
console.log('Seu imc é de:', indiceMassaCorporal);

// TEMPLATE STRINGS //
console.log(`O cliente ${nomeCliente} ${sobrenomeCliente} tem ${idadeCliente} anos, nasceu em ${anoNascimento}.`);
console.log(`Sua altura é de ${alturaCliente} metros e seu peso é de ${pesoCliente} kg.`);
console.log(`Seu IMC tem o valor de ${indiceMassaCorporal}`);
/** Essa é maneira mais legivel e fácil de escrever as frases junto com as váriaveis
 * já que não a necessidade de usar o sinal de + para concatenar as frases com variavel.
 * além de que fica mais clean o codigo, sempre que possivel utilizar este metodo!!
 * "`para as strings`" e "${para as váriaveis}" porém, fica tudo dentro do sinal de crase
 * `fulano de tal tem idade de ${variavelIdade} anos.`; 
 * :)
*/

// DIFERENÇAS ENTRE VAR E LET //
var nomeVar = 'Gabriel';
var nomeVar = 'Leonardo';
console.log(nomeVar);
/**O problema do VAR é que ele permite a criação de variáveis com o mesmo nome
 * podendo assim, causar confusão no código já que, vai ser o ultimo valor atribuido
 * a ser declarado pelo script.
 * Por esse motivo não se utiliza mais VAR e sim LET e CONST para ter um algoritmo bem estruturado
 * e sem possibilidade de erros.
 */
nomeSemNada = ('Não se cria variaveis sem LET ou CONST, por que isso faz a variável ser global')
// E isso pode dar problemas nas outras váriaveis existentes. //

//================================TIPOS DE DADOS PRIMITIVOS=========================================//
const nome1 = 'Gabriel'; // String
const nome2 = "Leonardo"; // String
const nome3 = `Vanessa`; // String com template
const num1 = 10; // Number
const num2 = 10.52; // Number
let nomeAluno; // Váriavel com valor undefined = sem valor. 
const sobrenomeAluno = null; // Valor nulo = não aponta pra nenhum local da memória.
//utilizamos "null" para que essa variável não tenha valor na memória.
//Diferente de uma váriavel declarada automaticamente com valor undefined.
// onde podemos depois declarar ela e atribuir algum valor.
const boolean = true; // ou FALSE.
// Valor booleano onde temos TRUE ou FALSE. Utilizamos ele quando vamos fazer algo lógico.
// por exemplo, se o aluno atingir a média o valor vai ser TRUE, caso fiquei abaixo da média vai ser FALSE.
// STRINGS, NUMBER, UNDEFINED, NULL, BOOLEAN, SYMBOLL//


//=================================OPERADORES ARITMETICOS, DE ATRIBUIÇÃO E INCREMENTO=================================//
/**
 * Aritméticos:
 *  '+' Adição e Concatenação
 *  '-' Subtração
 *  '/' Divisão
 *  '*' Multiplicação
 *  '**' Potenciação 
 *  '%' Resto da divisão
 *  1º ()
 *  2º **
 *  3º *, / e %
 *  4º + e -
 * Incrimento:
 * ++ Valor de incrimento, só funciona em LET. Adiciona sempre +1 ao valor inicial.
 * pode ser adicionado pré ou pós da variável. Pós ele executa primeiro o valor e depois incrimenta
 * já no pré ele incrimenta o valor e depois executa. EX:
 */
let contador = 1;
console.log(contador++); // valor = 1
console.log(contador); // valor = 2 após ter incrimentado
console.log(++contador); // valor = 3 pré incrementado e executado.
/**
 * -- Valor de decremento, remove um valor.
 * Sempre pedir valor de incrimenmto antes de digitar console.log() EX:
 * let contador = 1
 * contador++;
 * console.log(contador);
 * Também é possivel escolher o quanto tu quer incrimentar ou descrementar. 
 * 
 * Operadores de Atribuição:
 * São sempre postos antes do sinal de atribuição "="
 * EX:
 */
let contador2 = 0;
contador2 += 2; // contador = contador + 2;
contador2 *= 2; // contador = contador * 2;
contador2 /= 2; // contador = contador / 2;
contador2 -= 2; // contador = contador - 2;
console.log(contador2)
/** NaN - Not a Number 
 * não multiplica, dividi ou diminui numbers com strings.
 * Porém, o javascript corrige caso ponha um número dentro de uma string.;
 * parseInt('5') retorna a string '5' para um valor númerico inteiro 5.
 * parseFloat("5.2") retornar a string "5.2" para um valor decimal 5.2.
 * Number('5') força o número dentro da string virar number.
 * *************************PORÉM*************************
 * NÃO TORNA STRING 'EXEMPLO' EM NÚMERO, OCORRENDO O ERRO DE NaN.
*/
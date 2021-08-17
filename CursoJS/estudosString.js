//   indices  =  0123456781901112113415161718 caracteres da palavra "Um texto"
let umaString = "Gabriel da Silva Leal";
// Utiliza-se [] para pegar um elemento de um determinado indice.
console.log(umaString.toLowerCase()); // pode se usar .charAt() também.
 // também tem a função .concat() para concatenar, porem, n é muito utilizado.
 // para descobrir onde uma palavra começa basta usar .indexOf('Palavra')
 // similar ao indexOf tem o lastIndexOf que no caso começa de trás pra frente.
 // lenght é a quantidade de caracteres.
 /**.slice()
  * serve para fatiar a string começando de determinado indice
  * e adicionando sempre 1 a mais para ter a palavra completa
  * por exemplo:
  * indices       =  0123456789...
  * let umaString = 'Um rato maluco'
  * agora tu quer só a palavra rato.
  * console.log(umaString.slice(3, 7))
  * printa rato.
  * pode usar menos "-" e o indice para pegar a frase pelo final.
  * .split
  * serve para dividir a string
  * .spli('espaço para pegar todos os arrays da strings',
  * "numeros de arrays que tu quer que apareça.(opcional)") 
  */
 // para deixar a string em maisculo basta usar .toUpperCase;
 // para deixar a string miniscula basta usar .toLowerCase;
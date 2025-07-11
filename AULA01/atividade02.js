
//1  - Crie um algoritmo que exiba na tela (terminal) a mensagem "Olá Mundo".
 console.log('Olá Mundo!')

//2  - Crie um algoritmo que exiba na tela (terminal) seu nome. Por exemplo: "Olá, João Paulo."


nome = 'João Paulo'

console.log("ola" + nome)


//3  - Crie um algoritmo que exiba na tela (terminal) sua idade. Por exemplo: 17.
idade = 54

console.log('idade = ' + idade)

//4  - Crie um algoritmo que exiba na tela (terminal) (em linhas separadas) seu nome e sua idade.
dados_pesoais = [idade, nome]

for (i in dados_pesoais){
    console.log(dados_pesoais[i])
}


//5  - Crie um algoritmo que exiconsliba na tela (terminal) (na mesma linha) seu nome e sua idade.

console.log(nome + ' ' + idade )


//6  - Crie um algoritmo que exiba na tela (terminal) a soma de dois números inteiros.

console.log( "soma de dois números inteiros.\n" + 7+58)


//7  - Crie um algoritmo que exiba na tela (terminal) a subtração de dois números inteiros.

console.log('subtração de dois números inteiros \n'+ (45 - 30))


//8  - Crie um algoritmo que exiba na tela (terminal) a multiplicação de dois números inteiros.

console.log('a multiplicação de dois números inteiros\n' + (89 * 6))

//9  - Crie um algoritmo que exiba na tela (terminal) a divisão de dois números inteiros.

console.log('a divisão de dois números inteiros\n' + (89 / 6))



//10 - Crie um algoritmo que exiba na tela (terminal) o resto da divisão de dois números inteiros.

console.log('o resto da divisão de dois números inteiros\n' + (89 % 6))

//12 - Crie um algoritmo que exiba na tela (terminal) o quadrado de um número inteiro.

lista = [50, 52, 69, 98]
console.log("exiba na tela (terminal) o quadrado de um número inteiro")
for(i in lista){
    console.log(lista[i])
    
}


//14 - Crie um algoritmo que exiba na tela (terminal) o tipo de uma variável cujo valor atribuído é "jpaulo@infinityschoool.com.br".
email = "jpaulo@infinityschoool.com.br"

console.log(typeof(email))

// desafio

// Crie um algoritmo que recebe as seguintes informações:
//  o nome, idade, a fruta favorita e se o usuário é ou não aluno da Infinity School.
//  Imprima os valores no seguindo o exemplo:
//  Se as informações forem: "João", 34, "banana", as informações devem aparecer dessa forma no terminal:
//  Nome: João
//  Idade: 34
//  Fruta favorita: banana
//  Aluno Infinty: Sim  


let usuário1 = prompt('digite seu nome ')
let idade1 = prompt("digite sua idade")
let fruta_favorita = prompt('qula a sua fruta favorita')
let Ealuno = prompt('Você e aluno da Innfinity School')



console.log('nome :' +usuário1 + '\n  idade :' + idade1 + '\n fruta favorira '+  fruta_favorita + '\n Aluno infinity: ' + Ealuno)
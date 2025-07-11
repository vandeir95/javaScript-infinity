// Atividade 04
// Crie um script que contenha um array de números e utilize o loop for
// para percorrê-lo. Para cada número no array, verifique se ele é par ou
// ímpar e exiba uma mensagem no console indicando o resultado.

// Objetivo:
// Praticar o uso do loop for para percorrer arrays e aplicar lógica
// condicional para verificar se os números são pares ou ímpares.
console.log('ATIVIDADE 01--------------------------------------------')
const numeros = [1,3,66,8,90]

for (let i = 0; i < numeros.length; i++){
    if (numeros[i] %2 == 0 ){
        console.log(numeros[i])
        
    }
}


// Atividade 05
// Crie um script que contenha um array de nomes e utilize o loop for...of
// para percorrê-lo. Para cada nome no array, exiba uma mensagem de
// boas-vindas personalizada no console.

// Objetivo:
// Praticar o uso do loop for...of para percorrer arrays e exibir mensagens
// personalizadas.


console.log('ATIVIDADE 02--------------------------------------------')
const nomes = ['ana','beto','jose']


for (const nome of nomes){
    if (nome == "ana" ){
        console.log('seja bem vinda',nome)
    }

    if (nome == 'beto' ){
        console.log('boa tarde ',nome)
    }

    if (nome == "jose" ){
        console.log('olá ',nome)
    }
}
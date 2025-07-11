// declare 4 variaves d etipos diferentes 

// variavetipo string

let nome = "vandeir"


//Variável do tipo number, mas que é um número inteiro:
let idade = 16
//Variável do tipo number, mas que é um número real:
let altura = 1.75

//Variável do tipo booleano;

aposentado = false

peso =  60

apresentacao = 'Meu nome ' + nome + ' tenho  ' + idade + ' anos '


console.log(apresentacao)

function IMC (altura, peso){
        IMC = peso / (altura**2)
    return IMC
}


console.log("Meu IMC e " + (IMC(1.8,70)))


let usuário1 = prompt('digite seu nome ')
console.log(usuário1)
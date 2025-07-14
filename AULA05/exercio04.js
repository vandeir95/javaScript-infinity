
let n = 20

var lista = []
let i = 0

while(i < n ){

    lista.push(i)

    i++
}


console.log(lista)


console.log('função filter')
const result = lista.filter((lista) => lista % 2 == 0);

console.log(result)


console.log('numero ao quadrado')
const numerosDobrados = lista.map(numero => numero * numero);



console.log(numerosDobrados)



console.log('redunce soma array')

const soma = numerosDobrados.reduce((acumulador, numero) => acumulador + numero, 0);

console.log(soma)
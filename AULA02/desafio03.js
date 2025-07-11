// 🧠 3.  Solicite ao usuario um numero e veja se é par ou ímpar

let numero = Number(prompt('digite um numero'))


if (numero % 2 == 0 & numero > 0){
    console.log("par")
}
else if (numero == 0){
    console.log('zero')
}
else if (numero % 2 !== 0){
    console.log('numero impar')
}




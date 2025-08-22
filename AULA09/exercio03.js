
function realizarOperacao(callback){

    let n1 = Number(prompt("Digite o primmeiro numero"))
    let n2 = Number(Number("Digite o segundo numero"))
    callback(n1,n2)


}

soma =(n1,n2) =>{
    console.log(n1 + n2)
}


subtracao = (n1,n2) =>{
    console.log(n1-n2)
}




multiplicacao = (n1, n2) =>{
    console.log(n1 * n2)
}

realizarOperacao(soma)


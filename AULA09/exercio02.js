function realizarOperacao(callback){

    let n1 = 10
    let n2 = 20
    callback(n1,n2)


}




function soma(n1,n2){
   
    console.log( n1 + n2)
}


realizarOperacao(soma)



const aluno = {
    nome : "vandeir", 
    idade : "24",
    notas : [8,9,5]
}


let {nome,idade,notas} = aluno



function calcularMedia(notas){

    const soma = notas.reduce((acumulador, nota) => acumulador + nota, 0);

    const quantidade = notas.length

      return soma/ quantidade



}


notas.length






console.log(calcularMedia(notas))

function adicionarNota(notaNova){
    const novasNotas = [...notas, notaNova]

    notas = novasNotas
}


function verificarSituacao(){
    const situacao = calcularMedia(notas)
    if (situacao >= 7){
        console.log( `Parabnes voce foi aprova, sua media foi ${situacao} \n `)
        console.log("sua notas foram ")
        let i = 1
        for(const nota of notas ){
            console.log(`${i++}° ${nota}`)

        }

       
        
    }

    else{
        console.log( `Sinto muinto voce foi reprovado, sua media foi ${situacao}, e não atingio a media necessaria \n `)
        console.log("sua notas foram ")
        let i = 1
        for(const nota of notas ){
            console.log(`${i++}° ${nota}`)

        }

    }
}


calcularMedia(notas)

adicionarNota(9)

console.log(
calcularMedia(notas))

console.log(notas)


verificarSituacao()
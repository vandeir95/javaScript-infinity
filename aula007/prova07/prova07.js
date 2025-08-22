// * Adicionar Nomes:
//  - Permita ao usuário adicionar nomes à lista utilizando o método push().
//  - Exiba a lista atualizada no console.




 var adicionar = nome =>{

            lista.push(nome)

            console.log(lista)

            }




// * Filtrar Nomes:
// - Use o método filter() para criar uma nova lista contendo apenas os nomes que começam com uma letra específica fornecida pelo usuário.
//  - Exiba os nomes filtrados no console.


function filtrarNomesPorInicial (nomes) {
    const letra = prompt("digite a inicial do nome ").trim().toLowerCase()
    const nomesFiltrados = nomes.filter((nome)=> nome[0].toLowerCase() == letra )

    console.log("nome filtrados",nomesFiltrados)

}
 
// * Buscar um Nome Específico:
// - Use o método find() para localizar o primeiro nome na lista que corresponde exatamente a um valor fornecido pelo usuário.
//  - Exiba o resultado no console ou uma mensagem informando que o nome não foi encontrado.

function buscarNome (nomes){
    const nome_digitado = prompt("digite o nome").trim()
    const busca = nomes.find((nome)=> nome === nome_digitado )
    if (busca){
         console.log(`O nome foi encontado `)

    }
    else{
        console.log(`Não foi encontado `)
    }
    
}

// const nomeDigitado = "vandeir"

// const buscarNome = nomes.every((nome)=>{
//     return nome = nomeDigitado
// })



// if (buscarNome == true){

//     return nome


// }


// else{
//     console.log("nome não encontrado")
// }

// * Transformar Nomes:
// - Utilize o método map() para transformar todos os nomes da lista em letras maiúsculas.
//  - Exiba a nova lista no console.


function transforma (lista){

    const maiuscula = lista.map((nome) => nome.toUpperCase())

    return console.log(maiuscula)

}



const nomes = ["vandeir","jose", "maria"]

console.log(transforma(nomes))

// const maiuscula = nomes.map((nome)=>{
//     return  nome.toUpperCase()

// })


// * Verificar Condições:
//  - Use o método every() para verificar se todos os nomes têm mais de três caracteres.
//  - Exiba a resposta (true ou false) no console.


function tamanhaMin(lista){
    const minLetras = lista.every((nome)=> nome.length > 3 )


    return console.log(minLetras)

}

// const minLetras = nomes.every((nome)=>{
//     return nome.length > 3
// })







const lista = []

while(true){

    const acao = Number( prompt(
        "Escolha uma ação:\n1 - adicionar nome \n2 - Filtar nomes por inicial \n3 - buscar nome\n4 - verificar se os nome respeita o tamanho min  de 3 caract \n5 -transforma lista  \n0 - Sair"
    ))

        if (acao == 0){

            break
        }

        if (acao == 1 ){

            const nome = prompt("digite o nome")

            adicionar(nome)
            

        }


        if (acao == 2){
            filtrarNomesPorInicial(lista)


        }

        if (acao == 3) {
            buscarNome(lista)
        }


        if (acao == 4){
            tamanhaMin(lista)

        }


        if (acao == 5){

            transforma(lista)

        }


        





}    
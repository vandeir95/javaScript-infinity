// [JSIA-A05]  Crie um programa em que permita ao usuário gerenciar uma lista de tarefas usando arrays e 

// loops. O programa deve oferecer as opções de adicionar, remover, listar e concluir 
// tarefas, enquanto manipula o array de tarefas e utiliza loops para percorrê-lo.

// Requisitos do Projeto:
// * Adicionar Tarefas:
//  - Solicite ao usuário o nome de uma tarefa e adicione-a ao final do array usando o método push().

// * Listar Tarefas:
//  - Use um loop for ou for...of para percorrer o array de tarefas e exibi-las com seus índices.

// * Remover Tarefas:
//  - Solicite ao usuário o índice da tarefa que deseja remover e utilize o método splice() para removê-la do array.

// * Concluir Tarefas (Opcional):
// - Peça ao usuário o índice de uma tarefa e marque-a como concluída, modificando a string para algo como "✅ Lavar a louça".

// * Interação Contínua:
//  - Utilize um loop while para continuar solicitando ações do usuário (adicionar, listar, remover, concluir) até que ele escolha sair.



alert('ola')

let listaTarefa = []


    

while (true){

    

    let opcao = Number(prompt('qual tarefa voce deja realizar'))
    console.log(`1 - adicionar tarefa \n  2 - listar tarefas \n 3- remover tarefa \n 4 - concluir tarefa  \n 5 sair`)

    if (opcao === 1){
        var descricao =  prompt('Digite nome  da tarefa')
        listaTarefa.push({ descricao: descricao, concluida: false })
        console.log('tarefa adicionada')

    }

    if(opcao === 2 ){
        
            console.log(listaTarefa)

        
        
    }

    


    if(opcao === 3 ){
        var posicao = Number(prompt('digete o index da tarrefa que você deeja remover '))
        listaTarefa.splice(posicao ,1)
    }

 



    
    if (opcao === 4) {
        let i = Number(prompt('Índice da tarefa para concluir:'))
        if (listaTarefa[i]) {
            listaTarefa[i].concluida = true
        } 
            }

            


    if (opcao === 5){

        break

    }

}




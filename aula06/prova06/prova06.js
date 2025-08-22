const tarefas =  []


function callback (callback){

    console.log("realizando tarefa")
    callback()

}


const adicionarTarefa = function(tarefa){
    
    return tarefas.push(tarefa)
}


let listarTarefas = () => {
    console.log("\nLista de tarefas:");
    tarefas.forEach((t, i) => {
        console.log(`${i} - ${t.descricao} [${t.concluida ? "Concluída" : "Pendente"}]`);
    });
};



function gerenciarTarefas(indice,callback){
    if (indice >0 && indice < tarefas.length){
        callback(indice)
    }else{
        console.log("indice invalido")
    }
        
}


let removerTarefa = (indice)=>{
    console.log(`Tarefa removida: "${tarefas[indice].descricao}"`);
    tarefas.splice(indice, 1);

}


let atualizarTarefa = (indice) => {
    const novaDescricao = prompt("Digite a nova descrição da tarefa:");
    tarefas[indice].descricao = novaDescricao;
    console.log(`Tarefa atualizada para: "${novaDescricao}"`);
};

let concluirTarefa = (indice) => {
    tarefas[indice].concluida = true;
    console.log(`Tarefa concluída: "${tarefas[indice].descricao}"`);
};

// --- Simulação de interação com usuário ---
while (true) {
    const acao = prompt(
        "Escolha uma ação:\n1 - Adicionar tarefa\n2 - Listar tarefas\n3 - Remover tarefa\n4 - Atualizar tarefa\n5 - Concluir tarefa\n0 - Sair"
    );

    if (acao === "0") break;

    switch (acao) {
        case "1":
            const tarefa = prompt("Digite a descrição da tarefa:");
            adicionarTarefa(tarefa);

            
            break;
        case "2":
            listarTarefas()
            break;
        case "3":
            listarTarefas();
            const indiceRemover = parseInt(prompt("Digite o índice da tarefa para remover:"));
            gerenciarTarefas(indiceRemover, removerTarefa);
            break;
        case "4":
            listarTarefas();
            const indiceAtualizar = parseInt(prompt("Digite o índice da tarefa para atualizar:"));
            gerenciarTarefas(indiceAtualizar, atualizarTarefa);
            break;
        case "5":
            listarTarefas();
            const indiceConcluir = parseInt(prompt("Digite o índice da tarefa para concluir:"));
            gerenciarTarefas(indiceConcluir, concluirTarefa);
            break;
        default:
            console.log("Opção inválida!");
    }
}
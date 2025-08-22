function processarDaodos(callback){
    console.log("Processando dados...")
    callback()
}



function exibirMensagem(){
    console.log("Dados processados")
}


processarDaodos(exibirMensagem)
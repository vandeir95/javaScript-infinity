// 1
// [JSIA-A03]  Crie um programa em JavaScript que combine o uso de while (true), for, e for...of para realizar operações iterativas. 
// O programa deve solicitar entradas do usuário, processar os dados e exibir resultados em diferentes formatos.

// Requisitos do Projeto:
// * Coleta de Dados com while (true):
//  - Solicite ao usuário uma sequência de nomes (ou qualquer outro tipo de dado) usando prompt().
//  - O loop deve continuar até que o usuário insira uma palavra específica como "sair". Use break para encerrar o loop.

// * Processamento com for:
//  - Após coletar os dados, use um loop for para exibir os dados com índices. Exemplo: 1: Nome1

// * Exibição com for...of: 
//  - Use um loop for...of para exibir cada nome individualmente com uma mensagem personalizada, como "Bem-vindo(a), Nome!".


alert('ola mundo')

let listaNome = []


    while (true){

    nome = prompt('digite um nome ')
   
    listaNome.push(nome) 

   

    if (nome == "sair") {
         break
        }
       


    }

listaNome.pop() // Remove o último item "sair" da lista     


 for (nome of listaNome){
    
    console.log(`"Bem-vindo(a), ${nome}!"`)

  }
    
    


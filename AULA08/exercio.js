
class Carro{
    constructor(nome, marca, ano){
        this.nome = nome 
        this.marca = marca
        this.ano = ano
    }
    dados(){
       return (`nome ${this.nome} marca ${this.marca} ano ${this.ano}`);



    }

    Vidros(funcao){
        if (funcao == "abrir"){

            return "Abrindo Vidros"

        }

        else if (funcao == "fechar"){

            return "fechando vidros"

        }

        else {
            return "função invalida "
        }
         
    }

}

let corrolla = new Carro('corolla','toyta',2022)


console.log(corrolla.dados())



let {nome ,marca} = corrolla

console.log(marca)

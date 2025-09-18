// [JSIA-A08]  Explique o que são objetos literais em JavaScript e mostre um 
// exemplo prático de um objeto chamado aluno, que contenha as seguintes propriedades e métodos:

// nome (string)
// notas (array de números)
// calcularMedia() (método que retorna a média das notas)
// Além disso, utilize a desestruturação para acessar o nome do aluno, e o 
// spread operator para adicionar uma nova nota ao array original.


class  Aluno {
    constructor(nome,) {

        this.nome = nome,
        this.notas = []
        
    }

     exibirNotas(){
        return this.notas
     }

      calcularMedia() {

        const soma = this.notas.reduce((acumulador, numero) => acumulador + numero, 0);
        const tamanhoArry = this.notas.length

        const media = soma / tamanhoArry

        return `a media de ${this.nome } foi de ${media}`

        
    }


    publicarNota (nota){

       
        this.notas.push(nota)
      
        

        

    }


}




 const aluno01 = new Aluno("Alice");


aluno01.publicarNota(5)
aluno01.publicarNota(10)
aluno01.publicarNota(5)

console.log(aluno01.calcularMedia())


const notas = [5,3,6]


const soma = notas.reduce((acumulador, numero) => acumulador + numero, 0);
const tamanhoArry = notas.length

const media = soma / tamanhoArry


console.log(media)
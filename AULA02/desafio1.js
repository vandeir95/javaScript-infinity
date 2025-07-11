// 🧠 1. Verificar se o aluno foi aprovado, em recuperação ou reprovado levando em conta a média do mesmo.
// Aprovado se média maior ou igual 7, recuperação se média menor que 7 e reprovado se a média for menor que 5.



const Aluno = prompt('digite o nome no aluno')
let matematica = Number(prompt('digite a nota em matematica'))
let fisica = Number(prompt('digite a nota em fisica'))
let geografia = Number( prompt('digite a nota em geografia'))


var somaNota = matematica + fisica + geografia

var media_nota = (somaNota) / 3

if (media_nota >= 7) {
    console.log('aluno aprovado', media_nota)

}

else if (media_nota < 5) {
    console.log('reprovado', media_nota )
}

else {
    console.log('recuperação', media_nota)

}
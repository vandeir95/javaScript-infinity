// 🧠 2. Solicite ao usuario uma idade e classifique da seguinte forma:
// Saída: criança (0–12), adolescente (13–17), adulto (18–59), idoso (60+)

let idade = Number(prompt('Digite a sua idade'))

if (idade <= 12){
    console.log('Criança')
}

else if(idade <= 17) {
    console.log('Adolecente')

}

else if (idade <= 59){
    console.log('Adulto')
}
else if (idade > 60){
    console.log('idoso')
}


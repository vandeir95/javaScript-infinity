
// 🧠 4. Um Cinema tem o ingresso com o valor de R$30,00. Verifique o preço de ingresso levando em conta 
// o desconto de idade < 12 ou ≥ 60 → 10%. Caso contrário, preço cheio


let idade = Number(prompt('digite a idade do cliebte'))

var ingresso = Number(prompt('digige o valor do ingresso'))

if (idade < 12 || idade >= 60){
     

    console.log('valor do ingresso', ingresso *= 0.9)
}

    else{
        console.log('valor do ingresso', ingresso)
    }

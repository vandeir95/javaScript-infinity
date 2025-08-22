numeros = [1,2,36,5]


const soma = numeros.reduce((acumular, correntValue) =>{
    return acumular  + correntValue
}
)
console.log(soma)


const multiplicacao = numeros.reduce((acumular,correntValue)=>{
     return acumular * correntValue
})


console.log(multiplicacao)



const dobrados = numeros.map((valor)=>{
    return valor * 2
})



console.log(dobrados)
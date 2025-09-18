const numeros = [1,3,5,7,9]

const impares = numeros.every((numero)=>{
      
    return numero % 2 !== 0
})


console.log(impares)
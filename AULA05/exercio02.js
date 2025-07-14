let idade = Number(prompt('digite sua idade '))

if (idade < 18){

    console.log('seu deconto e 30%')
}

else if (idade > 60){


    console.log('seu desconto e de 30% ')

}


else{
    console.log('Voce nao teve desconto')
}



const hoje = new Date();
// console.log(hoje); // Exibe a data e hora atual

// Métodos para obter informações específicas
const ano = hoje.getFullYear();
const mes = hoje.getMonth() + 1; // Mês começa em 0 (janeiro)
const dia = hoje.getDate();
const hora = hoje.getHours();



 if (hora == 12 && hora < 13 ){

    console.log('horario de almoço')
}

else if (hora > 7 && hora < 19){
    console.log('a loja esta aberta ')
}



else if ( hora > 19 ){
    console.log('a loja esta fechada ')
}




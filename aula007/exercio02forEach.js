const numbers = [58,17,99,454,50,6,0]


numbers.forEach((number)=>{

    if (number == 0){
        console.log(`o nume ${number} e zero`)
    }

   else if (number %2 == 0  ){

        console.log(`o nume ${number} e par`)
    }

    else{
        console.log(`o nume ${number} e impar `)
    }
})

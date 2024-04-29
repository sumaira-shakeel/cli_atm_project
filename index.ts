#! /usr/bin/env node

import inquirer from "inquirer"
let myBalance = 20000; //dollars
let myPin =2234;
let pinAnswer =await inquirer.prompt(
    [
        {
    name:"pin",
    type:"number",
    message:"Enter your pin code"
}
]
);
if(pinAnswer.pin === myPin){
    console.log('Correct pin code!');
    let operationAns = await inquirer.prompt(
        
        [
            {
                name:"operation",
                type:"list",
                message:"Please selact an option",
                choices:['With draw','check balance']

    }
]);
if(operationAns.operation === 'With draw'){
    
    let amountAns = await inquirer.prompt([{
        type:"number",
        name:"amount",
        message:"Enter your amount:"
    } ]);
    if(amountAns.amount > myBalance){
        console.log("Insufficient balance");
    }
    //assignment operators
    else{

    myBalance -= amountAns.amount;
    console.log(`your remaining balance is:  ${myBalance}`)

    }




}else if(operationAns.operation === 'check balance'){
    console.log(`Your remaining balance is: ${myBalance}`);
}

}


else{
    console.log('Incorrect pin code!!');
}

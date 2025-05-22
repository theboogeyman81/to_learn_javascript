 // 1. deposit some money
 // 2. determine number of lines to bet on 
 // 3. colloect a bet amount 
 // 4. spin the slot machine
 // 5. check if the user won 
 // 6. give the user their winnings
 // 7. play agian
 
 const prompt = require("prompt-syn")()

const deposit = () => {
        while(true){
        const depositAmount = prompt("Enter a deopsit amoint: ")
        const numberDepositAmount = parseFloat(depositAmount)

        if(isNaN(numberDepositAmount) || numberDepositAmount <= 0){
            console.log("Ivalide deposit amount , try again");
        }else{
            return numberDepositAmount;
        }
    }

}

const get_bet_amount = (balance,lines) => {
    while(true){
        const bet = prompt("Enter the total bet: ")
        const numberbet = parseFloat(bet)

        if(isNaN(numberbet) || numberbet <= 0 || numberbet > balance  / lines){
            console.log("Ivalide deposit amount , try again");
        }else{
            return numberbet;
        }
    }

}

const get_number_of_lines = () => {
        while(true){
        const lines = prompt("Enter a deopsit amoint: ")
        const numberlines = parseFloat(lines)

        if(isNaN(numberlines) || numberlines <= 0 || numberlines > 3){
            console.log("Ivalide deposit amount , try again");
        }else{
            return numberlines;
        }
    }
}

let balance = deposit();
const number_of_lines = get_number_of_lines();
const bet_amount = get_bet_amount();

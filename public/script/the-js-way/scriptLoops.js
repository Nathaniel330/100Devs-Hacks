/**********
*  LOOPS  *
***********/

function parity() {
    let condition = false;
    let number;
    while (!condition) {
        let input = prompt("Enter a number from 1 - 100")
        if (+input && input > 0 && input < 101) {
            condition = true;
            number = +input
        }
    }
    
    for (let i = 1; i <= number; i++) {
        if (i % 2 == 0) {
            console.log(`${i} is EVEN`)
        } else {
            console.log(`${i} is ODD`)
        }
    }
    alert("Check the console")
}

function xTable() {
    let condition = false;
    let number;
    while (!false) {
        let input = prompt("Enter a number from 2 - 9")
        if (+input && input > 0 && input < 101) {
            condition = true;
            number = +input
        }
    }
}



function yesNorNo() {
    alert("Neither Yes, Neither No. Game Start!")
    let condition = true;
    while (condition) {
        let userResponse = prompt("Enter text");
        console.log(userResponse)
        if (userResponse == "yes" || userResponse == "no") {
            condition = false;
        }
    }
    alert("Game End!")
}



function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz")
        } else if (i % 3 == 0) {
            console.log("Fizz")
        } else if (i % 5 == 0) {
            console.log("Buzz")
        } else {
            console.log(i)
        }
    }
}


export {parity, xTable, yesNorNo, fizzBuzz};
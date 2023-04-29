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



/*********
* ARRAYS *
**********/

// ARRAYS.Musketeers
function jswayMusketeers() {
    alert("Musketeers — START")
    // Write a program that:
    // Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".
    const musketeers = ["Athos", "Porthos", "Aramis"]
    alert(`musketeers = [ ${musketeers} ]`)
    
    
    // Shows each array element using a for loop.
    for (let i = 0; i < musketeers.length; i++) {
        alert(`musketeers = [ ${musketeers} ]\n\nfor (let i = 0; i < musketeers.length; i++)\n\nmusketeers[${i}] = ${musketeers[i]}`)
    }
    
    
    // Adds the "D'Artagnan" value to the array.
    let pushDArtagnan = confirm(`Add "D'Artagnan" to the end of the array?`)
    if (pushDArtagnan) {
        musketeers.push("D'Artagnan")
        alert(`You have pushed "D'Artagnan" into the array "musketeers"\n\nmusketeers = [ ${musketeers} ]`)
    } else {
        alert(`The musketeers remain the same\n\nmusketeers = [ ${musketeers} ]`)
    }
    
    
    // Shows each array element using the forEach() method.
    musketeers.forEach(item => alert(`musketeers = [ ${musketeers} ]\n\nmusketeer.forEach(item)\n\nitem = ${item}`))
    
    
    // Remove poor Aramis.
    let removeAramis = confirm(`Remove "Aramis" from the musketeers?`)
    if (removeAramis) {
        musketeers.splice(musketeers.indexOf("Aramis"), 1)
        alert(`You have removed "Aramis" from the musketeers\n\nmusketeers = [ ${musketeers} ]`)
    } else {
        alert(`The musketeers remain the same\n\nmusketeers = [ ${musketeers} ]`)
    }
    
    // Shows each array element using a for-of loop.
    for (let item of musketeers) {
        alert(`musketeers = [ ${musketeers} ]\n\nfor (let item of musketeers)\n\nitem = ${item}`)
    }
    
    alert("Musketeers — END")
}



// ARRAYS.Sum of Values
// Write a program that creates the following array, then calculates and shows the sum of its values (42 in that case).
// const values = [3, 11, 7, 2, 9, 10];
function jswaySumOfValues() {
    alert("Sum of Values — START")
    
    const values = [3, 11, 7, 2, 9, 10]
    alert(`values = [ ${values} ]`)

    const response = values.reduce((acc, c) => {
        alert(`values = [ ${values} ]\n\nvalues.reduce((acc, c) => {
            return acc + c
        }, 0)\n\nacc = ${acc}\n\nc = ${c}`)
        return acc + c
    }, 0)

    alert(`Sum of values = ${response}`)
    
    alert("Sum of Values — END")
}



// ARRAYS.Array maximum
// Write a program that creates the following array, then calculates and shows the array's maximum value.
// const values = [3, 11, 7, 2, 9, 10];
function jswayArrayMaximum() {
    alert("Array Maximum — START")

    const values = [3, 11, 7, 2, 9, 10]
    alert(`values = [ ${values} ]`)

    alert(`values = [ ${values} ]\n\nMath.max(...values) = ${Math.max(...values)}`)
    
    alert("Array Maximum — END")
}



// ARRAYS.List of words
// Write a program that asks the user for a word until the user types "stop". The program then shows each of these words, except "stop".
function jswayListOfWords() {
    alert("List of Words — START")

    const listOfWords = []
    alert(`listOfWords = [ ${listOfWords} ]`)

    let condition = true
    while (condition) {
        let word = prompt('Please enter a word. Enter "stop" to terminate the program')

        if (word != "stop") {
            listOfWords.push(word)   
        }
        
        if (word == "stop") {
            alert(`listOfWords = ${listOfWords}`)
            condition = false
        }
    }
    
    alert("List of Words — END")
}



/**********
* OBJECTS *
***********/

// OBJECTS.Adding character experience
// Improve our example RPG program to add an experience property named xp to the character. Its initial value is 0. Experience must appear in character description.
const aurora = {
    name: "Aurora",
    health: 150,
    strength: 25,
    xp: 0,
    
    // Return the character description
    describe() {
    return `${this.name} has ${this.health} health points and ${this
      .strength} as strength. Total experience points collected: ${this.xp}`;
    }
}; 


// OBJECTS.Modeling a dog
const dog = {
    name: "Fang",
    species: "boarhound",
    size: 75,
    bark() {
        return "Grrr! Grrr!"
    }
}


// OBJECTS.Modeling a circle
// Its radius value is input by the user.
const circle = {
    circumference() {
        // circumference = 2πr
        const radius = this.askRadius()
        const riposte =(2 * Math.PI * radius)
        alert(`With a radius of ${radius}, the circumference will be ${riposte}`)
        return riposte
    },
    askRadius() {
        let condition = true
        let input;
        while(condition) {
            let radius = prompt("Enter the circle radius:")
            if (radius > 0) {
                condition = false
                input = radius
            }
        }
        return +input
    }
};

// OBJECTS.Modeling a bank account
// Write a program that creates an account object with the following characteristics:
//     A name property set to "Alex".
//     A balance property set to 0.
//     A credit method adding the (positive or negative) value passed as an argument to the account balance.
//     A describe method returning the account description.

class BankAccount {
    constructor(name = "", balance = 0) {
        this.name = name,
        this.balance = balance
    }
    credit(amount) {
        this.balance += amount
    }
    describe() {
        return `owner: ${this.name}, balance ${this.balance}`
    }
    
};

// Use this object to show its description, crediting 250, debiting 80, then show its description again.

let alex = new BankAccount("Alex")

// upon creation:
console.log(alex.describe())

// credit 250:
alex.credit(250)
console.log(alex.describe())

// debit 80:
alex.credit(-80)
console.log(alex.describe())
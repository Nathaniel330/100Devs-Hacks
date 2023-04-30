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


export {aurora, dog, circle, BankAccount, alex};
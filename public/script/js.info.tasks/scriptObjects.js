/**********  
* OBJECTS *
***********/

// OBJECTS.Hello, object
// Write the code, one line for each action:

// Create an empty object user$.
const user$ = {}

// Add the property name with the value John.
user$.name = 'John'

// Add the property surname with the value Smith.
user$.surname = 'Smith'

// Change the value of the name to Pete.
user$.name = 'Pete'

// Remove the property name from the object.
delete user$.name

//console.log(user$)



// OBJECTS.Check for emptiness
// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

// Should work like that:
let schedule = {};
// alert( isEmpty(schedule) ); // true
// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false

function isEmpty(obj) {
    if (!Object.values(obj).length) {
        return true
    }
    return false
}

//console.log(isEmpty(schedule))



// OBJECTS.Sum object properties
// We have an object storing salaries of our team:

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

// If salaries is empty, then the result must be 0.

const sum = (object) => {
    return Object.keys(object).reduce((acc, c) => {
        return acc + object[c]
    }, 0)
}

//alert(sum(salaries))



// OBJECTS.Multiply numeric property values by 2
// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

// For instance:
//     // before the call
    let menu = {
      width: 200,
      height: 300,
      title: "My menu"
    };
    
//     multiplyNumeric(menu);
    
//     // after the call
//     menu = {
//       width: 400,
//       height: 600,
//       title: "My menu"
//     };

const multiplyNumeric = (object) => {
    for (let key in object) {
        if (typeof object[key] == "number") {
            object[key] *= 2
        }
    }
}

// console.log(menu)
// multiplyNumeric(menu)
// console.log(menu)


// Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.

// P.S. Use typeof to check for a number here.



// OBJECTS.Using "this" in object literal
// Here the function makeUser returns an object.

// What is the result of accessing its ref? Why?

// function makeUser() {
//     return {
//         name: "John",
//         ref: this
//     };
// }

// let user = makeUser();

// alert( user.ref.name ); // What's the result?

const error = "The result of accessing its ref is an error.\nThat’s because rules that set 'this' do not look at object definition. Only the moment of call matters."



// OBJECTS.Create a calculator
// Create an object calculator with three methods:

// read() prompts for two values and saves them as object properties with names a and b respectively.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.
        
//     let calculator = {
//         // ... your code ...
//     };
    
//     calculator.read();
//     alert( calculator.sum() );
//     alert( calculator.mul() );

let calculadora = {
    read: function(){
        this.a = +prompt("a = ___");
        this.b = +prompt("b = ___");
    },
    sum: function() {
        return this.a + this.b;
    },
    mul: function() {
        return this.a * this.b;
    }
}

// console.log(calculadora)
// calculadora.read()
// alert(calculadora.sum())
// alert(calculadora.mul())



// OBJECTS.Chaining
// There’s a ladder object that allows to go up and down:

        
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function() { // shows the current step
        alert( this.step );
        return this;
    }
};
    
// Now, if we need to make several calls in sequence, can do it like this:

/*   
    ladder.up();
    ladder.up();
    ladder.down();
    ladder.showStep(); // 1
    ladder.down();
    ladder.showStep(); // 0
*/
    
// Modify the code of up, down and showStep to make the calls chainable, like this:

        
//     ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0
    
// Such approach is widely used across JavaScript libraries.



// OBJECTS.Two functions — one object
// Is it possible to create functions A and B so that new A() == new B()?

        
//     function A() { ... }
//     function B() { ... }
    
//     let a = new A();
//     let b = new B();
    
//     alert( a == b ); // true 
    
// If it is, then provide an example of their code.

const possible = "Yes, it’s possible.\nIf a function returns an object then new returns it instead of this.\nSo they can, for instance, return the same externally defined object obj:"

let obj = {};

function A() { return obj; }
function B() { return obj; }

//alert( new A() == new B() ); // true



// OBJECTS.Create new Calculator
// Create a constructor function Calculator that creates objects with 3 methods:

// read() prompts for two values and saves them as object properties with names a and b respectively.
// sum() returns the sum of these properties.
// mul() returns the multiplication product of these properties.

function Calculator() {
    this.read = function() {
        this.a = +prompt("a = ___");
        this.b = +prompt("b = ___");
    };

    this.sum = function() {
        return this.a + this.b;
    };

    this.mul = function() {
        return this.a * this.b;
    }
}

// For instance:
        
    // let calculator = new Calculator();
    // calculator.read();

    // alert( "Sum=" + calculator.sum() );
    // alert( "Mul=" + calculator.mul() );



// OBJECTS.Create new Accumulator
// Create a constructor function Accumulator(startingValue).

// Object that it creates should:

// Store the “current value” in the property value. The starting value is set to the argument of the constructor startingValue.
// The read() method should use prompt to read a new number and add it to value.
// In other words, the value property is the sum of all user-entered values with the initial value startingValue.

function Accumulator(startingValue) {
    this.value = startingValue
    this.read = function(){
        let a = +prompt("Enter a number")
        this.value += a
    }
}


// Here’s the demo of the code:

    // let accumulator = new Accumulator(1); // initial value 1

    // accumulator.read(); // adds the user-entered value
    // accumulator.read(); // adds the user-entered value

    // alert(accumulator.value); // shows the sum of these values
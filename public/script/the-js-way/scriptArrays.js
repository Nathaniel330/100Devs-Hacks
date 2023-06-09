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

export {jswayMusketeers, jswaySumOfValues, jswayArrayMaximum, jswayListOfWords};
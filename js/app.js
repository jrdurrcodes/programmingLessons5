/** 
 * 
 * A function is an executed task that is stored away and can be used whenever called.
 * 
 * a funciton returns a specific output given a single or multiple inputs
 * 
 * Syntax:
 * 
 *  function funcName(args) {
 *      // do stuff 
 *  }
 * 
 *  funcName(args)
*/

function addTwoNumbers(a = 4, b = 5) {

    return a + b
}

// console.log(add5)

// console.log(add5(7))
// console.log(add5(2))
// console.log(add5(10))

console.log(addTwoNumbers());
console.log(addTwoNumbers(7));
console.log(addTwoNumbers(undefined, 19));
console.log(addTwoNumbers(2, 4));
console.log(addTwoNumbers(-11, 44));

function greetUser(user = 'Guest') {
    return `Good morning, ${user}!`
}

greetUser()


console.log(greetUser())
console.log(greetUser('Janjala'));
console.log(greetUser('Clint'));
console.log(greetUser('Chris'));
console.log(greetUser('Zeek'));


console.clear()
// Scope

/** 
 * Global scope => a variable is accessible throughout the file
 * 
 * Local scope => a variable is accessible  only within local space
 */

let scope = 'global'

function sayScope() {
    let scope = 'local'
    console.log(`The scope is now: ${scope}`)
    return scope
}

console.log(`The scope is ${scope}`); //global
sayScope() // local
console.log(scope); // local

console.log(`The scope is ${sayScope()}`)

// Write a function that takes a temperature in celsius and convert it to fahrenheit; return the new temperature


function convertToFah (temp) {
    let fah = (temp * (9 / 5) + 32)
    console.log(`${temp}) degrees celsius is ${fah} degrees fahrenheit`);
    return fah
}

convertToFah()
convertToFah(100)
convertToFah(32)

// Write a function that takes a temperature and a unit as arguments. If the unit is 'celt convert the temperature to fah. If the unit is 'fah' convert the temperature to cel. Return the  newTemp 

// Write a function
    function convertTemp(temp, unit) {

        //set newTemp
        let newTemp
        let message
    
// if the unit is 'cel'
    if(unit == 'cel') {
            //convert the temp to fah
        newTemp = (temp * (9 / 5)) + 32
        message + `${temp} degrees celsius is ${newTemp} degrees fahrenheit.`  
        // if unit is 'fah' 
    } else if (unit == 'fah') {
        //convert the temp to cel
        newTemp = (temp - 32) * 5 / 9 
        message = `${temp} degrees fahrenheit is ${newTemp} degrees celsius`
    } else {
        message = 'error'
    }

    console.log(message);
        return newTemp
}

convertTemp() // 32
convertTemp(100, 'cel') // 212
convertTemp(32, 'fah') // 0
convertTemp(212, 'fah') // 100



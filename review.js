// Improved Comment Colors in VSCode with Better Comments by Aaron Bond (Reasoning for !, *, and ? at the start of certain comments)

//! Part 1: Variables & Scope
//* Global vs. local variables
function makeMoney(){
    let money = 100
    return money ** 2
}

try{
    money += 10
    console.log(money)
} catch(e) {
    console.error("Caught an error!:", e.message, '\n')
    // The money variable doesn't exist as a global variable. It is only a local variable for the function makeMoney(), and therefore can't be used outside the function.
}

//* Hoisting
// Hoisting affects how variables are declared inside JS code. var, let, and const, are all hoisted, or moved to the top of the current scope, but let and const have one issue. 

    //? Hoisting with var
    console.log(myVar) // undefined
    var myVar = "Hello"
    console.log(myVar) // Hello

    //? Hoisting with let and const
    try {
        console.log(myLet) // ReferenceError: myLet is not defined
        let myLet = "Hello"
        console.log(myLet) // Hello
        
        console.log(myConst)
        const myConst = "Hello" // SyntaxError: Identifier 'myConst' has already been declared
    }
    catch(e) {
        console.error("Caught an error!:", e.message, '\n')
    }

//! Part 2: Arrays - Manipulation & Higher-Order Functions
//* .map()
const scores = [0, 25, 50, 100, 200]

let scoresSquared = scores.map((score) => {
    return score ** 2
})
console.log(scoresSquared)

//* .filter()
let bigScores = scores.filter((score) => {
    return score > 50
})
console.log(bigScores)

//* .reduce()
let totalScore = scores.reduce((total, score) => {
    return total + score
}, 0)
console.log(totalScore)
// .reduce() works by using an initial value (0 in this case) and then adding the current value (score) to the total value (total) that initially takes the value of the initial value.


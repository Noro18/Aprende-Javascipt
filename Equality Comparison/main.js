// == "loosely equal"
// ida ne'e nia fore nia type atu sai hanesan instad of striclty comapre them 

console.log(5 == "5"); // true
console.log(0 == false); // true



// === "strictly equal"
// check value + type 

console.log( 5 === "5"  ); // falase
console.log(0 === false);
console.log(5 === 5);


// Object.is
// hanesan ho === maibe handle edge cases baln 


console.log(Object.is(NaN, NaN))   // true
console.log(NaN === NaN)           // false

console.log(Object.is(-0, 0))      // false
console.log(-0 === 0)              // true


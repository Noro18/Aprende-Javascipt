// how to create an object in js

const { use } = require("react");

//1 . Object Literal which is stored in a variable

const person = {
    firstName : "Jhon", lastName:"Doe"
}

//or

// halo tia deopis mak aumenta nia properties sira
const person2 = {}; 

person2.firstName="Ezequiel";
person2.lastName="Vieira";

// These are called Object because it has multiple values
// Maibe se quando nia iha value ida deit exemplo const a = 1, ida ne'e hanaran primitives no nia laiha properties ou method


// how to acces objects properties 

// 1

console.log(person.firstName); // asesu liu husi .

//or

console.log(person["firstName"]); // asesu hanesan liu husi nia attribut

//or

let x = "firstName";


console.log(person[x]);


//ita atu delete properties husi object ruma nian ita uza keyword delete

delete person["firstName"];


//Object Constructors 

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last
    this.age = age;
    this.eyeColor = eye;
  }

  // now we can use thte New keyword to create multiple objects of teh same type

const friend1 = new Person("Jhonss", "Doe", 14, "Red");

console.log(friend1.firstName)


// How to display Objects in Javascript

console.log(friend1)

let word = "Hello world";

// Iha Javascrip mos ita bele kria object iha objeect nia laran

const user = {
	naran: "Alice",
	tinan: 12,
	helaFatin: { // ida ne'e hanaran nested object ou object iha object nia laran no nia assigment la uza = maibe uza fali :
		distrito: 'Dili',
		postoAdm: 'Cristo-Rei',

	},
	hobbies: ['lee', 'kanta', 'dansa'] //ita mos bele halo nested array iha object nia laran
	
}
		   // maneira atu uza f' string iha js ita bolu template literals uza ` backtick
console.log(`posto husi ${user.naran}`, user.helaFatin.postoAdm)


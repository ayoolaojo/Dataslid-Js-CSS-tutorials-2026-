//   const heading =  document.getElementById('heading');
//   const btn = document.getElementById('btn');

//   btn.addEventListener('click', ()=>{
//     heading.innerText = 'Javascript Recap Class'
//     heading.style.color = 'green'
//   })

// let or const
// variable Name must start with a letter , or underscore or dollarsign
const myName = "Taofeek";

console.log(myName);

let _name = "Mubarak";
console.log(_name);

_name = "Imole";
console.log(_name);

// quotes in js
const singleQ = "he said '........bla bla...'  ";

const anyQoute = `
    It's a great weekend,
    He said "He is hardworking"
    The class is getting interesting`;

console.log(anyQoute);

// JS Data types
// - Strings

const letter = "100";
console.log(typeof letter);

const _letter = 100.99;
console.log(typeof _letter);

const num = 99;
const letters = "persons";

const randomaDD = num + letters;

console.log(randomaDD);

const largeNum = 12549868796528n;
console.log(typeof largeNum);

console.log(2 > 4);

const design = {
  backgroundColor: "red",
  color: "red",
  padding: 4,
  margin: 10,
};

console.log(design.backgroundColor);
console.log(design.margin);

console.log(design["padding"]);

let x;

x = 5 + 10 + "green";

const cars = [
  "toyota",
  "lexus",
  "mazda",
  "volswagen",
  10,
  true,
  null,
  (exotic_car = {
    name: "benz",
    model: "ghjhgj",
    year: 2025,
  }),
];

// console.log(cars.length)

// console.log(cars[7]['name'])

const fruits = ["apple", "banana", "mango"];

fruits.splice(1, 0, "orange");

console.log(fruits);

const namez = ["ayo", "john", "peace"];

namez.forEach((name) => {
  // console.log(`Hello ${name}  `)
  console.log("Hello " + name);
});

let newNumero = 5;
newNumero += 10;

console.log(newNumero);

let a = 5;
a += 1;

console.log(a);

let fruit = "sweet";
fruit += " potato";

console.log(fruit);

let num1 = 10;
n = 7;

console.log(10 ** 2);
console.log(10 % 3);

// ** - exponential
// % - modulus

//  ==

//  ===

let num2 = 57;

num2++;

console.log(num2);

num2--;
console.log(num2);

// && - and
// || - or
// !  - not

const isStudent = true;

console.log(isStudent);

// !=
// !==

// > - greater than

// < - less than
// >=  - greater than or equal
// <=  - less than or equal

// const age = prompt('enter your age');

// if( age >= 18) {
//     console.log(` you are ${age} years old , hence eligible to vote`)
// } else {
//     console.log(`Sorry, you are ${age} years old, minors cant vote`)
// }

//  if else Statements

// if (condition)  {

// } else {

// }

//  check if a given number is even or odd

// const givenNumber = 99
// if (givenNumber % 2 === 0) {
//    console.log(`${givenNumber} is an even number `)
// } else {
//     console.log(`${givenNumber} is an odd number`)
// }

// Check if a number is positive or negative

const newNum = 10;

// if( newNum.toString().includes('-')) {
//   console.log('number is negative')
// } else {
//     console.log('number is positive number ')
// }

if (newNum >= 0) {
}

const scores = 51;

switch (scores) {
  case scores > 50:
    console.log("passed");
    break;

  default:
    console.log("failed");
}

// if(myScore >= 75) {
//     console.log(`Excellent! you got A1`)

// } else if(myScore > 70 && myScore < 75) {
//     console.log('Very Good! You scored B')
// } else {
//     console.log("Sorry, try again next time")
// }

// if temperature is higher than 35, print weather is hot , if higher than 25, it's warm, else it's cold

const temperature = 30;

temperature > 35
  ? console.log("weather is hot")
  : temperature > 25
    ? console.log("weather is warm")
    : console.log("weather is cold");

const isMubarakPresent = false;
isMubarakPresent
  ? console.log("Mubarak is in class today ")
  : console.log("Mubarak is not in class today");

const myScore = 57;

switch (true) {
  case myScore >= 75:
    console.log("You got A1");
    break;

  case myScore >= 70:
    console.log("You got B2");
    break;

  case myScore >= 65:
    console.log("You got B3");
    break;

  case myScore >= 60:
    console.log("You got C4");
    break;

  case myScore >= 55:
    console.log("You got C5");
    break;

  case myScore >= 50:
    console.log("You got C6");
    break;

  default:
    console.log(`You didn't meet our Credit criteria. Try again next time!`);
}


const choice = 1;

switch (choice) {
  case 1 : 
  console.log ('Start Game');
  break;

  case 2: 
  console.log('Settings');
  break;

  case 3: 
  console.log('Exit')

}  

const browser = 'edge';
switch(browser){
  case "chrome" :
    console.log ('Supported');

  case 'firefox' : 
  console.log('supported');

  case 'edge' : 
   console.log ('Supported');
   break;

   default : 
   console.log('Not supported')
}



const isLoggedIn =  false;

// if (isLoggedIn) {
//   console.log('Welcome Back')
// } else {
//   console.log('Please log in')
// }




isLoggedIn ? console.log('welcome back') : console.log('Please log in')

const __nums = 10

__nums % 2 === 0 ? console.log('number is Even number') :
console.log('number is Odd number')


__nums > 7? console.log('number greater than 7'): __nums === 10? console.log('number is 10'): console.log('NONE')


    // LOOPS


    // for loop


const alias =  'Mubeyy'

for (i = 0 ; i < alias.length; i++)  {
    console.log(alias[i])
}


const allNames = ['Ayoola', 'Qodri', 'Mubarak', 'Taofeek']

// for (i = 0; i < allNames.length; i++) {
//   console.log(allNames[i])
// }


// for (let name of allNames) {
//   console.log(name)
// }

allNames.map((name)=>{
  console.log(name)
})


// Print 1 - 30 to the console.

for (i =1; i <= 30; i++) {
 console.log(i)
}

const string  = 'Paul Data'

for (i=0; i < string.length; i++ ) {
     console.log(string[i])
}


// print 1 - 50 in the console

for (i = 5; i <= 50; i++) {
    console.log(i)
}

const courses = ['mth', 'gns', 'chem', 'phy', 'bio', 'IR']

// for(i = 0; i < courses.length; i++) {
//     console.log(courses[i] +   ' Dataslid' )
// }


// map , forEach

// courses.map((course)=>{
//   console.log(course)
// })

for (let c of courses) {
   console.log(c)
}




for(i=5; i >= 1; i--) {
  console.log(i)
}


// reverse the elemnts of an array using for loop


const theirNames= ' Mubarak,Paul,Ayoola, Qodri'










 








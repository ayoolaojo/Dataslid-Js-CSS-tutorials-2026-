const myName = 'Ayoola';
console.log(myName);


const num1 =  10;
const num2 = 10000;
const total =  num1 + num2
console.log(total)


const car =  'Lexus'
const car2 =  "Toyota"


const message =  "it's Dataslid O'clock"
console.log(message)


const random = `he`

 let scores;

 scores =  70;




function greet(name){
    
 console.log('welcome ' +  name)
}


greet('Fawaz')
greet('Aaisha')
greet('Paul')

// Javascript Data Types
//  String
//  Object
//  Boolean
//  Number
//  BigInt
//  undefined
//  null

let school = 'UNIOSUN'

console.log(typeof(school))


const numero = 10.5


// let age  =  prompt('Enter your age')
//   age = Number(age)

// console.log(age)
// console.log(typeof(age))




let number =  400
number = String(number)
console.log(typeof(number))


let bigNumber =  1000000012n

console.log(typeof(bigNumber))

// boolean

console.log(4>2)

const myString =  'lorem ipsum'
console.log (myString.length)


// Objects

const Car = {
   brand : 'Toyota',
   model : 'corolla',
   color : 'yellow',
   year :  2019,
   transmission : 'automatic'

}


console.log(Car)

console.log(Car.color)

console.log(Car.transmission)


console.log(Car['brand'])


const ourNames=  ['Ayoola', 'Imole', 'Aaishah', 'Taofeek', 'Mubarak', 'Daniel', 'AbdulBaqi', 'Qodri', 'Bobola', 'Paul', 30 , true, scores = {
  Aaishah : 70,
  Muideen : 50,
  Ayoola : 40,

}, 'Davo']




console.log(ourNames)
console.log(typeof(ourNames))


const name1 = ourNames[0]
console.log(name1)


const lastName =  ourNames[ourNames.length -1 ]
console.log(lastName)

console.log(ourNames[4])
 console.log(ourNames[8])
 console.log(ourNames[6])
 console.log(ourNames[3])
 console.log(ourNames[5])
 console.log(ourNames[2])
 console.log(ourNames[9])
 console.log(ourNames[12])


 const aaishahScores = ourNames[12].Aaishah
 console.log(aaishahScores)


  // =   asign values
  // ==   check equality

  // ===   check equality and data type


  // const myNumber =  10
  // const $string =  '10'
   console.log(10 == '10')
  console.log(10 === '10')

  const _numero = 20

  console.log(_numero != 10)

  const isStudent =  !false

  console.log(isStudent)


  let addition =  10 + 7
  console.log(addition)

  let word1 =  'Bolu '
  let word2 =  'UniOsun'

  let nickName = word1  +  word2
  console.log(nickName)


  // + - adds or concatenate
  // -   substracts
  // /    divides
       
  // *     multiplies

  // %   modulus - returns raminder after division
  
 console.log(5%2)

//  += 

let xy =  25;

  xy /= 5;

  console.log(xy)


  console.log(10**5)


  // ++  - increment 
  // --   decrement

  let cores = 40;
  cores --

  console.log(cores)


  // >=
  // <=

console.log( 2 <= 2)

// ||  -   OR
// !   -  NOT   
// &&   - AND

const desc = ` 






 My name is Ayoola
 I live in Osogbo
 I'm a developer
`

console.log(desc)
console.log(desc.length)
console.log(desc.trim())

console.log(desc.length)


const myVariable =  '     Hello World'
console.log(myVariable)

console.log(myVariable.trim())


console.log(myVariable.trim().charAt(0).toLowerCase())


console.log(myVariable.at(-1))

const gret =  'Congratulations'


console.log(myVariable.concat(' of Javascript'))


console.log(gret.slice(8))



const randomWord =  'echo'

console.log(randomWord.padStart(13,'yhsjshsjs'))

const apology = 'I love you, I hate you'

console.log(apology.replaceAll('I', 'We'))

console.log(apology.repeat(10))

console.log(apology.split(' '))

console.log(apology)


const carArray =  ['toyota', 'Lexus', 'Passat', 'BMW', 'Benz', ['Paul', 'Baqi', 'Imole'] ]
const fruitArray = ['apple', 'banana', 'orange', 'mango', 'pineapple']

const schoolArray = ['UniOsun', 'OAU', 'UI' , 'UNILAG', 'UNIBEN', 'UNN']

console.log(carArray.length)
console.log(carArray.toString())
console.log(carArray.at(3))


const carStrings =  carArray.join('-')

console.log(carStrings)

carArray.pop()

console.log(carArray)

carArray.push('mazda')

console.log(carArray)

carArray.unshift('ford')
console.log(carArray)

carArray.shift()
console.log(carArray)

console.log(carArray.concat(fruitArray, schoolArray))

const newArray =  ['toyota', 'Lexus', 'Passat', 'BMW', 'Benz', ['Paul', 'Baqi', 'Imole'] ]

console.log(newArray.flat())


console.log(newArray.slice(2, 4))


const players = ['Ronaldo', 'Messi', 'OLise', 'Dembele', 'Yamal']

players.splice(1, 2,'Palmer', 'Gyokeres')

console.log(players)


players.splice(1,0, 'Harry Kane','Bruno Fernandes' )
console.log(players)



const favPlayers = players.toSpliced(0,1)
console.log(favPlayers)


favPlayers.map((player)=>console.log(player  + ' is a good baller.'))



const numeros =  [10,1,25,7,8,96,13,58]

numeros.forEach((num)=> console.log(num))


const higherThan15  =  numeros.filter(n => n >= 10 )

console.log(higherThan15)


// if else statements


// const age  = prompt('how old are you?')

// if  (age >= 18 )   {
//  alert(`You're eligible to vote`)
// } else {
//   alert(`Sorry you're a minor, you're not eligible to vote`)
// }


// Grading system   A = 70 AND ABOVE  , B = 60-69 , C = 50 -59 , BELOW 50 = FAIL.

const score =  78;

if (score > 70) {
  console.log(`EXCELLENT!, Your grade is A`)
} else if( score >= 60 && score < 70 ) {
  console.log(`VERY GOOD!, Your grade is B`)
}else if (score >= 50 && score < 60) {
  console.log(` GOOD!, Your grade is C`)
} else {
  console.log('Sorry you Failed, work harder next time')
}

































 






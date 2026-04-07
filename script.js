// document.getElementById('heading').innerText = 'Hello Dataslid'

// const message = 'This is my first Javascript CODE'

// console.log(message)

// // alert('welcome to Javascript')



// const num = 9 

// const myName = '9'

// console.log('Ayoola')

// let num1 = 0
//  num1 = 5


//  let nickName = 'AY'

//  console.log(nickName)

//  nickName = 'AZ'

//  console.log(nickName)


//  const num2 = 5;
//  const num3 = 10

//  const num4 = num3*num2
//  console.log(num4)

//  console.log(num3/num2)


 let  myName = 'Ayoola'
 console.log(myName)

 myName =  'Paul'
 console.log(myName)

 myName = 'Mubarak'
 console.log(myName)

 
 const price = 1000
 const discount = 200

 const finalPrice = price - discount

 console.log(finalPrice)



 const fruit =  'orange'
 console.log(fruit)

 const email = 'ayoola@gmail.com'

 const tool = ''

 const myAge = 20
 console.log(typeof(email))
 console.log(typeof(myAge))
 console.log(typeof(tool))

 const largeNumber = 1234567890123456789012345n
 console.log(typeof(largeNumber))

 const isRainy = false
 const isStudent = true

 console.log(typeof(isRainy,isStudent))


const Aisha = {
    height: 7,
    age : 18,
    location: 'Ikirun',
    email : 'aisha@gmail.com',
    username: 'aisha001',
    isStudent: true,
}

console.log(Aisha.location)

const Car = {
    make : 'Toyota',
    model : 'camry',
    year :  1999,
    isNew : false,
    color: 'white'
}


let vehicle;
console.log(vehicle)
vehicle = 'Venza'
console.log()


const player = {}    


// Array data Type

const ourNames = ['Ayooola','Paul', 'Ayesha','Quadri','Mubarak']
const _ourNames = 'Ayoola Paul, Ayesha, qaudri, Mubarak'
console.log(ourNames)
console.log(_ourNames)


const myText = 'Key subjects like Physics, Chemistry, Biology, Agricultural Science, Further Mathematics, and General Mathematics are included. Exams are to be conducted on a full Computer-Based Test (CBT)'


console.log(ourNames[0])
console.log(ourNames[4])
console.log(ourNames[2])
console.log(ourNames[3])
console.log(ourNames[0])

const vegetables = ['tomatoes','carrot','spinach']

console.log(vegetables[1])


const myMemo =  " It's my laptop"

const test =  '10.5'
const test1 =  10.5


const food = ['rice', 'beans','yam','bread']
const firstFood = food[0]
console.log(firstFood)


const lastFood = food[food.length - 1]
console.log(lastFood)


food[3] =  'pizza'
console.log(food)

 food.push('spagghetti')
console.log(food)


// =  to assign value
// ==  
// ===


const z = '10'

if (z == 10) {
    console.log('yes')
} else {
    console.log("it's not 10")
}


console.log(2 == 2)
console.log(2 == '2')
console.log(2 === '2')


console.log(2*2)


const myExpo =  11 % 3
console.log(myExpo)


const myText1 =  'Hello'
const myText2 =  'Dataslid'

const greetings = myText1 + ' ' +  myText2
console.log(greetings)

let _myName = 'Data'
_myName += 'Ola'

console.log(_myName)


let _myAge =  20
_myAge++
console.log(_myAge)


let number1 =  200
number1 --
console.log(number1)

console.log(1 != '1')


const age = 17
hasPVC = false
 if ( age >= 18 && hasPVC) {
    console.log("You're eligible to vote")
 } else{
    console.log("You're not eligible to vote")
 }


// STRING METHODS
 console.log(myText2.charAt(0))
 console.log(myText2.toUpperCase())
 console.log(myText1.toLowerCase())
 console.log(myText1[0])
 console.log(myText2.at(-1))

 console.log (myText1.concat(myText2))


 const _greetings = "You're welcome to Dataslid"

 console.log(_greetings.length)


 console.log(_greetings.toUpperCase())
 console.log(_greetings.toLowerCase())

 const firstLetter = _greetings.charAt(0)
 console.log(firstLetter)


 const lastLetter = _greetings.at(1)
 console.log(lastLetter)

 const personalGreeting = _greetings.concat(" Ayesha")

console.log(personalGreeting)


const slicedGreetings = _greetings.slice(7)
console.log(slicedGreetings)

const _slicedGreetings = _greetings.slice(7,16)
console.log(_slicedGreetings)

  const cars = '    toyota , honda, mercedes, bmw'
const carsSubstring =  cars.substring(2,15)
console.log(carsSubstring)

const randomText =  "    Helo  Mjubarak       "
console.log(randomText)

const trimmedRT = randomText.trim()
console.log(trimmedRT)

const rText = 'ab'
console.log(rText.padStart(15,'D'))

const repeatedCars =  cars.repeat(3)
console.log(repeatedCars)


 console.log(cars.replace('toyota','mazda'))

 const alphabets = 'zbcdefgerznhzecz'
 console.log(alphabets.replaceAll('z', 'ab'))


const splitCars = cars.split(',')
console.log(cars)
console.log(splitCars)
console.log(typeof(cars))
console.log(typeof(splitCars))



const name_ = 'Mubarak'

console.log(name_.includes('t'))
console.log(name_.includes('k'))



const password = 'dATAS1_'

const check = password.includes('0')
console.log(check)

console.log(/\d/.test(password)) 

console.log(password.length > 6)



const person = {
    fullName: 'Paul Ayobami',
    location: 'Ilobu',
    gender: 'male',
    single: true,

}

console.log(person.location)
console.log(person['gender'])


const ourNamez = ['Paul', 'Mubarak', true, false,0,100 ]
const  ourLocations = ['ilobu', 'Halleluyah Estate', 'OgoOLUWA', 'oWODE']

console.log(ourNamez[0])
console.log(ourNamez[3])
console.log(ourNamez[5])
console.log(ourNamez.length)
console.log(ourNamez)
console.log(ourNamez.toString())
console.log(ourNamez.at(1))


const joinedArrays = ourNames.join(',')

console.log(joinedArrays)

const dogs = ['caucasian','rottwheileer', 'german sheperd', 'bulldog', 'eskimo', 'local dog' ]
const poppedDogs =  dogs.pop()
console.log(poppedDogs)

dogs.push('pitbull')
console.log(dogs)

ourNamez.shift()
console.log(ourNamez)


dogs.unshift('bingo')
console.log(dogs)


const  randomThings = [ 'new' ,100 , 'Dataslid', 'mango', 'frontend' ]

console.log(randomThings)

console.log(randomThings[1])

console.log(randomThings.length)


const randomStrings = randomThings.toString()
console.log(randomStrings)


randomThings.pop()

console.log(randomThings)

randomThings.push('backend')
console.log(randomThings)


// randomThings.unshift('software')
// console.log(randomThings)

randomThings.shift()
console.log(randomThings)

console.log(typeof(randomThings))
console.log(Array.isArray(randomThings))


console.log(randomThings.at(1))
console.log(randomThings.at(-1))


const joinedRandomThings = randomThings.join(' , ')
console.log(joinedRandomThings)
console.log(joinedRandomThings.toUpperCase())

console.log(Array.isArray(joinedRandomThings))


const  bankNames = ['FCMB', 'GTB', 'fIDELITY', 'UBA']

const joinedArray = bankNames.concat(randomThings,dogs)
console.log(joinedArray)


const complexNumbers = [[0,1,2,3,4] , [100,20,50,70,8,785], [-2,-7,-100]]
console.log(complexNumbers[1])

const flattenedArray = complexNumbers.flat()

console.log(flattenedArray)



const $ourNames = ['Ayoola', 'Paul','Imole','Mubarak','Aaishah']

    $ourNames.map((name)=>{
        console.log(name)
    })


    // $ourNames.splice(1,3)

    // console.log($ourNames)

      $ourNames.splice(2,0, 'David', 'Praise')

      console.log($ourNames)

      $ourNames.splice(0,2,'Moyo', 'Bello')
      console.log($ourNames)


      $ourNames.slice(2)
      const slicedNames = $ourNames.slice(2)
      console.log(slicedNames)












































































 








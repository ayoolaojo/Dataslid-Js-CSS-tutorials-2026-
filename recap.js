  
  
    //   const heading =  document.getElementById('heading');
    //   const btn = document.getElementById('btn');

    //   btn.addEventListener('click', ()=>{
    //     heading.innerText = 'Javascript Recap Class'
    //     heading.style.color = 'green'
    //   })

    // let or const
// variable Name must start with a letter , or underscore or dollarsign
    const myName  = 'Taofeek';

    console.log(myName)

    let _name = "Mubarak";
    console.log(_name)

    _name = 'Imole'
    console.log(_name)


    // quotes in js
    const  singleQ = "he said '........bla bla...'  "

    const anyQoute = `
    It's a great weekend,
    He said "He is hardworking"
    The class is getting interesting`


console.log(anyQoute)



// JS Data types 
// - Strings

const letter = '100'
console.log(typeof(letter))

const _letter = 100.99
console.log(typeof(_letter))

const num = 99
const letters =  "persons"

const randomaDD = num + letters

console.log(randomaDD)

const largeNum =  12549868796528n
console.log(typeof(largeNum))


console.log (2>4)


const design = {
    backgroundColor: 'red',
    color: 'red',
    padding : 4 ,
    margin: 10


}









console.log(design.backgroundColor)
console.log(design.margin)


console.log(design['padding'])


let x;

x = 5 + 10 + 'green'

const cars =  [ 'toyota', 'lexus', 'mazda','volswagen', 10, true, null , exotic_car = {
    name:'benz',
    model: 'ghjhgj',
    year: 2025,
}]


// console.log(cars.length)


// console.log(cars[7]['name'])


const fruits = ['apple','banana','mango']

fruits.splice(1,0,'orange')

console.log(fruits)


const namez = ['ayo','john','peace']

namez.forEach((name)=>{
    // console.log(`Hello ${name}  `)
    console.log('Hello ' + name)
})












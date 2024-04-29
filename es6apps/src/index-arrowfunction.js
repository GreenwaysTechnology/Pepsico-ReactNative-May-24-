//es 5 version of anonymous function 
let hello = function () {
    console.log('hello')
}
hello()

//es6 arrow version
hello = () => {
    console.log('hello arrow')
}
hello()
//multi line body

let welcome = () => {
    console.log('hello')
    console.log('hello')
    console.log('hello')
    console.log('hello')
    console.log('hello')
}
welcome()

//single line of body : we can remove {}
let hai = () => console.log('hai')
hai()

//parameters and args 
let add = (a = 0, b = 0) => {
    let c = a + b
    console.log(c)
}
add(1, 2)

//with return 
add = (a = 0, b = 0) => {
    return a + b
}
console.log(add(1, 2))

//if fun only returns : we can remove {} and return statement
add = (a = 0, b = 0) => a + b
console.log(add(1, 2))

//single parameter and arg, without default value 

let stock = (value) => value * 2

console.log(stock(10))

//no default value,singleparam: we can remove ()
stock = value => value * 2

console.log(stock(10))
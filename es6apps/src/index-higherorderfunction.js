
//a=x
function add(a = 0, b = 0) {
    let c = a + b
    console.log(c)
}
let x = 10;
let y = 20
add(x, y)
add(10, 10)
//pass function as parameter

//greet = ? function () {
// console.log('hai')
//}
function welcome(abc) {
    abc()
}
let hai = function () {
    console.log('hai')
}
welcome(hai)

welcome(function () {
    console.log('hello')
})

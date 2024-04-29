//default args
function add(a = 0, b = 0) {
    return a + b
}
console.log(add(10, 10))
console.log(add()) // undefined , undefined

let result = add(1, 2)
console.log(result)
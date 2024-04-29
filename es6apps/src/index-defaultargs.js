//default args
function add(a = 0, b = 0) {
    let c = a + b
    console.log(`The Result is ${c}`)
}
add(10,10)
add() // undefined , undefined